"use client";
import Button from "@/components/Button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
const page = (props: any) => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignIn = async (formdata: any) => {
    const email = formdata.get("email");
    const password = formdata.get("password");
    try {
      const res = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/login",
      });
      if (res?.error) {
        alert(res.error);
      }
      if (res?.ok) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (session) {
    router.push("/");
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h3 className="text-3xl font-bold mb-4">Login</h3>
      <div className="border p-4 rounded-md w-1/4">
        <form action={handleSignIn} className="flex flex-col mb-4">
          <input
            name="email"
            className="mb-4 border p-2"
            type="text"
            placeholder="email"
          />

          <input
            name="password"
            className="mb-4 border p-2"
            type="password"
            placeholder="password"
          />

          <Button text="Login" color="text-white" />
        </form>
        <div className="flex gap-4 flex-col">
          <Button
            text="Login with Google"
            color="text-grey"
            onClick={() => signIn("google")}
          />
          <Button
            text="Login with Github"
            color="text-grey"
            onClick={() => signIn("github")}
          />
        </div>
        <div>
          {/* {session?.error === "CredentialsSignin" && <p>Invalid credentials</p>} */}
        </div>
      </div>
    </div>
  );
};

export default page;
