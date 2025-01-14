import React, { useEffect, useState } from "react";
import { imageBaseUrl } from "../config/utils";
import Image from "next/image";
import {
  BellIcon,
  ChartPieIcon,
  HomeIcon,
  LocationMarkerIcon,
  MailIcon,
  MapIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Nav from "./Nav";
import { useDispatch, useSelector } from "react-redux";
import { HomeActions } from "../store/actions";
import Notifications from "./Notifications";
import { useRecoilState } from "recoil";
import { usersDataModal } from "../atoms/modalAtom";
import Geocode from "react-geocode";

const Home = () => {
  const [usersData, setUsersData] = useRecoilState(usersDataModal);
  console.log("checking usersData in modal ", usersData);

  // const [usersData, setUsersData] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();
  const [discoverUsersSuccess, setDiscoverUsersSuccess] = useState([]);

  const discoverUsers = useSelector((state) => state?.Home?.DiscoverUsers);
  const RealData = discoverUsers?.data?.Data?.Users;

  console.log(discoverUsers, "discoverusers form home");
  const dummyData = [
    {
      reviews: "12 Reviews",
      img: "/man1.png",
      name: "Andrew Willson",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, deleniti? Lorem, ipsum dolor. ipsum dolor.",
    },
    {
      reviews: "12 Reviews",
      img: "/man2.png",
      name: "Andrew Willson",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, deleniti? Lorem, ipsum dolor. ipsum dolor.",
    },
    {
      reviews: "12 Reviews",
      img: "/man1.png",
      name: "Andrew Willson",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, deleniti? Lorem, ipsum dolor. ipsum dolor.",
    },
  ];

  useEffect(() => {
    console.log(discoverUsers);
    // setSignupSuccess(SignupResponse);
    dispatch(HomeActions.UserProfile());
    dispatch(HomeActions.DiscoverUsers());
  }, []);
  console.log("=========>Discver Users", discoverUsers);

  Geocode.setApiKey("AIzaSyCO-DFYDJuGNIR5Ac-jIfBWG672fLYeP4s");
  Geocode.setLanguage("en");
  Geocode.setRegion("es");
  Geocode.setLocationType("ROOFTOP");
  Geocode.enableDebug();
  Geocode.fromLatLng("48.8583701", "2.2922926").then(
    (response) => {
      const address = response.results[0].formatted_address;
      console.log("xxxxxxxxxxxxx", address);
    },
    (error) => {
      console.error("--------->", error);
    }
  );
  return (
    <div className="bg-white ">
      <Nav active="Home" />
      {/* content here */}
      <div className="max-w-6xl mx-auto mt-10 ">
        <div className="flex justify-between">
          <h1 className="px-2">
            <span className="text-2xl font-strongg md:text-4xl">
              Discover Users
            </span>
          </h1>
          <div className="flex">
            <p className="items-center hidden mr-8 md:flex ">
              <LocationMarkerIcon className="w-6 h-6 text-[#E9813B] mr-2" />
              <span className="text-[#42526E] font-normall">
                Waddington, EN1, London
              </span>
            </p>
            <p
              className="flex items-center px-4 py-2 bg-[#FCEDE4] rounded-tl-lg rounded-bl-lg md:rounded-[40px] justify-center"
              onClick={() => router.push("/search")}
              id="mapView"
            >
              <div className="relative w-[20px] mr-2 h-[18px]  text-[#E9813B] ">
                <Image
                  src="/mapview.png"
                  alt="infoImg"
                  layout="fill"
                  objectfit="contain"
                />
              </div>
              <span className="text-[#42526E] font-normall">Map View</span>
            </p>
          </div>
        </div>

        {/* all small cards */}
        <div className="flex flex-wrap justify-around mt-10 mb-10 xl:justify-start md:mb-2">
          {RealData?.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  console.log("users data modal state here", item);
                  setUsersData(item);
                  router.push("/person");
                }}
                className="px-2 py-4 xl:mx-5 max-w-[340px] mb-4 bg-white shadow-[0_5px_30px_-13px_rgba(0,0,0,0.3)] flex justify-between min-h-[100px] items-center rounded-lg cursor-pointer"
              >
                <div className="relative flex-grow sm:mt-0 mt-0  max-w-[100%] w-[92px] h-[92px]  min-w-[92px]">
                  <Image
                    src={imageBaseUrl + item?.Media?.Path}
                    layout="fill"
                    objectfit="cover"
                    className="rounded-xl"
                  />
                </div>
                <div className="ml-2 sm:min-w-[225px] min-w-[190px]">
                  <p className="text-[#E9813B] text-[12px]">
                    {item?.ReviewCount} Reviews
                  </p>
                  <h2 className="my-[2px] text-lg font-mediumm line-clamp-1 text-[#0E134F]">
                    {item?.FullName}
                  </h2>
                  <p className="text-[12px] text-[#42526E] opacity-70 line-clamp-3">
                    {item?.About}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <button
        onClick={() => router.push("/search")}
        className="fixed px-4 py-2 font-semibold uppercase bg-gray-200 rounded-lg lg:left-6 lg:bottom-4 hover:bg-gray-300 left-2 bottom-11 xl:bottom-8"
      >
        Back
      </button> */}
      <Notifications />
    </div>
  );
};

export default Home;
