# Tokens

## Purpose
These tokens describe the visual system in implementation terms for React and Tailwind-based builds.

## Color Roles
- `--bg`: base page background
- `--surface`: default blurred surface
- `--surface-strong`: stronger dark surface
- `--line`: standard border line
- `--line-soft`: subtle divider line
- `--line-focus`: focus ring color
- `--text`: primary foreground
- `--muted`: secondary text
- `--mint`: privacy / positive accent
- `--gold`: primary action accent
- `--warning`: caution tone
- `--danger`: destructive tone

## Type
- Headings use `Space Grotesk`
- UI/body use `Instrument Sans`
- Headings should carry the hierarchy
- Support copy should remain quiet and readable

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
