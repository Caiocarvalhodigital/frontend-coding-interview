"use client";
import CustomButton from "@/components/customButton";
import DefaultPageStructure from "@/components/defaultPageStructure";
import EmailInput from "@/components/emailInput";
import PasswordInput from "@/components/passwordInput";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  return (
    <DefaultPageStructure>
      <div className="w-[100%] flex flex-col items-center gap-[2.5rem]">
        <div className="flex flex-col items-center gap-[1.5rem]">
          <Image src="/logo.svg" width={75} height={75} alt="Logo" />
          <h1 className="font-[700] text-[1.25rem] leading-[1.75rem] text-black">
            Sign in to your account
          </h1>
        </div>

        <div className="w-[100%] max-w-[20rem] flex flex-col gap-[1.5rem]">
          <EmailInput
            id="email-input"
            name="email-input"
            label="Username"
            onChange={(e) => setFormData({ ...formData, email: e })}
            value={formData.email}
            placeholder="you@example.com"
          />

          <PasswordInput
            id="password-input"
            name="password-input"
            label="Password"
            onChange={(e) => setFormData({ ...formData, password: e })}
            value={formData.password}
            placeholder="Enter your password"
          />

          <CustomButton buttonText="Sign in" onClick={() => {}} />
        </div>
      </div>
    </DefaultPageStructure>
  );
}
