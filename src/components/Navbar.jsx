import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/images/logo.svg";

function Navbar() {
  return (
    <nav className="fixed w-full z-10 backdrop-filter backdrop-blur-sm">
      <div className="flex w-full justify-between py-8 px-12 align-middle">
        <div>
          <Link href="#home" className="flex">
            <Image src={Logo} alt="logo" width={65} height={74} />
            <p className="text-2xl font-bold h-fit my-auto text-[#22467C]">
              Ofelos Larvasida Ball
            </p>
          </Link>
        </div>
        <ul className="flex gap-8 text-lg font-normal text-[#4F4A43] h-fit my-auto align-middle">
          <li className="h-fit my-auto">
            <Link href="#home">Home</Link>
          </li>
          <li className="h-fit my-auto">
            <a href="#latar-belakang">Latar Belakang</a>
          </li>
          <li className="h-fit my-auto">
            <Link href="#how-it-works">How it Works</Link>
          </li>
          <li className="bg-[#22467C] rounded-2xl font-bold text-white text-xl px-8 py-4">
            <Link href="/login">Log In</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
