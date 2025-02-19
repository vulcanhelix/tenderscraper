"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-4">Sign In</h1>
      <p className="text-gray-600 mb-8">Sign in to access the application.</p>
      <Button onClick={() => signIn("email")}>Sign in with Email</Button>
    </div>
  );
}
