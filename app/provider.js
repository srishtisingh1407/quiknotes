"use client";

import { db } from "@/configs/db";
import { USER_TABLE } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { eq } from "drizzle-orm";
import React, { useEffect } from "react";

function Provider({ children }) {
  const { user } = useUser();

  useEffect(() => {
    user && CheckIsNewUser();
  }, [user]);

  const CheckIsNewUser = async () => {
    //checking if user already exist
    const result = await db
      .select()
      .from(USER_TABLE)
      .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));

    console.log(result);
    if (result?.length == 0) {
      //if not then add user to db
      const userResp = await db
        .insert(USER_TABLE)
        .values({
          name: user?.fullName,
          email: user?.primaryEmailAddress?.emailAddress,
        })
        .returning({ id: USER_TABLE.id });

      console.log(userResp);
    }

    // const resp = await axios.post("/api/create-user", { user: user });
    // console.log(resp.data);
  };
  return <div>{children}</div>;
}

export default Provider;
