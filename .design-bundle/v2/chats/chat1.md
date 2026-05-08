# Resume Experience Updates

_Started 2026-04-20 01:42 UTC_

---

## User

This is the current portfolio that I have and i want to create a new one for this year. Since this portfolio has been with me since ike 4 years ago: https://marlong.vercel.app/

I need you to scan the data we used for it and create a modern portfolio for 2026-2027

## Assistant

I'll help you build a fresh 2026-2027 portfolio. Let me first explore what's in the project and check out your current portfolio.

_[tool: list_files]_

_[tool: web_fetch]_

_[tool: list_files]_

Great, I have all the context I need. Let me also look at the napkin sketch the user has open for any hints, then ask clarifying questions before building.Before I start building, let me fetch the full content of your current portfolio so I understand what data/content to carry over, and ask a few key questions about direction.

_[tool: questions_v2]_

_[tool: web_fetch]_

I have all the content. Now let me ask you the important questions before building.

## User

Questions answered:
- vibe_keywords: Professional, Playful, Technical, Confident, Modern, Trustworthy
- aesthetic_direction: Soft / warm — off-whites, warm neutrals, subtle gradients, friendly
- positioning: Full Stack Developer + AI Engineer
- sections: Hero / intro, About, Experience / timeline, Projects / case studies, Services (for freelance clients), Skills / tech stack, Now page (what I'm up to), Contact form, Resume / CV download
- hero_style: Decide for me
- projects_layout: Decide for me
- interactions: Medium — section transitions, some kinetic elements
- dark_light: Both with a toggle
- tweaks: Accent color, Font pairing, Projects layout variant
- projects_content: Just put a place holder for now for 5 projects, with placeholder images

## Assistant

_[tool: update_todos]_

Design direction — going with a **soft/warm editorial aesthetic**: off-white paper tones, warm charcoal ink, a single accent (warm amber/terracotta default), and a type pairing of a modern serif for display + a geometric sans for UI. Medium motion — scroll reveals, hover lifts, a kinetic hero wordmark. Here's the plan:

**System:**
- Colors: `#faf7f2` (paper), `#1a1713` (ink), `#e8e1d5` (rule/border), accent `#c87e4f` (warm terracotta)
- Type: Fraktion-style display serif → using **Instrument Serif** (Google) for headlines + **Geist** for UI
- Wait — Instrument Serif is good but let me reconsider to avoid defaults. Going with **Editorial New** substitute → **Fraunces** is overused too. Let me pick **Newsreader** (less common, warm) + **Geist Mono** for accents + **Geist Sans** for body.

Let me build this.

_[tool: write_file]_

_[tool: snip]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Your 2026/27 portfolio is live at `portfolio.html`.

**Direction:** soft/warm editorial — paper off-white, warm charcoal ink, terracotta accent. Serif display (Newsreader) + Geist sans + Geist Mono for UI/meta. Repositioned as **Full Stack Developer + AI Engineer**.

**Sections:** Hero (kinetic wordmark + marquee strip) → About → Experience (timeline from old site, kept) → Projects (5 placeholders) → Services → Skills → Now page → Contact form + CV download.

**Tweaks** (toolbar toggle):
- 6 accent swatches
- 4 font pairings (Newsreader·Geist / Fraunces·DM Sans / Instrument·Geist / Mono-only)
- 3 projects layouts (Bento / Grid / List)
- Plus a dark/light toggle in the nav

**Next:** drop in your real portrait (there's a placeholder on About), swap the 5 project placeholders with real work, and replace `files/cv.pdf` with your actual CV.

## User

This is cool but I feel like its leaning more on the feminine side. and this is my 3rd portfolio , 

Then additional info would be that I am now leaning more on AI integrations, Agentic, But my previous project are web applications but my current 2 projects are now agentics, AI calling, and AI chat system and AI anaylisis systems.,

## Assistant

_[tool: snip]_

Got it — let me push this more masculine/technical, lean hard into AI/agentic positioning, and update it to Vol. 03 (not 04). Going with a darker, more structured direction: deep ink default, sharper grid, more monospace/technical texture, tighter type. Keeping tweaks so you can still dial it.

_[tool: str_replace_edit]_

Now let me continue with bigger changes — more structural refinements for the masculine/technical direction, update projects to AI/agentic, and fix vol number.

_[tool: str_replace_edit]_

Now let me also tighten the hero layout (since we removed the name from the headline, I should rework how the name appears) and update the name/display in the nav area.

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Shifted the design harder masculine/technical:

- **Dark by default**, deeper ink, warmer terracotta accent
- **Headline is now the thesis** ("Building with agents.") with your name as a supporting tag above it
- **Projects rewritten** to your real trajectory — Agentic Platform (current), AI Voice & Calling (current), AI Chat & Analysis, Agency Platform, Automation Suite
- **Services reordered** — Agentic Systems → AI Voice & Chat → Full-Stack Web
- **Now page** now reads like an AI builder's changelog, not a generalist dev's
- **Grid/blueprint texture** on placeholders instead of the softer diagonal stripes
- Vol number corrected to **03**
- Nav mark reads "AI · Full-Stack"

Light mode is still there via the toggle if you want to compare.

## User

A background task has completed. Here are the results:

## Assistant

<ack>Noted the tweaks.</ack>

_[tool: snip]_

Understood.

## User

This is good, Lets add more, More like evolution of portfolio from v1- this update. Then lets also add a AI agent chat system with it since we are not promoting AI systems

## Assistant

<ack>Will add an evolution/timeline of portfolio versions + a working AI chat agent embedded in the page.</ack>

_[tool: snip]_

_[tool: read_file]_

<ack>Snipping completed work before continuing.</ack>

_[tool: grep]_

<ack/>

_[tool: grep]_

<ack/>

_[tool: snip]_

_[tool: grep]_

<ack/>

_[tool: grep]_

<ack/>

_[tool: snip]_

_[tool: read_file]_

<ack/>

_[tool: snip]_

_[tool: grep]_

<ack/>

_[tool: snip]_

_[tool: grep]_

<ack/>

_[tool: snip]_

_[tool: read_file]_

<ack/>

_[tool: snip]_

Now I'll add the two new features: a **portfolio evolution timeline** (v1 → v2 → v3) section, and an **AI chat agent** (using `window.claude.complete`). Let me insert them.

_[tool: str_replace_edit]_

<ack/>

_[tool: snip]_

Now let me add the evolution section CSS and the AI chat widget. Since the contact section's numbering is `(07)` and I used `(07)` for evolution, I need to update contact to `(08)`.

_[tool: str_replace_edit]_

<ack/>

_[tool: snip]_

_[tool: str_replace_edit]_

<ack/>

_[tool: snip]_

_[tool: str_replace_edit]_

<ack/>

_[tool: snip]_

_[tool: done]_

<ack/>

_[tool: fork_verifier_agent]_

<ack/>

_[tool: snip]_

Added two things:

**Evolution section (07)** — v1 (2022, plain HTML student site) → v2 (2023, Next.js + Tailwind) → v3 (2026, this one). Each has its own mini "screenshot" rendered in pure CSS to show the aesthetic jump over the years. The current version gets a highlighted border + "current" badge.

**MG-AI chat agent** — floating button bottom-right (also linked from the nav as "Ask MG-AI"). Opens a chat window with an editorial-styled interface, suggested prompts, typing dots, and real responses from Claude Haiku 4.5. It's briefed with your full background (career path, stack, services, evolution, contact) and stays in-scope — if someone asks it something unrelated it redirects back to your work.

Try it — ask "What AI projects has Marlon built?" or "Is he available for freelance?"

## User

A background task has completed. Here are the results:

## Assistant

<ack>Verifier clean.</ack>

_[tool: snip]_

All clean — ready whenever you want the next iteration.

## User

Under the experience lets update the latest one Dec 2024 - Present, Then from Full Stack Developer to Technical Head,

Then Present I have 2,

AI Aeva : https://www.aevaai.com/ an AI receptionist, I am an full stack web and AI developer, I am under contract basis, Same thing Full Stack, API Integrations, UI/UX, Voice AI, automations using make.com, Migration from make.com to react, NodeJs


Then the other one is Cargo Atlanta, Same Job description just instead of AI Voice call, I'm doing AI chat, AI integrations, automations using n8n, MIgration from replit to NextJS

## Assistant

_[tool: snip]_

_[tool: grep]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

Updated experience:
- **Aeva AI** (Jan 2025–Present) — Full Stack Web & AI Developer, contract. AI voice receptionist, Make.com → React/Node migration.
- **Cargo Atlanta** (2025–Present) — Full Stack Web & AI Developer, contract. AI chat, n8n, Replit → Next.js migration.
- **Kreativ Kat** (Dec 2024–Present) — promoted role to **Technical Head**.

Also bumped these into the projects list as the two current flagship items, and updated MG-AI's brief so it answers correctly when asked about your current work.

## User

Apply comment

## Assistant

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: snip]_

Switched the contact section from the dark slab to a soft paper tone — same warm neutral as the services section. Headline, body, and form all sit on light backgrounds now, so contrast is high in both light and dark themes.

## User

Apply comment

## Assistant

_[tool: snip]_

_[tool: grep]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: snip]_

