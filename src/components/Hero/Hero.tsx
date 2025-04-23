"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full bg-[url('/assets/sfondo_legno.png')] bg-cover bg-center overflow-hidden">
      {/* Overlay scuro */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Parte sinistra: immagine */}
      <div className="relative flex-1 min-w-[50%] z-10">
        <Image
          src="/assets/pizzaHero.png"
          alt="Italian food plate"
          fill
          priority
          className="object-contain object-left-top scale-[1.4] origin-top-left"
        />
      </div>

      {/* Parte destra: logo + testo */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 flex flex-1 flex-col justify-center px-16 text-white"
      >
        <div className="flex flex-col items-start gap-4 mb-8">
          {/* Logo */}
          <div className="w-[300px] h-[240px]">
            <Image
              src="/assets/logo.png"
              alt="PAN DI 20 icon"
              width={300}
              height={240}
              className="w-full h-auto"
            />
          </div>

          {/* Testo sotto il logo */}
          <div className="font-semibold text-sm tracking-[0.15em] uppercase text-white">
            THE ITALIAN FOOD{" "}
            <span className="ml-2 font-bold text-white">
              <span className="inline-block border border-white rounded-full px-[0.4em] py-[0.1em] text-[0.85em] align-middle mr-[0.15em]">
                r
              </span>
              EVOLUTION
            </span>
          </div>
        </div>

        {/* Titolo principale */}
        <h1 className="text-4xl font-light leading-snug mt-4 text-white">
          Bring the new <strong className="font-bold">Italian</strong> style to your venue
          <span className="block mt-6 w-[60px] h-[4px] bg-amaranto rounded"></span>
        </h1>
      </motion.div>
    </section>
  );
}
