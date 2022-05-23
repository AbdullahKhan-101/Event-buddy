import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useRecoilState } from "recoil";
import { loadingState } from "../atoms/modalAtom";

const Loader = () => {
  const [loading, setLoading] = useRecoilState(loadingState);

  return (
    <>
      {loading && (
        <div className="fixed top-0 right-0 bg-white bg-opacity-60 w-[100vw] z-10 h-[100vh] transition-all duration-200 ease-out">
          <div className="flex  flex-col items-center justify-center flex-grow h-[100vh] w-[100vw]">
            <div className="z-20  max-w-[100px] max-h-[100px] flex items-center justify-center mx-auto">
              <ClipLoader color="#ED974B" loading={true} size={50} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
