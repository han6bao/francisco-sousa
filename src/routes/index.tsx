import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FILMS } from "../lib/site";
import { Nav, Footer } from "../components/chrome";
import { Hero, SelectedWork } from "../components/sections-a";
import { Approach, About, Accolades } from "../components/sections-b";
import {
  Commissioned,
  Weddings,
  Testimonials,
  Photography,
  Contact,
  FinalFrame,
} from "../components/sections-c";
import { FilmViewer } from "../components/film-viewer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);

  return (
    <main>
      <Nav />
      <Hero />
      <SelectedWork onWatch={setViewerIndex} />
      <Approach />
      <About />
      <Accolades onWatch={setViewerIndex} />
      <Commissioned />
      <Weddings />
      <Testimonials />
      <Photography />
      <Contact />
      <FinalFrame />
      <Footer />
      {viewerIndex !== null ? (
        <FilmViewer
          films={FILMS}
          index={viewerIndex}
          onClose={() => setViewerIndex(null)}
          onNav={setViewerIndex}
        />
      ) : null}
    </main>
  );
}