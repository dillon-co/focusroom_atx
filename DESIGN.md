---
name: The Focus Room
description: A private, coach-led training room in East Austin, painted in the room's own colours.
colors:
  ink: "#0e0c08"
  bone: "#ede7da"
  bone-2: "#e2dac8"
  gold: "#c8952e"
  steel: "#8496ac"
  navy: "#0a1424"
  navy-2: "#13213a"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(60px, 8.2vw, 128px)"
    fontWeight: 800
    lineHeight: 0.86
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(36px, 4.6vw, 72px)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  lead:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(20px, 1.9vw, 28px)"
    fontWeight: 400
    lineHeight: 1.3
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  none: "0"
  arch-bullet: "32px 32px 0 0"
  arch-full: "999px 999px 0 0"
  arch-band: "50% 50% 0 0 / 180px 180px 0 0"
spacing:
  frame: "10px"
  tile-gap: "8px"
  gutter: "24px"
  margin: "clamp(16px, 2.4vw, 36px)"
  bar: "56px"
components:
  button-light:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0 30px"
    height: "52px"
  button-light-hover:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0 30px"
    height: "52px"
  button-dark-hover:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.bone}"
  button-small:
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "44px"
  bar:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    height: "{spacing.bar}"
    padding: "0 clamp(16px, 2.4vw, 36px)"
  swatch-nav-item:
    rounded: "{rounded.none}"
    padding: "20px"
  arch-bullet:
    rounded: "{rounded.arch-bullet}"
    width: "64px"
    height: "72px"
  arch-portrait:
    rounded: "{rounded.arch-full}"
  apply-band:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.arch-band}"
    padding: "150px clamp(16px, 2.4vw, 36px) 0"
  apply-band-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.gold}"
  address-row:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.bone}"
    typography: "{typography.headline}"
    padding: "0 clamp(16px, 2.4vw, 36px) 26px"
    height: "150px"
  address-row-alt:
    backgroundColor: "{colors.navy-2}"
    textColor: "{colors.bone}"
  address-row-hover:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
---

# Design System: The Focus Room

## Overview

**Creative North Star: "The Painted Room"**

The page is painted in the training room's own colours. Navy walls, gold steel racks, and bone mirror light become flat colour chapters. Each chapter is one field with the one ink that reads on it, and the page moves from chapter to chapter like walking through the room. The room's arched mirrors give the system its only shape. Portraits, list bullets, the Apply band's top edge, and the footer wordmark are all arch-topped. Everything else is square.

The density is poster-like. Headlines are huge and set tight in Archivo at 800, never longer than two lines. Under them sit plain, generous body lines at 18px. There is no ornament and no depth. Colour does the structural work that borders, cards, and shadows would do elsewhere. Photographs are real (the room, the coaches) and are cropped into frames or arches, never tinted with brand gradients.

Motion is quick and grounded. The fixed bar takes on each chapter's colours as you scroll, and the portrait fields grow from an inset to full bleed. The hero arch opening and the chapter reveal are the page's two authored scroll moments; nothing else animates in.

**Key Characteristics:**
- Flat colour chapters, each a field-plus-ink pair taken from the room's paint.
- One curve: the arch. Every other corner is square.
- One family (Archivo), five sizes.
- No shadows, hairlines, or gradients. Depth comes from colour change and sticky stacking.
- Gold is for the action: Apply, focus, selection, hover.

## Colors

Seven flat paints from the real room. Each field always carries its own fixed ink.

### Primary
- **Rack Gold** (gold): the action colour. It fills the Apply band, the Apply swatch, hover states on light buttons and address rows, the focus ring (3px outline), the text selection, and the scrollbar thumb. It is also used as a chapter field (the Mindset sheet, the 30-members tile). Ink text only (7.3:1).

### Secondary
- **Mirror-Frame Steel** (steel): a cool blue-grey chapter field for method sheets, one portrait chapter, word tiles, and wordmark arches. Ink text only (6.5:1).