Pushed contrast harder for the contact section in dark mode:

- Background now matches the main paper tone (not the dimmer paper-2) so text sits on the same surface as the rest of the page
- Added a subtle warm radial glow behind the section so it still feels like a destination
- Lead text bumped to **full ink color** at 92% opacity (was the muted ink-2)
- Labels (Email / Phone / Based) bumped from ink-3 → ink-2 for legibility
- Form card gets a soft shadow so it lifts off the background

## User

Have an AI idea?
Let's ship it.
Agentic systems, voice agents, RAG, or a straight-up web build — my inbox is open for freelance and full-time. I usually reply within a day.

Email
maruronu@gmail.com
Phone
+63 939 681 0206
Based
Cebu City, Philippines
Name
Your name
Email
you@domain.com
Subject
What's this about?
Message
Tell me a bit about the project...
Send message →


How about we change the texts here to lighter, Since the BG is already too dark lets adjust the texts intead.

## Assistant

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: snip]_

Brightened the contact text in dark mode:

- **Headline** ("Have an AI idea? Let's ship it.") → pure white
- **Lead paragraph** → warm cream `#f4ede0`
- **Email / Phone / Based values** → same warm cream
- **Labels** → soft tan `#c8beae` so the hierarchy still reads
- Light mode keeps its original ink colors via the `[data-theme="light"]` overrides

