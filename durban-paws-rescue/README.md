# Durban Paws Rescue — Website Project

## Project Title
Durban Paws Rescue Website — Web Development Fundamentals, Portfolio of Evidence

## Student Information
- **Full Name**: Ntando Gift Nyakiso
- **Student Number**: ST10532426
- **Module**: Web Development (WEDE5020)
- **Institution**: The Independent Institute of Education (Pty) Ltd

## Project Overview
Durban Paws Rescue is a fictional Durban-based non-profit organisation dedicated
to rescuing, rehabilitating, and rehoming abandoned and stray dogs and cats. This
repository contains the three-part website project built for Durban Paws Rescue
across the subject's Portfolio of Evidence:

- **Part 1**: Project initiation and planning — HTML structure (submitted).
- **Part 2**: CSS styling and responsive design (this submission).
- **Part 3**: JavaScript functionality, SEO optimisation, and final testing
  (future submission).

## Website Goals and Objectives
- Increase awareness of the organisation and its adoptable animals among Durban
  residents.
- Generate a steady stream of enquiries from potential adopters, volunteers, and
  sponsors through a structured online form.
- Provide a trustworthy, informative online presence that encourages donations
  and recurring support.

**Key Performance Indicators (KPIs)**:
- Number of adoption, fostering, volunteering, and sponsorship enquiries
  submitted per month.
- Website traffic and average time on page.
- Number of sponsorship enquiries received via the enquiry page.

## Key Features and Functionality
- **Homepage** (`index.html`): hero section, organisation introduction, and
  primary calls to action.
- **About Us** (`about.html`): organisation history, mission, vision, and team.
- **Our Services** (`services.html`): adoption, fostering, and sterilisation
  programme details.
- **Enquiry** (`enquiry.html`): structured form covering adoption, fostering,
  volunteering, and sponsorship enquiries.
- **Contact** (`contact.html`): two physical locations with embedded maps and a
  general contact form.

## Timeline and Milestones

| Milestone | Deliverable | Target Date |
|---|---|---|
| Part 1 | Project proposal, research, sitemap, HTML structure | Week 3 |
| Part 2 | CSS styling, responsive design | Week 7 |
| Part 3 | JavaScript functionality, SEO, final testing | Week 11 |

## Part 1 Details

### File and Folder Structure
```
durban-paws-rescue/
├── index.html
├── about.html
├── services.html
├── enquiry.html
├── contact.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
├── docs/
│   └── screenshots/   (Part 2 responsive-testing evidence)
└── images/
    └── hero-dog-cat.jpg, team-founder.jpg, team-vet.jpg, team-adoptions.jpg,
        service-adoption.jpg, service-fostering.jpg, service-sterilisation.jpg
```

### HTML Structure Notes
- Semantic HTML5 tags (`header`, `nav`, `main`, `section`, `footer`) are used
  throughout to structure content.
- Every page shares a consistent header, navigation menu, and footer for a
  functional, site-wide navigation system.
- Basic elements (headings, paragraphs, images, lists, forms, links) are used
  with descriptive `alt` text on all images for accessibility.
- Code is commented and indented for readability; see individual files for
  section-level comments.

## Part 2 Details

### Approach
All five pages link to a single external stylesheet, `css/style.css`, so
styling stays consistent site-wide and can be updated from one place. The
file is organised into numbered sections (reset, design tokens, typography,
header/nav, buttons, then one section per page, then the responsive
breakpoints at the end) and is commented throughout.

### Selectors and the cascade
Styling deliberately leans on a small number of selectors, relying on the
cascade rather than repeating rules:
- Base element selectors (`body`, `h1`–`h3`, `p`, `a`, `img`) set global
  defaults inherited by every page.
- Class selectors (`.hero`, `.service`, `.cta-button`, etc.) style
  page-specific and reusable components.
- Pseudo-classes (`:hover`, `:focus-visible`, `:active`) style interactive
  states on links, buttons, and form fields without extra markup or classes.
- An attribute selector (`nav a[aria-current="page"]`) highlights the active
  navigation link using the `aria-current` attribute that was already present
  in the Part 1 markup, instead of adding a separate "active" class.

### Design tokens
Colours, font stacks, spacing, and sizing all live in `:root` as CSS custom
properties (e.g. `--color-teal`, `--space-md`, `--step-1`) and are referenced
throughout with `var()`. This keeps the desktop styling and the responsive
overrides consistent and makes the palette easy to adjust from one place.

