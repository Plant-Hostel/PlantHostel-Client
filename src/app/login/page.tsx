import React from "react";
import Logo from "@/images/MainLogo.svg";
import LoginForm from "@/components/login/LoginForm";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Logo />
      <LoginForm />
    </div>
  );
}
