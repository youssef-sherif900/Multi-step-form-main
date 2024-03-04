"use client";
import Back from "@/app/components/Back";
import Heading from "@/app/components/Heading";
import { cardState, serviceState, subscriptionState } from "@/app/hooks/subscription";
import Link from "next/link";
import { useSelector } from "react-redux";

function Step4({onSubmit}:{onSubmit:()=>void}) {
    const card = useSelector(cardState);
    const sub = useSelector(subscriptionState);
    const serv = useSelector(serviceState)
    const servArr= ["Online service","Larger storage","Customizable profile"]
    let serviceTotal:number = 0
    return (
      <div className="relative px-20 py-10 h-full">
        <Heading
          title="Finishing up"
          desc="Double-check everything look OK before confirming."
        />
        <div className="bg-gray-100 mt-8 w-[450px] rounded-md">
          <div className="flex justify-between items-center p-3">
            <div>
              <h3 className="font-bold text-blue-900">
                {card.name}({sub})
              </h3>
              <p className="text-purple-500 underline hover:cursor-pointer">Change</p>
            </div>
            <div className="font-bold text-blue-900">{card.price}{sub === "Monthly"?'/mo':"/yr"}</div>
          </div>
          <div className="w-full flex justify-center">
          <hr className="bg-gray-200 h-[2px] w-3/4"></hr>
          </div>
          <div className="w-full px-4 py-5">
              {
                servArr.map((s:string)=>{
                  if(serv[s as keyof typeof serv].checked){
                    serviceTotal += serv[s as keyof typeof serv].price 
                    return(
                      <div className="flex justify-between w-full py-1">
                        <p className="text-gray-400">{s}</p>
                        <p className="text-blue-900 font-medium" >+${serv[s as keyof typeof serv].price}{sub==="Yearly"?"/yr":"/mo"}</p>
                      </div>
                    )
                  }
                })
              }
          </div>
        </div>
        <div className="p-2 mt-2 w-full flex justify-between">
            <p className="text-gray-400">Total (Per {sub.toLowerCase()})</p>
            <h2 className="text-[#483EFF] font-bold text-xl">+{card.price+serviceTotal}{sub==="Yearly"?"/yr":"/mo"}</h2>
          </div>
        <Back href="/step2/step3" />
        <Link className="absolute bottom-10 right-16" href="">
      <button onClick={onSubmit} type="submit" className="w-[125px] h-12 bg-[#483EFF] rounded-md text-white font-semibold">Confirm</button>
      </Link>
      </div>
    );
  }
  
  export default Step4;