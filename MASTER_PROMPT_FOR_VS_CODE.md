# MASTER PROMPT — BUILD THE OKASHA PORTFOLIO EXACTLY FROM THE PROVIDED REFERENCES

You are working inside an existing VS Code project. Your job is to IMPLEMENT the portfolio, not to invent a new design.

The attached reference images are the visual source of truth. Recreate the same overall visual language, composition, spacing, hierarchy, card treatment, typography scale, navigation, gradients, borders, icons, buttons, and responsive behavior shown in those references.

## PRIMARY GOAL

Build a polished, production-quality personal portfolio for:

Muhammad Okasha
AI Solutions Architect • Full-Stack Systems Specialist

The final website must feel like a real premium engineer/architect portfolio designed by a professional UI/UX designer. It must NOT look like an AI-generated template, generic SaaS dashboard, or copied landing page.

## NON-NEGOTIABLE DESIGN RULE

DO NOT redesign the visual direction.

Use the supplied images as references and reproduce their design system consistently across every page.

When text/content and visual styling conflict, preserve the visual structure while using the project content supplied below.

## VISUAL SYSTEM

- Dark navy/near-black background.
- Purple-to-blue accent gradient.
- Subtle cyan/blue secondary accents.
- Thin low-contrast borders.
- Medium rounded corners, approximately 14–18px.
- Soft, restrained glow around important interactive elements.
- Clean modern sans-serif typography.
- Strong white headings and muted blue-gray body text.
- Compact technology badges/pills.
- Professional iconography such as Lucide-style line icons.
- No excessive glassmorphism.
- No giant empty spaces.
- No excessive gradients.
- No random decorative shapes.
- No unnecessary animations.
- Keep the design dense enough to feel intentional but spacious enough to remain readable.

## LAYOUT RULES

Use one shared container across the entire site.

Desktop:
- max-width approximately 1280–1400px
- horizontal padding approximately 32px
- consistent left/right alignment

Tablet:
- approximately 24px horizontal padding

Mobile:
- approximately 16px horizontal padding

Use a consistent 8px spacing system.

Every page must have equal left and right padding.

All cards in the same grid must align to a common baseline.

Do not allow one page to feel wider/narrower than another.

## GLOBAL NAVIGATION

Create one reusable Navbar used everywhere.

Left:
- Okasha.

Center/right navigation:
- Home
- About
- Projects
- Experience
- Skills
- Contact

Right:
- language selector / EN
- theme toggle
- Resume button

The active page should have a subtle purple underline/glow.

Mobile:
- collapse navigation into a clean menu.
- keep Resume accessible.

## PAGE 1 — HOME

Recreate the supplied Home reference.

Hero:
- availability badge
- “Hi, I’m Muhammad Okasha”
- highlight “Muhammad Okasha” using the purple/blue accent treatment
- subtitle: “AI Solutions Architect • Full-Stack Systems Specialist”
- concise architecture/AI description
- professional portrait card on the right
- Explore Projects CTA
- Resume CTA
- location / remote / education metadata

Stats row:
- 5,700+ Vector Embeddings Shipped
- <50ms Real-Time RAG Latency
- 10+ Production Systems
- 100% On-Device Neural Models

Below hero:
- featured project preview
- technology highlights
- experience preview
- CTA section

## PAGE 2 — ABOUT

Title:
“About Muhammad Okasha”

Subtitle:
“Bridging cutting-edge Generative AI research, on-device edge intelligence, and resilient software systems.”

Main content:
- Computer Systems Engineering background
- Enterprise Generative AI
- Multimodal RAG
- On-device neural/edge inference
- low-latency, privacy-first architecture philosophy
- academic foundation

Use the same split-card structure shown in the reference.

## PAGE 3 — PROJECTS

Title:
“Featured Projects”

Create a polished project grid.

Projects:
1. AURA — AI Deep Audit & Bug Resolution Engine
2. PRISM — AI Project Analysis & Verification
3. Guardian Skill — AI Security & Guardian System
4. AI Sales & Conversation Suite
5. HR Portal — Employee Management System
6. Other AI/ML Projects

Each project card must contain:
- icon
- category
- title
- one/two-line description
- technology pills
- View Project CTA

Cards should be visually balanced and clickable.

## PAGE 4 — EXPERIENCE

Title:
“Professional Experience & Training”

Use a clean vertical timeline.

Include:
- AI Solutions Architect / relevant professional experience
- Deep Learning BootCamp
- B.E. Computer Systems Engineering
- training and certifications

Show:
- organization
- location
- dates
- responsibilities
- selected achievements

Do not fabricate new employment history or metrics.

## PAGE 5 — SKILLS

Title:
“Skills & Technologies”

Group skills into:
- Programming Languages
- Frameworks & Libraries
- Databases & Storage
- DevOps & Infrastructure
- AI / Machine Learning
- Tools & Others

Use technology pills/cards with icons.

The page should be visually rich without becoming cluttered.

## PAGE 6 — AURA PROJECT DETAIL

