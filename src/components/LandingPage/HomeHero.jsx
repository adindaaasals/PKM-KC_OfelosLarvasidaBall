import React from "react";

function HomeHero() {
  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-no-repeat bg-center pt-[178px]"
        style={{ backgroundImage: "url(/images/bg-hero.svg)" }}
        id="home"
      >
        <div className="">
          <h1 className="text-5xl font-bold text-[#4F4A43] text-center">
            Satukan tekad, satukan tujuan!
          </h1>
          <h1 className="text-4xl font-medium text-[#22467C] text-center">
            Marilah kita sama-sama kurangi entisitas dari Demam Berdarah Dengue (DBD)
          </h1>
        </div>
      </div>
    </>
  );
}

export default HomeHero;
