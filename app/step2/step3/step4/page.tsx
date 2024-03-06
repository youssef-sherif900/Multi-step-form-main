"use client";
import Step4 from "@/app/components/Step4";
import { useState } from "react";
import Success from "@/app/components/Success";

function page() {
  const[confirm , setConfirm]=useState(false)
  return(
        confirm ? <Success/> :<Step4 onSubmit={()=>setConfirm(true)}/>
  )
}

export default page;