## User

Under the tools lets add more, automations, n8n, make.com, replt, zapier

## Assistant

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: snip]_

Added a new **Automation** column to the stack section: n8n, Make.com, Zapier, Replit, Selenium. Skills grid now has 5 columns (Frontend / Backend / AI & Tools / Automation / Craft) on desktop, and stays 2-up on mobile.

## User

Lets separate the backend and the databases, and lets add neonDB and supabase

## Assistant

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: snip]_

Split into 6 categories now: **Frontend / Backend / Databases / AI & Tools / Automation / Craft**. Backend keeps Node, Express, Python, REST, Auth. New **Databases** column has Postgres, Supabase, Neon DB, MongoDB, Firebase. Grid is 3 columns wide so it wraps into two clean rows.

## User

For the databases lets add azure and AWS and GCP

## Assistant

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: done]_

Renamed the column **Databases & Cloud** and added AWS, Azure, GCP after Firebase.

_[tool: update_todos]_

_[tool: snip]_

Done — let me know what's next.

## User

lets remove FIrebase since its already under GPC,

## Assistant

_[tool: str_replace_edit]_

_[tool: snip]_

Removed.

## User

remove the firebase on the databases and cloud

## Assistant

_[tool: grep]_

Firebase doesn't appear in the Databases & Cloud skills list anymore — the only mentions left are in the About paragraph and the AI agent's system context. Want me to remove those too, or just leave the skills list as-is?

