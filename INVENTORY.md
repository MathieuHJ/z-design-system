# Inventory

This file is the quickest way to understand the current state of the Z Design System.

## Tokens

| Token | Purpose | Typical Usage |
| --- | --- | --- |
| `--bg` | Base page background | app body, site canvas |
| `--surface` | Primary blurred surface tone | cards, shells, rails |
| `--surface-strong` | Stronger dark surface | denser overlays, stronger panels |
| `--line` | Standard border line | cards, pills, inputs, nav |
| `--line-soft` | Subtle divider line | row separators, secondary chrome |
| `--line-focus` | Focus ring accent | keyboard focus states |
| `--text` | Primary foreground | headings, important values |
| `--muted` | Secondary foreground | helper copy, inactive states |
| `--mint` | Positive / privacy accent | proof, active privacy states, healthy states |
| `--gold` | Primary action accent | primary buttons, warning badge accent |
| `--warning` | Caution tone | price impact, warning values |
| `--danger` | Destructive tone | high-risk or error states |

## Typography

| Token / Rule | Purpose | Usage |
| --- | --- | --- |
| `Space Grotesk` | Heading and structural emphasis | titles, high-signal values, key labels |
| `Instrument Sans` | UI and support text | body copy, controls, helper copy |

## Component Status

Legend:
- `Designed`: exists in static preview
- `Documented`: appears in docs / snippets / registry
- `Coded`: starter React implementation exists

| Component | Designed | Documented | Coded | Notes |
| --- | --- | --- | --- | --- |
| `LogoMark` | Yes | Yes | Yes | Uses approved SVG asset |
| `Button` | Yes | Yes | Yes | Primary, secondary, ghost |
| `Chip` | Yes | Yes | Yes | Default and active states |
| `MicroBadge` | Yes | Yes | No | Good next low-effort export |
| `TextField` | Yes | Yes | Yes | Input wrapper only so far |
| `Tabs` | Yes | Yes | Yes | Basic item array API |
| `IconButton` | Yes | Yes | Yes | Visual shell only |
| `AppShellHeader` | Yes | Yes | No | Important for platform alignment |
| `AppSwitcher` | Yes | Yes | No | Good candidate for early export |
| `WalletState` | Yes | Yes | No | Needs connected / disconnected variants |
| `NetworkSwitcher` | Yes | Yes | No | Needs menu behavior later |
| `SideNav` | Yes | Yes | No | Shared shell primitive |
| `StatTile` | Yes | Yes | No | Simple and reusable |
| `TokenInput` | Yes | Yes | No | High-priority product primitive |
| `AssetPill` | Yes | Yes | No | Useful standalone primitive |
| `ExecutionStrip` | Yes | Yes | No | Product helper module |
| `QuoteCard` | Yes | Yes | No | High-priority transaction component |
| `RouteVisual` | Yes | Yes | No | Visual helper subcomponent |
| `TransactionStepper` | Yes | Yes | No | High-priority transaction component |
| `Step` | Yes | Yes | No | Likely internal to stepper |
| `ReceiptCard` | Yes | Yes | No | High-priority post-transaction component |
| `MarketRow` | Yes | Yes | No | High-priority data/product component |
| `Sparkline` | Yes | Yes | No | Could be a utility component |
| `PositionCard` | Yes | Yes | No | High-priority lending/portfolio component |
| `DonutChart` | Yes | Yes | No | Data visualization helper |
| `RiskCallout` | Yes | Yes | No | High-priority risk primitive |
| `ProofCard` | Yes | Yes | No | Domain-specific trust component |
| `ProofBadge` | Yes | Yes | No | Good small export |
| `HealthCard` | Yes | Yes | No | Domain-specific risk component |
| `HealthMeter` | Yes | Yes | No | Could be standalone |
| `TooltipCard` | Yes | Yes | No | Overlay helper |
| `TooltipBubble` | Yes | Yes | No | Overlay helper |
| `Toast` | Yes | Yes | No | Shared feedback primitive |
| `ActivityPopover` | Yes | Yes | No | Needs interaction model |
| `ModalCard` | Yes | Yes | No | Shared overlay primitive |
| `AccountRail` | Yes | Yes | No | Shared app shell/product component |
| `AccountBlock` | Yes | Yes | No | Likely internal to rail |
| `ActivityFeed` | Yes | Yes | No | Shared account/history component |
| `FeedRow` | Yes | Yes | No | Likely internal to feed |
| `DisconnectedState` | Yes | Yes | No | Shared wallet/app empty state |

## Additional Components Observed In The Dev App

These are either missing from the current library or only partially covered by the existing preview.

| Component | Why It Matters | Suggested Status |
| --- | --- | --- |
| `PageHeader` | Route title + subtitle pattern used across dashboard, faucet, shield, receive, trade | Add |
| `TopNavLink` | Individual top-level route item with active state | Add |
| `WalletPill` | Compact connected wallet pill in header | Add |
| `MetricCard` | Dashboard stat card for tree, leaf index, pool status | Add |
| `StatusBadge` | Active / disconnected / whitelisted / successful states | Add |
| `KeyValueGrid` | Network info layout with labeled values | Add |
| `DataCard` | Generic product card wrapper for route sections | Add |
| `SelectField` | Token selector and generic dropdown field | Add |
| `PresetButtonGroup` | Quick amount selectors like `100 zUSD`, `1,000 zUSD` | Add |
| `AmountField` | Numeric amount input with max/helper affordances | Add |
| `PrimaryActionBar` | Full-width route CTA block | Add |
| `SuccessBanner` | Inline transaction confirmation banner | Add |
| `ResultCard` | Post-action result summary card | Add |
| `SecurityPromptModal` | Modal for deriving shielded keys or other prerequisites | Add |
| `AddressPanel` | Shielded account address display with helper copy | Add |
| `CopyButton` | Utility action for copying addresses/raw data | Add |
| `Accordion` | Expand/collapse panel like manual key entry or raw data | Add |
| `CodeBlock` | Raw JSON / tx data presentation | Add |
| `QRCodeCard` | Receive flow QR panel with actions | Add |
| `ActionPair` | Side-by-side actions like `Copy` / `Share` | Add |
| `SegmentedControl` | Public/shielded toggle and similar switches | Add |
| `SwapDirectionButton` | Midpoint action between `You pay` and `You receive` | Add |
| `SwapModeSwitcher` | Swap mode header control | Add |
| `OptionChipGroup` | Slippage and fee tier option rows | Add |
| `InlineHelperText` | Small descriptive/support text under fields and cards | Add |
| `SectionDivider` | Quiet structural separation in dense product cards | Add |
| `EventEmptyState` | No events / no activity state | Add |

## Recommended Next React Exports

Priority order:
1. `MicroBadge`
2. `AssetPill`
3. `StatTile`
4. `WalletState`
5. `SideNav`
6. `TokenInput`
7. `QuoteCard`
8. `TransactionStepper`
9. `RiskCallout`
10. `MarketRow`
11. `PositionCard`
12. `AccountRail`
13. `Toast`
14. `ModalCard`
15. `DisconnectedState`

## Expanded Recommended Next React Exports

After the current priority set, the best additions from the dev app are:
16. `PageHeader`
17. `StatusBadge`
18. `MetricCard`
19. `SelectField`
20. `AmountField`
21. `PresetButtonGroup`
22. `SuccessBanner`
23. `ResultCard`
24. `SecurityPromptModal`
25. `AddressPanel`
26. `CopyButton`
27. `Accordion`
28. `CodeBlock`
29. `QRCodeCard`
30. `SegmentedControl`
31. `SwapDirectionButton`
32. `OptionChipGroup`
