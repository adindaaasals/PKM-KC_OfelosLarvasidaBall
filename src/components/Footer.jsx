import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-[#012B4A] flex justify-center w-full py-11 rounded-t-3xl">
        <div>
          <div className="flex flex-col justify-center items-center font-inter text-white">
            <p className="font-bold text-base">Tim Ofelos Larvasida Ball</p>
            <p className="font-bold text-base">Universitas Padjadjaran</p>
            <p className="font-normal text-base">
              Program Kreativitas Mahasiswa- Karya Cipta
            </p>
            <div className="flex items-center mt-2 gap-2">
              <Link
                href="/"
                className="p-2 rounded-full bg-[#D9D9D9] flex items-center text-slate-800 text-xl"
              >
                <FaFacebook />
              </Link>
              <Link
                href="instagram.com/ofelos.larvasidaball"
                className="p-2 rounded-full bg-[#D9D9D9] flex items-center text-slate-800 text-xl"
              >
                <FaInstagram />
              </Link>
              <Link
                href="/"
                className="p-2 rounded-full bg-[#D9D9D9] flex items-center text-slate-800 text-xl"
              >
                <FaTwitter />
              </Link>
              <Link
                href="/"
                className="p-2 rounded-full bg-[#D9D9D9] flex items-center text-slate-800 text-xl"
              >
                <FaTiktok />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
