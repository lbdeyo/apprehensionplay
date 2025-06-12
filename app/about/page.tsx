import Image from "next/image";
export default function About() {
    return (
        <div className="relative w-full min-h-screen">
            {/* Full-bleed background image */}
            <div className="absolute inset-0 w-full h-full bg-cover bg-top bg-no-repeat z-0" style={{ backgroundImage: 'url(/img/home-bg.jpg)' }} />
            {/* Overlay */}
            <div className="absolute inset-0 w-full h-full bg-[#070C17]/15 z-10" />
            {/* Constrained content */}
            <div className="relative z-20 w-full max-w-7xl mx-auto space-y-12 pt-20 pb-16 text-left px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <section className="space-y-4 text-left">
                    <div className="relative w-full max-w-max">
                        <h1 className="text-6xl md:text-7xl  text-white mt-6 md:mt-5 inline-block " style={{ textShadow: "1px 2px 4px rgba(0,0,0,0.9)" }}>
                            Are you sure you want to know?
                        </h1>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className="p-5 border-r border-t border-[#BEB58F] md:max-w-[70%] text-white text-2xl md:text-3xl mb-0" style={{ textShadow: "1px 2px 4px rgba(0,0,0,0.9)" }}>
                            <p className="md:my-2">
                                <i>Apprehension</i> is a psychological thriller set in a world where the past falters, reality shifts, and the truth is shrouded in deceit. Joe Dempsey struggles to piece together his past, haunted by fragments just beyond recall.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="w-full md:max-w-[50%] p-5 bg-[#a7a082] text-black text-lg"><h1 className="text-2xl">ACKNOWLEDGMENT OF PSYCHOLOGICAL RISK AND WAIVER OF LIABILITY</h1>

                    <p>By accessing, viewing, engaging with, or otherwise exposing oneself to any portion of the website, marketing materials, script excerpts, media assets, or live performances related to the theatrical production <i>Apprehension</i> (hereinafter “the Work”), the undersigned (hereinafter “the Participant”) hereby affirms, acknowledges, and agrees to the following:</p>
                    <ol className="list-decimal list-inside">
                        <li><strong>Voluntary Participation:</strong>
                            <p>The Participant acknowledges that engagement with <i>Apprehension</i> is entirely voluntary and may involve exposure to content of an intense, disturbing, disorienting, or otherwise provocative nature, including but not limited to themes of paranoia, cult behavior, psychological dissolution, moral ambiguity, and metaphysical dread.</p></li>
                        <li><strong>Assumption of Risk:</strong>
                            <p>The Participant knowingly and voluntarily assumes full responsibility for any and all physiological, emotional, philosophical, spiritual, or epistemological consequences that may result from such engagement. These may include, but are not limited to: elevated heart rate, persistent unease, vivid dreams of a troubling or revelatory nature, erosion of foundational beliefs, distrust of familiar persons, existential crisis, or the overwhelming sensation that something is “not quite right.”</p></li>
                        <li><strong>Release of Liability:</strong>
                            <p>The Participant hereby releases and forever discharges the creators, producers, performers, directors, designers, ushers, ticket vendors, web developers, janitorial staff, and any persons living or dead tangentially associated with the Work from any and all claims, liabilities, damages, or complaints, whether real or imagined, arising from or related to their participation.</p></li>
                        <li><strong>No Remedies Guaranteed:</strong>
                            <p>The Participant understands that no therapeutic relief, cathartic resolution, comforting denouement, or narrative closure is either promised or implied. Prolonged engagement with the Work may result in sustained emotional ambiguity or the deepening of pre-existing anxieties.</p></li>
                        <li><strong>Indemnification:</strong>
                            <p> The Participant agrees to indemnify and hold harmless all aforementioned parties from any claims brought forth by third parties, including but not limited to concerned friends, romantic partners, therapists, or spiritual advisors, arising from behavioral, rhetorical, or philosophical changes observed in the Participant subsequent to exposure.</p></li>
                    </ol>

                    <p className="mt-4">By attending a performance of <i>Apprehension</i> or otherwise proceeding past this point, the Participant certifies that they have read, understood, and agreed to the above, and acknowledges that their reality may not be returned in its original condition.</p>
                </div>
            </div>
        </div >
    );
} 