Title:
“AURA”
Subtitle:
“AI Deep Audit & Bug Resolution Engine”

Explain the system as an AI-powered software auditing and repair platform.

Core workflow:

Software Project
→ Deep Analysis
→ Issue Detection
→ Root Cause Analysis
→ Fix Generation
→ Sandbox Testing
→ Verification
→ Re-audit

Feature cards:
- Deep Analysis
- Automated Fixes
- Self Verification
- Re-audit Loop

Include:
- architecture overview
- screenshots/dashboard preview
- metrics only where actual project data exists
- tech stack
- Demo button
- Source Code button

## PAGE 7 — PRISM PROJECT DETAIL

Title:
“PRISM”
Subtitle:
“AI Project Analysis & Verification”

Focus on:
- project/code analysis
- architecture inspection
- quality checks
- verification
- security/reliability findings
- detailed reports

Use the same project-detail template as AURA, but do not make the two pages visually identical; keep the same design system with different content.

## PAGE 8 — RESUME

Create a dedicated resume page.

Include:
- professional summary
- education
- experience
- skills
- projects
- certifications/achievements
- Resume PDF download CTA
- online resume preview

Keep the page compact and professional.

## PAGE 9 — CONTACT

Title:
“Let’s Work Together”

Two-column desktop layout.

Left:
- short invitation
- Email
- Phone
- Location
- LinkedIn
- GitHub
- social links

Right:
- Name
- Email
- Subject
- Message
- Send Message button

Mobile becomes one column.

## PAGE 10 — 404

Use the same visual system:
- 404
- short message
- Back Home button
- minimal but polished layout

## PROJECT DETAIL TEMPLATE

Create a reusable project-detail component so future projects can be added through data rather than duplicated pages.

Suggested data model:
- slug
- title
- category
- summary
- description
- heroImage
- technologies
- metrics
- features
- architecture
- challenges
- solution
- results
- demoUrl
- sourceUrl

## COMPONENT ARCHITECTURE

Create reusable components:

Navbar
Footer
Container
SectionHeader
GradientText
PrimaryButton
SecondaryButton
StatCard
ProjectCard
TechnologyBadge
TimelineItem
SkillGroup
SocialLinks
ContactForm
ProjectHero
ProjectMetric
FeatureCard
ArchitectureSection
ProjectDetailTemplate

## TECH STACK

Prefer:

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

Use clean component architecture.

Do not add unnecessary dependencies.

## RESPONSIVENESS

Desktop: 1280px+
Tablet: 768–1279px
Mobile: <768px

Requirements:
- no horizontal scrolling
- no overlapping cards
- no broken text
- no tiny unreadable typography
- grids collapse naturally
- navbar becomes mobile-friendly
- buttons remain usable
- images retain aspect ratio

## ANIMATION

Use subtle animations only:
- fade-up on section entrance
- small card hover lift
- border/glow transition
- button hover
- image reveal

Respect prefers-reduced-motion.

Do NOT make the site feel like an animated AI demo.

## ACCESSIBILITY

- semantic HTML
- proper heading hierarchy
- alt text
- keyboard navigation
- visible focus states
- sufficient contrast
- accessible form labels
- reduced-motion support

## PERFORMANCE

- optimized images
- lazy-load non-critical images
- avoid huge client-side bundles
- use Next.js image optimization
- avoid unnecessary re-renders
- keep animations lightweight

## IMPORTANT CONTENT RULES

Do not invent:
- employment history
- degrees
- clients
- revenue
- production metrics
- certifications
- social links
- project results

If a value is not available, use a neutral placeholder that is easy to replace.

## IMPLEMENTATION PROCESS

1. Inspect the existing repository before changing anything.
2. Identify whether a portfolio implementation already exists.
3. Reuse useful existing code instead of unnecessarily rewriting everything.
4. Create/normalize the global design tokens.
5. Build Navbar and Footer first.
6. Build the shared component library.
7. Build Home.
8. Build Projects.
9. Build project detail template.
10. Build AURA and PRISM detail pages.
11. Build About, Experience, Skills, Resume, Contact, 404.
12. Make all routes work.
13. Make the entire website responsive.
14. Run lint/type checks.
15. Run production build.
16. Fix all build/runtime/layout errors.
17. Perform a final UI consistency audit.

## FINAL QUALITY CHECK

Before declaring completion, verify:

- every navigation link works
- every project card works
- every page uses the same container width
- left/right padding is consistent
- no unexpected whitespace
- no overflow
- no broken images
- no console errors
- no TypeScript errors
- no hydration errors
- mobile layout works
- buttons have hover/focus states
- typography is consistent
- colors are consistent
- cards align correctly
- AURA and PRISM detail pages are complete
- Contact form is visually complete
- Resume page is complete
- 404 page exists
- production build succeeds

MOST IMPORTANT:
Do not stop after creating the homepage.
Implement the complete portfolio shown by the supplied references.
Do not replace the reference design with your own interpretation.
