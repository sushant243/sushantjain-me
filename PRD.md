
## 📄 Final PRD — Sushant Jain Personal Brand Site

### 0) One-liner

Personal brand site for Sushant Jain positioning him as a SaaS marketing authority in progress — featuring Field Notes, Essays, Podcast, Poetry & Short Stories — deployed on Vercel.

---

### 1) Goals

* Position as focused SaaS marketing authority learning/building in public (2025 narrative)
* Publish easily (MDX files) for Journal, Essays, Poetry, Short Stories
* Email capture for weekly Field Notes newsletter
* Clean reading UX, SEO-friendly, RSS
* Free/low-cost hosting (Vercel Hobby)

---

### 2) Audience

**Primary**: SaaS founders, marketers learning growth/marketing craft
**Secondary**: Builders, creators, readers of philosophy/poetry

---

### 3) Information Architecture

```
Home
Journal (Public Journal — build in public field notes)
Essays (Essays and posts — longer SaaS marketing breakdowns)
Podcast (Marketing Insights — short SaaS growth videos)
About
Poetry (Ghazals & poems)
Short Stories
Subscribe to newsletter (header CTA + inline forms)
```

**Note**: Start Here section removed. Homepage hero serves as introduction.

---

### 4) Homepage Layout

**Header**
* Logo/Name: "Sushant Jain" (top left)
* Nav: Journal · Essays · Podcast · About
* CTA: "Subscribe to newsletter" (top right)

**Hero Section**
* H1: "Field Notes from a Builder Learning Marketing"
* Bio introduction:
  - "Hey, I'm **Sushant Jain** - founder of **Lessgo.ai**"
  - 14 years building, 7 years dev, 7 years B2B sales
  - Handful of side ventures (life coaching, ecommerce, internet marketing)
  - Never went all-in on own product until now
* Narrative:
  - "Lessgo.ai is my first full-time bet. Treating marketing like a reporter on assignment"
  - "These are my field notes from the journey — **the experiments, frameworks, wins, and flops**"
  - "If you're building something that matters and figuring out how to get it in front of people, come along for the ride."
* **Email capture**: Rounded input field + coral "Subscribe" button
* Subtext: "Get weekly Field Notes + Short, honest lessons from marketing Lessgo.ai in public."

**SaaS Marketing Field Notes Section**
* Heading: "SaaS Marketing Field Notes"
* Subheading: "Marketing isn't theory. It's a daily craft. Every day, I document what I'm learning while growing Lessgo.ai: what I'm testing, studying, and refining."
* 3-column card grid:
  1. **Public Journal** - Daily reflections, experiments, honest lessons from building (no polish, just real progress)
  2. **Marketing Insights podcast** - Short podcast-style videos breaking down real SaaS growth experiments and insights
  3. **Essays and posts** - Longer breakdowns: book notes, expert interviews, field-tested SaaS marketing frameworks

**Earlier Builds Section**
* Heading: "Earlier Builds (and the Lessons They Left Behind)"
* Intro: "Before Lessgo.ai, I built many things: life-coaching academy, ecommerce stores, online ventures. Most didn't scale. Some never launched. But each one taught me something about how ideas succeed (or don't)."
* Projects listed:
  - **Life Mastery Academy** (🎓) - 10-part, 5-hour video course created years ago but never released. Not for lack of value, but because didn't understand marketing yet. (Early attempt at teaching transformation.)
    - Link: → [Watch Life Mastery Academy]
  - **Transform Your Career** (📘) - Ebook people loved, but used as lead magnet for something unrelated. Taught what happens when messaging and product don't align. Those early builds shaped current obsession: mastering the craft of marketing.
    - Link: → [Read Transform Your Career]

**Art & Words Section**
* Heading: "Art & Words"
* Intro: "Beyond marketing and building, I write."
* Content:
  - "Seventy ghazals. A few short stories. Occasional essays on philosophy and growth."
  - "The same curiosity that drives my marketing fuels my writing: the search for rhythm, emotion, and truth. Marketing is storytelling with an outcome."
  - "Poetry is storytelling without one."
  - "Both demand care — for language, and for people."
* Links: → [Read Ghazals] | [Short Stories]

**Footer CTA**
* "I'm building Lessgo.ai, learning marketing in public, and leaving field notes along the way. Join the ride."

**Footer**
* Social links (Twitter, LinkedIn, YouTube)
* Copyright

---

### 5) Page Templates

* Home (above — storytelling-driven homepage)
* Journal index + post (build in public field notes)
* Essays index + post (long-form SaaS marketing content)
* Podcast index + video embeds (short SaaS growth videos)
* Poetry index + poem (ghazals, Hindi/Urdu)
* Short Stories index + story (Hindi stories)
* Life Mastery Academy (legacy video course archive)
* Transform Your Career (ebook/lead magnet page)
* About
* Subscribe (standalone newsletter signup)

---

### 6) Content Model (MDX frontmatter)

*(unchanged from previous draft, covers journal, essays, poetry)*

---

### 7) Components

| Component            | Description                                       |
| -------------------- | ------------------------------------------------- |
| `Header`             | Nav with "Subscribe to newsletter" CTA            |
| `Hero`               | Storytelling hero with headline + bio + email CTA |
| `EmailCaptureForm`   | Rounded input + coral Subscribe button            |
| `ContentCardGrid`    | 3-column card grid (Journal, Podcast, Essays)     |
| `ProjectCard`        | Earlier builds project cards                      |
| `PostList`           | Section indexes                                   |
| `Prose`              | Default MDX renderer                              |
| `Poem`               | Stanza-friendly typography (Hindi/Urdu)           |
| `SubscribeForm`      | ConvertKit embed                                  |
| `Footer`             | Footer CTA + social links + copyright             |

---

### 8) Typography & Hindi

* Fonts: **Inter** (UI, essays), **Noto Serif Devanagari** (poetry/stories).
* Poetry line-height \~1.9; disable hyphenation.

---

### 9) Tech Stack

Next.js 15.5.3 + TS, Tailwind CSS v4, Turbopack, MDX, Contentlayer/Velite, @vercel/og, ConvertKit.

---

### 10) Routing & Files

```
/app/page.tsx                       # Home (storytelling-driven)
/app/about/page.tsx
/app/subscribe/page.tsx
/app/journal/page.tsx               # Public Journal index
/app/journal/[slug]/page.tsx
/app/essays/page.tsx                # Essays index
/app/essays/[slug]/page.tsx
/app/podcast/page.tsx               # Podcast/video index
/app/podcast/[slug]/page.tsx
/app/poetry/page.tsx                # Poetry index
/app/poetry/[slug]/page.tsx
/app/stories/page.tsx               # Short stories index
/app/stories/[slug]/page.tsx
/app/life-mastery-academy/page.tsx  # Legacy video course
/app/transform-your-career/page.tsx # Legacy ebook
/rss.xml/route.ts
/sitemap.xml/route.ts
```

---

### 11) SEO & Social

* Per-post metadata + canonical.
* Structured data: Article / CreativeWork / Poem.
* OG image via `@vercel/og`.

---

### 12) Analytics & Privacy

Vercel Analytics (Hobby), minimal cookies, privacy line on subscribe page.