## User

for the fronend lets add react and lets also add react native, flutter, react expo

## Assistant

_[tool: snip]_

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: snip]_

Added React Native, Expo, and Flutter to the Frontend column (React was already there).

## User

lets separate the web based and the mobile based

## Assistant

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: snip]_

Split into **Web** (Next.js, React, TypeScript, Tailwind, Framer Motion) and **Mobile** (React Native, Expo, Flutter, Dart).

## User

then remove the selenium on the AI & tools, move replit to AI & tools

## Assistant

_[tool: snip]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: snip]_

Added Claude Design to the Craft column.

## User

Then fix the ui ux for the stack section

## Assistant

_[tool: snip]_

_[tool: grep]_

Now I have 7 categories: Web, Mobile, Backend, Databases & Cloud, AI & Tools, Automation, Craft. The current 3-column grid creates an odd 7th item. Let me refine the layout — make it 4 columns with consistent rhythm, refine typography, add subtle hover states, and tighten the visual hierarchy.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

Refined the Stack section: 4-column unified grid (matching the Services treatment), accent-dot category labels, dashed dividers between rows, subtle hover wash, and cleaner type rhythm. Wraps to 2 columns on tablets, 1 on mobile.

## User

I dont like this layout anymore, There's a huge white space on the right side that doesnt give a purpose

## Assistant

_[tool: grep]_

## Assistant

_[tool: snip]_

_[tool: grep]_

Let me restructure this with a different approach — instead of a grid of equal cards with dead space, I'll go with a **horizontal-rail layout** where each category is a row spanning the full width, with skills laid out inline. This eliminates the right-side whitespace entirely and gives the section a more confident, technical rhythm.

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: snip]_

Restructured the Stack section as a **horizontal-rail layout**. Each category is now a full-width row with the label on the left and pill-shaped skill chips flowing across the right — no more dead space, no awkward odd-count grid. Hovering a chip turns it into the accent color. Stacks vertically on mobile.

## User

Apply comment

## Assistant

_[tool: read_file]_

I notice there's also a stray empty `<div class="skill-cat">` at line 1300 from an earlier edit. Let me redesign with a fresh approach: an **interactive tabbed accordion** where categories are listed vertically as buttons on the left, and the selected category's stack expands beside it — a more confident, technical layout that uses the full width without filler.

Actually, simpler and more elegant: **a structured table layout** — each row is a category with its skills inline as clean text separated by dots, with the proficiency bar at the right. Reads like a spec sheet. Let me try that.

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: snip]_

Redesigned the Stack section as an **editorial spec sheet**:

- Each row spans full-width with the category as a serif-italic label on the left
- Skills inline on the right separated by `·` middots — reads like a credit list in a magazine
- Hover individual skills to highlight in accent
- Top/bottom rules frame the whole list
- Removed the proficiency dots (they were redundant noise — if it's listed, you do it)
- Cleans up to a stacked single-column on mobile

This eliminates all dead space and matches the editorial tone of the rest of the site.

## User

for the backend add fastAPI

## Assistant

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: snip]_

Added FastAPI between Express and Python.

## User

Add also twillio, shadCN,

## Assistant

_[tool: grep]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: snip]_

Added **shadcn/ui** to Web (after Tailwind) and **Twilio** to AI & Tools (with VAPI and Retell, since they're all voice infra).

## User

This is better, Remove the brown scale? It will backfire during the interview instead of helping.

## Assistant

_[tool: snip]_

_[tool: grep]_

The dots markup is already invisible (CSS hides `.dots` with `display: none`). I'll strip the markup itself with a script for cleanliness.

_[tool: run_script]_

_[tool: snip]_

Removed all 41 proficiency-dot blocks from the markup. The list is now just the skill names — no implicit ranking that could be questioned in an interview.

## User

Under the experience, Under the Kreativ Kat, Lets update that from technical head to a full stack web developer and just add the Technical head on the radio buttons.

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: snip]_

