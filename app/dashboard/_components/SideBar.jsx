"use client";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Shield, UserCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Progress } from "@/components/ui/progress";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

function SideBar() {
  const MenuList = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "Upgrade",
      icon: Shield,
      path: "/dashboard/upgrade",
    },
    {
      name: "Profile",
      icon: UserCircle,
      path: "/dashboard/profile",
    },
  ];

  const path = usePathname();
  return (
    <div className="shadow-lg h-screen p-6 ">
      <div className="flex ">
        <Image
          src={"/logo.svg"}
          width={60}
          height={60} // Specify height
          alt="logo"
          layout="intrinsic"
        ></Image>
        <h1 className="font-bold m-3">QuikNotes.</h1>
      </div>

      <div className="mt-10">
        <Link href={"/create"}>
          <Button className="w-full bg-cyan-700">+ Create New</Button>
        </Link>
        <div className="p-3">
          {MenuList.map((menu, index) => (
            <div
              key={index}
              className={`flex gap-5 items-center p-2 border border-slate-300 rounded-md mt-5
                 hover:bg-slate-400 cursor-pointer]
                 ${path == menu.path && "bg-slate-300"}`}
            >
              <menu.icon />
              <h1 className="font-semibold text-cyan-800">{menu.name}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-24 w-[80%] border rounded-md border-slate-400 p-4">
        <h2 className="font-semibold">Available Credits : 2</h2>
        <Progress value={33} />
        <p className="text-sm mt-1">2 out of 5 Credits Used!</p>
        <Link
          href={"/dashboard/upgrade"}
          className="text-sm text-blue-800 mt-1 hover:text-cyan-700 hover:underline"
        >
          Upgrade to Create more{" "}
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
