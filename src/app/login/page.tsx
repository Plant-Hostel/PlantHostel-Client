import React from "react";
import Logo from "@/images/MainLogo.svg";
import LoginForm from "@/components/login/LoginForm";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="h-[150px] flex items-center">
        <Logo />
      </div>
      <LoginForm />
    </div>
  );
}
