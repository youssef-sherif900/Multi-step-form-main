"use client";
import Back from "@/app/components/Back";
import BackMob from "@/app/components/BackMob";
import Frame from "@/app/components/Frame";
import Heading from "@/app/components/Heading";
import MobileFrame from "@/app/components/MobileFrame";
import MobileTab from "@/app/components/MobileTab";
import Next from "@/app/components/Next";
import NextMob from "@/app/components/NextMob";
import Service from "@/app/components/Service";
import { serviceAction, serviceState, subscriptionState } from "@/app/hooks/subscription";
import { useDispatch, useSelector } from "react-redux";


function page() {
  const sub = useSelector(subscriptionState)
  const dispatch = useDispatch()
  const services = [
    {
      title:'Online Service',
      desc:'Access to multiplayer games',
      price:sub=="Yearly"?'10':"1",
      onClick:()=> dispatch(serviceAction({service:'Online service', price: sub === "Yearly"?10:1})),
    },
    {
      title:'Larger storage',
      desc:'Extra 1TB of cloud save',
      price:sub=="Yearly"?'20':"2",
      onClick:()=>dispatch(serviceAction({service:'Larger storage',price:sub === "Yearly"?20:2})),
    },
    {
      title:'Customizable profile',
      desc:'Custom theme on profile',
      price:sub=="Yearly"?'20':"2",
      onClick:()=>dispatch(serviceAction({service:'Customizable profile',price:sub === "Yearly"?20:2})),
    }
  ]
  const serv = useSelector(serviceState)
  return (
    <Frame>
      <MobileFrame>
      <Heading
        title="Pick add-ons"
        desc="Add-ons help enhance your gaming expreience"
      />
      <div className="mt-5 md:mt-10">
        {services.map((service) => {
          return (
            <Service
              title={service.title}
              desc={service.desc}
              price={service.price}
              onClick={service.onClick}
            />
          );
        })}
        <Next href="/step2/step3/step4" submit={()=>{}} />
        <Back href="/step2" />
      </div>
      </MobileFrame>
      <MobileTab>
        <NextMob href="/step2/step3/step4" />
        <BackMob href="/step2" />
      </MobileTab>
      </Frame>
  );
}

export default page;
