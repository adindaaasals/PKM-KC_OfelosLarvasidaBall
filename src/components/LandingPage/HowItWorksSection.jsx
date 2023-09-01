import Image from "next/image";
import Link from "next/link";
import React from "react";

function HowItWorksSection() {
  return (
    <>
      <div className="pt-24 bg-[#315D9E] h-[548px]" id="how-it-works">
        <h2 className="text-white text-center italic text-4xl">HOW IT WORKS</h2>
        <span className="block w-[158px] h-1 bg-white mx-auto mt-4"></span>
      </div>
      <div className="flex justify-center items-center pb-[85px]">
        <div className="w-[1195px] h-[940px] bg-[#D4DAE3] rounded-[20px] -mt-[300px] py-16">
          <div className="flex justify-center items-center w-full gap-5 mb-11">
            <div>
              <h1
                className="text-6xl text-[#77C4FD] italic"
                style={{ fontFamily: "Inter" }}
              >
                1
              </h1>
            </div>
            <div>
              <Image
                src="/images/ESP-32.png"
                width={206}
                height={199}
                alt="ESP-32"
              />
            </div>
            <div>
              <p className="text-justify text-3xl w-[700px]">
                Komponen utama yang digunakan dalam Larvasida Ball adalah ESP
                32, yang berfungsi sebagai navigasi dan IoT.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center w-full gap-5 mb-11">
            <div>
              <h1
                className="text-6xl text-[#77C4FD] italic"
                style={{ fontFamily: "Inter" }}
              >
                2
              </h1>
            </div>
            <div>
              <Image
                src="/images/ESP-32.png"
                width={206}
                height={199}
                alt="ESP-32"
              />
            </div>
            <div>
              <p className="text-justify text-3xl w-[700px]">
                Kamera ESP 32 dan LED lamp hadir dalam Larvasida Ball untuk
                memfasilitasi analisis real-time keadaan di sekitar perangkat.
                Pengguna dapat mengakses tampilan ini dengan tap pada bagian
                “Get Started”
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center w-full gap-5 mb-11">
            <div>
              <h1
                className="text-6xl text-[#77C4FD] italic"
                style={{ fontFamily: "Inter" }}
              >
                3
              </h1>
            </div>
            <div>
              <Image
                src="/images/ESP-32.png"
                width={206}
                height={199}
                alt="ESP-32"
              />
            </div>
            <div>
              <p className="text-justify text-3xl w-[700px]">
                Kamera ESP 32 juga berfungsi sebagai alat pendeteksi larva di
                permukaan air.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              href="/how-it-works"
              className="text-center px-8 py-4 bg-[#315D9E] text-white hover:cursor-pointer rounded-2xl text-xl font-bold"
            >
              More details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowItWorksSection;
