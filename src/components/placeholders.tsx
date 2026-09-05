// Labeled placeholder frame - and, since the client supplies real assets
// (laurels, portrait), the same frame renders a real photo via `src` with
// cover cropping. The rule stands: nothing on the site is generated or
// sourced from stock; media is placeholder or client-provided only.

export function Frame({
  ratio = "aspect-video",
  label,
  no,
  light = false,
  className = "",
  src,
  alt,
}: {
  ratio?: string;
  label: string;
  no?: string;
  light?: boolean;
  className?: string;
  src?: string;
  alt?: string;
}) {
  return (
    <div
      className={`frame ${light ? "frame--light" : ""} ${ratio} ${className}`}
      role={src ? undefined : "img"}
      aria-label={src ? undefined : label}
    >
      {src ? (
        <img src={src} alt={alt ?? label} className="frame__media" />
      ) : (
        <>
          <span className="frame__no">{no ?? label}</span>
          <span className="frame__label">{label}</span>
        </>
      )}
    </div>
  );
}