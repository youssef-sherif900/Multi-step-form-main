"use client";
import TextInput from "./components/TextInput";
import Heading from "./components/Heading";
import Next from "./components/Next";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from 'next/navigation'

type Inputs = {
  name: string;
  email: string;
  phone: string;
};

export default function Home() {
   const router = useRouter()
  const { register, handleSubmit, formState } = useForm<Inputs>();
  const { errors } = formState;
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    router.push("/step2")
  };
  return (
    <div className="relative px-20 py-10 h-full">
      <Heading
        title="Personel info"
        desc="Please provide your name, email address and phone number."
      />
      <div className="flex flex-col mt-5">
        <TextInput
          label="Name"
          type="text"
          placeholder="e.g.Stephen King"
          register={register("name", { required: "This field is required" })}
          error={errors.name?.message}
          required={errors.name ? true : false}
        />
        <TextInput
          label="Email"
          type="text"
          placeholder="e.g.StephenKing@lorem.com"
          register={register("email", { required: "This field is required" })}
          error={errors.email?.message}
          required={errors.email ? true : false}
        />
        <TextInput
          label="Phone Number"
          type="text"
          placeholder="e.g. +1 234 567 890"
          register={register("phone", { required: "This field is required" })}
          error={errors.phone?.message}
          required={errors.phone ? true : false}
        />
        <Next submit={handleSubmit(onSubmit)} href="/step2" />
      </div>
    </div>
  );
}
