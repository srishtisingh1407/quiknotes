import { courseOutlineAIModel } from "@/configs/AiModel";
import { db } from "@/configs/db";
import { STUDY_MATERIAL_TABLE } from "@/configs/schema";
import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { courseId, topic, courseType, difficultyLevel, createdBy } =
    await req.json();

  const PROMPT = `
    Generate a comprehensive study material for ${topic} for ${courseType}.
    The level of difficulty will be ${difficultyLevel}.
    Please include:
    1. A summary of the course.
    2. A list of chapters with summaries for each chapter,
    3.Each chapter should be assigned with corresponding emoji
    4. A topic list in each chapter in JSON format.
  `;

  // Generating course layout
  const aiResp = await courseOutlineAIModel.sendMessage(PROMPT);
  const aiResult = JSON.parse(aiResp.response.text());

  // Saving the result
  const dbResult = await db
    .insert(STUDY_MATERIAL_TABLE)
    .values({
      courseId: courseId,
      courseType: courseType,
      createdBy: createdBy,
      topic: topic,
      courseLayout: aiResult,
    })
    .returning({ resp: STUDY_MATERIAL_TABLE });

  const result = await inngest.send({
    name: "notes.generated",
    data: {
      course: dbResult[0].resp,
    },
  });
  console.log(result);

  return NextResponse.json({ result: dbResult[0] });
}
