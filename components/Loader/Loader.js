import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        // backgroundColor: "red",
        // position: "absolute",
        // top: 0,
        // left: 0,
        // right: 0,
        // bottom: 0,
        // zIndex: 100,
      }}
      className="bg-opacity-60 bg-slate-500 z-50"
    >
      {/* <div
        style={{
          position: "absolute",
          backgroundColor: "#ffffff00",
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          opacity: 0.2,
          // border: "2px solid red",
          zIndex: 5,
        }}
      ></div> */}
      <div
        style={{
          display: "flex",
          // flex: 1,
          justifyContent: "center",
          alignItems: "center",
          zIndex: 99,
          position: "absolute",
          alignSelf: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <ClipLoader color="#ED974B" loading={true} size={50} />
      </div>
    </div>
  );
};

export default Loader;
