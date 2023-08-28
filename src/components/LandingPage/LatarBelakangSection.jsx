import Link from "next/link";
import Image from "next/image";
import React from "react";

function LatarBelakangSection() {
  return (
    <>
      <div className="py-20 px-28">
        <div className="flex justify-center mb-24">
          <Link
            href="/"
            className="p-4 rounded-2xl bg-[#D9D9D9] flex items-center"
          >
            <Image src="/images/logo.svg" alt="logo" width={65} height={74} />
            <p className="text-black text-4xl font-normal italic">
              Get Started!
            </p>
          </Link>
        </div>
        <div className="flex justify-around items-center">
          <div className="">
            <h1 className="text-6xl font-bold text-[#22467C] text-center italic">
              Latar Belakang
            </h1>
            <span className="block w-[158px] h-1 bg-[#22467C] mx-auto my-4"></span>
          </div>

          <div className="w-[683px]">
            <p className="text-3xl font-light text-[#4F4A43] text-justify">
              Demam Berdarah Dengue (DBD) merupakan sebuah infeksi yang
              diakibatkan oleh arbovirus (arthro podborn virus) yang ditularkan
              melalui perantara gigitan nyamuk Aedes aegypti. Iklim tropis di
              Indonesia menjadi faktor pendukung persebaran nyamuk Aedes aegypti
              yang merupakan vektor utama penyakit DBD.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatarBelakangSection;
