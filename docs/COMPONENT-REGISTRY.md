# Component Registry

This file maps the current static library into implementation-oriented names.

## Foundations

### `LogoMark`
- Static code name: `.hero__mark`, `.shell__brand`
- Asset: `./assets/logo-v2.svg`
- Purpose: display the approved protocol mark

### `Button`
- Static code name: `.z-button`
- Variants:
  - `.z-button--primary`
  - `.z-button--secondary`
  - `.z-button--ghost`
- States:
  - default
  - hover
  - pressed
  - disabled

### `Chip`
- Static code name: `.z-chip`
- States:
  - default
  - active

### `MicroBadge`
- Static code name: `.micro-badge`
- Variants:
  - `.micro-badge--mint`
  - `.micro-badge--gold`

### `TextField`
- Static code name: `.z-field`

### `Tabs`
- Static code name: `.z-tabs`

### `IconButton`
- Static code name: `.icon-button`

## Shell

### `AppShellHeader`
- Static code name: `.shell__header`

### `AppSwitcher`
- Static code name: `.app-switcher`

### `WalletState`
- Static code name: `.wallet-state`

### `NetworkSwitcher`
- Static code name: `.network-switcher`

### `SideNav`
- Static code name: `.side-nav`

### `StatTile`
- Static code name: `.stat-tile`

## Transaction

### `TokenInput`
- Static code name: `.token-input`
- Child elements:
  - `.token-input__top`
  - `.token-input__body`

### `AssetPill`
- Static code name: `.asset-pill`

### `ExecutionStrip`
- Static code name: `.execution-strip`

### `QuoteCard`
- Static code name: `.quote-card`

### `RouteVisual`
- Static code name: `.route-visual`

### `TransactionStepper`
- Static code name: `.stepper`

### `Step`
- Static code name: `.step`
- States:
  - `.is-complete`
  - `.is-current`

### `ReceiptCard`
- Static code name: `.receipt`

## Markets

### `MarketRow`
- Static code name: `.market-row`

### `Sparkline`
- Static code name: `.sparkline`
- Variants:
  - `.spark--up`
  - `.spark--flat`

### `PositionCard`
- Static code name: `.position-card`

### `DonutChart`
- Static code name: `.donut-chart`

## Risk

### `RiskCallout`
- Static code name: `.callout`

### `ProofCard`
- Static code name: `.proof-card`

### `ProofBadge`
- Static code name: `.proof-badge`

### `HealthCard`
- Static code name: `.health-card`

### `HealthMeter`
- Static code name: `.health-meter`

## Overlays

### `TooltipCard`
- Static code name: `.mini-card`

### `TooltipBubble`
- Static code name: `.tooltip-bubble`

### `Toast`
- Static code name: `.toast`
- Variants:
  - `.toast--success`

### `ActivityPopover`
- Static code name: `.activity-pop`

### `ModalCard`
- Static code name: `.modal-card`

## Account

### `AccountRail`
- Static code name: `.account-rail`

### `AccountBlock`
- Static code name: `.account-block`

### `ActivityFeed`
- Static code name: `.activity-feed`

### `FeedRow`
- Static code name: `.feed-row`

### `DisconnectedState`
- Static code name: `.disconnected-state`

## Proposed Future React Exports
When this moves into code, a clean export surface would look like:

```ts
export {
  LogoMark,
  Button,
  Chip,
  MicroBadge,
  TextField,
  Tabs,
  IconButton,
  AppShellHeader,
  AppSwitcher,
  WalletState,
  NetworkSwitcher,
  SideNav,
  StatTile,
  TokenInput,
  AssetPill,
  ExecutionStrip,
  QuoteCard,
  RouteVisual,
  TransactionStepper,
  ReceiptCard,
  MarketRow,
  Sparkline,
  PositionCard,
  DonutChart,
  RiskCallout,
  ProofCard,
  ProofBadge,
  HealthCard,
  HealthMeter,
  TooltipCard,
  TooltipBubble,
  Toast,
  ActivityPopover,
  ModalCard,
  AccountRail,
  AccountBlock,
  ActivityFeed,
  FeedRow,
  DisconnectedState
}
```
