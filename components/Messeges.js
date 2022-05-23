import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Image from "next/image";
import { useRouter } from "next/router";
import Chat from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { HomeActions } from "../store/actions";
import IO from "socket.io-client";
import { SOCKET_URL } from "../config/utils";
import Notifications from "./Notifications";
import { Avatar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {
  CalendarIcon,
  CameraIcon,
  ChevronLeftIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
const Messeges = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [user, setUser] = useState({});
  const userDetails = useSelector((state) => state?.Home?.userDetail);
  // const user = localStorage.getItem("user");
  const [invitationMessagesSuccess, setInvitationMessagesSuccess] = useState(
    []
  );

  const invitationMessages = useSelector(
    (state) => state?.Home?.InvitationMessages
  );
  console.log("user------------>", userDetails);

  useEffect(() => {
    UserDetails()
      .then((res) => {
        dispatch(
          HomeActions.userDetails({
            user: res?.user,
            token: res?.token,
          })
        );
        socketConnection({ id: res?.user?.Id, token: res?.token });
      })
      .catch((e) => {
        console.log("=======>User Not Login", e);
      });
    dispatch(HomeActions.InvitationMessages());
  }, []);

  const UserDetails = async () => {
    const User = await localStorage.getItem("user");
    const user = JSON.parse(User);
    setUser(user);
    return user;
  };
  const socketConnection = (data) => {
    const socket = IO(
      `${SOCKET_URL}?actorId=${data?.id}&authorization=${data?.token}`,
      {
        forceNew: true,
      }
    );
    console.log("===================>Socket Connection", socket);
  };

  const dummyMessages = [
    {
      img: "/man2.png",
      name: "Kelly Bishop",
      description: `Amazing event organizer Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Ut, quas.`,
      time: "8m ago",
    },
    {
      img: "/man2.png",
      name: "Kelly Bishop",
      description: `Amazing event organizer Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Ut, quas.`,
      time: "8m ago",
    },
    {
      img: "/man2.png",
      name: "Kelly Bishop",
      description: `Amazing event organizer Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Ut, quas.`,
      time: "8m ago",
    },
  ];

  return (
    <div>
      <Nav active="messeges" />
      <div className="p-2 mx-auto mt-0 max-w-7xl md:mt-5 "></div>
      <div className="flex flex-wrap mx-auto justify-evenly max-w-7xl ">
        <div className="flex-grow md:max-w-[410px] bg-white  hidden md:inline-block">
          <div className="p-5 -mb-1 rounded-md md:mb-5 md:shadow-lg">
            <h1 className="text-2xl font-strongg text-[#0E134F]">Messeges</h1>
            <div>
              {dummyMessages.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center p-2 py-4 mt-4 bg-white rounded-lg shadow-[0_5px_30px_-13px_rgba(0,0,0,0.3)] cursor-pointer md:-ml-2 md:shadow-none"
                  >
                    <div className="relative flex-grow-0 sm:mt-0 mt-0  max-w-[100%] w-[55px] h-[55px]  min-w-[55px]">
                      <Image
                        src={item.img}
                        layout="fill"
                        objectfit="contain"
                        className="rounded-xl"
                      />
                    </div>
                    <div className="flex items-center flex-grow ml-4 md:ml-4">
                      <div className="flex-grow">
                        <h1 className="font-bold text-[#0E134F]">
                          {item.name}
                        </h1>
                        <h1 className="text-sm text-gray-400 line-clamp-1">
                          {item.description}
                        </h1>
                      </div>
                      <p className="mb-4 text-sm text-[#E9813B]  min-w-[50px]">
                        {item.time}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* These messeges only appear in mobile  */}

        <div className="flex-grow md:max-w-[410px] bg-white md:hidden ">
          <div className="p-5 -mb-1 rounded-md md:mb-5 md:shadow-lg">
            <h1 className="text-2xl font-bold text-[#0E134F]">Messeges</h1>
            <div>
              {dummyMessages.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => router.push("/chat")}
                    className="flex items-center p-2 py-4 mt-4 bg-white rounded-lg shadow-[0_5px_30px_-15px_rgba(0,0,0,0.3)] cursor-pointer md:-ml-2 md:shadow-none"
                  >
                    <div className="relative flex-grow-0 sm:mt-0 mt-0  max-w-[100%] w-[55px] h-[55px]  min-w-[55px]">
                      <Image
                        src={item.img}
                        layout="fill"
                        objectfit="contain"
                        className="rounded-xl"
                      />
                    </div>
                    <div className="flex items-center flex-grow ml-4 md:ml-4">
                      <div className="flex-grow">
                        <h1 className="font-bold text-[#0E134F]">
                          {item.name}
                        </h1>
                        <h1 className="text-sm text-gray-400 line-clamp-1">
                          {item.description}
                        </h1>
                      </div>
                      <p className="mb-4 text-sm text-[#E9813B]  min-w-[50px]">
                        {item.time}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* here we declare */}
        <div className="md:max-w-[700px]  flex-grow  bg-white hidden md:inline-block">
          {/* <Chat /> */}
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae, culpa?
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
        </div>
      </div>
      <Notifications />
    </div>
  );
};

export default Messeges;
