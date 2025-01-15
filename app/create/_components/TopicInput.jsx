import { Textarea } from "@/components/ui/textarea";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function TopicInput({SetTopic,setDifficultyLevel}) {
  return (
    <div className="mt-10 w-full flex flex-col">
      <h1 className="font-semibold text-xl">
        Enter the topic or paste the content for which you want the study
        material!
      </h1>

      <Textarea placeholder="Start typing here..." className="mt-4 mb-4 p-6 "
      onChange={(event)=>SetTopic(event.target.value)} />
      <h1 className="font-semibold text-xl mb-4">
        Select the difficulty level
      </h1>

      <Select onValueChange={(value)=>setDifficultyLevel(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Difficulty Level" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Easy">Easy</SelectItem>
          <SelectItem value="Moderate">Moderate</SelectItem>
          <SelectItem value="Hard">Hard</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default TopicInput;
