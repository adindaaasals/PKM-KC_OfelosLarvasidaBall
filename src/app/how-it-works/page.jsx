import React from "react";
import Image from "next/image";

function Page() {
  return (
    <>
      <div className="pt-40 px-40 mb-14">
        <div className="">
          <h1
            className="text-4xl font-bold text-white text-center italic"
            style={{ fontFamily: "Inter" }}
          >
            HOW IT WORKS
          </h1>
          <span className="block w-[158px] h-1 bg-white mx-auto my-4"></span>
        </div>
        <div className="flex justify-center items-center pb-[85px]">
          <div className="w-[1195px] bg-white rounded-[20px] py-16">
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
                Komponen utama yang digunakan dalam Larvasida Ball adalah ESP 32, 
                yang berfungsi sebagai navigasi dan IoT.
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
                  src="/images/fitur-monitoring.png"
                  width={206}
                  height={199}
                  alt="ESP-32"
                />
              </div>
              <div>
                <p className="text-justify text-3xl w-[700px]">
                Kamera ESP 32 hadir dalam Larvasida Ball untuk memfasilitasi analisis real-time keadaan di sekitar perangkat. Pengguna dapat mengakses tampilan ini dengan tap pada bagian “Get Started”. 
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
                  src="/images/hasilfitur-monitoring.png"
                  width={206}
                  height={199}
                  alt="ESP-32"
                />
              </div>
              <div>
                <p className="text-justify text-3xl w-[700px]">
                Kamera ESP 32 juga berfungsi sebagai alat pendeteksi larva di permukaan air.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center w-full gap-5 mb-11">
              <div>
                <h1
                  className="text-6xl text-[#77C4FD] italic"
                  style={{ fontFamily: "Inter" }}
                >
                  4
                </h1>
              </div>
              <div>
                <Image
                  src="/images/pompa.png"
                  width={206}
                  height={199}
                  alt="ESP-32"
                />
              </div>
              <div>
                <p className="text-justify text-3xl w-[700px]">
                Setelah mendeteksi keberadaan larva, pompa air DC 5v diaktifkan melalui tombol ON yang ada di website. Pompa ini berfungsi untuk menghisap larva dari dalam genangan air.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center w-full gap-5 mb-11">
              <div>
                <h1
                  className="text-6xl text-[#77C4FD] italic"
                  style={{ fontFamily: "Inter" }}
                >
                  5
                </h1>
              </div>
              <div>
                <Image
                  src="/images/larva-mesh.png"
                  width={206}
                  height={199}
                  alt="ESP-32"
                />
              </div>
              <div>
                <p className="text-justify text-3xl w-[700px]">
                Larva yang dihisap oleh pompa akan masuk ke bagian bawah badan robot.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center w-full gap-5 mb-11">
              <div>
                <h1
                  className="text-6xl text-[#77C4FD] italic"
                  style={{ fontFamily: "Inter" }}
                >
                  6
                </h1>
              </div>
              <div>
                <Image
                  src="/images/servo.jpg"
                  width={206}
                  height={199}
                  alt="ESP-32"
                />
              </div>
              <div>
                <p className="text-justify text-3xl w-[700px]">
                Ofelos akan meluruhkan granula ekstrak daun kemangi dan daun ciplukan melalui automatic servo. Larutan ini terbukti efektif dalam menstimulasi mortal larva Aedes aegypti.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center w-full gap-5 mb-11">
              <div>
                <h1
                  className="text-6xl text-[#77C4FD] italic"
                  style={{ fontFamily: "Inter" }}
                >
                  7
                </h1>
              </div>
              <div>
                <Image
                  src="/images/waterLevel-sensor.png"
                  width={206}
                  height={199}
                  alt="ESP-32"
                />
              </div>
              <div>
                <p className="text-justify text-3xl w-[700px]">
                Ketika bagian bawah bola robot telah penuh dengan larva, sensor air akan mentransmisikan alert signal sebagai indikasi bahwa robot telah mencapai kapasitas maksimal.
                </p>
              </div>
            </div>
            {/* <div className="flex justify-center items-center w-full gap-5 mb-11">
              <div>
                <h1
                  className="text-6xl text-[#77C4FD] italic"
                  style={{ fontFamily: "Inter" }}
                >
                  7
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
                Ketika bagian bawah bola robot telah penuh dengan larva, sensor air akan mengenali tingkat keberadaan larva dan mengirimkan sinyal sebagai indikasi bahwa robot telah mencapai kapasitas maksimal.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
