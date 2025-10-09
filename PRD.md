
## 📄 Final PRD — Sushant Jain Personal Brand Site

### 0) One-liner

A fast, writer-friendly personal site for Sushant Jain — featuring Journal, Essays, Poetry & Short Stories, with optional videos/books — , deployed on Vercel.

---

### 1) Goals

* Publish easily (MDX files) for Journal, Essays, Poetry (Hindi/Urdu), Short Stories.
* Clean reading UX, SEO-friendly, RSS, newsletter.
* Free/low-cost hosting (Vercel Hobby).

---

### 2) Audience

Founders, creators, readers of tech history/philosophy, lovers of Hindi/Urdu literature.

---

### 3) Information Architecture

```
Home
Start Here
Journal
Essays
Poetry
Short Stories
Academy (video lessons – later)
About
Subscribe
```

---

### 4) Homepage Layout

**Header**

nav: Subscribe to new posts · About me. Free video course · My Book


**Hero**

* H1: “Welcome, friend”
* Paragraph:

  > I’m Sushant Jain (link with about me page) and this is my home on the internet.
  > These days, I’m building a startup called Lessgo.ai (link to lessgo.ai)


**Explore grid** (cards)

1. Start Here → overview of the site /start-here
2. Video Course: Life Mastery with Sushant Jain /video-course
3. Free book: *Transform Your Career* → download /TYC-book
4. Poetry (Ghazals & Poems in Hindi) → /poetry
5. Short Stories in Hindi → /stories
6. Public Journal (build in public) → /journal
7. All Essays & Posts → /blog

**Footer**

* Newsletter signup (if not shown higher)
* Social links (Twitter, LinkedIn, YouTube)
* Copyright

---

### 5) Page Templates

* Home (above)
* Start Here (welcome + cornerstone posts)
* Journal index + post
* Essays index + post
* Poetry index + poem
* Short Stories index + story
* Academy (YouTube playlist embeds)
* About
* Subscribe

---

### 6) Content Model (MDX frontmatter)

*(unchanged from previous draft, covers journal, essays, poetry)*

---

### 7) Components

| Component       | Description                |
| --------------- | -------------------------- |
| `Header`        | Sticky top nav             |
| `Hero`          | Greeting + intro           |
| `ExploreGrid`   | 2–3 column card grid       |
| `PostList`      | for section indexes        |
| `Prose`         | default MDX renderer       |
| `Poem`          | stanza-friendly typography |
| `SubscribeForm` | ConvertKit embed           |
| `Footer`        | social + copyright         |

---

### 8) Typography & Hindi

* Fonts: **Inter** (UI, essays), **Noto Serif Devanagari** (poetry/stories).
* Poetry line-height \~1.9; disable hyphenation.

---

### 9) Tech Stack

Next.js 14 + TS, Tailwind, MDX, Contentlayer/Velite, @vercel/og, ConvertKit.

---

### 10) Routing & Files

```
/app/page.tsx                # Home
/app/start-here/page.tsx
/app/about/page.tsx
/app/subscribe/page.tsx
/app/journal/page.tsx
/app/journal/[slug]/page.tsx
/app/essays/page.tsx
/app/essays/[slug]/page.tsx
/app/poetry/page.tsx
/app/poetry/[slug]/page.tsx
/app/stories/page.tsx
/app/stories/[slug]/page.tsx
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