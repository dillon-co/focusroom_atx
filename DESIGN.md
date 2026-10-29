---
name: The Focus Room
description: Bold photographic training editorial in the room's navy, bone and gold.
colors:
  ink: "#0e0c08"
  bone: "#ede7da"
  bone-2: "#e2dac8"
  gold: "#c8952e"
  gold-lite: "#e3b85c"
  steel: "#8496ac"
  navy: "#0a1424"
  navy-2: "#13213a"
  error: "#9a2a14"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(88px, 11.3vw, 190px)"
    fontWeight: 850
    lineHeight: 0.79
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(38px, 5vw, 76px)"
    fontWeight: 750
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  chapter:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(68px, 9vw, 150px)"
    fontWeight: 800
    lineHeight: 0.85
    letterSpacing: "-0.04em"
  lead:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(20px, 1.55vw, 23px)"
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
rounded:
  none: "0"
  action: "4px"
  class-scene: "4px 4px 64px 4px"
  full: "50%"
spacing:
  gutter: "24px"
  gutter-phone: "16px"
  margin: "clamp(20px, 3vw, 48px)"
  section: "clamp(88px, 9vw, 128px)"
  bar: "72px"
components:
  button-light:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 30px"
    height: "52px"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    padding: "0 30px"
    height: "52px"
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 30px"
    height: "52px"
  input:
    backgroundColor: "{colors.bone-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  chip:
    backgroundColor: "{colors.bone-2}"
    textColor: "{colors.ink}"
    padding: "0 18px"
    height: "48px"
  bar:
    height: "{spacing.bar}"
    padding: "0 clamp(20px, 3vw, 48px)"
  class-scene:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
    rounded: "{rounded.class-scene}"
  proof-feature:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    padding: "48px"
---

# Design System: The Focus Room

## Overview

**Creative North Star: "The Painted Room"**

The room's own navy, bone and gold anchor a bold photographic editorial. Oversized, heavy Archivo gives the page its voice; real portraits and room photographs give it proof. The approved references—Lando Norris, Dich Fashion and Shopify Editions Winter 2026—informed scale, overlapping composition and scroll choreography, while the identity remains The Focus Room's.

The opening puts Jarred's portrait behind “Master yourself.” Room photographs overlap a large statement below it. Sticky method sheets, a photographic class index and alternating founder spreads establish a varied rhythm before the enormous navy footer. This is direct, disciplined and warm underneath, with Apply as the central action.

**Key Characteristics:**

- Oversized uppercase Archivo headlines, with readable sentence-case supporting copy.
- Real photography, overlapping room crops and strong changes of scale.
- Navy and bone fields, with gold for emphasis, actions and the Mindset sheet.
- Native controls and progressive motion enhancement; no new animation dependency.

## Colors

### Primary

Navy provides the immersive photographic stages, class index and footer. Gold punctuates actions, the active class, the final footer word and the entire Mindset sheet. Its lighter variant is the gold button hover state.

### Neutral

Bone is the main light canvas; bone shade supports alternate surfaces and form fields. Ink supplies body text and the darkest fields. Navy shade separates dark surfaces; steel remains part of the inherited palette. Error red is reserved for form validation.

**The Paired Ink Rule.** Bone, bone shade, gold and steel take ink text. Navy, navy shade and ink take bone text.

## Typography

Archivo is the only family, with system sans-serif fallbacks. The frontmatter records current landing-page roles; the application and secondary content retain the smaller base display and heading variables in the stylesheet. There is no five-size restriction.

Hero display is uppercase at weight 850; founder titles and collage statements use 800. Main section headings use 750. The footer echoes the hero's 850 weight. Supporting paragraphs use the body and lead roles; navigation and captions use the label role. Tight negative tracking and compact leading belong to large headlines, not running copy.

Hero display scales to 13.8vw at tablet and 14.5vw on phones. Founder titles scale to clamp(48px, 13vw, 88px) on phones. Keep deliberate line breaks legible; do not treat any one hero composition as a rule for every page.

## Layout

