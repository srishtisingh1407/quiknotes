"use client";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CourseCardItems from "./CourseCardItems";
import { Button } from "@/components/ui/button";
import { RefreshCcwIcon } from "lucide-react";

function CourseList() {
  const { user } = useUser();
  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    user && GetCourseList();
  }, [user]);

  const GetCourseList = async () => {
    setLoading(true);
    const result = await axios.post("/api/courses", {
      createdBy: user?.primaryEmailAddress?.emailAddress,
    });
    console.log(result);
    setCourseList(result.data.result);
    setLoading(false);
  };

  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl uppercase flex justify-between items-center">
        Your Study Material :
        <Button
          className="bg-cyan-800 hover:bg-cyan-950"
          onClick={GetCourseList}
        >
          Refresh <RefreshCcwIcon />{" "}
        </Button>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3  mt-2 gap-7 ">
        {loading == false
          ? courseList?.map((course, index) => (
              <CourseCardItems course={course} key={index} />
            ))
          : [1, 2, 3, 4, 5].map((item, index) => (
              <div
                key={index}
                className="h-56 w-full bg-slate-200 rounded-lg animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default CourseList;
