import Navbar from "~/components/navbar";

const About = () => {
  return (
    <>
      <Navbar />

      <main className="absolute -z-10 space-y-18 p-6 w-full">
        <section className="font-light space-y-8">
          <h2 className="capitalize text-2xl font-bold text-center">
            about me
          </h2>
          <p className="text-center">
            I'm Salvation — a relentless web alchemist with a passion for
            building sleek, responsive, and expressive interfaces that't just
            look good — they feel alive. From crafting intuitive UIs to
            architecting real-time, event-driven systems, I breathe structure
            into chaos with a keyboard and a vision. I think in components, I
            speak in APIs, and I dream in JavaScript. When I'm not summoning
            pixels into order, I'm exploring ways to push web performance,
            experiment with AI agents, or just annihilate pawns on a chessboard.
            This isn't just code to me. It's craft.
          </p>
          <div className="text-center">
            <button className="border text-sm px-4 py-2 cursor-pointer hover:bg-white hover:font-semibold hover:text-gray-950">
              Download CV
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
