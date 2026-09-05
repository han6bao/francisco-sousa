import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { FILMS, HERO, SELECTED_WORK_HEAD } from "../lib/site";
import { Frame } from "./placeholders";
import { SectionHead } from "./chrome";

export function Hero() {
  return (
    <section id="top" className="hero-zone section section--black flex min-h-dvh flex-col">
      <div className="hero-corner" aria-hidden="true" />
<div className="section__inner flex flex-1 flex-col justify-between pt-16 pb-10">
        <div className="max-w-5xl">
            <p className="credit text-silver hero-fade hero-fade--1">{HERO.topLine}</p>
            <h1 className="display-xxl mt-4 text-ivory hero-fade hero-fade--2">
              FRANCISCO
              <br />
              SOUSA
            </h1>
            <p className="credit mt-2 text-silver hero-fade hero-fade--3">{HERO.roleLine}</p>
            <p className="hero-tagline hero-fade hero-fade--3">{HERO.tagline}</p>
            <p className="mt-2 max-w-[52ch] text-xs leading-relaxed text-ivory/55 hero-fade hero-fade--4">
              {HERO.intro}
            </p>
            <a href="#films" className="cta-view hero-cta mt-4 hero-fade hero-fade--4">
              <span>{HERO.cta}</span>
              <span className="cta-view__arrow">↓</span>
            </a>
          </div>
        <p className="credit mt-16 text-silver/60 hero-fade hero-fade--4">
          PORTUGAL / AVAILABLE INTERNATIONALLY
        </p>
      </div>
    </section>
  );
}

export function SelectedWork({ onWatch }: { onWatch: (index: number) => void }) {
  const [open, setOpen] = useState(true);
  const featured = FILMS[0];
  const rest = FILMS.slice(1);
  return (
    <section id="films" className="section section--black border-t border-silver/20">
      <div className="section__inner">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <SectionHead num="01" title="SELECTED WORK" meta={SELECTED_WORK_HEAD.intro} />
          <button
            type="button"
            className="sw-toggle"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "CLOSE" : "OPEN"}
          </button>
        </div>
        {open ? (
          <div className="rise">
            <p className="max-w-[65ch] text-base leading-relaxed text-ivory/75">{SELECTED_WORK_HEAD.body}</p>

        <article className="mt-10">
          <Link to="/work/$slug" params={{ slug: featured.slug }} className="group block">
            <Frame
              ratio="aspect-video"
              label={`FILM STILL / ${featured.title}`}
              no="FRAME 01"
              className="w-full"
            />
          </Link>
          <div className="mt-10 grid grid-cols-1 items-end gap-x-10 gap-y-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="num-credit">{featured.index}</p>
              <h3 className="display-lg title-red mt-3 text-ivory">{featured.title}</h3>
              <p className="credit mt-3 text-silver">{featured.meta}</p>
            </div>
            <div className="lg:col-span-5">
              <p className="max-w-[52ch] text-base leading-relaxed text-ivory/75">
                {featured.synopsis}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <Link to="/work/$slug" params={{ slug: featured.slug }} className="cta-view">
                  <span>VIEW PROJECT</span>
                  <span className="cta-view__arrow">→</span>
                </Link>
                <button type="button" className="cta-watch" onClick={() => onWatch(0)}>
                  WATCH FILM
                </button>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-10 rise">
          {rest.map((film, i) => (
            <div key={film.slug} className="film-row group">
              <Link
                to="/work/$slug"
                params={{ slug: film.slug }}
                className="film-row__link"
              >
                <div className="film-row__body">
                  <p className="num-credit">{film.index}</p>
                  <h3
                    className={`film-row__title mt-2 ${
                      i % 2 === 1 ? "film-row__title--oversize" : ""
                    }`}
                  >
                    {film.title}
                  </h3>
                  <p className="credit mt-3 text-silver">{film.meta}</p>
                </div>
                <span className="film-row__go" aria-hidden="true">
                  →
                </span>
              </Link>
              <div className="film-row__side">
                <p className="text-sm leading-relaxed text-ivory/65">{film.synopsis}</p>
                {film.views ? <p className="film-views">{film.views}</p> : null}
                <button
                  type="button"
                  className="film-row__watch"
                  onClick={() => onWatch(i + 1)}
                >
                  ▶ WATCH
                </button>
              </div>
            </div>
          ))}
          </div>
        </div>
      ) : null}
      </div>
    </section>
  );
}