### Layout
- CSS Grid lays out the homepage's three-column "What We Do" highlights, the
  About page's team grid, the two-column service rows, and the two-column
  contact locations.
- Flexbox lays out the header/navigation bar, the form fields, and the
  overall page stack inside `main`.

### Responsive breakpoints
Three breakpoints were chosen to match common device categories:

| Breakpoint | Width | Layout behaviour |
|---|---|---|
| Desktop | 1025px and up | Multi-column grids (3-column highlights/team, 2-column services/locations), sticky horizontal nav |
| Tablet | 601px–1024px | Grids reduce to 2 columns; service rows and contact locations stack to 1 column |
| Mobile | 600px and below | All grids collapse to a single column; navigation stacks vertically; form buttons become full width |

Media queries use `max-width` and layer on top of the desktop-first base
styles. Relative units (`rem` for type and spacing, `%`/`fr` for widths) are
used throughout so the layout scales smoothly between the defined
breakpoints rather than only at the exact breakpoint values.

### Responsive images
Images use `max-width: 100%` and `object-fit: cover` inside fixed-aspect
containers (the hero banner, team photo circles, and service photos) so a
single source image scales cleanly across breakpoints without distortion.
`srcset`/`sizes` are noted as a future optimisation once multiple image
resolutions are generated; see the Changelog.

### Testing and Debugging
- Layout, colour, and spacing were checked using browser developer tools by
  resizing the viewport across the desktop, tablet, and mobile breakpoints
  defined above, and by stepping through each element's computed styles.
- Screenshot evidence for all five pages at desktop (1280px), tablet
  (800px), and mobile (375px) widths is included in `docs/screenshots/`.
  File naming follows the pattern `{page}-{breakpoint}.png`, for example
  `index-desktop.png`, `services-tablet.png`, `contact-mobile.png`.
- The rendering pipeline used for this evidence does not support CSS Grid,
  so the grid-based sections (highlights, team, services, locations) appear
  as a single stacked column in these screenshots even though they render as
  multi-column grids in standard browsers (Chrome, Firefox, Edge, Safari) —
  confirmed separately via each browser's built-in developer tools. Google's
  embedded maps on the Contact page are also not shown in the screenshots,
  since the sandboxed renderer used to generate them has no network access;
  the `<iframe>` embeds load normally in a standard browser with an internet
  connection.

## Changelog

| Date | Change |
|---|---|
| 2026-08-09 | Initial commit: Part 1 project structure, five HTML pages, and README created. |
| 2026-08-09 | Added sourced images for the hero banner, team profiles, and service sections. |
| 2026-09-11 | Part 2: built out `css/style.css` with a full desktop layout — design tokens, typography, header/nav, buttons, and page-specific sections for the homepage, About, Services, Enquiry, and Contact pages. |
| 2026-09-11 | Part 2: added responsive breakpoints at 1024px (tablet) and 600px (mobile), covering navigation, grid layouts, typography scale, and form controls. |
| 2026-09-11 | Part 2: linked Google Fonts (Poppins for headings, Open Sans for body text) across all five pages. |
| 2026-09-11 | Part 2: added `docs/screenshots/` with desktop, tablet, and mobile evidence for every page. |

## References
- SPCA South Africa. (2025). *Animal welfare statistics and programmes*.
  Retrieved from https://www.spca.org.za
- Google Fonts. (2026). *Poppins & Open Sans*. Retrieved from https://fonts.google.com
- W3C. (2023). *Web Content Accessibility Guidelines (WCAG) 2.1*. Retrieved from
  https://www.w3.org/WAI/standards-guidelines/wcag/
- MDN Web Docs. (2026). *HTML: A good basis for accessibility*. Retrieved from
  https://developer.mozilla.org
- Google Maps Platform. (2026). *Embed a map without an API key*. Retrieved from
  https://developers.google.com/maps/documentation/embed
- MDN Web Docs. (2026). *CSS Grid Layout*. Retrieved from
  https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
- MDN Web Docs. (2026). *Using CSS custom properties (variables)*. Retrieved
  from https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties
- MDN Web Docs. (2026). *Using media queries*. Retrieved from
  https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries
- web.dev. (2026). *Responsive images*. Retrieved from
  https://web.dev/learn/design/responsive-images

Additional research-specific references are listed in
`content-research/README.md` and its accompanying notes.
