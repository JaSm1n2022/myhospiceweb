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
src/assets/           Brochure photos, the Haloes Touch mark, the ACHC mark
src/components/
  Advantage.jsx       Advantage band + six-item grid
  Services.jsx        Services band + eight-item grid
  ServiceIcon.jsx     The eight line icons
  Reviews.jsx         Three review cards
  Faq.jsx             FAQ card grid with progressive load-more
  Halo.jsx            The halo mark (hero corona + small logo variant)
  Reveal.jsx          Scroll-in fade, skipped for reduced motion
```

**To change any wording, edit `src/data/content.js`.** The FAQ lives there too,
in the `faqs` array — the order is the display order, and the first six show
before the "Show more" button. Change `INITIAL` and `STEP` at the top of
`src/components/Faq.jsx` to shift how many appear at a time.

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

`services-hero.jpg` and `advantage-hero.jpg` are supplied originals at full
resolution. They anchor the services and advantage bands.

The remaining two come out of the brochure itself. The PDF is a flattened
100 dpi scan with no separate image assets, so each one was cropped from the
page, colour-corrected back toward the printed piece, and upscaled 2x. They are
deliberately used at modest sizes — roughly 340 to 400 CSS pixels wide — because
that is as far as the source resolution stretches.

They are placed one per section: the nurse and patient in the philosophy
section, and the park photo alongside the care panels.

**Replace these with the originals when you can.** If the agency has the source
files from whoever designed the brochure, dropping them into `src/assets/` under
the same filenames is the whole job — no code changes. Also worth checking that
the stock licence covers web use; print licences often don't.

## The Haloes Touch mark

`src/assets/haloes-mark.png` is the gold woven mark from the back panel of the
brochure. It was keyed off the green panel into a transparent PNG and flattened
to the brand gold (`#E3BC57`), which removes the scan's colour cast, then
upscaled 8x with the stroke edges firmed up. It appears in the header at 30px
and the footer at 42px, which is where it holds. Above roughly 60px the strokes
start to soften.

**Ask the designer for the vector.** This is the agency's own logo, so the
original AI or SVG should be easy to get, and it costs nothing to drop in at
`src/assets/haloes-mark.png` (or better, as an `.svg` — change the two imports
in `App.jsx`). That would also let the mark be used large without limit.

The halo in the hero is a separate thing: an ambient SVG graphic built for this
page, not a version of the logo. Keeping the real mark in the header and footer
lockups and the halo as atmosphere is deliberate.

## The ACHC mark

`src/assets/achc-white.png` is ACHC's own pillar artwork, recoloured white. The
source file was a single flat blue (`#286291`) with a real alpha channel, so the
recolour swapped RGB and left alpha untouched — the antialiased edges are exactly
as ACHC drew them, with no keying or reconstruction. The registered-trademark
symbol is intact.

The artwork carries "ACHC" but not "Accredited", so "Accredited" is set in the
site's own type beside it. Together they read as the full statement. That lockup
lives in the `AchcBadge` component in `App.jsx` and appears in the hero (44px)
and the footer (30px).

The file is 140x140, which covers both sizes on a 3x display. If you need it
larger anywhere, ask ACHC for the vector rather than upscaling this.

**One thing to confirm:** most organisations publish a specific reversed or
white version of their mark along with rules about when it may be used. This is
a recolour, not their official reverse artwork. Ask ACHC for their accredited-
organisation logo pack and use their white version if one exists — the file
here can be swapped at the same path with no code change.

## One claim to reconcile

The supplied advantage artwork says **"We are Medicare certified"** under Full
Coverage. The brochure, and the hero and footer of this site, both say
**"Medicare and Medicaid certified."** The advantage copy in `content.js` now
follows the newer artwork; the hero and footer still carry the dual claim.

Pick one and make it consistent. If the agency is certified by both, the
advantage line should say so. If Medicaid certification lapsed or was never
held, the hero and footer are the ones that need changing, and that is the more
urgent direction to check.

## Before it goes live

- Replace the three placeholder reviews and the Google link (see above).
- Reconcile the Medicare/Medicaid certification claim (see above).
- Have the FAQ answers reviewed (see above).
- Confirm the white ACHC mark against their logo guidelines (see above).
- Swap in full-resolution photography (see above).
- Add a favicon and an Open Graph image.
- Confirm the marketing claims ("one of the most trusted names," "ahead of the
  national hospice benchmark") are ones the agency wants in writing on the web,
  where they're more durable than a brochure.
