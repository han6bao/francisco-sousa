# Design Brief - Francisco Sousa (filmmaker portfolio)

## Design read
A film director's personal archive for festival programmers, producers and
collaborators, speaking a European-cinema register: festival catalogue,
movie credits, printed screenplay pages. Editorial typography carries the
brand; Francisco's real film stills and photography will supply the colour
once they replace the labeled placeholder frames.

## Concept spine
"The site is a film archive and festival programme." Every section is a
numbered page of that programme (01-07), every small label reads like a
credit line, and the page ends on a giant end-card with FIN.

## Delivery tier
editorial - user explicitly asked for no generated media ("dont generate new
pics or videos, placeholders only"), which forecloses the animated
scroll-scrub journey. Micro-motion only: title-sequence mount fades, thin
rule grows, film rows nudge and frames tint oxblood on hover.

## Locked palette (user-specified; overrides default palette bans)
- Cinema Black #0B0B0B - main ground
- Film Ivory #F1EDE4 - light text and ivory section pages
- Charcoal #1C1C1B - secondary dark surfaces, dark ink on ivory
- Silver Gray #AAA7A1 - credits, metadata, captions, nav
- Deep Oxblood #6A2528 - ONLY sparse accent: section numbers, active nav,
  hover details, award markers. For oxblood TEXT on dark grounds a lifted
  brick red #C05E62 is used instead (numbers, award markers, active nav),
  because the deep tone is unreadable on Cinema Black; ivory sections keep
  the deep #6A2528.
80-90% of the page is black / ivory / gray. Oxblood appears in tiny marks
only. Section rhythm: BLACK, BLACK with still, IVORY, BLACK, BLACK gallery,
IVORY, BLACK, BLACK. No gradients, no neon, no bright red, no pure white,
no extra accent colors. The client's films are the only source of colour.

## Locked type (user-supplied font files; self-hosted woff2)
- Legal Obligation Sans (300 / 400 / 700) - display: name, film titles,
  section words, numbering; large scale changes, tiny film-credit text.
  Display is set in the Regular 400 cut with relaxed leading for legibility
  (client feedback: the Light cut read too faint on Cinema Black). Leading
  is tuned tight-but-clean on display (0.97-1.04) for a poster feel, with
  comfortable body and credit line-heights (1.7 / 1.75).
- Avenza Grotesk (300-700 + italic) - body, nav, credits, metadata,
  buttons and CTA labels (client feedback: non-title UI uses the body face
  for legibility), and the recognition ledger's festival names (the serif
  accent was dropped so the credit list reads as one clean sans system).

## Animation mode: non-animated - user request "dont generate new pics or
videos, placeholders only" (no generated film, therefore no scroll-scrub
journey; recorded here per the intake rule).

## Section plan (client copy v2 - hierarchy: films and accolades lead,
education is a tiny block inside About)
1. Hero (black) - manifesto: top line, FRANCISCO SOUSA, role, tagline
   "I film what people don't say.", intro, VIEW SELECTED WORK CTA
2. Selected work (black) - featured WHITE AS SNOW block + film index rows
   (six real projects from client copy, view counts where provided); every
   film carries a WATCH affordance that opens a full-screen viewer (close
   via X / ESC / backdrop, prev-next and arrow keys cycle the films; plays
   film.videoUrl when a real file is supplied, otherwise labeled frames);
   the whole section is collapsible with an OPEN/CLOSE toggle (default open)
3. Approach (ivory) - heading at standard title scale with the statement
   lede on the LEFT, the red copy block (words + two paragraphs) pushed
   FURTHER right across an oxblood vertical rule in the middle column
4. About (black) - real client portrait in black and white, full column
   height (no gap below the image) + role + bio paragraphs, then a
   deliberately tiny education block right under the bio: school emblem
   (white on black, visible), school, degree, tag list, one-line note
5. Accolades (black) - country strip (SWEDEN / ITALY / UNITED STATES /
   PORTUGAL) + one numbered block per country with real festival rows
   (incl. LISBIFF 2026) + the five client laurel graphics in a small row;
   clicking any accolade row opens the same film viewer for that row's film
6. Commissioned + live (ivory) - quiet hairline list (three real entries)
7. Weddings (black) - single wide still placeholder, couple rows, note,
   CTA; OPEN/CLOSE toggle (default open)
8. Testimonials (ivory) - three client quotes, staggered editorial columns
   with a large faint quote mark, semibold name billing and role credits
9. Photography (black) - short copy + VIEW PHOTOGRAPHY CTA + editorial
   gallery; OPEN/CLOSE toggle with the gallery CLOSED by default (client
   feedback: open it to view the photos)
10. Contact + closing (black) - LET'S MAKE SOMETHING., channels, giant
    FRANCISCO SOUSA with tiny DIRECTOR · EDITOR · FILMMAKER underneath

## Asset plan
Placeholders ONLY (client rule: never generate, source or add photos,
videos, logos or covers; every media slot is a plain frame with a small
label, swapped later for Francisco's real work). The real "assets" are the
two self-hosted type families; the favicon / OG image / cover carry the
client's film-reel mark (white disc, black sprocket holes) drawn as SVG
placeholders; and three client-supplied media items: the About portrait
photo, the festival laurel graphics (Sweden / Italy / USA / Portugal) and
the Católica University emblem. Zero media generation in this build. The
only remaining placeholder assets are the media frames (film stills,
photography, weddings) and the contact links.

## CTA inventory (each intent gets its own garment, no shared button class)
- VIEW FILM - condensed underlined arrow link; hover oxblood + arrow travel
- WATCH FILM - bordered frame button; hover ivory fill
- WATCH TRAILER - thin underlined text link; hover oxblood
- ALL FILMS / NEXT FILM - small underline back/next links
- Nav links - credit-size text links; active state oxblood

## Anti-convergence
No prior build in this chat session. Palette family (cinema black / warm
ivory + sparse oxblood) is user-specified brand direction, not a default
reach.