# Haloes Touch Hospice — website

A single-page site built from the printed Haloes Touch brochure.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # serve the production build
```

## What's where

```
index.html            Google Fonts links, meta description, theme color
src/main.jsx          React entry
src/App.jsx           Page composition — every section in order
src/index.css         Brand tokens and all styles
src/data/content.js   All brochure copy, in one place
src/assets/           The four brochure photos plus the ACHC placeholder mark
src/components/
  Halo.jsx            The halo mark (hero corona + small logo variant)
  Reveal.jsx          Scroll-in fade, skipped for reduced motion
```

**To change any wording, edit `src/data/content.js`.** Phone numbers, the
address, and the email live in the `agency` object at the top and flow through
to the header, hero, footer, and every call button.

## Design notes

Palette is sampled from the brochure and set as CSS variables at the top of
`index.css`: deep forest field, moss, brand gold, warm cream. The one light
section is Medicare coverage — the part a family reads when they're deciding —
so it gets the cream background and the most contrast.

Type is Fraunces for display and Figtree for body, loaded from Google Fonts in
`index.html`. Swap the `--display` and `--body` variables if the brand has
licensed faces.

The halo in the hero is drawn from the logo mark: rays crest at the top and
dissolve toward the base, and they draw outward once on load. It is the only
orchestrated motion on the page. Everything respects
`prefers-reduced-motion: reduce`.

## Photographs

The four photos come out of the brochure itself. The PDF is a flattened
100 dpi scan with no separate image assets, so each one was cropped from the
page, colour-corrected back toward the printed piece, and upscaled 2x. They are
deliberately used at modest sizes — roughly 340 to 400 CSS pixels wide — because
that is as far as the source resolution stretches.

They are placed one per section: the nurse and patient in the philosophy
section, the walker photo with hospice services, the pair with the advantage
grid, and the park photo alongside the care panels.

**Replace these with the originals when you can.** If the agency has the source
files from whoever designed the brochure, dropping them into `src/assets/` under
the same filenames is the whole job — no code changes. Also worth checking that
the stock licence covers web use; print licences often don't.

## The ACHC mark

`src/assets/achc-accredited.png` is a **placeholder**. The brochure scan holds
the mark at roughly 46x48 pixels, so it was keyed off the dark panel into a
transparent PNG and upscaled. It reads at the sizes used here — 54px in the hero,
36px in the footer — but the word ACCREDITED is only about six pixels tall in the
source and will not survive being made any larger.

It appears in two places, both through the `AchcBadge` component in `App.jsx`:
the hero seal line and the footer. Replacing the file at that path updates both.

**Get the official artwork from ACHC before launch.** ACHC issues logo files to
accredited organizations along with usage rules covering size, clear space, and
colour. A certification mark is theirs, not the agency's, and a soft
approximation of someone else's trademark is the wrong thing to have on a live
healthcare site. Ask for the vector (SVG or EPS) — it will scale to any size,
and you can drop the PNG entirely.

## Before it goes live

- Replace the ACHC placeholder with the official file (see above).
- Swap in full-resolution photography (see above).
- Add a favicon and an Open Graph image.
- Confirm the marketing claims ("one of the most trusted names," "ahead of the
  national hospice benchmark") are ones the agency wants in writing on the web,
  where they're more durable than a brochure.