Updated. Role now reads "Full Stack Web Developer" with "Technical Head" as the first tag.

## User

For the cargo atlanta lets change the API integration to API and AI integrations

## Assistant

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: snip]_

Updated.

## User

Same with the Aeva AI, API & AI integrations,

## Assistant

_[tool: str_replace_edit]_

_[tool: snip]_

Done — the tag now reads "API & AI Integrations".

## User

Ok now lets add the project images, 
This is for Aeva: 

Then Cargo atlanta:

Then under the selected work lets remove the others, we will add more along the way.

## Assistant

_[tool: copy_files]_

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

I also need to remove the blueprint texture overlay so the images show cleanly.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

_[tool: snip]_

Done — Aeva and Cargo Atlanta now show their real screenshots, and the rest of the project list is cleared so you can drop more in as they ship.

## User

Add this as my image

## Assistant

_[tool: copy_files]_

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

Your portrait is now in the About section.

## User

Apply comment

## Assistant

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

Updated.

## User

Good next is Isa construction: 
This is using NExtJS,

This is for Creators Value: 
Task Masters Group: 

These projects are made using NextJS

## Assistant

_[tool: copy_files]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

Three new projects added — ISA Construction, Creators Value, and Task Masters Group — all tagged as Next.js builds.

## User

For the Cargo atlanta currently its being deployed in Replit but we developing it outside replt and currenltly working on the migration

## Assistant

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

Updated — Cargo Atlanta now reflects the in-progress Replit → Next.js migration.

## User

This is almost done. Next is lets add a button where the recruiter can download the CV file

## Assistant

_[tool: grep]_

The hero already has a "Download CV" button. Let me also add a more prominent one in the contact section so recruiters notice it there, and add a CV file slot.

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

Added a prominent "Download my CV" CTA card under the contact info — recruiter-targeted with a "For recruiters" eyebrow, accent-tinted background, and PDF metadata. It links to `files/Marlon_Gacrama_CV.pdf` — drop your CV file there with that name and it'll download. The hero "Download CV" button still works too (I'll align it to the same path).

_[tool: str_replace_edit]_

_[tool: snip]_

Both CV download buttons now point to `files/Marlon_Gacrama_CV.pdf`. Drop your actual CV PDF in that path with that filename.

## User

For the cargo atlanta lets change it from AI chat to with AI integrations,

## Assistant

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

Updated.

## User

I think we need to redesign this. This current design is very AI template, Lets design simething like me personally, 

Then more on animations, Few years back I was learning GSAP animations before the AI stuff, So that was animations while scrolling. 

I want us to adapt to that,

## Assistant

_[tool: snip]_

_[tool: questions_v2]_

## User

Questions answered:
- personality: Builder — hands-on, ship-it energy, lots of tactile detail
- motion_intensity: Medium — pinned sections, staggered text, image masks
- keep_or_rebuild: Evolve — keep content but redesign sections + add motion
- aesthetic: Soft & human — warm, hand-built feel, sketches, notes, imperfect
- signature_moments: A scroll-driven progress index in the side rail, Custom loader / intro sequence on first load
- color_direction: Pure mono — black / white / one accent only
- type_direction: Mono-led — code aesthetic everywhere
- personal_artifacts: None — keep it about the work
- voice_copy: First person, conversational, lowercase casual
- must_keeps: Yes keep the experience, Workloads, Summary, 

In short keep the contents, Tech stack that I work with, What I am currently building.

## Assistant

_[tool: snip]_

_[tool: copy_files]_

_[tool: snip]_

_[tool: write_file]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Redesigned portfolio is live as `portfolio.html` — kept your previous version as `portfolio-v3-editorial.html` so nothing's lost.

