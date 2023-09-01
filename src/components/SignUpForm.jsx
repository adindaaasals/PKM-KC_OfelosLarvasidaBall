"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

function SignUpForm() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleUserChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      return toast.error("Password does not match");
    }

    const toastLoading = toast.loading("Loading...");
    try {
      const res = await axios.post("/api/users/signup", user);

      toast.dismiss(toastLoading);
      if (res.data.body.status === "success") {
        toast.success("Sign Up Success");
        router.push("/login");
      } else {
        toast.error(res.data.body.message);
      }
    } catch (err) {
      toast.dismiss(toastLoading);
      toast.error(err.message);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center w-fit mx-auto h-screen">
        <div className="p-8 bg-[#5F9AC4] rounded-[30px]">
          <h1 className="text-4xl font-bold text-center text-white">SIGN UP</h1>
          <form onSubmit={handleUserSubmit}>
            <label className="block mt-4">
              <span className="text-white">Email</span>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 p-2 block w-full border-[#22467C] border-2"
                placeholder="JohnDoe@gmail.com"
                required
                onChange={handleUserChange}
                value={user.email}
              />
            </label>
            <label className="block mt-4" htmlFor="username">
              <span className="text-white">Username</span>
              <input
                type="text"
                name="username"
                id="username"
                className="mt-1 p-2 block w-full border-[#22467C] border-2"
                placeholder="John Doe"
                required
                onChange={handleUserChange}
                value={user.username}
              />
            </label>
            <label className="block mt-4">
              <span className="text-white">Password</span>
              <input
                type="password"
                name="password"
                id="password"
                className="mt-1 p-2 block w-full border-[#22467C] border-2"
                placeholder="********"
                required
                onChange={handleUserChange}
                value={user.password}
              />
            </label>
            <label className="block mt-4">
              <span className="text-white">Confirm Password</span>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="mt-1 p-2 block w-full border-[#22467C] border-2"
                placeholder="********"
                required
                onChange={handleUserChange}
                value={user.confirmPassword}
              />
            </label>
            <div className="w-full">
              <input
                type="submit"
                value="Sign Up"
                className="mt-4 mx-auto block bg-[#22467C] text-white font-bold py-2 px-4 rounded-full"
              />
            </div>
          </form>
          <p className="text-sm mt-4 text-white">
            Already have an account?{" "}
            <Link href="/login" className="underline text-[#22467C] font-bold">
              Login Here
            </Link>
          </p>
        </div>
      </div>
      <div className=" mb-8">
        <p className="text-black text-xl font-normal text-center">
          Copyright 2023 - Tim Ofelos Larvasida Ball
        </p>
      </div>
      <Toaster />
    </>
  );
}

export default SignUpForm;