The underlying desktop grid has twelve equal columns, the margin and gutter tokens above, and generous section spacing. Full-width fields alternate with asymmetric photo-and-copy spreads. The hero pairs a broad headline with a narrower invitation; the collage overlaps rotated room photos and type. Membership facts use four columns, then two.

At 1080px the hero invitation reorganizes, fixed navigation links hide and application columns stack. At 760px the grid gutter narrows, founder spreads stack with photography first, and class photos open inline beneath their summaries. The mobile collage retains overlap without obscuring its following copy. The fixed bar remains 72px tall.

## Elevation & Depth

The system uses tonal contrast, overlapping photographs and sticky stacking rather than box shadows. Photographic scrims protect text contrast in the hero and class scenes; they are functional overlays, not decorative brand gradients.

Scroll-linked hero travel and collage rotation/translation are CSS enhancements guarded by feature support and motion preference. Unsupported browsers retain the composed static photos. Reduced motion disables these timelines, removes sticky method stacking and chapter zoom, disables cross-page view transitions and makes entrances effectively immediate. Do not introduce an animation library for these effects.

## Shapes

Most fields, portraits, buttons and form controls are rectangular. Hero actions have small corners. Class photography has a distinct larger bottom-right corner, reduced on phones. The contact email action is circular. Arches are part of the photographed room and existing brand assets; they are not a mandatory silhouette for every element.

## Components

### Buttons and navigation

Flat light, dark and gold buttons share a 52px minimum height and bold labels. Light buttons turn gold; dark buttons turn navy; gold buttons turn gold-lite. Hero actions use the small corner token. Press feedback scales to 0.97; keyboard focus uses a 3px gold outline with 3px offset. Hover movement is limited to fine pointers.

The hero contains its own masthead. The fixed bar appears after the hero and adopts the current section's field and ink; it is not a hero swatch column. Its Apply action inverts those colors. Phone navigation preserves the membership action.

### Method sheets

Muscle, Mindset and Mission remain sticky overlapping sheets with visible titles. Mindset is gold. Each sheet pairs short copy with a real photograph. Desktop title offsets are 96px; phone offsets are 52px. Reduced motion changes the stack into normal-flow sections.

### Class photo explorer

Native details elements share the name `training-class`, opening one class at a time in supporting browsers. The first class starts open; any class can be closed. A gold summary and rotated arrow mark the open state. Desktop places the scene beside the index and shows “Choose a class. Find your rhythm.” when all are closed. On phones each scene sits beneath its summary, with no separate empty scene. Opening and closing requires no JavaScript.

### Founder spreads and footer

Room, Kate and Jarred spreads alternate portrait sides on desktop. Rectangular photographs accompany oversized uppercase titles and concise evidence. The navy footer is a full-width typographic signature, with its last line gold and useful navigation below it.

### Proof and audience tiles

A bone featured quote contrasts with a navy section; smaller testimonials remain an open list. Attribute the proof to Jarred's coaching clients. The existing selectable audience tiles retain their accessible pressed state and remain separate from the class explorer.

### Form fields and chips

Application fields are square bone-shade surfaces with ink text and a minimum 52px height. Focus uses gold; invalid controls use error red and accompanying error text. Chips use native inputs, switching from bone shade to ink with gold text when selected. Preserve disabled submission and validation behavior.

## Do's and Don'ts

### Do:

- **Do** preserve the navy, bone and gold identity and the existing Archivo family.
- **Do** use existing real portraits and room photography, preserving accurate descriptions and product claims.
- **Do** retain the Muscle, Mindset and Mission stack, with Mindset on gold.
- **Do** make every class reachable by keyboard and without JavaScript.
- **Do** preserve reduced-motion behavior and a static fallback for unsupported scroll timelines.

### Don't:

- **Don't** invent imagery, testimonials, membership promises or new product facts.
- **Don't** restore the obsolete five-size-only, arch-only or gold-only-for-actions rules.
- **Don't** add decorative shadows, glass effects or new dependencies for these compositions.
- **Don't** hide essential copy behind scroll animation or rely on hover alone.
