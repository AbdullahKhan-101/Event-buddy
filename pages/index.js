import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
// import Script from "next/script";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("login");
    }, 3000);
  }, []);
  return (
    <div>
      <Head>
        <title>Event Buddy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/appicon.png" />
      </Head>
      <div>
        <div className="relative">
          <div className="relative w-screen h-screen overflow-hidden ">
            <Image
              src="/backpc.png"
              alt="infoImg"
              layout="fill"
              objectfit="cover"
            />
          </div>
          <div className="absolute top-0 left-0 right-0 items-center justify-center hidden w-screen h-screen md:flex">
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
              className="relative h-64 w-80"
            >
              <Image
                src="/splashlogopc.png"
                alt="infoImg"
                layout="fill"
                objectfit="contain"
              />
            </div>
          </div>
          <div className="absolute top-0 left-0 right-0 flex items-center justify-center w-screen h-screen md:hidden">
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1300"
              className="relative h-60 w-72"
            >
              <Image
                src="/splashlogo.png"
                alt="infoImg"
                layout="fill"
                objectfit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}