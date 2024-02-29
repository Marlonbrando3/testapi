"use client";

import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
// import { useRouter, useSearchParams } from "next/navigation";

export default function Input() {
  // const searchparams = useSearchParams();

  const params = [{ region: "lalala" }, { type: "kololo" }];
  // const router = useRouter();

  const print = () => {
    console.log();
    // router.push(`/?${query}`);
  };

  return <div>{/* <button onClick={handleFetch}>Fire</button> */}</div>;
}
