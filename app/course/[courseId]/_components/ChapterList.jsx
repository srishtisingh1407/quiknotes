import React from "react";

function ChapterList({ course }) {
  const CHAPTERS = course?.courseLayout?.chapters;
  return (
    <div className="mt-5">
      <h1 className="font-bold text-2xl text-cyan-950 uppercase">Chapters :</h1>

      <div>
        {CHAPTERS?.map((chapter, index) => (
          <div
            key={index} // Adding key prop here
            className="flex gap-5 items-center p-5 border shadow-md mb-2 mt-3 hover:bg-slate-200 rounded-lg cursor-pointer "
          >
            <h2 className="text-2xl">{chapter?.emoji}</h2>
            <div className="">
              <h2 className="font-bold text-cyan-950 ">
                {chapter?.chapterTitle}
              </h2>
              <p className="text-sm ">{chapter?.chapterSummary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterList;
