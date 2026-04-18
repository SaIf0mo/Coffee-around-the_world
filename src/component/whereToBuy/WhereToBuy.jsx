import React from "react";
import Map from "../../Assets/world-map.png";
import "../../index.css";
import {motion } from 'framer-motion'

export default function WhereToBuy() {
  return (
    <div className="container mx-auto my-36">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
        {/* Form Section */}
        <motion.div initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{delay:.6}} className="sp-y-8">
          <h1 className="text-4xl font-bold font-serif text-gray-800 ">
            Buy our products from anywhere
          </h1>
          <div className="flex items-center gap-2 mt-3">
            <input
              type="text"
              placeholder="name..."
              className="inputStyle w-full"
            />
            <input
              type="email"
              placeholder="email..."
              className="inputStyle w-full lg:w-[150px]"
            />
          </div>
          <div className="flex items-center gap-2 mt-3">
            <input
              type="text"
              placeholder="country..."
              className="inputStyle w-full lg:w-[150px]"
            />
            <input
              type="text"
              placeholder="ZipCode..."
              className="inputStyle w-full"
            />
          </div>
          <button className="btn-primary">  send order </button>
        </motion.div>
        {/* Map Section */}
        <motion.div  initial={{opacity:0, x:100}} whileInView={{opacity:1, x:0}} transition={{delay:.5,type:'spring',damping:10,stiffness:100}}  className="col-span-2">
          <img src={Map} alt="" className="w-full mx-auto" />
        </motion.div>
      </div>
    </div>
  );
}
