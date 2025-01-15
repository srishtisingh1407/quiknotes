import { db } from "@/configs/db";
import { inngest } from "./client";
import {
  CHAPTER_NOTES_TABLE,
  STUDY_MATERIAL_TABLE,
  USER_TABLE,
} from "@/configs/schema";
import { generateNotesAIModel } from "@/configs/AiModel";
import { eq } from "drizzle-orm";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  }
);

export const CreateNewUser = inngest.createFunction(
  { id: "create-user" },
  { event: "user.create" },

  async ({ event, step }) => {
    const { user } = event.data;
    const result = await step.run(
      "Check User and create New If Not in DB",
      async () => {
        const result = await db
          .select()
          .from(USER_TABLE)
          .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));

        if (result?.length === 0) {
          // If not then add user to db
          const userResp = await db
            .insert(USER_TABLE)
            .values({
              name: user?.fullName,
              email: user?.primaryEmailAddress?.emailAddress,
            })
            .returning({ id: USER_TABLE.id });

          return userResp;
        }
        return result;
      }
    );

    return "Success";
  }
);

export const GenerateNotes = inngest.createFunction(
  { id: "generated-course" },
  { event: "notes.generated" },
  async ({ event, step }) => {
    const { course } = event.data;

    //generate each chapter notes

    const notesResult = await step.run("Generate Chapter Notes", async () => {
      const Chapters = course?.courseLayout?.chapters;
      let index = 0;
      Chapters.forEach(async (chapter) => {
        const PROMPT =
          "Generate exam material detail content for each chapter. Make sure to include all topic points in the content. Make sure to give content in HTML format (Do not add HTML, Head, Body, title tag). The content should be structured and informative. The chapters :" +
          JSON.stringify(chapter);

        const result = await generateNotesAIModel.sendMessage(PROMPT);
        const aiResp = result.response.text();

        await db.insert(CHAPTER_NOTES_TABLE).values({
          chapterId: index,
          courseId: course?.courseId,
          notes:aiResp
        });

        index = index + 1;
      });

      return "Completed";
    });

    const updateCourseStatusResult = await step.run(
      "Update Course status to ready",
      async () => {
        const result = await db
          .update(STUDY_MATERIAL_TABLE)
          .set({
            status: "Ready",
          })
          .where(eq(STUDY_MATERIAL_TABLE.courseId, course?.courseId));
        return "success";
      }
    );
  }
);
