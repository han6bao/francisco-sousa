import { useEffect } from "react";
import type { Film } from "../lib/site";
import { Frame } from "./placeholders";

// Full-screen film viewer: opens from any WATCH affordance, closes via the
// X / ESC / backdrop click, and cycles through the other films with the
// prev/next controls or arrow keys. Plays film.videoUrl when a real video
// file is supplied; until then it shows the labeled placeholder frame.
export function FilmViewer({
  films,
  index,
  onClose,
  onNav,
}: {
  films: Film[];
  index: number;
  onClose: () => void;
  onNav: (nextIndex: number) => void;
}) {
  const film = films[index];
  const prev = (index - 1 + films.length) % films.length;
  const next = (index + 1) % films.length;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNav(prev);
      if (e.key === "ArrowRight") onNav(next);
    };
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <div className="viewer" role="dialog" aria-modal="true" aria-label={film.title} onClick={onClose}>
      <div className="viewer__card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="viewer__close" onClick={onClose} aria-label="Close viewer">
          ✕
        </button>
        <div className="viewer__head">
          <p className="num-credit">
            {film.index} / {films.length}
          </p>
          <h3 className="viewer__title">{film.title}</h3>
          <p className="credit mt-3 text-silver">{film.meta}</p>
        </div>
        <div className="viewer__media">
          {film.videoUrl ? (
            <video src={film.videoUrl} controls autoPlay className="viewer__video" />
          ) : (
            <Frame ratio="aspect-video" label={`VIDEO / ${film.title}`} no="PLACEHOLDER" className="w-full" />
          )}
        </div>
        <p className="viewer__synopsis">{film.synopsis}</p>
        <div className="viewer__controls">
          <button type="button" className="viewer__nav" onClick={() => onNav(prev)}>
            ← PREV
          </button>
          <span className="viewer__hint">ESC TO CLOSE</span>
          <button type="button" className="viewer__nav" onClick={() => onNav(next)}>
            NEXT →
          </button>
        </div>
      </div>
    </div>
  );
}