

CLI command

npm create sanity@latest -- --project 84visgb1 --dataset production --template clean

Project ID: 84visgb1

Organization ID: oPuiaGyCa

PRD:

Here’s a **complete Project Requirements Document (PRD)** you can paste into Claude Code to scaffold a Sanity-powered admin panel for your personal site.

---

# 📄 PRD — Admin Panel for Sushant Jain Personal Brand Site

*(Using Sanity Headless CMS)*

### 0) Goal

Add a secure, browser-based admin panel to create, edit, and publish **Journal entries, Essays, Poetry, and Short Stories** for `sushantjain.me`.
Content is stored in **Sanity.io** and rendered by the existing Next.js site.

---

### 1) Functional Requirements

#### Authentication

* Use **Sanity Studio Auth** (Google/GitHub/Sanity email link).
* Only authenticated users can create/edit content.
* Roles:

  * **Admin** (full access)
  * **Editor** (can create/edit but not manage schemas/settings)

#### Content types (Sanity Schemas)

| Type        | Fields                                                                                                                                      | Notes                     |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| **Journal** | title (string), slug (auto), date (datetime), cadence (enum: daily/weekly/monthly), tags (array), excerpt (text), body (rich text/markdown) | For build-in-public logs  |
| **Essay**   | title, slug, date, tags, excerpt, coverImage, body                                                                                          | Tech/philosophy posts     |
| **Poem**    | title, slug, date, form (ghazal/freeVerse/storyPoem), language (hi/ur/en), tags, audioFile (mp3 upload), body (rich text)                   | Supports Hindi/Urdu fonts |
| **Story**   | title, slug, date, tags, excerpt, coverImage, body                                                                                          | Hindi short stories       |

> All schemas include: `publishedAt`, `author` (ref), `seoDescription`.

#### Studio Interface

* Mount **Sanity Studio** at `/studio` in Next.js.
* Navigation inside Studio:

  * Dashboard with “New” buttons for each content type.
  * Document lists (sortable by date).
  * Rich-text editor with live preview for poetry (Devanagari font).
* File uploads:

  * Audio (poems) → Sanity asset store.
  * Cover images (essays/stories) → Sanity asset store.

#### Publishing Flow

* Draft → Publish.
* When publishing:

  * Trigger ISR/On-Demand Revalidation on Vercel (refresh site content).

#### Search / Filtering inside Studio

* Filter by tag, language, cadence, date.

#### Users & Roles

* Use default **Free plan** (20 seats, 2 roles).
* Admin can invite Editors.

---

### 2) Non-Functional Requirements

* Respect **Vercel Hobby limits** (no heavy server functions).
* Studio must run client-side or as a Next.js route.
* Keep Lighthouse ≥90 for Studio (when embedded).
* Hindi fonts loaded only for Poem preview.

---

### 3) Tech Stack

* Next.js 14 (App Router, TS)
* Sanity Studio v3 (`@sanity/cli`, `sanity` package)
* `next-sanity` for data fetching + live preview
* Tailwind for custom Studio theme if needed
* Auth handled by Sanity (no custom login backend)

---

### 4) Architecture & Routing

```
/app/studio/[[...index]]/page.tsx   # Mount Sanity Studio
/sanity.config.ts                   # Studio + schema config
/schemas/
   journal.ts
   essay.ts
   poem.ts
   story.ts
/lib/sanity.client.ts               # read client
/lib/sanity.preview.ts              # preview client
```

---

### 5) UX Flow

1. User visits `/studio`.
2. Sanity login page appears (Google/GitHub/Sanity).
3. After login:

   * See dashboard (counts of drafts/published for each type).
   * Click “New Journal” → opens editor → fill fields → save draft.
   * Click “Publish” → site auto-revalidates page.
4. For poems:

   * Type in rich text block (Hindi font) → upload audio if needed → preview shows formatted poem.

---

---