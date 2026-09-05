import { useEffect, useState } from "react";
import { NAV } from "../lib/site";

export function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    NAV.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="nav">
      <a href="#top" className="nav__wordmark">
        <svg className="nav__mark" viewBox="0 0 64 64" aria-hidden="true">
          <circle cx="32" cy="32" r="30" fill="#F1EDE4" />
          <circle cx="51" cy="32" r="5.2" fill="#0B0B0B" />
          <circle cx="41.5" cy="48.45" r="5.2" fill="#0B0B0B" />
          <circle cx="22.5" cy="48.45" r="5.2" fill="#0B0B0B" />
          <circle cx="13" cy="32" r="5.2" fill="#0B0B0B" />
          <circle cx="22.5" cy="15.55" r="5.2" fill="#0B0B0B" />
          <circle cx="41.5" cy="15.55" r="5.2" fill="#0B0B0B" />
          <circle cx="40.66" cy="37" r="2.6" fill="#0B0B0B" />
          <circle cx="32" cy="42" r="2.6" fill="#0B0B0B" />
          <circle cx="23.34" cy="37" r="2.6" fill="#0B0B0B" />
          <circle cx="23.34" cy="27" r="2.6" fill="#0B0B0B" />
          <circle cx="32" cy="22" r="2.6" fill="#0B0B0B" />
          <circle cx="40.66" cy="27" r="2.6" fill="#0B0B0B" />
          <circle cx="32" cy="32" r="6.5" fill="#0B0B0B" />
        </svg>
        <span>FRANCISCO SOUSA</span>
      </a>
      <nav className="nav__links" aria-label="Sections">
        {NAV.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav__link${active === item.id ? " nav__link--active" : ""}`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="section section--black">
      <div className="section__inner">
        <div className="footer">
          <p className="credit text-silver">FRANCISCO SOUSA / © 2026</p>
          <p className="credit text-silver">FILM DIRECTOR / EDITOR / PHOTOGRAPHER</p>
        </div>
      </div>
    </footer>
  );
}

export function SectionHead({
  num,
  title,
  meta,
  onIvory = false,
}: {
  num?: string;
  title: string;
  meta?: string;
  onIvory?: boolean;
}) {
  return (
    <div className="section-head rise">
      {num ? <p className="num-credit">{num}</p> : null}
      <h2 className={`display-xl title-red ${onIvory ? "text-charcoal" : "text-ivory"}`}>{title}</h2>
      {meta ? (
        <p className={`credit ${onIvory ? "text-charcoal/70" : "text-silver"}`}>{meta}</p>
      ) : null}
    </div>
  );
}