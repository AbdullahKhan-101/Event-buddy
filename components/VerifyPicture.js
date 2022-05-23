import React from "react";
import { useRouter } from "next/router";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import Image from "next/image";

const VerifyPicture = () => {
  const router = useRouter();

  return (
    <div>
      <div className="p-2 mx-auto mt-8 md:max-w-6xl max-w-[94%] ">
        <h1 className=" text-[#0E134F] md:text-[34px] text-2xl text-center sm:px-2 px-1 md:font-lgstrong flex items-center font-strongg">
          <span
            className="flex-grow-0 float-left cursor-pointer"
            onClick={() => router.push("/selfie")}
          >
            <ChevronLeftIcon className="h-6 w-6 sm:w-8 sm:h-8 text-[#E9813B]" />
          </span>
          <span className="flex-grow">Verify Picture</span>
        </h1>
        <div className="flex flex-wrap items-center justify-around mt-3 sm:mt-8">
          <div className="w-[470px] sm:mt-6 mt-5 ">
            <p className="font-mediumm text-[15px] md:text-[20px]">
              Uploaded Picture
            </p>
            <div className="relative sm:mt-4 mt-2   w-[100%]  h-[220px] sm:h-[250px]">
              <Image
                src="/gora1.png"
                layout="fill"
                objectfit="cover"
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="w-[470px] sm:mt-6 mt-5 ">
            <p className="font-mediumm text-[15px] md:text-[20px]">
              Recent Capture Selfie
            </p>
            <div className="relative sm:mt-4 mt-2  w-[100%]  h-[220px] sm:h-[250px]">
              <Image
                src="/gora2.png"
                layout="fill"
                objectfit="cover"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>

        <p className="px-1 mt-4 text-center text-gray-600 font-normall sm:mt-12 text-[14px] md:text-lg">
          Please make sure to be in a spot with sufficient light on your face.
        </p>
        <div className="flex flex-wrap justify-center mt-6 sm:mt-24">
          <button
            onClick={() => router.push("/selfie")}
            className="font-mediumm border sm:mx-8 bg-white bg-gradient-to-tr  py-[10px] sm:py-3 px-7 rounded-full text-[#E9813B]  mx-3 md:w-[30%] w-[100%] mt-2 border-[#ED974B]"
          >
            Capture Selfie Again
          </button>
          <button
            onClick={() => router.push("/enableLocation")}
            className="font-mediumm sm:mx-8 bg-[#ED974B] bg-gradient-to-tr  py-[10px] sm:py-3 px-7 rounded-full text-white from-[#E77334] to-[#ED974B] mx-3 md:w-[30%] w-[100%] hover:from-[#ff6715] mt-2"
          >
            Verify
          </button>
        </div>
      </div>

      <button
        onClick={() => router.push("/enableLocation")}
        className="fixed px-4 py-2 font-semibold uppercase bg-gray-200 rounded-lg lg:right-12 lg:bottom-5 hover:bg-gray-300 right-2 bottom-1"
      >
        Next
      </button>
    </div>
  );
};

export default VerifyPicture;
