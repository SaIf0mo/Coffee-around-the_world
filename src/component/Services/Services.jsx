import React from "react";
import { motion } from "framer-motion";
import c1 from "../../Assets/black.png";
import c2 from "../../Assets/coffee1.png";
import c3 from "../../Assets/coffee3.png";

const Data = [
  {
    img: c1,
    title: "Black Coffee",
    subTitle:
      "Lorem ipsum dolor sit amet  nam consequuntur qui neque repudiandae.",
  },
  {
    img: c3,
    title: "Hot Coffee",
    subTitle:
      "Lorem ipsum dolor sit amet  nam consequuntur qui neque repudiandae.",
  },
  {
    img: c2,
    title: "Cold Coffe",
    subTitle:
      "Lorem ipsum dolor sit amet   nam consequuntur qui neque repudiandae.",
  },
];
const CardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeInOut", type: "spring", duration: 0.4 },
    },
  }

export default function Services() {
  return (
    <div className="container mx-auto my-16 space-y-4">
      {/* header Seaction */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.3,
          }}
          viewport={{ once: false, amount: 0.3 }} //once
          className="text-3xl font-bold text-gray-700"
        >
          Fresh and <span className="text-orange-400">Testy Coffe</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-sm opacity-50"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          ducimus? Libero architecto unde nostrum earum quae hic aut ipsum.
          Eaque nostrum ab voluptates soluta modi.
        </motion.p>
      </div>
      {/* Cards Seaction */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Data.map((serv) => (
          <motion.div
            key={serv.img}
            variants={CardVariant}
            initial="hidden"
            whileInView="visible"
            className="text-center p-4 space-y-4"
          >
            <img
              src={serv.img}
              alt={serv.title}
              className="h-42 w-auto mx-auto duration-300 hover:scale-110 cursor-pointer img-shadow"
            />
            <div className="skew-y-2">
              <h1 className="text-2xl font-bold text-orange-400">
                {serv.title}
              </h1>
              <p className="text-gray-500 font-medium px-1">{serv.subTitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
