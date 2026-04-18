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
        style={{ background: `url(${banner}) center/cover no-repeat`,height:'100%',width:'100%' }}
      ></div>
    </div>
  );
}
