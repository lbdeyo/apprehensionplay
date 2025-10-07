import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cast & Crew | Apprehension Play - Meet the Team",
  description:
    "Meet the talented cast and crew of Apprehension: Jennymarie Jemison, Jeff Mills, Michelle Keffer, Brent Werzner, and more. Directed by Sonnet Blanton, written by L.B. Deyo.",
  keywords:
    "Apprehension cast, Jennymarie Jemison, Jeff Mills, Michelle Keffer, Brent Werzner, Sonnet Blanton director, L.B. Deyo playwright, Austin theatre actors",
  openGraph: {
    title: "Cast & Crew | Apprehension Play - Meet the Team",
    description:
      "Meet the talented cast and crew of Apprehension, featuring award-winning Austin theatre artists including Jennymarie Jemison, Jeff Mills, and Michelle Keffer.",
    url: "https://apprehensionplay.com/cast-crew",
    images: [
      {
        url: "/img/cast-crew-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Apprehension Cast & Crew - Austin Theatre Artists",
      },
      {
        url: "/meta-image.jpg",
        width: 1200,
        height: 630,
        alt: "Apprehension Play Cast & Crew",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cast & Crew | Apprehension Play - Meet the Team",
    description:
      "Meet the award-winning Austin theatre artists bringing Apprehension to life at Hyde Park Theatre.",
    images: ["/img/cast-crew-bg.jpg"],
  },
  alternates: {
    canonical: "/cast-crew",
  },
};

export default function CastCrew() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-top z-0"
        style={{
          backgroundImage: "url(/img/cast-crew-bg.jpg)",
          backgroundSize: "cover",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full bg-[#070C17]/15 z-10" />
      {/* Constrained content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto space-y-12 pt-20 pb-16 text-left px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="space-y-4 text-left">
          <div className="relative w-full max-w-max">
            <h1
              className="text-6xl md:text-8xl  text-white mt-6 md:mt-5 inline-block underline decoration-dashed decoration-1 underline-offset-8 decoration-[#BEB58F]"
              style={{ textShadow: "1px 2px 4px rgba(0,0,0,0.9)" }}
            >
              Cast & Crew
            </h1>
          </div>
          <div className="w-9xl">
            <p
              className="text-[#B1A886] text-2xl md:text-7xl rotate-180 select-none"
              style={{ textShadow: "1px 2px 4px rgba(0,0,0,0.9)" }}
            >
              What if all we see or seem is but a dream within a dream?
            </p>
          </div>
        </section>

        {/* Masonry Cast & Crew Grid */}
        <section className="mt-12">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            <div className=" mb-8 break-inside-avoid bg-[#070C17]/70 rounded-lg shadow-lg p-6 flex flex-col items-start">
              <h2 className="text-2xl  text-white mb-2 text-left">
                Brent Werzner, "Joe"
              </h2>
              <img
                src="/img/castandcrew/werzner-pic.jpg"
                alt="Brent Werzner as Joe in Apprehension play"
                className="w-full h-auto max-w-xs rounded-md mb-3 object-cover"
              />
              <p className="text-[#cdc49b] text-lg text-left">
                Brent Werzner is an actor who has worked and performed
                professionally with major motion picture, television, and
                interactive media studios, including A24, Netflix, NBC, CBS,
                Universal and Rockstar Games. Brent is an alumni of Saint
                Edward's University, in Austin, TX, and is a long-standing
                member of the Screen Actors Guild (SAG). He is known for his
                roles in critically acclaimed films <i>Green Room</i> (2015) and{" "}
                <i>Blue Ruin</i> (2013), as well as in CBS' <i>Blue Bloods</i>,
                and Netflix's episodic comedy, <i>On My Block</i>. Theatrically,
                he has worked with the renowned SITI Company and director Anne
                Bogart, debuting the role of Poseidon in the <i>Trojan Women</i>{" "}
                (After Euripides) at the Getty Villa in Los Angeles and the
                Harvey Theatre in New York City. Brent also performed the title
                role in Euripides' <i>Herakles</i>; touring internationally
                through Greece, and at BAM's Fisher Stage in Brooklyn, NY. Brent
                also works as an employment and civil rights paralegal for
                Kaplan Law Firm in Austin. Brent wishes to express his deepest
                gratitude to Elizabeth, his wife and partner, whose love and
                support have made it possible to work on this production.
              </p>
            </div>
            <div className=" mb-8 break-inside-avoid bg-[#070C17]/70 rounded-lg shadow-lg p-6 flex flex-col items-start">
              <h2 className="text-2xl  text-white mb-2 text-left">
                Scarlett Teague, Stage Manager & Costume Designer
              </h2>
              <img
                src="/img/castandcrew/scarlett.jpg"
                alt="Scarlett Teague, stage manager and costume designer of Apprehension"
                className="w-full h-auto max-w-xs rounded-md mb-3 object-cover"
              />
              <p className="text-[#cdc49b] text-lg text-left">
                Scarlett is excited to be a part of Apprehension at Hyde Park
                Theatre. Her previous productions include{" "}
                <i>Spongebob the Musical</i> at Magnolia Musical Theatre
                (Costume Supervisor) and <i>The Play that Goes Wrong</i> at Moe
                and Gene Johnson High School (Director). She is a current
                student at Texas State University.
              </p>
            </div>
            <div className=" mb-8 break-inside-avoid bg-[#070C17]/70 rounded-lg shadow-lg p-6 flex flex-col items-start">
              <h2 className="text-2xl  text-white mb-2 text-left">
                Jessica Cohen, "Katie"
              </h2>
              <img
                src="/img/castandcrew/jessica-cohen-portrait.jpg"
                alt="Jessica Cohen as Katie in Apprehension play"
                className="w-full h-auto max-w-xs rounded-md mb-3 object-cover"
              />
              <p className="text-[#cdc49b] text-lg text-left">
                Jessica Brynn Cohen is an actor, writer, musician, filmmaker,
                and all-around storyteller and performer who has been a part of
                the ATX creative community for much of her life. She has
                appeared in many theatrical productions in Austin and beyond,
                having performed on stages such as The Vortex, City Theatre
                Austin, and Trinity Street Players, her most recent stage role
                being “Little Red” in City Theatre’s <i>Into The Woods</i>. She
                has a background in devising original work, and holds a B. Iden
                Payne for “Outstanding Featured Musical Performance” for her
                work in the 2021 Vortex Summer Youth Theatre. She has worked on
                several films, including Richard Linklater's Netflix original
                <i>Apollo 10 ½</i> (2022), which was featured at SXSW 2022. She
                is an avid singer/songwriter and has released several singles on
                Spotify, with plans to release more music in the near future,
                and several other creative projects currently in the works. You
                can connect with her on Instagram{" "}
                <a href="https://www.instagram.com/jessa.cohen/">
                  @jessa.cohen.
                </a>
                Jessica would like to thank her family for their endless love
                and support.
              </p>
            </div>
            <div className=" mb-8 break-inside-avoid bg-[#070C17]/70 rounded-lg shadow-lg p-6 flex flex-col items-start">
              <h2 className="text-2xl  text-white mb-2 text-left">
                Jeff Mills, "Dr. Wozis"
              </h2>
              <img
                src="/img/castandcrew/mills.jpeg"
                alt="Jeff Mills as Dr. Wozis in Apprehension play"
                className="w-full h-auto max-w-xs rounded-md mb-3 object-cover"
              />
              <p className="text-[#cdc49b] text-lg text-left mb-2">
                Jeff Mills is an award winning theater artist who has rambled
                across the Austin theatre scene for the last 25 years. He has
                worked with the Rude Mechs, SVT, Physical Plant, Fusebox, Zach
                Theater,, Refraction Arts, the Siti Company and many more. Out
                of St Edwards he cut his teeth in the improv/sketch scene as a
                founding member of Fatbuckle & Think Tank, moved to NYC to work
                with the Muppets, and then returned to Austin as a producer,
                director, actor and sound designer. Notable credits include{" "}
                <i>The Assumption</i>, <i>Fixing King John</i>, <i>Roe</i>,{" "}
                <i>Everything is Established</i>, <i>Three</i>,{" "}
                <i>Spacestation1985</i>, <i>Fixing Troilus and Cressida</i>, and{" "}
                <i>Hotel Vanya</i>. In 2018, Jeff received the distinguished
                John Bustin Award for Conspicuous Versatility from the Austin
                Critics Table.
              </p>
            </div>
            <div className=" mb-8 break-inside-avoid bg-[#070C17]/70 rounded-lg shadow-lg p-6 flex flex-col items-start">
              <h2 className="text-2xl  text-white mb-2 text-left">
                Jennymarie Jemison, "Ava"
              </h2>
              <img
                src="/img/castandcrew/jennymarie.jpeg"
                alt="Jennymarie Jemison as Ava in Apprehension play"
                className="w-full h-auto max-w-xs rounded-md mb-3 object-cover"
              />
              <p className="text-[#cdc49b] text-lg text-left">
                Jennymarie Jemison is thrilled to return to the Austin stage
                after last appearing in The Hidden Room's <i>The Rover</i> in
                2019. Since then, she has remained active in independent film,
                with recent credits including <i>Wüm</i> (SXSW 2023) and as
                Texas suffragist Minnie Fisher Cunningham in the PBS documentary
                <i>Citizens at Last</i> (now airing). By day, you can find her
                serving as Creative Director at Zach Theater or (like Ava) in
                her garden. Her online seed shop,{" "}
                <a href="https://www.joymaxjardin.com/">Joy Max Jardín</a>,
                earned her the 2025 Austin Chronicle "Best of Austin" cover. JMJ
                would like to thank L.B. Deyo for writing such a ferocious role
                and trusting her with it, and her husband, Christopher Shea, who
                has worked tirelessly to bring this show to life. Follow her at{" "}
                <a href="https://www.instagram.com/jmjgrows/">@jmjgrows</a> if
                you are now curious about gardening or just want a "Compost the
                Patriarchy" hat.
              </p>
            </div>

            <div className=" mb-8 break-inside-avoid bg-[#070C17]/70 rounded-lg shadow-lg p-6 flex flex-col items-start">
              <h2 className="text-2xl  text-white mb-2 text-left">
                Justin Smith, "Charles"
              </h2>
              <img
                src="/img/castandcrew/justin-smith.jpg"
                alt="Justin Smith as Charles in Apprehension play"
                className="w-full h-auto max-w-xs rounded-md mb-3 object-cover"
              />
              <p className="text-[#cdc49b] text-lg text-left mb-2">
                Justin Smith is an actor and musician who's been a member of
                Austin's creative community for 15(ish) years. Justin moved to
                Austin from Memphis and since has been featured on various
                Austin records over his tenure as a bass player, songwriter and
                singer. As an actor Justin's recent stage credits include Austin
                Shakespeare's <i>Jane Eyre</i>, Jarrot Productions'{" "}
                <i>Dial M for Murder</i> and Ground Floor Theatre's Texas
                premier of <i>Amy and The Orphans</i>. He will next appear back
                at Ground Floor Theatre for their 10th Anniversary production of
                <i>Parade</i>.
              </p>
            </div>

            <div className=" mb-8 break-inside-avoid bg-[#070C17]/70 rounded-lg shadow-lg p-6 flex flex-col items-start">
              <h2 className="text-2xl  text-white mb-2 text-left">
                Michelle Keffer, "Charlotte"
              </h2>
              <img
                src="/img/castandcrew/michelle-keffer.jpg"
                alt="Michelle Keffer as Charlotte in Apprehension play"
                className="w-full h-auto max-w-xs rounded-md mb-3 object-cover"
              />
              <p className="text-[#cdc49b] text-lg text-left mb-2">
                Michelle is an actor, emcee, producer and writer with over 30
                years of on-stage experience. Alongside various on-camera and
                voice-over roles, she has worked with Hyde Park Theatre, Paper
                Chairs, Breaking String and Fusebox Festival, among others. She
                was a producer, writer and actor in the variety/sketch comedy
                show <i>Industry Night</i>, and is currently the emcee and
                co-producer of <i>Natalie George Productions Cabaret</i>.
              </p>
            </div>

            <div className="mb-8 break-inside-avoid bg-[#070C17]/70 rounded-lg shadow-lg p-6 flex flex-col items-start">
              <h2 className="text-2xl  text-white mb-2 text-left">
                Natalie George, lighting designer
              </h2>
              <img
                src="/img/castandcrew/natalie.jpeg"
                alt="Natalie George, lighting designer of Apprehension"
                className="w-full h-auto max-w-xs rounded-md mb-3 object-cover"
              />
              <p className="text-[#cdc49b] text-lg text-left">
                Natalie George is an award winning lighting designer, producer,
                events manager, and artist based in Austin, TX. After studying
                Theater Arts at St. Edward’s University, Natalie began to work
                as a freelance lighting designer and stage manager around Austin
                and beyond. Quickly her design work became her full-time focus,
                designing for Salvage Vanguard Theater, Rude Mechs, Mary Moody
                Northen Theater, The O'Neill Theater Center, and many more. In
                2014 she founded Natalie George Productions, where she now works
                full-time as Executive Director. While she enjoys working
                throughout the US, her love of all things Austin keeps her
                rooted here and affords her the opportunity to use her many
                contacts and resources to collaborate on interesting projects as
                a lighting designer, technical consultant, or event producer.
              </p>
            </div>

            <div className="mb-8 break-inside-avoid bg-[#070C17]/70 rounded-lg shadow-lg p-6 flex flex-col items-start">
              <h2 className="text-2xl  text-white mb-2 text-left">
                Christopher Shea, producer
              </h2>
              <img
                src="/img/castandcrew/shea.jpg"
                alt="Christopher Shea, producer of Apprehension play"
                className="w-full h-auto max-w-xs rounded-md mb-3 object-cover"
              />
              <p className="text-[#cdc49b] text-lg text-left">
                Chris is a multifaceted producer/director in the world of
                independent film, theater, and television. His impressive roster
                of projects includes acclaimed films such as <i>Lousy Carter</i>
                , which premiered at the Locarno Film Festival, the acclaimed
                Rooster Teeth web series <i>Arizona Circle</i>, and the PBS
                documentary series about stand up comedy in Austin, Texas called{" "}
                <i>Stand Up Empire</i>. As a producer and director based in
                Austin, Texas Chris has helmed productions for Netflix, Apple
                TV, Discovery, A&E, and TLC. Chris' theatrical work has recently
                been for the Alchemy Theater, and includes <i>Good People</i>,{" "}
                <i>A Christmas Memory</i>, <i>Mack & Mabel</i>,{" "}
                <i>The Virgin Trial</i>, and most recently the critically
                acclaimed <i>Pipeline</i>. Having worked with Entr'acte & Doctuh
                Mista Productions in 2025, Chris considers himself fortunate to
                continue his tenure working in Austin theatre with so many
                wonderful & talented human beings.
              </p>
            </div>
            <div className=" mb-8 break-inside-avoid bg-[#070C17]/70 rounded-lg shadow-lg p-6 flex flex-col items-start">
              <h2 className="text-2xl  text-white mb-2 text-left">
                Danu Mara, "Woman"
              </h2>
              <img
                src="/img/castandcrew/danu-portrait.jpg"
                alt="Jennymarie Jemison as Ava in Apprehension play"
                className="w-full h-auto max-w-xs rounded-md mb-3 object-cover"
              />
              <p className="text-[#cdc49b] text-lg text-left">
                Danu Mara is a voice-over and on-camera actor with over 20 years
                of experience in commercials, animation, film, video games, and
                eLearning. She voiced hundreds of characters for educational
                software used nationwide and performed internationally in The
                Intergalactic Nemesis, portraying a wide range of humans,
                robots, and aliens. Her credits include roles in{" "}
                <i>Flatland: The Movie</i> (alongside Martin Sheen and Kristen
                Bell) and Rooster Teeth's <i>Lazer Team 2</i> and{" "}
                <i>Nomad of Nowhere</i>. A Daytime Emmy nominee with a B.A. in
                Drama from Texas Woman's University, Danu has also trained at
                The Second City in Chicago and is a core member of the acclaimed
                sketch troupe, The Latino Comedy Project.
              </p>
            </div>
            <div className=" mb-8 break-inside-avoid bg-[#070C17]/70 rounded-lg shadow-lg p-6 flex flex-col items-start">
              <h2 className="text-2xl  text-white mb-2 text-left">
                Erica Heidepriem, "Lisa"
              </h2>
              <img
                src="/img/castandcrew/erica-portrait.jpg"
                alt="Erica Heidepriem as Lisa in Apprehension play"
                className="w-full h-auto max-w-xs rounded-md mb-3 object-cover"
              />
              <p className="text-[#cdc49b] text-lg text-left mb-2">
                Erica Heidepriem is an actor, writer, and creative collaborateur
                based in Austin, Texas, known for her vibrant comedic projects
                spanning two decades in film and television. Working both behind
                and in front of the camera, she has contributed to numerous
                projects that showcase her versatile talent. While her last
                stage performance was over ten years ago, she recently returned
                to the theater world, joining the team at Zach Theater at the
                helm of hospitality and patron experience.
              </p>
            </div>

            <div className="mb-8 break-inside-avoid bg-[#070C17]/70 rounded-lg shadow-lg p-6 flex flex-col items-start">
              <h2 className="text-2xl  text-white mb-2 text-left">
                Sonnet Blanton, director
              </h2>
              <img
                src="/img/castandcrew/sonnet.jpg"
                alt="Sonnet Blanton, director of Apprehension play"
                className="w-full h-auto max-w-xs rounded-md mb-3 object-cover"
              />
              <p className="text-[#cdc49b] text-lg text-left">
                Sonnet is an award-winning theatre artist living in Austin,
                Texas. In her 20 plus year career here as a director, producer,
                writer, and performer she has worked with Salvage Vanguard
                Theater, Paper Chairs, Scriptworks, Glass Half Full Theatre,
                Fusebox Festival, Ariel Dance Theatre, and Grackle Jack.
              </p>
            </div>
            <div className="mb-8 break-inside-avoid bg-[#070C17]/70 rounded-lg shadow-lg p-6 flex flex-col items-start">
              <h2 className="text-2xl  text-white mb-2 text-left">
                L.B. Deyo, playwright
              </h2>
              <img
                src="/img/castandcrew/lb-pipe-cropped.jpg"
                alt="L.B. Deyo, playwright of Apprehension"
                className="w-full h-auto max-w-xs rounded-md mb-3 object-cover"
              />
              <p className="text-[#cdc49b] text-lg text-left">
                L.B. Deyo is the author of{" "}
                <i>
                  Invisible Frontier: Exploring the tunnels, ruins & rooftops of
                  hidden New York
                </i>{" "}
                and several other books. He's acted in such Austin plays as{" "}
                <i>The Intergalactic Nemesis</i> and{" "}
                <i>Dance, Cupcake, Dance</i>. <i>Apprehension</i> is his first
                work as a playwright.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
