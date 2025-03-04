"use client";
import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Lookup from "../_data/Lookup";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  const [logoTitle, setLogoTitle] = useState("");

  return (
    <div className="flex items-center mt-24 flex-col gap-5">
      {/* Heading 1 - Fade in first */}
      <motion.h2
        className="text-[#f50541] text-5xl text-center font-extrabold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {Lookup.HeroHeading}
      </motion.h2>

      {/* Heading 2 - Fade in after Heading 1 */}
      <motion.h2
        className="text-5xl text-center font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {Lookup.HeroSubheading}
      </motion.h2>

      {/* Description - Fade in after Heading 2 */}
      <motion.p
        className="text-lg text-gray-500 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {Lookup.HeroDesc}
      </motion.p>

      {/* Input & Button - Fade in after Description */}
      <motion.div
        className="flex gap-6 w-full max-w-2xl mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <input
          className="flex p-3 border rounded-md w-full shadow-md"
          placeholder={Lookup.InputTitlePlaceholder}
          onChange={(event) => setLogoTitle(event?.target.value)}
        />
        <Link href={`/create?title=${encodeURIComponent(logoTitle)}`}>
          <Button className="w-full p-6 bg-[#f50541]">Get Started</Button>
        </Link>
      </motion.div>

      {/* Image - Fade in last */}
      <motion.div
        className="mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Image
          src="/hero-logo-maker.png"
          alt="Hero Section Image"
          width={700}
          height={400}
        />
      </motion.div>
    </div>
  );
}

export default Hero;
