import React from "react";
import Image from "next/image";
import SignUp from "../components/SignUp";

const signup = () => {
  return (
    <div>
      <SignUp />
      <div className="absolute top-0 md:h-[131px] h-[106px] w-52 md:w-64 ">
        <Image
          src="/bgdesign1.png"
          alt="infoImg"
          layout="fill"
          objectfit="contain"
        />
      </div>
      <div className="absolute bottom-0 right-0 hidden h-[107px] -mt-3 w-64  md:block ">
        <Image
          src="/bgdesign2.png"
          alt="infoImg"
          layout="fill"
          objectfit="contain"
        />
      </div>
    </div>
  );
};

export default signup;
