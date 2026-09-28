---
name: aioseo-design-system
description: Use when editing, creating, or styling Vue components, SCSS files, or admin UI in the AIOSEO monorepo (any path under src/vue/ or src/**/*.scss). Provides the canonical component list, design tokens, and the rules for using them. Invoke BEFORE writing any Vue template, <style> block, or admin UI markup so you reach for existing primitives instead of reinventing them.
---

# AIOSEO Design System

**31 documented components · 194 icons + 9 illustrations · 44 SCSS tokens · 12-column grid**

## Live reference

- **Storybook**: https://aioseo-storybook.pages.dev
- **Tokens (JSON)**: https://aioseo-storybook.pages.dev/aioseo-tokens.json — all 44 SCSS variables
- **Icons (JSON)**: https://aioseo-storybook.pages.dev/aioseo-icons.json — 194 svg-* components with viewBox + paths
- **Illustrations (JSON)**: https://aioseo-storybook.pages.dev/aioseo-illustrations.json — 8 hero/mascot SVGs (Dannie, hero graphics)
- **Showcase examples**: https://aioseo-storybook.pages.dev/?path=/docs/showcase-overview--docs — composed Settings page, Post Editor sidebar, Feature Manager
- **Roadmap & known drift**: https://aioseo-storybook.pages.dev/?path=/docs/get-started-roadmap--docs

If you're unsure whether a component exists, **check the Storybook first**. The list below is canonical.

## Components — always reach for these

### Form primitives (base-*) — ordered by frequency of use

| Use | Component | Notes |
|---|---|---|
| Action button | `<base-button>` | type: `default \| blue \| black \| green \| red \| gray \| wp-blue` · size: `small-table \| small \| medium \| large` · `link` for borderless |
| Single-line input | `<base-input>` | size: `small \| medium \| large` · `validation="email\|url"` triggers internal validation on blur. NO public `error` prop. |
| Multi-line input | `<base-textarea>` | autosize default, `minHeight` / `maxHeight` (px) for fixed or capped modes |
| Toggle (on/off) | `<base-toggle>` | Two-state switch. For 3+ exclusive options use `<base-radio-toggle>`. |
| Checkbox | `<base-checkbox>` | size, type, round (boolean). For binary on/off prefer `<base-toggle>`. |
| Segmented control | `<base-radio-toggle>` | Required: `options=[{label,value}]`, `name`. Boolean: `inline`, `circle`. |
| Select / multi-select | `<base-select>` | Required: `options`. Boolean: `multiple`, `taggable`, `searchable`. Wraps vue-multiselect. |
| Editor (low-level) | `<base-editor>` | Quill-based tag-aware editor. For 95% of cases reach for `<core-html-tags-editor>` wrapper. Props: `tagsContext`, `lineNumbers`, `single`, `monospace`, `description`. |

### Surfaces & feedback (core-*) — ordered by frequency, tiered

#### Tier 1 — fundamental (every settings page)

| Use | Component | Notes |
|---|---|---|
| Card container | `<core-card>` | Requires `slug`. Reads collapsed state from `useSettingsStore`. Slots: `header`, `header-icon`, `header-extra`, `tooltip`, `before-tabs`, `tabs`, default. |
| Settings row | `<core-settings-row>` | Slots: `name`, `description`, `content`, `header`. `leftSize`/`rightSize` default `"3"`/`"9"` of 12. |
| Inline alert | `<core-alert>` | type: `blue \| green \| red \| yellow` · size: `smaller \| small \| medium` · `showClose` |
| Tooltip | `<core-tooltip>` + `<svg-circle-question-mark>` | Slot `tooltip` for rich body, `tooltip` prop for plain string. |
| Pro gating badge | `<core-pro-badge>` | Defaults to "PRO" text. Inherits `$border` background. |

#### Tier 2 — dialogs and structure

| Use | Component | Notes |
|---|---|---|
| Modal dialog | `<core-modal>` | Teleports to `#aioseo-modal-portal`. Slots: `header`, `headerTitle`, `body`, `footer`. Registers in `useRootStore().modals` for stacked ESC routing. |
| Side drawer | `<core-drawer>` | Right-anchored slide-in. Same modal-stack semantics as modal. `width` prop (Number / String). |
| Tabs | `<core-tabs>` | `tabs` is array of `{title, component}` — declared as data, not slots. `separator` prop (default `\|`). |