### Neutral
- **Wall Navy** (navy): the room's wall paint. Used for dark chapters, the address block, the map frame, and the "menu note" text accent on bone. Bone text (15:1).
- **Wall Navy, Step** (navy-2): appears only as the alternate band inside a run of navy rows (the address rows), so stacked rows read as distinct without a line between them.
- **Bone** (bone): the page ground and light chapter field, the light button fill, and the ink on every dark field.
- **Bone, Shade** (bone-2): the second light field (The week), so it reads as a separate chapter next to bone.
- **Ink** (ink): body text on light and mid fields, the darkest chapter (Who it's for), and the dark button fill. Warm near-black, never pure #000.

### Named Rules
**The Paired Ink Rule.** A field always takes its paired ink. Bone, bone-2, gold, and steel take ink. Navy, navy-2, and ink take bone. Don't set bone text on gold or steel.

**The Neighbour Rule.** Fields that touch must differ clearly in lightness. Never put two fields of the same tone next to each other, and when one dark field follows another, use the navy-2 step between them.

**The Gold Is the Action Rule.** Gold marks what you can do: apply, hover, focus, select. When gold appears as a chapter field, the content on it still points toward applying.

## Typography

**Display Font:** Archivo (next/font, width axis loaded), with system-ui, sans-serif
**Body Font:** Archivo, the same family

**Character:** One grotesque used for everything. Headlines at 800 with tight negative tracking feel like gym signage. The same face at 400 to 600 reads as plain and direct in body text.

### Hierarchy
- **Display** (800, clamp(60px, 8.2vw, 128px), 0.86): the hero line, the "Same rep." tile, big figures, and the footer wordmark letters.
- **Headline** (800, clamp(36px, 4.6vw, 72px), 0.95): section heads, chapter titles, and word tiles. Address rows use this size at weight 400, tracked -0.03em.
- **Lead** (400 to 600, clamp(20px, 1.9vw, 28px), 1.3): intro copy beside headlines, sheet names, menu item names (700, -0.02em), story columns, and the Apply line.
- **Body** (400 to 500, 18px, 1.55): running copy, capped around 40 to 44ch in sheets and menus. Buttons use body size at 700.
- **Label** (600 to 700, 15px): bar links, menu tags, tile captions, footer, small buttons.

The Apply band word is the single exception to the ramp. It is set at min(29.5vw, 48svh), 800, uppercase, -0.06em tracking, 0.8 line height, filling the band edge to edge.

### Named Rules
**The Five Steps Rule.** Only five sizes, and the Apply word is the one exception. To change emphasis, change weight or tone, not size.

**The Two-Line Headline Rule.** Display and headline text runs two lines at most, balanced with text-wrap: balance.

**The One Face Rule.** Archivo only. No second display face, no monospace, no serif accent.

## Layout

The layout uses a 12-column grid with 24px gutters (16px on phone). Side margins are fluid (clamp(16px, 2.4vw, 36px)). Headline and lead pairs usually split 6/6 or 7/5 and align to their bottom edges. Framed elements (hero, statement board, word wall) sit inside a thin bone frame (10px, 8px on phone) and are separated by small gaps (8px, 6px on phone), so the ground shows like mortar between the tiles.

Sections are spaced generously: 120 to 200px top padding on desktop, 96 to 112px on phone. A fixed 56px bar appears once the hero scrolls away and sets the scroll padding. The method sheets stack as sticky layers, each offset 96px below the last (52px on phone), and each is sized to fit the screen below the ones already stacked. Portrait chapters are full viewport height (100svh).

Breakpoints are 1080px (the hero stacks, the bar drops its links, the class arches go to three columns, the wordmark wall becomes a 5-column grid) and 760px (every grid child spans full width, tiles go to 2 columns, sheets stack media above copy).

## Elevation & Depth

The system is completely flat. Nothing has a resting shadow. Depth comes from two things. First, colour: each chapter is a new field. Second, stacking: method sheets slide over one another, and the fixed bar recolours itself to match the chapter beneath. The only gradient is a neutral ink scrim (transparent to ink at 85%) under the hero text on tablet and phone, there to keep text legible over the photograph.

### Named Rules
**The Flat Paint Rule.** No box shadows, no glass, no decorative gradients. If a surface has to separate from the one next to it, give it a different field.

## Shapes

Corners are square (0) everywhere: buttons, tiles, sheets, the bar, the map, every image frame. The one curve is the arch, a rounded top over a flat base, taken from the room's mirrors. It appears at four scales:
- **Arch bullet** (32px 32px 0 0 on a 64x72 block, 26px on a 52x60 block on phone; a 10x12 version marks list items and the "That's me" caption).
- **Arch portrait** (999px 999px 0 0 at a 3:4 ratio), used for the coach and room chapters.
- **Arch band** (50% 50% 0 0 / 180px vertical radius, 72px on phone), the top edge of the Apply band.
- **Arch wall**: nine full arches of different heights in the chapter colours, each holding one letter of FOCUS ROOM.

### Named Rules
**The One Curve Rule.** The arch is the only curved form allowed. Never round a corner, and never round all four.

## Components

### Buttons
Square, flat, one fill, and confident.
- **Shape:** square corners (0), 52px tall with 30px side padding; the small size is 44px tall with 22px padding at label size.
- **Light:** bone fill with ink text, used on dark photographs and fields. Hover turns the fill gold.
- **Dark:** ink fill with bone text, used on light fields. Hover turns the fill navy.
- **Press:** scale(0.97) over 160ms with the ease-out curve. Background and colour change over 200ms.
- **Hover** applies only under (hover: hover) and (pointer: fine). Focus is a 3px gold outline offset 3px.

### Navigation
- **Swatch column (hero):** the hero's right-hand column is the navigation. It holds five stacked colour swatches, one per chapter, each in that chapter's field and ink. Labels are 700 weight. On hover the label pushes in from 20px to 32px of left padding (240ms). Below 1080px the swatches become 52px-tall bands under the photograph.
- **Fixed bar:** 56px tall. It slides in after the hero (translateY, 300ms ease-out) and takes the field and ink of whatever chapter is under it (300ms). It holds the wordmark (masked, so it takes the bar's ink), label-size links, and an inverted Apply chip (filled with the bar's ink, text in the bar's field). The links are hidden below 1080px.

### Stacking Colour Sheets (signature)
Full-width sticky sheets in steel, gold, and navy. Each one sits 96px lower than the one before and fills the screen below it, so the sheet names (heading size) stay visible as a stack. Copy sits at the top of the left columns with the arch-bullet list anchored to the bottom; the photograph fills the right six columns at full sheet height, greyscaled and blended (luminosity) into the sheet colour.

### Mirror Wall (the five classes)
Six arches in a row, like the room's mirrors (three columns on tablet, two on phone). Each class photo fills a full arch, greyscaled and blended into its class colour; Flex sessions is a bone arch holding three small arches in steel, gold and navy. Below each: name (lead, 800), tags (label), description (body).

### Colour Bands (around the room)
One full-width band per circle, 8px apart, in the circle's tone. Name at heading size in the left half (underlined when it links out), tag (label) and description to the right. Linked bands invert on hover. On phone everything stacks inside the band.

### Portrait Chapters
Each chapter is one full-viewport field with the title top-left, a centred arch portrait, the text bottom-left, and a link bottom-right. When the chapter enters, the field grows from inset(20px) to full bleed (900ms) and the portrait scales from 0.92 to 1 (1000ms).

### Word-Tile Wall
A wall of square tiles in four columns (two on phone): photographs, display figures, and audience words in alternating tones. A word tile is a button. Pressing it flips it in place: the front fades, blurs, and lifts away while the back line rises in (220 to 300ms). It also rewrites the Apply line. On phone the chosen tile spans both columns.

### Apply Band
The entire band is one link. It is gold with ink text and an arched top edge, and holds the lead line, an outlined arrow, and the oversized APPLY word. On hover or focus, the band swaps to an ink field with gold text, and the word lifts 12px.

### Address Rows and Map
The address is set as stacked headline rows on navy, alternating with navy-2 and separated by no lines. Rows that are links turn gold with ink text on hover. Next to them is a 1988 USGS map in a navy frame with a navy caption plate. The room's spot is marked with a gold arch.

### Testimonials
- One featured bone card (pull line, full quote, the result large beside it), then four navy cards: result in gold, quote, name pinned to the bottom. No arch markers here; small arches read as gravestones.

### Chapters (The room, Kate, Jarred)
- Arch portrait (4:5) on one side, name at display size with its sentence and link grouped beside it, bottom-aligned. Sides alternate: right, left, right. Phones stack photo, then name, text and link.

### Motion
- Two curves only: ease-out cubic-bezier(0.23, 1, 0.32, 1) for entrances and responses, and ease-in-out cubic-bezier(0.77, 0, 0.175, 1).
- The arch opening: the hero photo starts clipped to a mirror-shaped arch and opens to the full panel over the first 70svh of scroll (pinned on desktop, CSS scroll timeline, full photo where unsupported).
- The chapter reveal: the chapter field opens from inset(20px) to full bleed and the portrait settles from scale(0.92). Method-sheet names widen from wdth 62% to 125% as they arrive. Nothing else animates in.
- Apply hand-off: the gold Apply band grows into the gold panel of /apply (cross-document view transition, 550ms ease-in-out); other page changes crossfade in 220ms.
- Width: the hero title is set condensed (wdth 72%); sheet names rest wide (125%); chapter names stay at normal width.
- Reduced motion drops all movement: no arch, no clip growth, no scale, no width change, no view transitions.

## Do's and Don'ts

### Do:
- **Do** paint each section as one flat field with its paired ink: bone, bone-2, gold, navy, navy-2, ink. Steel is an accent only (footer letters, highlights, small marks), never a section or sheet background; as a big field it reads soft and juvenile.
- **Do** keep desktop type capped (heading 56px, display 104px) and use the one section gap, --section (88 to 128px).
- **Do** use the arch (rounded top, flat base) as the only curve: portraits, bullets, band edges, the wordmark wall.
- **Do** keep type to Archivo's five steps. Headlines at 800 with tight tracking, two lines at most.
- **Do** keep gold for the action: Apply, hover, focus (3px outline), selection.
- **Do** give touching fields different lightness, and use navy-2 to step a run of navy rows.
- **Do** use the ease-out curve with press feedback at scale(0.97), and gate hover behind (hover: hover) and (pointer: fine).
- **Do** keep scroll motion to the arch opening and the chapter reveal. Add another only if it replaces one.

### Don't:
- **Don't** round corners. Buttons, tiles, sheets, and frames are square (0).
- **Don't** add resting shadows, hairline borders or dividers, or decorative gradients. The ink scrim under hero text on small screens is the only gradient.
- **Don't** put small uppercase labels (eyebrows) above headlines, number the sections, or use monospace.
- **Don't** set bone text on gold or steel.
- **Don't** add type sizes outside the five steps, except the Apply band word.
