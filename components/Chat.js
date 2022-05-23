import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { StarIcon } from "@heroicons/react/solid";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import { Avatar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {
  CalendarIcon,
  CameraIcon,
  ChevronLeftIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";

const Chat = () => {
  const router = useRouter();

  return (
    <div className="md:max-w-[700px]  flex-grow  bg-white ">
      {/* chat here */}
      <div className="shadow-lg md:rounded-lg">
        <div className="p-5">
          <h1 className="flex items-center justify-between">
            <span
              className="flex-grow-0 float-left cursor-pointer md:hidden"
              onClick={() => router.push("/messeges")}
            >
              <ChevronLeftIcon className="h-6 w-6 sm:w-8 sm:h-8 text-[#E9813B] cursor-pointer" />
            </span>
            <span className="pl-2 text-xl md:font-mediumm md:text-[#42526E] font-strongg text-[#0E134F]">
              Adam Willamson
            </span>
            <div className="relative w-[34px] mr-1 h-[22px]  text-[#E9813B] ">
              <Image
                src="/hand.png"
                alt="infoImg"
                layout="fill"
                objectfit="contain"
              />
            </div>
          </h1>
        </div>
        <hr className="w-[100%] mx-auto border-gray-200" />
        <div className="p-5">
          <div className="border-[#E77334] border p-3 rounded-lg bg-white shadow-md">
            <p className="flex items-center ">
              <CalendarIcon className="w-4 h-4 text-[#ED974B]" />
              <span className="ml-2 text-sm text-gray-400">
                3 November, 2022
              </span>
            </p>
            <h4 className="font-bold text-[#0E134F] my-1">
              Birthday Celebration
            </h4>
            <p className="text-sm text-gray-400  line-clamp-2 max-w-[330px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              culpa?
            </p>
          </div>
          {/* messeges here */}
          <div className="pt-8 pb-4 scrollbar-hide max-h-[350px] overflow-y-scroll ">
            <h1 className="float-right text-[14px] px-3 py-2 bg-gray-100 rounded-tr-none rounded-xl ">
              I am doing good
            </h1>
            <h1 className="flex mt-[52px] mb-[11px]">
              <Avatar src="/man1.png" />
              <span className="px-3 pt-2 pb-[10px] text-[14px] ml-2 bg-[#FCEFE6] rounded-tl-none rounded-xl">
                Hey how are you today?
              </span>
            </h1>
            <h1 className="float-right text-[14px] px-3 py-2 bg-gray-100 rounded-tr-none rounded-xl ">
              Ok, Send me quick
            </h1>
            <h1 className="flex mt-[61px] mb-[11px]">
              <Avatar src="/man2.png" />
              <span className="px-1 py-1 text-[14px] ml-2 bg-[#FCEFE6] rounded-tl-none rounded-xl">
                <div className="relative flex-grow sm:mt-0 mt-0  md:max-w-[100%] w-[220px] mx-auto   cursor-pointer h-[125px]  min-w-[110px] max-h-[280px] max-w-[97%]  rounded-lg">
                  <Image
                    src="/gamepic.png"
                    layout="fill"
                    objectfit="cover"
                    className="rounded-lg rounded-tl-none"
                  />
                </div>
              </span>
            </h1>
          </div>
          <div className="flex justify-between mb-6 md:mb-1">
            <div className="flex items-center flex-grow px-4 bg-[#F2F2F2] py-2 rounded-md mr-3">
              <input
                type="text"
                placeholder="Type messege"
                className="flex-grow text-sm bg-transparent border-none outline-none"
              />
              <EmojiHappyIcon className="w-5 h-5 mr-2 text-gray-400 cursor-pointer" />
              <CameraIcon className="w-5 h-5 text-gray-400 cursor-pointer" />
            </div>
            <div className="float-right  cursor-pointer bg-[#E9813B] flex items-center justify-center p-2 rounded-md">
              <SendIcon className="w-5 h-5 text-white -rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
