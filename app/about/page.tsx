
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
                        <div className="p-5 border-r border-t border-[#BEB58F] md:max-w-[50%] text-white text-2xl md:text-3xl mb-0" style={{ textShadow: "1px 2px 4px rgba(0,0,0,0.9)" }}>
                            <p className="md:my-2">
                                Apprehension is a psychological thriller set in a world where the past falters, reality shifts, and the truth is shrouded in deceit. Joe Dempsey struggles to piece together his past, haunted by fragments just beyond recall.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
} 