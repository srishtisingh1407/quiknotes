import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function CourseCardItems({ course }) {
  return (
    <div>
      <div className="border rounded-md p-5 bg-blue-100">
        <div className="flex justify-between items-center ">
          <Image src={"/knowledge.png"} alt="other" width={50} height={50} />
          <h2 className="text-[10px] p-1 px-2 rounded-full bg-cyan-900 text-white">
            20 dec 24
          </h2>
        </div>
        <h2 className="text-cyan-900 mt-3 font-semibold uppercase line-clamp-1">
          {course?.courseLayout?.courseTitle}
        </h2>
        <h2 className="text-sm text-gray-500 font-semibold uppercase">
          {course?.courseLayout?.difficulty}
        </h2>
        <p className="text-sm line-clamp-2 text-cyan-800">
          {course?.courseLayout?.courseSummary}
        </p>
        <div className="mt-5">
          <Progress value={10} />
        </div>
        <div className="mt-3 flex justify-end">
          {course?.status == "Generating" ? (
            <h2 className="text-[12px] p-1 px-2 rounded-full bg-cyan-800 text-white">Generating...</h2>
          ) : (
            <Link href={'/course/'+course?.courseId}>
            <Button className="bg-cyan-800 hover:bg-cyan-950">view</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseCardItems;
