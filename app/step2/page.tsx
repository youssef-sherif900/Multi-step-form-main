"use client";
import Card from "../components/Card";
import Heading from "../components/Heading";
import Next from "../components/Next";
import CustomizedSwitch from "../components/Switch";
import Back from "../components/Back";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {subscription  , cardSelection, subscriptionState, cardState } from "../hooks/subscription"
import Pro from "../assets/Pro";
import Arcade from "../assets/Arcade";
import Controller from "../assets/icon-advanced";

type cardsType = {
  children:React.ReactNode,
  title:'Arcade'|'Advanced'|'Pro',
  price:string
  }[]


function Step2() {

  const dispatch = useDispatch()
  const sub = useSelector(subscriptionState)
  const [choosenCard, setChoosenCard] = useState<number | undefined>(undefined);

  const cards:cardsType = [
    { children: <Arcade />, title: "Arcade", price:sub === "Monthly"?"9":"90" },
    { children: <Controller />, title: "Advanced", price:sub === "Monthly"? "12":"120" },
    { children: <Pro />, title: "Pro", price:sub === "Monthly"? "15":"150" },
  ];

  const handleToggle = ()=>{
    // set toggle in store
    dispatch(subscription())
}
  const handleClick = (e:any) => {
    const ind = e.target.value
    setChoosenCard(ind);
    // set choosen card in store
    dispatch(cardSelection({name:cards[ind].title,price:+cards[ind].price}))
  };
  return (
    <div className="relative px-20 py-10 h-full">
      <Heading
        title="Select your plan"
        desc="You have option of monthly or yearly billing"
      />
      <div className="flex justify-between mt-10">
        {cards.map((card, ind) => {
          return (
            <Card
              title={card.title}
              price={card.price}
              children={card.children}
              active={ind == choosenCard}
              value={ind}
              handleClick={handleClick}
              toggle={sub}
            />
          );
        })}
      </div>
      <div className="flex w-[431] h-[45px] bg-gray-100 rounded-sm justify-center mt-8">
        <CustomizedSwitch state={sub} handleToggle={handleToggle} />
      </div>
      <Next href="/step2/step3" submit={()=>{}}/>
      <Back href="/" />
    </div>
  );
}

export default Step2;
