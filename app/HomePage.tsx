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

export default function HomePage() {
    return (
        <div className="relative w-full min-h-screen">
            {/* Full-bleed background image */}
            <div className="absolute inset-0 w-full h-full z-0">
                <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src="/vid/homepage-bg-vid.mp4" type="video/mp4" />
                </video>
            </div>
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
                    {/* <div className="w-9xl opacity-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
                        <p className="text-[#C42C23] text-2xl md:text-7xl rotate-180 select-none" style={{ textShadow: "1px 2px 4px rgba(0,0,0,0.9)" }}>Nothing is real and everything is permissible.</p>
                    </div> */}

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
                                Oct. 9-Nov. 1, Thurs-Sat, 8:00 pm
                            </p>
                            <p className="md:my-2">
                                <a href="https://www.hydeparktheatre.org/" className="hover:underline">Hyde Park Theatre</a>, Austin, Texas
                            </p>
                        </div>
                    </div>
                    <div className="text-white text-xl md:text-2xl md:max-w-[70%]">
                        <p className="opacity-0 animate-fade-in" style={{ animationDelay: '0.9s' }}><i>Apprehension</i> is a paranoid psychological thriller about Joe Dempsey, a man tormented by memory lapses and gnawing doubts about his own past. During a period of emotional collapse, Joe begins to suspect that his wife and friends are not who they seem to be. As his grasp on reality wavers, he struggles to determine whether he's uncovering a horrific truth or falling prey to delusion. Set in a world of shifting loyalties, buried traumas, and eerie disappearances, <i>Apprehension</i> explores the line between paranoia and insight.</p>
                    </div>
                    <div className="md:max-w-[50%] mt-10 border border-white border-2 flex flex-col shadow-lg opacity-0 animate-fade-in">
                        {/* First row: Danger symbol and warning */}
                        <div className="flex flex-row">
                            <div className="border-r-2 border-black p-2 flex items-center ">
                                <Image src="/img/danger-symbol.svg" alt="Warning danger symbol" width={100} height={100} />
                            </div>
                            <div className="text-white p-4 ps-5 flex-1 flex items-center bg-[#a7a082]/80">
                                <p className=" text-4xl  text-black"> WARNING: Risk of Heart Attack, Shock, Death</p>
                            </div>
                        </div>
                        {/* Second row: Additional text */}
                        <div className=" p-4 text-black text-lg border-t-2 border-black bg-[#a7a082]/80">
                            <p className="text-xl  text-black">
                                <i>Apprehension</i> contains extremely disturbing themes and depicts horrifying events. The viewer is advised to proceed with caution. Consult your physician before attending.
                            </p>
                        </div>
                    </div>




                </section>


            </div>
        </div>
    );
} 