#### Tier 3 — utility

| Use | Component | Notes |
|---|---|---|
| Spinner | `<core-loader>` | `dark` boolean for white surfaces. Used inside `<base-button :loading>`. |
| Pagination | `<core-pagination>` | Required `totals: { total, pages }`. Emits `@paginate` with new page number. |
| Pro blur | `<core-blur>` | CSS-blur wrapper. Pair with absolute-positioned `<core-pro-badge>` + upgrade CTA. Pure visual gating, not security. |

#### Tier 4 — admin shell / specialized forms

| Use | Component | Notes |
|---|---|---|
| Notifications panel | `<core-notifications>` | Slide-in panel (predates `<core-drawer>`). Driven by `useNotificationsStore`. Documentation-only. |
| HTML / tags editor | `<core-html-tags-editor>` | Wraps `<base-editor>` + tag chips. For meta titles, descriptions, schema fields. Props: `tagsContext`, `allowTags`, `lineNumbers`, `single`, `disableEmoji`. |
| Code editor | `<core-code-editor>` | Prism-highlighted. Required `editorId`, `language` (default `json`). Methods: `getValue()`, `setValue()`. |
| Tag chip | `<core-add-template-tag>` | Click-to-insert chip rendered above editor inputs. Slot-only. Pure presentational. |
| Emoji picker | `<core-emoji>` | `v-model:show` + `@selected-emoji`. Wraps emoji-mart. Registers in modal stack. |

#### Tier 5 — context-specific / low-level

| Use | Component | Notes |
|---|---|---|
| Multisite selector | `<core-network-site-selector>` | Dropdown over network sites. Multisite-only. Documentation-only. |
| Feature card | `<core-feature-card>` | Heavy admin coupling — addon shape, license/plugins/addons stores. Storybook page is documentation-only. |
| Popper (low-level) | `<core-popper>` | Reach for it directly only when `<core-tooltip>` can't express the trigger you need. |
| Processing toast | `<core-processing-popup>` | Bottom-right fixed toast. Props: `strings: { header, description }`, `percentage: 0-100`, `@close`. Composes `<core-percent-circle>`. |
| Progress arc | `<svg-progress-circle>` | Animated 0-100% arc. Required `percent`. Optional `strokeWidth` (default 8). Stroke uses `$blue` + 25% track. |

### Layout & visual assets

| Need | Use | Notes |
|---|---|---|
| 12-column grid | `<grid-row>` + `<grid-column>` | Breakpoints: `xs/sm/md/lg/xl`. Primary: `md` = 912px. Per-breakpoint props accept string `'1'`–`'12'`. |
| Icons (functional) | `<svg-{kebab-name}>` | 194 icons. File path → kebab tag: `svg/circle/QuestionMark.vue` → `<svg-circle-question-mark>`. All inherit `currentColor`. Full list at /aioseo-icons.json. |
| Illustrations | `<svg-{kebab-name}>` | 8 large decorative SVGs: 4 Dannie mascot poses + `<svg-seo>`, `<svg-seo-checklist>`, `<svg-overview>`, `<svg-seo-revisions-search-statistics-frame>`. Use for hero/empty-state moments only. Full list at /aioseo-illustrations.json. |

## SCSS — always use variables, never inline values

Variables are auto-injected into every `<style lang="scss">` block via `additionalData`. You do NOT need to import them.

```scss
// Tokenized — use these
.my-element {
	color: $font-color;          // #3c434a
	background: $blue;           // #005AE0
	border: 1px solid $border;   // #E8E8EB
	padding: $gutter;            // 20px
	margin-top: $gutter-half;    // 10px
	font-size: $font-md;         // 14px
	font-weight: $font-bold;     // 600
	font-family: $font-family;
}

// CSS variable for runtime use:
.dynamic-spacing {
	gap: var(--aioseo-gutter);    // mirrors $gutter at runtime
}
```

For full token list with usage counts, fetch https://aioseo-storybook.pages.dev/aioseo-tokens.json or read `src/vue/assets/scss/app/variables.scss`.

