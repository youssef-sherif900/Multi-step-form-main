"use client";
import Back from "@/app/components/Back";
import Heading from "@/app/components/Heading";
import Step4 from "@/app/components/Step4";
import { cardState, serviceState, subscriptionState } from "@/app/hooks/subscription";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useState } from "react";
import Success from "@/app/components/Success";

function page() {
  const[confirm , setConfirm]=useState(false)
  return(
    <div className="h-full">
      {
        confirm ? <Success/> :<Step4 onSubmit={()=>setConfirm(true)}/>
      }
      
    </div>
  )
}

export default page;
