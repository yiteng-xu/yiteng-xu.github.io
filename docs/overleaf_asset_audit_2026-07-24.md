---
title: "Overleaf / ReMoGen asset audit"
permalink: /docs/overleaf-asset-audit-2026-07-24/
---

# Overleaf / ReMoGen asset audit — 2026-07-24

This audit records the publication-safe state of the homepage paper-asset work.

## Completed

- The user-provided COMPOSE/ReMoGen source ZIP was verified locally. It is approximately 76.3 MB and contains the expected TeX source tree plus high-resolution PDF figures.
- The COMPOSE/ReMoGen exception is already represented on the original homepage and all three desktop homepage variants.
- Publication-ready derivative images currently available in the repository:
  - `images/remogen/teaser-1.png`
  - `images/remogen/vis-1.png`
  - `images/remogen/main-1.png`
  - `images/remogen/demo-1.png`
  - `images/remogen/hhi-comp-1.png`

## Still pending

- The older Overleaf project ZIP batch has not been completed. The current cache only contains a login-page HTML response, not the authenticated 72-project listing or ZIP downloads.
- The near-three-month exclusion rule remains in force: unpublished recent projects must not be downloaded into the public site or used as homepage assets, except for the explicitly allowed COMPOSE/ReMoGen project.
- Final image-aesthetic selection is still pending official AGY CLI availability. The target route remains `gemini-3.1-pro --effort high` for image/aesthetic review.

## Safety notes

- Temporary Overleaf/authorized-source directories are ignored and must not be committed.
- Cookie/session extraction helpers are ignored and must not be committed.
- No Overleaf cookies, OAuth tokens, raw browser session stores, or unpublished ZIP contents are published by this repository.
- Current homepage changes use only committed, publication-safe images under `images/remogen/`.
