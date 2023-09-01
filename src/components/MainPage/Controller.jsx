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

function Controller() {
  const updateDir = useDirection();
  const [sensor, setSensor] = useState(null);

  useEffect(() => {
    const dbRef = ref(firebase, "/pump/isFull");

    onValue(dbRef, (snapshot) => {
      const sensorData = snapshot.val();
      setSensor(sensorData);
    });
  }, []);

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
          onMouseDown={() => setOn("/pump", "pump_1")}
          onMouseUp={() => setOff("/pump", "pump_1")}
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
            <div
              className="w-full h-full bg-white rounded-full m-auto flex items-center justify-center drop-shadow-lg hover:cursor-pointer"
              onMouseDown={() => setOn("/direction", "stop")}
              onMouseUp={() => setOff("/direction", "stop")}
            >
              {/* <p className="text-center h-fit my-auto text-3xl ">OK</p> */}
            </div>
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
          onMouseDown={() => setOn("/pump", "pump_2")}
          onMouseUp={() => setOff("/pump", "pump_2")}
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
