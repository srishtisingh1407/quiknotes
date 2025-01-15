'use client'

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

function WelcomeBanner() {
  const { user } = useUser();

  return (
    <div className="p-5 bg-cyan-900 w-full text-white rounded-lg flex items-center gap-10">
      <Image src={"/laptop.png"} alt="laptop" height={100} width={100} />
      <div>
        <h2 className="font-semibold text-2xl">Hey there, {user?.fullName}👋</h2>
        <p className="">
          {" "}
          Ready to Ace those Notes in Style? Let's Make Studying Effortless and
          Fun with AI Magic!
        </p>
      </div>
    </div>
  );
}

export default WelcomeBanner;
