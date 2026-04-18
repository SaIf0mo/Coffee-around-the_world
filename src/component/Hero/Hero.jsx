import React, { useState } from "react";
import Navbar from "./Navbar";
import "../../index.css";
import bgimage from "../../Assets/bg-slate.png";
import MainImg from "../../Assets/black.png";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const bgImg = {
  backgroundImage: `url(${bgimage})`,
  backgroundSize: "cover",
  backgroundposition: "center",
  backgroundRepeat: "no-repeat",
};
export default function Hero() {
  const [sideBar, setSideBar] = useState(false);
  return (
    <main style={bgImg}>
      <section className="min-h-[750px] w-full">
        <div className="container mx-auto">
          {/* Navbar section */}
          <Navbar sideBar={sideBar} setSideBar={setSideBar} />
          {/* Hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            <div className="text-orange-100 mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                className="text-7xl font-bold leading-tight ml-14"
              >
                Blvck Tumbler
              </motion.h1>
              {/*  */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.2,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl font-bold">Blck lifeStyle Lovers,</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam, quisquam animi adipisci sit, consectetur sapiente,
                    molestiae suscipit delectus veritatis molestias a. Sit,
                    omnis doloremque? Vitae amet dolorum mollitia maiores unde.
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[200px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            {/* Main Image */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.5,
                }}
                src={MainImg}
                alt=""
                className="relative z-40 h-[600px] w-[700px] img-shadow"
              />
              {/* Orang circle Ring */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                className="h-[180px] w-[180px] absolute top-22 -right-16 border-[18px] border-orange-300 rounded-full z-20"
              ></motion.div>
              {/* big text section */}
              <div className="absolute -top-18 left-[300px] z-10">
                <h1 className="text-[140px] scale-150 font-bold text-gray-800/40 leading-none">
                  Blvck Lovers
                </h1>
              </div>
            </div>
            {/* third section  */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.4,
              }}
              className="relative top-16 mt-5 ml-5"
            >
              <div className="relative z-10 space-y-4">
                <h1 className="text-2xl text-orange-100">The Design,</h1>
                <h1 className="text-sm  opacity-55 text-white/70 leading-loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, quisquam animi adipisci sit, consectetur sapiente,
                  molestiae suscipit delectus veritatis molestias a. Sit, omnis
                  doloremque? Vitae amet dolorum mollitia maiores unde.
                </h1>
                <div className="absolute top-1 -right-7 w-[250px] h-[160px] bg-black/15"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Menu side section */}
      {sideBar && (
        <motion.section
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "keyframes",
            delay: 0.2,
          }}
          className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-orange-300 to-orange-500/80 backdrop-blur-sm z-10 shadow-lg shadow-zinc-600 rounded-l-md"
        >
          <div className="w-full h-full flex flex-col justify-center items-center gap-6 text-white">
            {/* line  */}
            <div className="w-0.5 h-[120px] bg-white"></div>
            {/* Social icons  */}
            {/* <div className=""> */}
            <div className="inline-block p-2 rounded-full cursor-pointer border border-white hover:text-blue-800">
              <FaFacebookF className="text-2xl" />
            </div>
            <div className="inline-block p-2 rounded-full cursor-pointer border border-white hover:text-sky-400">
              <FaTwitter className="text-2xl" />
            </div>
            <div className="inline-block p-2 rounded-full cursor-pointer border border-white hover:text-orange-600">
              <FaInstagram className="text-2xl" />
            </div>
            {/* </div> */}
            <div className="w-0.5 h-[120px] bg-white"></div>
          </div>
        </motion.section>
      )}
    </main>
  );
}