## Color palette (most-used)

| Use | Token | Hex |
|---|---|---|
| Primary | `$blue` | #005AE0 |
| Success | `$green` | #00AA63 |
| Error / destructive | `$red` | #DF2A4A |
| Warning | `$orange` | #F18200 |
| Caution (bg) | `$yellow` | #FCFAE8 |
| Body text | `$font-color` | #3c434a |
| Heading / strong | `$black` | #141B38 |
| Border | `$border` | #E8E8EB |
| Surface (subtle) | `$box-background` | #F9F9FA |
| Input border | `$input-border` | #D0D1D7 |
| Placeholder | `$placeholder-color` | #8C8F9A |

## Tokens that are missing — DO NOT inline these as raw px

These show up heavily inline but aren't tokenized. If you need them in new code, propose adding to `variables.scss` rather than inlining:

| Want | Inline frequency | Status |
|---|---|---|
| 8px gap / padding | 89 callers | needs `$gutter-xs: 8px` |
| 12px gap / padding | 108 callers | needs `$gutter-md: 12px` |
| 13px font-size | 56 callers | needs `$font-xs: 13px` |
| 18px / 20px font-size | 58 callers | needs `$font-xl` |
| 700 font-weight | 159 callers | needs `$font-bolder: 700` (more used than the existing `$font-bold: 600`) |
| 3px / 4px border-radius | 171 callers | needs `$radius-sm: 3px`, `$radius-md: 4px` |
| 100px (any "pill" radius) | 26 callers across 7 different values | needs `$radius-pill: 999px` |

## NEVER

- ❌ Hardcode colors: `color: #005AE0` → use `$blue`
- ❌ Hardcode spacing: `padding: 20px` → use `$gutter` or `var(--aioseo-gutter)`
- ❌ Hardcode font sizes: `font-size: 14px` → use `$font-md`
- ❌ Add `scoped` to `<style>` blocks — all AIOSEO styles are global
- ❌ Import `@wordpress/components` (`Button`, `Modal`, `Notice`, `TextControl`) — use AIOSEO equivalents above
- ❌ Invent a new component before checking the Storybook for an existing one
- ❌ Reach for inline styles when a SCSS variable exists
- ❌ Use `border-left: 3px solid var(--brand)` as a stripe accent — generic AI pattern, banned

## Single documented exception

`@wordpress/commands` for the command palette is the only permitted non-AIOSEO UI surface — it's intentionally styled via `@wordpress/components` tokens because AIOSEO has no palette equivalent and a WP-native palette signals platform citizenship. **This exception does NOT extend to other `@wordpress/components`.**

## Showcase — composition examples

Three real settings flows built only with components in this skill. Treat them as reference templates when building new admin pages:

- **Site Settings** — multi-card settings page with toggles, inputs, selects, radios, checkboxes, footer action bar, reset confirmation modal. Uses 11 components.
- **Post Editor sidebar** — drawer-based per-post SEO settings flow.
- **Feature Manager** — grid of feature cards in active/inactive/available states.

Browse: https://aioseo-storybook.pages.dev/?path=/docs/showcase-overview--docs

## Workflow

When you start writing or modifying a Vue component:

1. **Check Storybook first**: https://aioseo-storybook.pages.dev — does the primitive you need already exist?
2. **Reach for existing components and SCSS variables.** Compose new layouts from `<grid-row>`, `<grid-column>`, and `<core-settings-row>` instead of inventing new spacing patterns.
3. **If you find drift** (an inline px value, a hardcoded color), flag it. The Roadmap page tracks tokenization candidates — adding to it is more useful than fixing in a one-off.
4. **If a primitive genuinely doesn't exist**, add it to the AIOSEO Vue library using existing tokens. Don't sidestep the system by importing from another library.

## Why this exists

Claude/Cursor/Codex have been generating AIOSEO Vue code that reinvents components we already ship and hallucinates props that don't exist. This skill plus the live Storybook give you one place to look up what's real and what's drift, so AI-assisted work converges on the system instead of fighting it.

The Storybook auto-regenerates from `variables.scss` and the icon set on every build — when the SCSS source or icon library changes, the Storybook reflects it on next deploy. Treat it as the source of truth.