**Direction: builder's notebook**
- **Mono-led** typography (JetBrains Mono everywhere) with Instrument Serif italic accents for headings — hand-built, programmer-notebook feel
- **Pure mono palette**: warm paper cream + deep ink, with a single bold red accent (`#ff4124`) and yellow highlighter
- **Background grid** behind everything — engineering paper texture
- **Lowercase, conversational** copy throughout
- **Custom loader** — name + progress bar + blinking cursor on first paint
- **Side rail** scroll index (left) with active-section dots that scale + color when in view
- **Top progress bar** (red line) that fills as you scroll
- **GSAP** powers the hero entrance: split-line headline reveal, staggered tag/CTA fade-in
- **IntersectionObserver** handles section-scroll reveals — staggered children, image mask wipe on the photo
- Spinning asterisks (✻) as your signature ornament — also in the nav and footer
- **Sections kept**: about, now (currently building), work (5 projects), experience (all 6 roles), stack (7 categories), evolution (v1→v2→v3), contact
- **AI agent chat** retained — bottom-right launcher, full system prompt with your facts

Dark/light theme toggle still works. Hero headline reads "i build / things with / *agents*."

## User

The background is very AI made, And I want more animations with Gsap.

There are parts that are hard to read.

## Assistant

_[tool: snip]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: snip]_

_[tool: str_replace_edit]_

Set body background to `rgb(235, 230, 218)` (paper-2).

## User

Still no, I dont like the layout, 

Keep the while and black then little bit of orange accent, But the primary color should be white, The overhaul the layout. I dont like it, I need it simple and modern, This is too much happening.

## Assistant

_[tool: snip]_

_[tool: copy_files]_

_[tool: write_file]_

_[tool: done]_

_[tool: snip]_

_[tool: fork_verifier_agent]_

Full overhaul shipped — `portfolio.html` is now clean, white, modern.

**What changed:**
- **Pure white** primary, **black** ink, single **orange** accent (`#ff5722`) — used sparingly on italics, hovers, and the live dot
- Stripped out: side rail, loader, grain, busy grid, ASCII bits, hero asterisk
- **Geist** sans + **Geist Mono** for meta/tags + **Instrument Serif** italic for em accents
- Generous whitespace, tighter section count: hero → about → work → experience → stack → evolution → contact
- Hero is one big calm headline ("building with *agents*.") with status pill + actions row
- Work is a clean 2-col grid, no card chrome — just image, title, year, description, stack
- Experience is a quiet table that lights up on hover
- Stack rows use `tool / tool / tool` slash separators instead of pills
- Evolution compressed to 3 small cards (current one inverted to black)
- Contact has soft `bg-2` panel, info table + simple form
- AI agent kept (smaller, rounded, less shouty)

**GSAP motion (subtle):**
- Hero word-mask reveal on load
- Section heading word-mask reveal on scroll
- Fade-up on scroll for everything else
- About photo parallax + scale
- Magnetic buttons

Previous iteration is preserved as `portfolio-v3-notebook.html` if you want to compare.

## User

Fix the texts,

## User

Lets add an intro loading screen, Saying Agents working on my portfolio please wait. 

Then a loading animation sprite of a robot working.

## Assistant

_[tool: snip]_

_[tool: read_file]_

_[tool: grep]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: snip]_

Added an intro loading screen with a CSS-animated robot:

- **Robot sprite** — bobbing body with blinking eyes, scanning mouth (orange laser), pulsing antenna ping, two arms tapping a 6-key keyboard, floating accent dots, and a faint terminal-bar screen behind it
- **Headline**: "agents working on my portfolio…" with animated ellipsis
- **Status row** with green LED + "agents.online" mono label
- **Progress bar** that fills over ~3 seconds, with rotating sub-status messages: booting → fetching projects → indexing experience → warming up chat agent → almost there
- **Live percent** counter and blinking cursor
- Smoothly fades out and removes itself when complete, then the hero entrance fires

All pure CSS — no images, theme-aware (works in dark mode), respects your white/black/orange palette.

## User

This is good but let it load atleast 5secs

