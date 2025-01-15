import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function MaterialCardItem({ item }) {
  return (
    <div className="mt-3 cursor-pointer bg-cyan-900 border shadow-md rounded-lg p-5 flex flex-col items-center hover:bg-cyan-700 ">
    
      <h2 className="p-1 px-2 m-3 text-sm bg-emerald-500 text-white rounded-xl ">Ready</h2>
      <Image src={item.icon} alt={item.name} width={50} height={50} />
      <h2 className="font-bold mt-2 text-white ">{item.name}</h2>
      <p className="text-white text-sm text-center flex justify-center mt-2 line-clamp-2">
        {item.desc}
      </p>

      <Button className="mt-3 w-full bg-blue-100 text-cyan-900 hover:bg-blue-300">View</Button>
    </div>
  );
}

export default MaterialCardItem;
