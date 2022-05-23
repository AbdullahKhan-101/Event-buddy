import React from "react";
import Nav from "./Nav";
import LeftSettingBar from "./LeftSettingBar";
import { useRouter } from "next/router";
import RequestInvitionComponent from "./RequestInvitionComponent";
import Notifications from "./Notifications";

const RequestInvitaions = () => {
  const router = useRouter();

  return (
    <div>
      <Nav active="settings" />
      <div className="p-2 mx-auto mt-0 max-w-7xl md:mt-5 "></div>
      <div className="flex flex-wrap mx-auto justify-evenly max-w-7xl ">
        <div className="flex-grow md:max-w-[410px] bg-white hidden md:block">
          <LeftSettingBar />
        </div>

        <div className="md:max-w-[700px]  flex-grow bg-white ">
          <RequestInvitionComponent />
        </div>
      </div>
      <Notifications />
    </div>
  );
};

export default RequestInvitaions;
