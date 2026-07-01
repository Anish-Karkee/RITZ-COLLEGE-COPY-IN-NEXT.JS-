"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import LANDING1 from "../../../public/images/landing1.jpg";
import LANDING2 from "../../../public/images/landing2.jpg";
import LANDING3 from "../../../public/images/landing3.jpg";
import LANDING4 from "../../../public/images/landing4.jpg";
import LANDING7 from "../../../public/images/landing7.jpg";

const images = [LANDING1, LANDING2, LANDING3, LANDING4, LANDING7];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[855px] overflow-hidden bg-black">
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 h-full w-full"
        >
          <Image
            src={images[current]}
            alt={`Hero Image ${current + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 75vw"
            className="h-full w-full object-cover"
            priority={current === 0}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}