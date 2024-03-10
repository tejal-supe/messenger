"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

interface AuthContext {
  children: React.ReactNode;
}
const AuthContext = ({ children }: AuthContext) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthContext;
