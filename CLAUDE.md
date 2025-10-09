# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal brand website for Sushant Jain featuring Journal, Essays, Poetry & Short Stories. Built with Next.js 15.5.3, TypeScript, and Tailwind CSS v4, deployed on Vercel.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server with Turbopack
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Architecture

**Framework**: Next.js 15 App Router with TypeScript
- Using Turbopack for faster builds
- Tailwind CSS v4 with PostCSS
- Font optimization with Geist fonts

**Content Structure** (as per PRD.md):
- `/app/page.tsx` - Homepage with hero and explore grid
- `/app/journal/` - Public journal (build in public)
- `/app/essays/` - Long-form essays
- `/app/poetry/` - Hindi/Urdu poetry and ghazals
- `/app/stories/` - Short stories in Hindi
- `/app/start-here/` - Site overview
- `/app/about/` - About page
- `/app/subscribe/` - Newsletter signup

**Planned Features**:
- MDX content management (Contentlayer/Velite)
- RSS feed generation
- OG image generation with @vercel/og
- ConvertKit newsletter integration
- Hindi typography with Noto Serif Devanagari

## Import Paths

Use `@/*` alias for src imports:
```typescript
import Component from '@/app/components/Component'
```

## Current Status

Fresh Next.js installation with basic setup. Implementation needed for:
1. Content sections (Journal, Essays, Poetry, Stories)
2. MDX integration for content management
3. Homepage with explore grid
4. Hindi/Urdu typography support
5. Newsletter and RSS functionality