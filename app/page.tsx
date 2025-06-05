"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function AnimatedSlideIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay]);
  return (
    <span
      className={animate ? "animate-slide-in-left" : "pre-slide-in"}
      style={animate ? {} : { display: "inline-block", transform: "translateX(-100vw)" }}
    >
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-top bg-no-repeat z-0" style={{ backgroundImage: 'url(/img/apprehension-bg-red.jpg)' }} />
      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full bg-[#070C17]/15 z-10" />
      {/* Constrained content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto space-y-12 pt-20 pb-16 text-left px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="space-y-4 text-left">
          <div className="relative w-full max-w-max">
            <p className="text-2xl mt-6 md:mt-14 md:text-4xl text-right text-[#BEB58F] ml-auto flex gap-8 hidden" style={{ textShadow: "1px 2px 4px rgba(0,0,0,0.9)" }}>
              <AnimatedSlideIn delay={0.4}>Jennymarie Jemison</AnimatedSlideIn>
              <AnimatedSlideIn delay={0.2}>Jeff Mills</AnimatedSlideIn>
              <AnimatedSlideIn delay={0}>Michelle Keffer</AnimatedSlideIn>
            </p>
            <h1 className="text-6xl md:text-9xl lg:text-9xl text-white mt-6 md:mt-5 inline-block underline decoration-dashed decoration-1 underline-offset-8 decoration-[#BEB58F] animate-fade-in" style={{ textShadow: "1px 2px 4px rgba(0,0,0,0.9)" }}>
              Apprehension
            </h1>
            <p className="text-2xl md:text-4xl text-white text-right ml-auto opacity-0 animate-fade-in" style={{ textShadow: "1px 2px 4px rgba(0,0,0,0.9)", animationDelay: '0.6s' }}>
              A play by L.B. Deyo
            </p>
          </div>
          <div className="w-9xl opacity-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <p className="text-[#C42C23] text-2xl md:text-7xl rotate-180" style={{ textShadow: "1px 2px 4px rgba(0,0,0,0.9)" }}>Nothing is real and everything is permissible.</p>
          </div>
          <div className="flex flex-col md:flex-row opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="p-5   border-r border-t border-[#BEB58F] md:max-w-[50%] text-[#cdc49b] text-2xl md:text-3xl mb-0 " style={{ textShadow: "1px 2px 4px rgba(0,0,0,0.9)" }} >

              <p className="md:my-2">
                Directed by Sonnet Blanton
              </p>
              <p className="md:my-2">
                Produced by Christopher Shea
              </p>

            </div>
            <div className="p-5  border-b border-dashed border-[#BEB58F] md:max-w-[50%] text-[#cdc49b] text-2xl md:text-3xl" style={{ textShadow: "1px 2px 4px rgba(0,0,0,0.9)" }}>

              <p className="md:my-2">
                Oct. 9-Nov. 1, Thurs-Sat, 7:30pm
              </p>
              <p className="md:my-2">
                Hyde Park Theatre, Austin, Texas
              </p>
            </div>
          </div>

          <div className="flex justify-start gap-4 hidden">
            <Link
              href="/about"
              className="bg-[#b24630] text-white px-6 py-3 rounded-lg hover:bg-[#953925] transition-colors shadow-xl drop-shadow-2xl"
            >
              Learn More
            </Link>
            <Link
              href="/media"
              className="border border-[#b24630] text-[#b24630] px-6 py-3 rounded-lg hover:bg-[#f5e7e3] transition-colors shadow-xl drop-shadow-2xl"
            >
              Watch Trailer
            </Link>
          </div>
        </section>


      </div>
    </div>
  );
}
