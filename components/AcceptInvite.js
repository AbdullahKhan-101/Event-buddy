import {
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  LocationMarkerIcon,
  XIcon,
} from "@heroicons/react/outline";
import React, { useEffect } from "react";
import EnableLocation from "./EnableLocation";
import { useRouter } from "next/router";
import Invite from "./Invite";
import Person from "./Person";
import { Avatar } from "@mui/material";
import { acceptInviteModal } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSpring, animated } from "react-spring";

const AcceptInvite = () => {
  const [isOpen, setIsOpen] = useRecoilState(acceptInviteModal);

  const styles = useSpring({
    opacity: isOpen === "open" ? 1 : 0,
    delay: isOpen === "open" ? 100 : 0,
  });

  const router = useRouter();

  const acceptInviteDummyData = {
    img: "/man1.png",
    topic: "Birthday Celebration",
    senderName: "   Dave Parker",
    eventMessage: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
    obcaecati beatae quae consequatur corrupti veritatis eum explicabo
    eius exercitationem culpa illum odit alias, doloribus sit minus illo
    delectus expedita eveniet.`,
    date: "3 November, 2022",
    location: "Town Hall, London",
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
    // data-aos="fade-zoom-in"
    // data-aos-easing="ease-in-back"
    // data-aos-delay="200"
    // data-aos-duration="400"
    >
      {isOpen === "open" && (
        <animated.div
          style={styles}
          // data-aos="fade-zoom-in"
          // data-aos-easing="ease-in-back"
          // data-aos-delay=""
          // data-aos-duration="400"
          className="w-[100%] h-[100vh] bg-white  bg-opacity-70  mx-auto mt-0 absolute top-0 right-0 left-0 z-10"
        >
          <div className="fixed left-0 right-0 z-10 mx-auto text-center  -top-1 md:top-7 max-w-[100px] h-[100px] flex justify-center items-center">
            <Avatar src="/man1.png" sx={{ width: 70, height: 70 }} />
          </div>

          <div className="fixed rounded-xl p-6 md:p-10 bg-white  shadow-2xl top-10 w-[95%] max-w-[600px] mx-auto right-0 left-0 md:top-20">
            <h1 className=" text-[#0E134F]  text-2xl text-center  px-1 font-strongg flex items-center mt-10 md:mt-3">
              <span className="flex-grow">{acceptInviteDummyData.topic}</span>
            </h1>
            <p className="my-2 text-center">
              Invite By:{" "}
              <span className="underline text-[#ED974B] font-semibold cursor-pointer">
                {acceptInviteDummyData.senderName}
              </span>
            </p>
            <h4 className="text-[#0E134F] font-strongg mt-12 md:text-xl md:text-center">
              Event Messege
            </h4>
            <p className="mt-2 md:text-center text-[14px] text-gray-400 md:text-base font-normall">
              {acceptInviteDummyData.eventMessage}
            </p>
            <div className="items-center mt-4 md:flex md:justify-evenly">
              <p className="flex items-center mt-7 mb-7">
                <CalendarIcon className="w-5 h-5 text-[#ED974B]" />
                <span className="ml-2 text-sm text-gray-500">
                  {acceptInviteDummyData.date}
                </span>
              </p>
              <p className="flex items-center mt-7 mb-7">
                <LocationMarkerIcon className="w-5 h-5 text-[#ED974B]" />
                <span className="ml-2 text-sm text-gray-500">
                  {acceptInviteDummyData.location}
                </span>
              </p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setIsOpen("close")}
                className="font-semibold mx-2 text-gray-400 flex bg-white items-center justify-center bg-gradient-to-tr  py-[10px] sm:py-3 px-7 rounded-full   border  w-[97%] mt-0 border-gray-400"
              >
                <XIcon className="w-6 h-6 -ml-3 text-gray-400" />
                <span className="ml-1">Reject</span>
              </button>
              <button className="font-semibold flex items-center mx-2 bg-[#ED974B] justify-center bg-gradient-to-tr  py-[10px] sm:py-3 px-7 rounded-full text-white from-[#E77334] to-[#ED974B] w-[97%] hover:from-[#ff6715] mt-0">
                <CheckIcon className="w-6 h-6 -ml-3 text-white" />
                <span className="ml-1">Accept</span>
              </button>
            </div>
          </div>
        </animated.div>
      )}
    </div>
  );
};

export default AcceptInvite;
