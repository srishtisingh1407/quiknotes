import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client";
import { CreateNewUser, GenerateNotes, helloWorld } from "@/inngest/functions";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    helloWorld,
    CreateNewUser,
    GenerateNotes
    /* your functions will be passed here later! */
  ],
});

