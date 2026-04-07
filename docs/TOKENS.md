# Tokens

## Purpose
These tokens describe the visual system in implementation terms for React and Tailwind-based builds.

## Color Roles

| Token | Purpose | Typical Usage |
| --- | --- | --- |
| `--bg` | base page background | app body, site canvas |
| `--surface` | default blurred surface | cards, rails, shell panels |
| `--surface-strong` | stronger dark surface | stronger overlays or denser panels |
| `--line` | standard border line | cards, pills, nav, buttons |
| `--line-soft` | subtle divider line | separators, low-contrast borders |
| `--line-focus` | focus ring color | focus-visible states |
| `--text` | primary foreground | headings, values, key content |
| `--muted` | secondary foreground | helper copy, inactive states |
| `--mint` | privacy / positive accent | proof states, healthy status, active privacy |
| `--gold` | primary action accent | primary actions, highlighted warning labels |
| `--warning` | caution tone | warning values, risk indicators |
| `--danger` | destructive tone | error and high-risk states |

## Type

| Rule | Purpose |
| --- | --- |
| Headings use `Space Grotesk` | create hierarchy and product identity |
| UI/body use `Instrument Sans` | keep controls and support copy readable |
| Headings carry the hierarchy | avoid oversized card chrome doing the hierarchy work |
| Support copy stays quiet | preserve breathing room and scanability |

## Spacing
- Prefer fewer containers with more padding
- Prefer larger internal spacing over stacked nested cards
- Product-dense surfaces still need visible white space between title, value, helper text, and actions

## Surface Rules
- Use blurred or soft surfaces sparingly
- Do not put every child element inside its own boxed panel
- Keep contrast strong enough for financial data but avoid generic dashboard heaviness

## Interaction Rules
- Every interactive component should define:
  - default
  - hover
  - focus-visible
  - pressed when relevant
  - disabled when relevant

## Recommended Tailwind Mapping
Suggested next step in implementation:
- map these values into `theme.extend.colors`
- expose semantic utility names
- avoid route-local one-off palette values
