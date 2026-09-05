import { ABOUT, ACCOLADES, APPROACH, COUNTRIES, EDUCATION, FILMS, LAURELS } from "../lib/site";
import { SectionHead } from "./chrome";

export function Approach() {
  return (
    <section className="section section--ivory approach-section">
      <div className="section__inner grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHead num="02" title="APPROACH" onIvory />
          <p className="approach-statement">{APPROACH.statement}</p>
        </div>
        <div className="approach-rule lg:col-span-1 lg:col-start-7" aria-hidden="true" />
        <div className="lg:col-span-4 lg:col-start-9 rise">
          <p className="approach-words">{APPROACH.words}</p>
          <div className="mt-4 space-y-4">
            {APPROACH.paragraphs.map((paragraph) => (
              <p key={paragraph} className="approach-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="section section--black">
      <div className="section__inner grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="rise lg:col-span-5">
          <div className="about-portrait">
            <img src={ABOUT.portrait.src} alt={ABOUT.portrait.alt} />
          </div>
        </div>
        <div className="lg:col-span-7">
          <p className="num-credit">03</p>
          <h2 className="display-xl title-red mt-3 text-ivory">
            FRANCISCO
            <br />
            SOUSA
          </h2>
          <p className="credit mt-4 text-silver">{ABOUT.roleLine}</p>
          {ABOUT.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-6 max-w-[65ch] text-base leading-relaxed text-ivory/85"
            >
              {paragraph}
            </p>
          ))}
          <div className="about-edu rise">
            <div className="about-edu__row">
              <span className="about-edu__seal" aria-hidden="true">
                <img src={EDUCATION.logo.src} alt="" />
              </span>
              <div>
                <p className="about-edu__school">{EDUCATION.school}</p>
                <p className="about-edu__meta">{EDUCATION.degree}</p>
                <ul className="about-edu__tags">
                  {EDUCATION.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="about-edu__note">{EDUCATION.note}</p>
          </div>
          <p className="credit mt-10 text-silver">{ABOUT.location}</p>
        </div>
      </div>
    </section>
  );
}

export function Accolades({ onWatch }: { onWatch: (index: number) => void }) {
  return (
    <section id="recognition" className="section section--black">
      <div className="section__inner">
        <div className="accolades-head">
          <SectionHead num="04" title="ACCOLADES" meta="SELECTED INTERNATIONALLY" />
          <p className="mx-auto max-w-[65ch] text-base leading-relaxed text-ivory/75">
            Francisco's films have received festival selections and recognition across:
          </p>
          <ul className="country-strip rise">
            {COUNTRIES.map((country) => (
              <li key={country}>{country}</li>
            ))}
          </ul>
        </div>
        <div className="mt-10 rise">
          {ACCOLADES.map((block, i) => (
            <div key={block.country} className="accolade">
              <div className="accolade__head">
                <span className="num-credit">{`0${i + 1}`}</span>
                <h3 className="accolade__country">{block.country}</h3>
              </div>
              {block.entries.map((entry) => {
                const film = FILMS.find((f) => f.title === entry.film);
                return (
                  <button
                    key={`${entry.year}-${entry.festival}`}
                    type="button"
                    className="rec-row rec-row--clickable"
                    onClick={() => {
                      if (film) onWatch(FILMS.indexOf(film));
                    }}
                  >
                    <span className="rec-row__year">{entry.year}</span>
                    <span className="rec-row__festival">{entry.festival}</span>
                    <span className="rec-row__film">
                      <span className="rec-row__play" aria-hidden="true">
                        ▶
                      </span>
                      {entry.film}
                    </span>
                    <span className="rec-row__status">{entry.status}</span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
        <div className="laurel-strip mt-12 rise" aria-label="Festival laurels">
          {LAURELS.map((laurel) => (
            <img key={laurel.src} src={laurel.src} alt={laurel.alt} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}