import React from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({sideBar,setSideBar}) {
  return (
    <nav className="absolute top-0 left-0 w-full pt-10 z-20 text-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between ">
          {/* logo */}
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-2xl font-semibold uppercase"
          >
            Coders <span className="text-orange-400">Coffe</span>
          </motion.h1>
          {/* menu */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.3,
            }}
            onClick={()=> { setSideBar(!sideBar);console.log(sideBar); }}
          >
            <GiHamburgerMenu className="text-2xl cursor-pointer" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
