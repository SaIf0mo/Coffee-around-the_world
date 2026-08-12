import React from "react";
import { motion } from "framer-motion";
import banner from "../../Assets/coffee-cover.jpg";
import appStore from "../../Assets/app_store.png";
import playStore from "../../Assets/play_store.png";

export default function AppBanner() {
  return (
    <div className="container mx-auto my-14">
      <div
        className={`sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl`}
        style={{
          background: `url(${banner}) center/cover no-repeat`,
          height: "100%",
          width: "100%",
        }}
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <motion.h1  initial={{opacity:0 , y:100}} whileInView={{opacity:1 , y:0}} transition={{type:'spring',stiffness:100,damping:10,delay:.2}}
            className="text-2xl text-center sm:text-4xl font-semibold">
              Download the app
            </motion.h1>
            <motion.p  initial={{opacity:0 , y:100}} whileInView={{opacity:1 , y:0}} transition={{type:'spring',stiffness:100,damping:10,delay:.3}}
            className="text-center sm:px-20">
              Lorem sit amet consectetur, adipisicing elit. Saepe maxime itaque
              repellat in voluptate tenetur earum blanditiis.
            </motion.p>
            {/* images links */}
            <div className="flex items-center  justify-center gap-4">
              <motion.a initial={{opacity:0 , x:-100}} whileInView={{opacity:1 , x:0}} transition={{type:'spring',stiffness:100,damping:10,delay:.2}} href="" className="max-w-[150px] cursor-pointer transition hover:scale-102 sm:max-w-[120px] md:max-w-[200px]"><img src={playStore} alt="" /></motion.a>
              <motion.a initial={{opacity:0 , x:100}} whileInView={{opacity:1 , x:0}} transition={{type:'spring',stiffness:100,damping:10,delay:.2}} href="" className="max-w-[150px] cursor-pointer transition hover:scale-102 sm:max-w-[120px] md:max-w-[200px]"><img src={appStore} alt="" /></motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
