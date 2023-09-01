"use client"

import Link from "next/link";
import Image from "next/image";
import React from "react";

function LatarBelakangSection() {
  return (
    <>
      <div className="py-20 px-28" id="latar-belakang">
        <div className="flex justify-center mb-24">
          <Link
            href="/main"
            className="p-4 rounded-2xl bg-[#D9D9D9] flex items-center"
          >
            <Image src="/images/logo.svg" alt="logo" width={65} height={74} />
            <p className="text-black text-4xl font-normal italic">
              Get Started!
            </p>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-24">
          <div className="">
            <h1 className="text-6xl font-bold text-[#22467C] text-center italic">
              Latar Belakang
            </h1>
            <span className="block w-[158px] h-1 bg-[#22467C] mx-auto my-4"></span>
          </div>

          <div className="w-[683px]">
            <p className="text-3xl font-light text-[#4F4A43] text-justify">
              Demam Berdarah Dengue (DBD) merupakan sebuah infeksi yang 
              diakibatkan oleh arbovirus yang ditularkan melalui perantara 
              gigitan nyamuk Aedes aegypti. Menurut data dari kemenkes, 
              kasus DBD mengalami peningkatan dari 73.518 kasus pada 
              tahun 2021 menjadi 125.888 kasus pada tahun 2022. 
              Angka terbesar kasus DBD terjadi di perkotaan.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
            <Link
              href="/latar-belakang"
              className="text-center px-8 py-4 bg-[#315D9E] text-white hover:cursor-pointer rounded-2xl text-xl font-bold"
            >
              More details
            </Link>
          </div>
      </div>
    </>
  );
}

export default LatarBelakangSection;
