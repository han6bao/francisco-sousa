import { createFileRoute, Link } from "@tanstack/react-router";
import { ACCOLADES, FILMS } from "../lib/site";
import { Nav, Footer } from "../components/chrome";
import { Frame } from "../components/placeholders";

export const Route = createFileRoute("/work/$slug")({
  component: FilmPage,
});

function FilmPage() {
  const { slug } = Route.useParams();
  const film = FILMS.find((f) => f.slug === slug);

  if (!film) {
    return (
      <main>
        <Nav />
        <section className="section section--black flex min-h-dvh items-center">
          <div className="section__inner">
            <p className="num-credit">404</p>
            <h1 className="display-lg mt-4 text-ivory">FILM NOT FOUND</h1>
            <Link to="/" className="cta-back mt-10 inline-block">
              ← ALL FILMS
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const idx = FILMS.indexOf(film);
  const next = FILMS[(idx + 1) % FILMS.length];
  const filmAccolades = ACCOLADES.flatMap((block) => block.entries).filter(
    (entry) => entry.film === film.title,
  );

  return (
    <main>
      <Nav />
      <section className="section section--black pt-28">
        <div className="section__inner">
          <Link to="/" className="cta-back">
            ← ALL FILMS
          </Link>

          <div className="mt-14 max-w-4xl">
            <p className="num-credit">{film.index}</p>
            <h1 className="display-xl mt-3 text-ivory">{film.title}</h1>
            <p className="credit mt-4 text-silver">{film.meta}</p>
          </div>

          <div className="mt-12">
            <Frame
              ratio="aspect-video"
              label={`FILM STILL / ${film.title}`}
              no="FRAME 01"
              className="w-full"
            />
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="credit text-silver">SELECTED WORK / {film.meta}</p>
              <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-ivory/85">
                {film.synopsis}
              </p>
              {film.views ? <p className="film-views mt-6">{film.views}</p> : null}
            </div>
            <div className="md:col-span-5">
              {filmAccolades.length > 0 ? (
                <div>
                  <p className="credit text-silver">ACCOLADES</p>
                  <div className="mt-3 rise">
                    {filmAccolades.map((row) => (
                      <div key={`${row.year}-${row.festival}`} className="rec-row">
                        <span className="rec-row__year">{row.year}</span>
                        <span className="rec-row__festival">{row.festival}</span>
                        <span className="rec-row__film">{row.film}</span>
                        <span className="rec-row__status">{row.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div id="stills" className="mt-16">
            <p className="num-credit">STILLS</p>
            <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
              {Array.from({ length: film.stills }).map((_, i) => (
                <Frame
                  key={i}
                  ratio={i % 2 === 1 ? "aspect-[4/5]" : "aspect-video"}
                  label={`STILL / ${film.title} / 0${i + 1}`}
                  no={`FRAME 0${i + 2}`}
                  className="w-full"
                />
              ))}
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-6">
            <a href="#stills" className="cta-watch">
              WATCH FILM
            </a>
            <a href="#stills" className="cta-trailer">
              WATCH TRAILER
            </a>
          </div>

          <div className="mt-20 flex justify-between border-t border-silver/20 pt-8">
            <Link to="/work/$slug" params={{ slug: next.slug }} className="cta-back">
              NEXT FILM / {next.title} →
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}