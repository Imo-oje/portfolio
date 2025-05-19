import Navbar from "~/components/navbar";
import type { Route } from "./+types";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Imooje | Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Index() {
  return (
    <>
      <Navbar />
      <main className="absolute -z-10 space-y-18 p-6">
        <section className="font-light space-y-12">
          <div className="text-4xl">
            Hey there, I am Salvation {"\u2014"} A{" "}
            <h1 className="text-sky-500 capitalize">fanatical web sorcerer</h1>{" "}
            summoning web sorcery from the age of curiosity.
          </div>

          <p className="text-lg text-left">
            With enchanted fingers on the keys and an eye for responsive
            harmony, I turn{" "}
            <span className="text-sky-500">wireframes into wonderlands</span>{" "}
            and static designs into breathing, interactive realms. Whether it's
            crafting sleek UIs, animating smooth transitions, or making
            real-time magic with sockets and servers {"\u2014"}{" "}
            <span className="text-sky-500">
              I build web experiences that feel alive
            </span>
            . I don't follow trends. I shape them. <br />
            <Link
              to="/contact"
              className="underline font-semibold text-nowrap text-sm"
            >
              Let's build something legendary.
            </Link>
          </p>
        </section>
        {/* FEATURED PROJECTS */}
        <section className="font-light space-y-12">
          <h2 className="text-3xl">Crafted Spells</h2>
          <div>
            <img src="" alt="" />
          </div>
        </section>
      </main>
    </>
  );
}
