import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cast & Crew | Apprehension Play - Meet the Team",
    description: "Meet the talented cast and crew of Apprehension: Jennymarie Jemison, Jeff Mills, Michelle Keffer, Brent Werzner, and more. Directed by Sonnet Blanton, written by L.B. Deyo.",
    openGraph: {
        title: "Cast & Crew | Apprehension Play - Meet the Team",
        description: "Meet the talented cast and crew of Apprehension, featuring award-winning Austin theatre artists.",
    },
};

export default function CastCrew() {
    return (
        <div className="relative w-full min-h-screen">
            {/* Full-bleed background image */}
            <div className="absolute inset-0 w-full h-full bg-cover bg-top z-0" style={{ backgroundImage: 'url(/img/apprehension-poster-concept-4.jpg)', backgroundSize: 'cover' }} />
            {/* Overlay */}
            <div className="absolute inset-0 w-full h-full bg-[#070C17]/15 z-10" />
            {/* Constrained content */}
            <div className="relative z-20 w-full max-w-7xl mx-auto space-y-12 pt-20 pb-16 text-left px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <section className="space-y-4 text-left">
                    <div className="relative w-full max-w-max">

                        <h1 className="text-6xl md:text-8xl  text-white mt-6 md:mt-5 inline-block underline decoration-dashed decoration-1 underline-offset-8 decoration-[#BEB58F]" style={{ textShadow: "1px 2px 4px rgba(0,0,0,0.9)" }}>
                            Cast & Crew
                        </h1>
                    </div>
                    <div className="w-9xl">
                        <p className="text-[#B1A886] text-2xl md:text-7xl rotate-180 select-none" style={{ textShadow: "1px 2px 4px rgba(0,0,0,0.9)" }}>What if all we see or seem is but a dream within a dream?</p>
                    </div>


                </section>

                {/* Masonry Cast & Crew Grid */}
                <section className="mt-12">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                        <div className=" mb-8 break-inside-avoid bg-[#070C17]/50 rounded-lg shadow-lg p-6 flex flex-col items-start">
                            <h2 className="text-2xl  text-white mb-2 text-left">Jennymarie Jemison, "Ava"</h2>
                            <img src="/img/castandcrew/jennymarie.jpeg" alt="Jennymarie Jemison as Ava in Apprehension play" className="w-full h-auto max-w-xs rounded-md mb-3 object-cover" />
                            <p className="text-[#cdc49b] text-lg text-left">Jennymarie's last theatrical appearance was in The Hidden Room's <i>The Rover</i> in 2019, but she has remained active in the world of independent film. Recent credits include <i>Wüm</i>, which premiered at the 2023 SXSW film festival, and she portrayed Texas suffragist Minnie Fisher Cunningham in the PBS documentary <i>Citizens at Last</i>. She is known for her creative direction & graphic design, which is currently on display at Austin Bergstrom international airport's South Terminal, as well as her vibrant & influential gardening endeavor, Joy Max Garden. Her short film <i>Quiet Girl's Guide to Violence</i>, premiered at Fantastic Fest in 2012 & made history as the first narrative film on the Steam network. When not on stage or screen, you Jenny can be found in her garden, regularly documented through her well-followed & popular @jmjgrows IG account.</p>
                        </div>
                        <div className=" mb-8 break-inside-avoid bg-[#070C17]/50 rounded-lg shadow-lg p-6 flex flex-col items-start">
                            <h2 className="text-2xl  text-white mb-2 text-left">Jeff Mills, "Dr. Wozis"</h2>
                            <img src="/img/castandcrew/mills.jpeg" alt="Jeff Mills as Dr. Wozis in Apprehension play" className="w-full h-auto max-w-xs rounded-md mb-3 object-cover" />
                            <p className="text-[#cdc49b] text-lg text-left mb-2">Jeff Mills is an award-winning theater artist who has rambled across the Austin theatre scene for the last 25 years. He has worked with the Rude Mechs, SVT, Physical Plant, Fusebox, Zach Scott, Refraction Arts, the Siti Company and many more. Out of St Edwards, he cut his teeth in the improv/sketch scene as a founding member of Fatbuckle & Think Tank, moved to NYC to work with the Muppets, and then returned to Austin as a producer, director, actor and sound designer. Notable credits include <i>The Assumption, Fixing King John, Roe, Everything is Established, Three, Spacestation1985, Fixing Troilus and Cressida,</i> and <i>Hotel Vanya</i>. In 2018, Jeff received the distinguished John Bustin Award for Conspicuous Versatility from the Austin Critics Table.</p>
                        </div>
                        <div className=" mb-8 break-inside-avoid bg-[#070C17]/50 rounded-lg shadow-lg p-6 flex flex-col items-start">
                            <h2 className="text-2xl  text-white mb-2 text-left">Brent Werzner, "Joe"</h2>
                            <img src="/img/castandcrew/werzner-pic.jpg" alt="Brent Werzner as Joe in Apprehension play" className="w-full h-auto max-w-xs rounded-md mb-3 object-cover" />
                            <p className="text-[#cdc49b] text-lg text-left">Brent Werzner is an actor who has worked and performed professionally with major motion picture, television, and interactive media studios, including A24, Netflix, NBC, CBS, Universal and Rockstar Games. Brent is an alumni of Saint Edward's University, in Austin, TX, and is a long-standing member of both the Screen Actors Guild (SAG) and Actor's Equity Association (AEA). He is known for his roles in critically acclaimed films <i>Green Room</i> (2015) and <i>Blue Ruin</i> (2013), as well as in CBS' <i>Blue Bloods</i>, and Netflix's <i>On My Block</i>. Theatrically, he has worked with the renowned SITI Company and director Anne Bogart, debuting the role of Poseidon in the <i>Trojan Women</i> (After Euripides) at the Getty Villa in Los Angeles and the Harvey Theatre in New York City. Brent also performed the title role in Euripides' <i>Herakles</i>; touring internationally through Greece, and at BAM's Fisher Stage in Brooklyn, NY.</p>
                        </div>
                        <div className=" mb-8 break-inside-avoid bg-[#070C17]/50 rounded-lg shadow-lg p-6 flex flex-col items-start">
                            <h2 className="text-2xl  text-white mb-2 text-left">Justin Smith, "Charles"</h2>
                            <img src="/img/castandcrew/justin-smith.jpg" alt="Justin Smith as Charles in Apprehension play" className="w-full h-auto max-w-xs rounded-md mb-3 object-cover" />
                            <p className="text-[#cdc49b] text-lg text-left mb-2">Justin Smith is an actor and musician who last appeared in Jarrott Production's “Dial M for Murder” and will appear in Ground Floor Theatre's “Amy and the Orphans” in August. A lifelong musician; Justin has performed and recorded as a bass player, songwriter, and singer in Austin for many years. Other recent theatrical credits include Austin Shakespeare's “Jane Eyre” and Archive Theatre's “Three Musketeers”.</p>
                        </div>



                        <div className=" mb-8 break-inside-avoid bg-[#070C17]/50 rounded-lg shadow-lg p-6 flex flex-col items-start">
                            <h2 className="text-2xl  text-white mb-2 text-left">Michelle Keffer, "Charlotte"</h2>
                            <img src="/img/castandcrew/michelle-keffer.jpg" alt="Michelle Keffer as Charlotte in Apprehension play" className="w-full h-auto max-w-xs rounded-md mb-3 object-cover" />
                            <p className="text-[#cdc49b] text-lg text-left mb-2">Michelle is an actor, emcee, producer and writer that has been performing on various Austin stages for 20 years. Before her decade-long hiatus from traditional theatre, she worked with Hyde Park Theatre, Paper Chairs, Breaking String and Pollyanna Theatre Company, among others. She was a producer, writer and actor in the variety/sketch comedy show <i>Industry Night</i>, and is currently the emcee and co-producer of Natalie George Productions' Cabaret.</p>
                        </div>


                        <div className="mb-8 break-inside-avoid bg-[#070C17]/50 rounded-lg shadow-lg p-6 flex flex-col items-start">
                            <h2 className="text-2xl  text-white mb-2 text-left">Christopher Shea, producer</h2>
                            <img src="/img/castandcrew/shea.jpg" alt="Christopher Shea, producer of Apprehension play" className="w-full h-auto max-w-xs rounded-md mb-3 object-cover" />
                            <p className="text-[#cdc49b] text-lg text-left"> Christopher Shea is a multifaceted producer/director in the world of independent film, theater, and television. His impressive roster of projects includes acclaimed films such as <i>Lousy Carter</i>, which premiered at the Locarno Film Festival, the acclaimed Rooster Teeth web series <i>Arizona Circle</i>, and the PBS documentary series about stand up comedy in Austin, Texas called <i>Stand Up Empire</i>. As a producer and director based in Austin, Texas, Chris has helmed productions for Netflix, Apple TV, Discovery, A&E, and TLC. Chris' theatrical work has recently been for the Alchemy Theater, and includes <i>Good People</i>, <i>A Christmas Memory</i>, <i>Mack & Mabel</i>, <i>The Virgin Trial</i>, and most recently the critically acclaimed <i>Pipeline</i>.</p>
                        </div>
                        <div className=" mb-8 break-inside-avoid bg-[#070C17]/50 rounded-lg shadow-lg p-6 flex flex-col items-start">
                            <h2 className="text-2xl  text-white mb-2 text-left">Erica Heidepriem, "Lisa"</h2>
                            <img src="/img/castandcrew/erica-portrait.jpg" alt="Erica Heidepriem as Lisa in Apprehension play" className="w-full h-auto max-w-xs rounded-md mb-3 object-cover" />
                            <p className="text-[#cdc49b] text-lg text-left mb-2">Erica Heidepriem is an actor, writer, and creative collaborateur based in Austin, Texas, known for her vibrant comedic projects spanning two decades in film and television. Working both behind and in front of the camera, she has contributed to numerous projects that showcase her versatile talent. While her last stage performance was over ten years ago, she recently returned to the theater world, joining the team at Zach Scott Theatre at the helm of hospitality and patron experience.</p>
                        </div>

                        <div className="mb-8 break-inside-avoid bg-[#070C17]/50 rounded-lg shadow-lg p-6 flex flex-col items-start">
                            <h2 className="text-2xl  text-white mb-2 text-left">Sonnet Blanton, director</h2>
                            <img src="/img/castandcrew/sonnet.jpg" alt="Sonnet Blanton, director of Apprehension play" className="w-full h-auto max-w-xs rounded-md mb-3 object-cover" />
                            <p className="text-[#cdc49b] text-lg text-left">Sonnet Blanton is an award-winning theatre artist living in Austin, Texas. In her 20-plus year career here as a director, producer, writer, and performer she has worked with Salvage Vanguard Theater, Paper Chairs, Scriptworks, Glass Half Full Theatre, Fusebox Festival, Ariel Dance Theatre, and Grackle Jack.</p>
                        </div>
                        <div className="mb-8 break-inside-avoid bg-[#070C17]/50 rounded-lg shadow-lg p-6 flex flex-col items-start">
                            <h2 className="text-2xl  text-white mb-2 text-left">L.B. Deyo, playwright</h2>
                            <img src="/img/castandcrew/lb-pipe-cropped.jpg" alt="L.B. Deyo, playwright of Apprehension" className="w-full h-auto max-w-xs rounded-md mb-3 object-cover" />
                            <p className="text-[#cdc49b] text-lg text-left">L.B. Deyo is the author of <i>Invisible Frontier: Exploring the tunnels, ruins & rooftops of hidden New York</i> and several other books. He's acted in such Austin plays as <i>The Intergalactic Nemesis</i> and <i>Dance, Cupcake, Dance</i>. <i>Apprehension</i> is his first work as a playwright.</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
} 