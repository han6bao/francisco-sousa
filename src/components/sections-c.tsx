import { useState } from "react";
import { CLOSING, COMMISSIONED, CONTACT, PHOTOGRAPHY, TESTIMONIALS, WEDDINGS } from "../lib/site";
import { Frame } from "./placeholders";
import { SectionHead } from "./chrome";

const SPAN_CLASS: Record<string, string> = {
  wide: "gallery__item--wide",
  tall: "gallery__item--tall",
  third: "gallery__item--third",
};

export function Commissioned() {
  return (
    <section className="section section--ivory">
      <div className="section__inner">
        <SectionHead num="05" title="COMMISSIONED + LIVE" meta="TELEVISION / EVENTS / BRAND WORK" onIvory />
        <div className="rise">
          {COMMISSIONED.map((item) => (
            <div key={item.title} className="work-row">
              <div>
                <h3 className="work-row__title">{item.title}</h3>
                <p className="credit mt-2 text-charcoal/60">{item.meta}</p>
              </div>
              <p className="work-row__note">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Weddings() {
  const [open, setOpen] = useState(true);

  return (
    <section className="section section--black">
      <div className="section__inner">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <SectionHead num="06" title="WEDDINGS" meta="SELECTED CEREMONIES" />
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
            <Frame
              ratio="aspect-[21/9]"
              label="WEDDING FILM / STILL"
              no="FRAME 00"
              className="w-full"
            />
            <p className="mt-8 text-base leading-relaxed text-ivory/80">{WEDDINGS.line}</p>
            <div className="couple-list mt-6">
              {WEDDINGS.couples.map((couple) => (
                <div key={couple.names} className="couple-row">
                  <span className="couple-row__names">{couple.names}</span>
                  <span className="couple-row__year credit">{couple.year}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-[52ch] text-base leading-relaxed text-ivory/75">
              {WEDDINGS.note}
            </p>
            <a href="#films" className="cta-view mt-8 inline-flex">
              <span>{WEDDINGS.cta}</span>
              <span className="cta-view__arrow">→</span>
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="section section--ivory">
      <div className="section__inner">
        <SectionHead num="07" title="TESTIMONIALS" meta="FROM THE PEOPLE BEHIND THE FRAME" onIvory />
        <div className="testimonials-box rise">
          {TESTIMONIALS.map((t, i) => (
            <figure key={t.name} className="testimonial">
              <div className={`testimonial__col testimonial__col--${i % 3}`}>
                <span className="testimonial__mark" aria-hidden="true">
                  “
                </span>
                <blockquote className="testimonial__quote">{t.quote}</blockquote>
                <figcaption className="testimonial__attr">
                  <span className="testimonial__name">{t.name}</span>
                  <span className="testimonial__role">{t.role}</span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Photography() {
  const [open, setOpen] = useState(false);

  const openGallery = () => {
    setOpen(true);
    requestAnimationFrame(() => {
      document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <section id="photography" className="section section--black border-t border-silver/20">
      <div className="section__inner">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <SectionHead num="08" title="PHOTOGRAPHY" meta={PHOTOGRAPHY.intro} />
          <button
            type="button"
            className="sw-toggle"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "CLOSE" : "OPEN"}
          </button>
        </div>
        <p className="max-w-[52ch] text-base leading-relaxed text-ivory/75">{PHOTOGRAPHY.body}</p>
        <button type="button" className="cta-view mt-8 inline-flex" onClick={openGallery}>
          <span>{PHOTOGRAPHY.cta}</span>
          <span className="cta-view__arrow">→</span>
        </button>
        {open ? (
          <div id="gallery" className="gallery mt-8 rise">
            {PHOTOGRAPHY.frames.map((photo) => (
              <Frame
                key={photo.label}
                ratio={photo.ratio}
                label={photo.label}
                className={`gallery__item ${SPAN_CLASS[photo.span] ?? ""}`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section section--black border-t border-silver/20">
      <div className="section__inner">
        <p className="num-credit">09</p>
        <h2 className="display-xl title-red mt-3 text-ivory">{CONTACT.headline}</h2>
        <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-ivory/75">{CONTACT.sub}</p>
        <p className="credit mt-8 text-silver">{CONTACT.location}</p>
        <span className="cta-email mt-8 inline-flex">
          <span>{CONTACT.emailCta}</span>
          <span className="cta-view__arrow">→</span>
        </span>
        <p className="credit mt-4 text-silver/60">{CONTACT.note}</p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 rise">
          {CONTACT.channels.map((channel) => (
            <div key={channel.label} className="contact-row">
              <p className="credit text-silver">{channel.label}</p>
              <p className="credit mt-2 text-ivory/60">{channel.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalFrame() {
  return (
    <section className="section section--black pt-0">
      <div className="section__inner text-center">
        <h2 className="display-xxl text-ivory">
          {CLOSING.lines[0]}
          <br />
          {CLOSING.lines[1]}
        </h2>
        <p className="credit mt-6 text-silver">{CLOSING.tiny}</p>
      </div>
    </section>
  );
}