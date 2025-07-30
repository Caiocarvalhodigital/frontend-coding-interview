"use client";
import CustomButton from "@/components/customButton";
import DefaultPageStructure from "@/components/defaultPageStructure";
import EmailInput from "@/components/emailInput";
import PasswordInput from "@/components/passwordInput";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PageTitle from "@/components/pageTitle";
import { useAuthentication } from "@/contexts/authContext";

const Home = () => {
  const { login } = useAuthentication();
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
    router.push("/photos");
  };

  return (
    <DefaultPageStructure>
      <div className="grow w-[100%] flex flex-col items-center justify-center gap-[2.5rem]">
        <div className="flex flex-col items-center gap-[1.5rem]">
          <Image src="/logo.svg" width={75} height={75} alt="App Logo" />
          <PageTitle text="Sign in to your account" />
        </div>

        <form
          className="w-[100%] max-w-[20rem] flex flex-col gap-[1.5rem]"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
            handleSubmitForm(e)
          }
          aria-label="Sign in form"
        >
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

          <CustomButton buttonText="Sign in" />
        </form>
      </div>
    </DefaultPageStructure>
  );
};

export default Home;
