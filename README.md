# Z Design System

Design system repository for Z Protocol.

This repo contains:
- a static preview app for visual review
- implementation and handoff docs
- starter React component code for the shared library

## Structure
- `apps/preview`: static preview of the approved visual language
- `docs`: handoff, registry, snippets, and token documentation
- `packages/ui`: starter React component package

## Local Preview

```bash
cd /Users/mhj/Documents/MH/MHJ-Design/Vibes/Zed/z-design-system
python3 -m http.server 4173 -d apps/preview
```

Then visit [http://localhost:4173](http://localhost:4173).

## Goals
- give product engineers a reusable visual system
- keep spacing, typography, and component naming stable
- reduce route-level styling drift
- make the design system maintainable as the platform grows

## Recommended Stack
- `Next.js`
- `React`
- `Tailwind CSS` or CSS variables mapped from system tokens

## Current Status
This repo is a foundation and handoff package.

The preview is production-grade enough for review.
The React code is starter code and should be expanded component by component.
