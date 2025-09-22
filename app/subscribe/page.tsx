import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscribe | Apprehension Play Mailing List",
  description:
    "Join the Apprehension mailing list to get updates on performances, tickets, and behind-the-scenes content.",
  openGraph: {
    title: "Subscribe | Apprehension Play Mailing List",
    description:
      "Get updates on Apprehension: performance dates, ticket releases, and exclusive content.",
  },
};

export default function SubscribePage() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url(/img/poster-concept-5.jpg)" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full bg-[#070C17]/15 z-10" />
      {/* Constrained content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto space-y-12 pt-20 pb-16 text-left px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="space-y-4 text-left">
          <div className="relative w-full max-w-max">
            <h1
              className="text-6xl md:text-7xl text-white mt-6 md:mt-5 inline-block"
              style={{ textShadow: "1px 2px 4px rgba(0,0,0,0.9)" }}
            >
              Subscribe
            </h1>
          </div>
        </section>

        {/* Mailchimp Form */}
        <section className="mt-12">
          <div className="max-w-xl bg-[#a7a082]/90 p-6 rounded-lg shadow-lg border border-[#BEB58F]">
            <p className="text-black mb-6 text-lg">
              Join the L.B. Deyo mailing list for updates on <i>Apprehension</i>{" "}
              and future projects.
            </p>
            <form
              action="https://ApprehensionPlay.us11.list-manage.com/subscribe/post?u=fa0b58c59f30f53f39dd3daa8&id=f6d87bf843&f_id=0084c2e1f0"
              method="post"
              target="_blank"
              noValidate
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="mce-EMAIL"
                  className="block text-sm font-medium text-black mb-1"
                >
                  Email Address <span className="text-red-700">*</span>
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  id="mce-EMAIL"
                  required
                  className="w-full px-4 py-2 rounded-md border border-black/30 bg-white text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-black/40"
                  placeholder="you@example.com"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="mce-FNAME"
                    className="block text-sm font-medium text-black mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="FNAME"
                    id="mce-FNAME"
                    className="w-full px-4 py-2 rounded-md border border-black/30 bg-white text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-black/40"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mce-LNAME"
                    className="block text-sm font-medium text-black mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="LNAME"
                    id="mce-LNAME"
                    className="w-full px-4 py-2 rounded-md border border-black/30 bg-white text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-black/40"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* real people should not fill this in */}
              <div
                aria-hidden="true"
                style={{ position: "absolute", left: "-5000px" }}
              >
                <input
                  type="text"
                  name="b_fa0b58c59f30f53f39dd3daa8_f6d87bf843"
                  tabIndex={-1}
                  defaultValue=""
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="w-full bg-[#1a1a1a] text-[#f5e7c5] py-3 px-6 rounded-md font-semibold hover:bg-black transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-black/80 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