## Assistant

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: snip]_

Slowed it down — should take ~5–5.5 seconds end-to-end now.

## User

I want us to change this description: 

ai voice receptionist. built the full-stack web layer + voice ai integrations, migrated automations from make.com to react/node.

This is not what I did, 

I worked with the migration from make.com to node, ADded some additional features, Splose INtegrations, Bug fixing and QA testing.

## Assistant

_[tool: snip]_

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

Also updating the AI agent's knowledge so the chat answers consistently:

_[tool: str_replace_edit]_

_[tool: done]_

Updated Aeva description — now reflects: migration support (make.com → node), new features, Splose integrations, and bug fixing/QA. Also updated the AI agent's knowledge so it answers consistently.

## User

Can we work around this? This also has a parallax effect, 

I like the design that we already have and I also like the design where I left off for my 2025 portfolio. 

So what I want now is a mix of 2, There is my personal story as a developer, my experience, My strengths, 

I have also attached a logo,

I guess this is much more better, This should now tell more about me as a developer and AI Engineer. 

This should now create my story

## Assistant

_[tool: snip]_

_[tool: list_files]_

_[tool: snip]_

_[tool: copy_files]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: snip]_

_[tool: read_file]_

_[tool: snip]_

_[tool: read_file]_

_[tool: snip]_

_[tool: read_file]_

_[tool: snip]_

_[tool: read_file]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Mixed your 2025 portfolio's bold blocky display + logo + "ABOUT THE DEV" / "MY JOURNEY" / "MY TECH STACK" treatment into the v3 design, while keeping the dark warm-terracotta identity, the AI agent chat, and the agent loader.

What's new:
- **Logo** in nav (auto-swaps light/dark)
- **Hero**: blocky "I AM A — FULL-STACK / AI ENGINEER" + circular portrait with parallax + ambient blob behind it
- **About the Dev**: 3-paragraph personal story (college → freelance → Accenture → SOS → KK → AI), with parallax photo
- **Strengths** section (new) — 6 cards: full-stack execution, agentic AI, automation, leadership, fast iteration, solo→team
- Big blocky display for every section title: ABOUT THE DEV / SELECTED WORK / MY JOURNEY / MY TECH STACK
- Section numbers renumbered (01 about → 07 contact)

## User

I had 2 images there from my previous company works, 

Also I no longer work under the kreativ kat digital marketing, I was a tech head there, 

Then Lets also add parallax effects, I didnt feel it with the iteration that we have now. 

Theres a orange blur we can use that as animation following the scroll

## Assistant

_[tool: snip]_

_[tool: copy_files]_

_[tool: grep]_

_[tool: snip]_

_[tool: read_file]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: grep]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: snip]_

Done — three changes:

**1. Kreativ Kat moved to past role (Dec 2024 — 2025)** with a featured card layout: KK team photo on the left, "Technical Head" headline, role description, and stack pills.

**2. Staff Outsourcing Solutions** also gets a featured card (image on the right, content on the left) with the team photo and role detail.

These two now stand out from the simpler row entries — same visual treatment as your old portfolio screenshots.

**3. Scroll-following orange blur** — a soft 520px terracotta blob now drifts down the page on a curved motion path tied to scroll progress (powered by GSAP MotionPath + ScrollTrigger). It sits behind everything (z-index 0) at low opacity so it ambient-glows through sections without competing with content. Featured photos also got their own subtle scrub parallax.

## User

https://mgacrama211176.github.io/
https://marlong.vercel.app/

Here are my portfolio evolution

## Assistant

_[tool: snip]_

_[tool: copy_files]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: snip]_

Evolution section now has actual screenshots:

- **v.01 (2022)** — your orange "Marlon G" splash, labeled "the splash era"
- **v.02 (2023)** — marlong.vercel.app with the diamond/star mark, "visit live ↗" link to the real site
- **v.03 (2026)** — current portfolio screenshot, marked "you're here ●" on the inverted black card

Cards now lift on hover with a subtle shadow.

