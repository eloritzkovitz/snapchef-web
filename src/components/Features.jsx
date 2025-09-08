"use client";
import React from "react";
import Image from "next/image";
import features from "../data/features";

export default function Features() {
  return (
    <section className="w-full max-w-6xl mx-auto px-2 sm:px-4 py-12">
      <div className="flex flex-col gap-10">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col md:flex-row-reverse items-center p-6 md:p-10 gap-6 md:gap-12 w-full"
          >
            <div className="flex-shrink-0">
              <div className="border-4 border-black rounded-[2.5rem] bg-black p-2 flex items-center justify-center shadow-lg" style={{ width: 260, height: 520 }}>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={240}
                  height={500}
                  className="rounded-[2rem] object-cover"
                  priority={feature.id === 1}
                  style={{ width: "240px", height: "500px" }}
                />
              </div>
            </div>
            <div className="flex-1 w-full">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-berlin">
                {feature.title}
              </h2>
              <p className="text-lg md:text-xl text-black/90 font-inter">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}