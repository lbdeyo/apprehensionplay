import Image from "next/image";
export default function Audition() {
    return (
        <div className="relative w-full min-h-screen">
            {/* Full-bleed background image */}
            <div />
            {/* Overlay */}
            <div className="absolute inset-0 w-full h-full bg-[#070C17]/15 z-10" />
            {/* Constrained content */}
            <div className="relative z-20 w-full max-w-7xl mx-auto space-y-12 pt-20 pb-16 text-left px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <section className="space-t-4 text-left ">
                    <div className="relative w-full max-w-max">
                        <h1 className="text-6xl md:text-7xl  text-white mt-6 md:mt-5 inline-block " style={{ textShadow: "1px 2px 4px rgba(0,0,0,0.9)" }}>
                            Audition for <em>Apprehension</em>
                        </h1>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className="p-5  border-t border-[#BEB58F] md:max-w-[70%] text-white text-2xl md:text-3xl mb-0" style={{ textShadow: "1px 2px 4px rgba(0,0,0,0.9)" }}>
                            <p className="md:my-2">
                                <i>Apprehension</i>, a play running weekends (Thurs-Sat) from October 9th until November 1st, is looking for actors to join the cast.
                            </p>
                            <div className="p-5 m-4 border-[#BEB58F] border-1">
                                <p className="md:my-2">
                                    Auditions to be held:<br></br>
                                    Friday, June 20, 2025 | 2:30 PM - 5:30 PM<br></br>
                                    Saturday, June 21, 2025 | 3:00 PM - 6:00 PM
                                </p>
                                <p className="md:my-2">
                                    Carol Hickey Acting Studio<br></br>
                                    979 Springdale Rd, Suite 114, Austin, TX 78702
                                </p>
                            </div>
                            <p className="md:my-2">
                                <strong>Please bring a headshot and resume.</strong>
                            </p>

                        </div>

                    </div>
                    <h3 className="text-3xl">Audition details</h3>
                    <ul className="list-disc ml-4 p-3 text-2xl ">
                        <li>
                            <p>Auditions will consist of cold readings from the script. Sides will be provided on site.
                            </p></li>
                        <li>
                            <p>Rehearsals begin September 2025. (PAID)</p>
                        </li>
                        <li>
                            <p>Performances run October 9-November 1, 2025 at Hyde Park Theatre, Austin, TX. (PAID)</p>
                        </li>
                        <li>
                            <p>Apprehension is an original work premiering in Austin this fall — we’re seeking bold, emotionally intuitive performers ready to dive into complex characters and layered storytelling.</p>
                        </li>


                    </ul>
                    <p className="text-3xl">To reserve an audition slot or for questions, email:
                        <a href="mailto:Apprehension2025@gmail.com" className="text-blue-500"> Apprehension2025@gmail.com</a>
                        .</p>
                </section>

                <div className="w-full md:max-w-[70%] p-5 bg-[#a7a082] text-black text-lg">
                    <h1 className="text-3xl">Casting  these roles:</h1>

                    <ol className="list-decimal p-3 ">
                        <li><strong>Katie</strong> (15-19, Caucasian, Female)
                            <p>Joe and Ava's teenage daughter. Intelligent, compassionate, and perceptive beyond her years.
                            </p></li>
                        <li><strong>Charles</strong> (37-55, Any Ethnicity/male)
                            <p>Joe and Ava's friend. Married to Lisa. Blunt and appears supportive.</p></li>
                        <li><strong>Lisa</strong> (38-47, Any Ethnicity/female)
                            <p>Joe and Ava's friend. Married to Charles. Outspoken and sometimes sarcastic</p></li>
                        <li><strong>Woman</strong>(30s-50s, Any Ethnicity/female)
                            <p>A mysterious figure whose mood changes from trancelike to explosive and accusatory.</p></li>

                    </ol>
                </div>
                <div className="w-full md:max-w-[70%] p-5 bg-[#cccccc] text-black text-2xl">In Apprehension, Joe's seemingly ordinary mid-life crisis gives way to a surreal unraveling of memory and reality. As he slips further into doubt and dread, those closest to him become entangled in something far more disturbing than personal confusion. A cerebral mystery with emotional and psychological weight.</div>
            </div>
        </div >
    );
} 