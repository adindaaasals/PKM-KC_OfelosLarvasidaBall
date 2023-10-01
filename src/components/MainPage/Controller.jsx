"use client";

import React, { useEffect, useState } from "react";
import {
  BiSolidUpArrow,
  BiSolidDownArrow,
  BiSolidLeftArrow,
  BiSolidRightArrow,
} from "react-icons/bi";
import useDirection from "@/hooks/useDirection";

import { ref, child, onValue } from "firebase/database";
import { firebase } from "@/firebase/firebase-config";
import { toast } from "react-hot-toast";

function Controller() {
  const updateDir = useDirection();
  const [sensor, setSensor] = useState(null);
  const [pump1, setPump1] = useState(false);
  const [pump2, setPump2] = useState(false);

  //set pump false when first load
  const setPump = async () => {
    const dbPath = "/pump";
    const value = {
      pump_1: false,
      pump_2: false,
    };
    await updateDir.updateDirection(dbPath, value);
  };
  useEffect(() => {
    setPump();
  }, []);

  useEffect(() => {
    const dbRef = ref(firebase, "/water_level");

    onValue(dbRef, (snapshot) => {
      const sensorData = snapshot.val();
      setSensor(sensorData);
      if(sensorData >= 400){
        toast("Water is Full!!", {
          duration: Infinity,
          id: "waterLevel",
          icon: "⚠️",
          style: {
            background: "#D0342C",
            color: "#fff",
          },
        });
      }else{
        toast.dismiss("waterLevel");
      }
    });
  }, []);

  const handlePump = async (pumpType) => {
    const dbPath = "/pump";
    let value = {};
    if (pumpType === "pump_1") {
      value = {
        pump_1: !pump1,
      };
      setPump1(!pump1);
    } else if (pumpType === "pump_2") {
      value = {
        pump_2: !pump2,
      };
      setPump2(!pump2);
    }
    console.log(value);
    await updateDir.updateDirection(dbPath, value);
  };

  const setOn = async (path, dir) => {
    const dbPath = "/direction";
    const value = {
      [dir]: true,
    };
    await updateDir.updateDirection(path, value);
  };

  const setOff = async (path, dir) => {
    const dbPath = "/direction";
    const value = {
      [dir]: false,
    };
    await updateDir.updateDirection(path, value);
  };

  return (
    <>
      <div className="flex justify-center ">
        {/* Circle controller with 4 arrow button */}
        <div
          className="w-fit h-fit bg-[#D9D9D9] rounded-[20px] px-4 py-2 drop-shadow-md hover:cursor-pointer text-xl"
          onClick={() => handlePump("pump_1")}
        >
          <p>Pump 1</p>
        </div>
        <div className="grid grid-cols-3 gap-4 bg-[#7793A630] w-[351px] h-[351px] mb-16 center rounded-full drop-shadow-xl">
          <div className="bg-rose"></div>
          <div className="bg-rose">
            <BiSolidUpArrow
              className="text-6xl m-auto items-center h-full text-[#1E1E1E] drop-shadow-lg hover:cursor-pointer"
              onMouseDown={() => setOn("/direction", "forward")}
              onMouseUp={() => setOff("/direction", "forward")}
            />
          </div>
          <div className="bg-rose"></div>
          <div className="bg-rose">
            <BiSolidLeftArrow
              className="text-6xl m-auto items-center h-full text-[#1E1E1E] drop-shadow-lg hover:cursor-pointer"
              onMouseDown={() => setOn("/direction", "left")}
              onMouseUp={() => setOff("/direction", "left")}
            />
          </div>
          <div className="bg-rose">
            <div className="w-full h-full bg-white rounded-full m-auto flex items-center justify-center drop-shadow-lg"></div>
          </div>
          <div className="bg-rose">
            <BiSolidRightArrow
              className="text-6xl m-auto items-center h-full text-[#1E1E1E] drop-shadow-lg hover:cursor-pointer"
              onMouseDown={() => setOn("/direction", "right")}
              onMouseUp={() => setOff("/direction", "right")}
            />
          </div>
          <div className="bg-rose"></div>
          <div className="bg-rose">
            <BiSolidDownArrow
              className="text-6xl m-auto items-center h-full text-[#1E1E1E] hover:cursor-pointer"
              onMouseDown={() => setOn("/direction", "backward")}
              onMouseUp={() => setOff("/direction", "backward")}
            />
          </div>
          <div className="bg-rose"></div>
        </div>
        <div
          className="w-fit h-fit bg-[#D9D9D9] rounded-[20px] px-4 py-2 drop-shadow-md hover:cursor-pointer text-xl"
          onClick={() => handlePump("pump_2")}
        >
          <p>Pump 2</p>
        </div>
      </div>
      <div className="text-black text-center text-xl pb-10">
        <p>Height sensor: {sensor}</p>
      </div>
      <div className="text-black text-center text-xl pb-10">
        <p>Copyright 2023 - Tim Ofelos Larvasida Ball</p>
      </div>
    </>
  );
}

export default Controller;
