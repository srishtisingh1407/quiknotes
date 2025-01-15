"use client";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import SelectOption from "./_components/Selectoption";
import { Button } from "@/components/ui/button";
import TopicInput from "./_components/TopicInput";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { Loader, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function Create() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState([]);
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleUserInput = (fieldName, fieldValue) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));

    console.log(formData);
  };

  //Use to save user input and to generate ai course
  const GenerateCourseOutline = async () => {
    setLoading(true);
    const courseId = uuidv4();
    const result = await axios.post("/api/generate-course-outline", {
      courseId: courseId,
      ...formData,
      createdBy: user?.primaryEmailAddress?.emailAddress,
    });
    setLoading(false);
    router.replace("/dashboard");
    toast("Your Course Content is Generating, Click on Refresh!");
    console.log(result.data.result.resp);
  };

  return (
    <div className="flex flex-col items-center p-5 md:px-24 lg:px-36 mt-20">
      <h2 className="font-bold text-3xl text-blue-800">
        Start Building Your Personal Study Material
      </h2>
      <p className="text-blue-400 text-lg">
        Fill all the details in order to generate study material for your next
        project
      </p>
      <div className="mt-10">
        {step === 0 ? (
          <SelectOption
            selectedStudyType={(value) => handleUserInput("courseType", value)}
          />
        ) : (
          <TopicInput
            SetTopic={(value) => handleUserInput("topic", value)}
            setDifficultyLevel={(value) =>
              handleUserInput("difficultyLevel", value)
            }
          />
        )}
      </div>

      <div className="flex justify-between w-full m-10 mt-24">
        {step !== 0 ? (
          <Button
            className="bg-blue-600 hover:bg-blue-300"
            onClick={() => setStep(step - 1)}
          >
            Previous
          </Button>
        ) : (
          <div>_</div>
        )}
        {step === 0 ? (
          <Button
            onClick={() => setStep(step + 1)}
            className="bg-blue-600 hover:bg-blue-300"
          >
            Next
          </Button>
        ) : (
          <Button
            className="bg-blue-600 hover:bg-blue-300"
            onClick={GenerateCourseOutline}
            disabled={loading}
          >
            {loading ? <Loader2 className="animate-spin" /> : "Generate"}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Create;
