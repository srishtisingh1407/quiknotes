"use client"
import React, { useEffect, useState } from "react";
import MaterialCardItem from "./MaterialCardItem";
import axios from "axios";


function StudyMaterialSection({courseId}) {
  const [studyTypeContent,setStudyTypeContent]=useState()
  const MaterialList = [
    {
      name: "Notes",
      desc: "Read notes to prepare",
      icon: "/notes.png",
      path: "/notes",
    },
    {
      name: "Flashcard",
      desc: "Remember the concepts",
      icon: "/flashcard.png",
      path: "/flashcards",
    },
    {
      name: "Quiz",
      desc: "Test your knowledge here",
      icon: "/quiz.png",
      path: "/quiz",
    },
    {
      name: "Q/A",
      desc: "Help to practise your learning",
      icon: "/qa.png",
      path: "/qa",
    },
  ];


  useEffect(()=>{
    GetStudyMaterial();

  },[courseId])



  const GetStudyMaterial= async()=>{

    const result= await axios.post('/api/study-type',{
      courseId:courseId,
      studyType:'ALL'
    })

    console.log(result?.data);
    setStudyTypeContent(result.data)
  }
  return (
    <div className="mt-10">
      <h2 className="font-bold text-2xl text-cyan-900 uppercase">Study Material :</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 ">
        {MaterialList.map((item, index) => (
          <MaterialCardItem  item={item} key={index}/>
        ))}
      </div>
    </div>
  );
}

export default StudyMaterialSection;
