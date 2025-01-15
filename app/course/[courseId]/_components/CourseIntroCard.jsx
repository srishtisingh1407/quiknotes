import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import React from "react";

function CourseIntroCard({ course }) {
  return (
    <div className="flex gap-5 items-center p-7 border shadow-md rounded-lg">
      <Image src={"/knowledge.png"} alt="other" width={50} height={50} />
      <div className="">
        <h2 className="text-cyan-900 mt-3 font-bold text-2xl uppercase line-clamp-1">
          {course?.courseLayout.courseTitle}
        </h2>
        <p className="text-sm line-clamp-3 text-cyan-800">
          {course?.courseLayout?.courseSummary}
        </p>

       
 <h2 className="mt-3 uppercase text-cyan-800 font-semibold">Total chapter : {course?.courseLayout?.chapters?.length}</h2>
        <Progress className="mt-3" />
      </div>
    </div>
  );
}

export default CourseIntroCard;
