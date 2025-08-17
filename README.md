# Tooltip Pro

**Live:** https://a2rp.github.io/tooltip-pro/  
**Repo:** https://github.com/a2rp/tooltip-pro

## What is this?

A tiny, dependency-free **Tooltip & Popover system** built with **React + Vite**. It demonstrates reliable floating UI (tooltips on hover/focus/click and popovers on click) using a custom `computePosition` utility (flip + shift + arrow) and a body `Portal`. Everything is front-end only, lives in a single folder (`src/tooltipPro/`), and is production-style but framework-agnostic—no routing, no external positioning libraries.

## Features

-   **Tooltips**: show on **hover/focus** (and optionally **click**) with `delayIn`/`delayOut` and `clickAutoHide`.
-   **Popovers**: **click to toggle**, close on **outside click** or **Esc**, optional header/title.
-   **Smart positioning**: `placement` (**top/bottom/left/right**) + `align` (**start/center/end**), with **flip** and **viewport clamping (shift)**.
-   **Arrow**: CSS triangle arrow auto-aligned to the trigger.
-   **Rock-solid rendering**: explicit `left/top` coordinates (no layout jitter), repositions on **scroll/resize** and with **ResizeObserver**.
-   **Accessible by default**:
    -   Tooltips use `role="tooltip"` + `aria-describedby`.
    -   Popovers expose `aria-haspopup="dialog"`, `aria-expanded`, `aria-controls`, and close on **Esc**.
-   **Touch friendly**: optional click trigger for tooltips; popovers are click-first.
-   **Lightweight**: no `floating-ui` or other libs; just React + a few small utilities.
-   **Scoped implementation**:  
    `src/tooltipPro/` → `index.jsx`, `Tooltip.jsx`, `Popover.jsx`, `floating.js`, `Portal.jsx`, `Styled.js`, `styles.css`.

## Run locally

```bash
git clone https://github.com/a2rp/tooltip-pro
cd tooltip-pro
npm i
npm run dev
```
