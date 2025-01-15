'use client'

import Image from "next/image";
import React, { useState } from "react";

function SelectOption({selectedStudyType}) {
    
  const Options = [
    {
      name: "Exam",
      icon: "/exam_1.png",
    },
    {
      name: "Job Interview",
      icon: "/job.png",
    },
    {
      name: "Practice",
      icon: "/practice.png",
    },
    {
      name: "Coding Prep",
      icon: "/code.png",
    },
    {
      name: "Other",
      icon: "/knowledge.png",
    },
  ];


  const [selected, setSelected]=useState()



  return (
    <div className="">
      <h2 className="text-center mb-2 text-lg">
        For which do you want to create your personal study material?{" "}
      </h2>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {Options.map((option, index) => (
          <div
          key={index}
          className={`mt-4 flex flex-col items-center justify-center border rounded-xl p-4 gap-2 cursor-pointer hover:bg-slate-100 
            ${selected === option.name ? 'border-blue-900 bg-blue-100' : ''}`}
          onClick={() =>{ setSelected(option.name); selectedStudyType(option.name)}}
        >
            <Image src={option.icon} alt={option.name} height={50} width={50} />
            <h2 className="font-bold ">{option.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectOption;
