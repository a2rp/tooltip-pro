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

## Links

- Portfolio: [https://www.ashishranjan.net](https://www.ashishranjan.net)
- GitHub: [https://github.com/a2rp](https://github.com/a2rp)
- CodePen: [https://codepen.io/ash1198](https://codepen.io/ash1198)
- LinkedIn: [https://www.linkedin.com/in/aashishranjan](https://www.linkedin.com/in/aashishranjan)
- Facebook: [https://www.facebook.com/theash.ashish/](https://www.facebook.com/theash.ashish/)
- YouTube: [https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1](https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1)
- Email: [ash.ranjan09@gmail.com](mailto:ash.ranjan09@gmail.com)

## Support

- Support: [https://a2rp-donation-page.netlify.app/](https://a2rp-donation-page.netlify.app/)
- Buy Me A Coffee: [https://buymeacoffee.com/a2rp](https://buymeacoffee.com/a2rp)
- Patreon: [https://patreon.com/a2rp](https://patreon.com/a2rp)
<!-- Project links -->

## Links

- Live: [https://a2rp.github.io/tooltip-pro/](https://a2rp.github.io/tooltip-pro/)
- Repository: [https://github.com/a2rp/tooltip-pro](https://github.com/a2rp/tooltip-pro)
- Portfolio: [https://www.ashishranjan.net/](https://www.ashishranjan.net/)
- GitHub: [https://github.com/a2rp](https://github.com/a2rp)
- CodePen: [https://codepen.io/ash1198](https://codepen.io/ash1198)
- LinkedIn: [https://www.linkedin.com/in/aashishranjan](https://www.linkedin.com/in/aashishranjan)
- Facebook: [https://www.facebook.com/theash.ashish/](https://www.facebook.com/theash.ashish/)
- YouTube: [https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1](https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1)
- Email: [ash.ranjan09@gmail.com](mailto:ash.ranjan09@gmail.com)

## Support

- Support: [https://a2rp-donation-page.netlify.app/](https://a2rp-donation-page.netlify.app/)
- Buy Me a Coffee: [https://buymeacoffee.com/a2rp](https://buymeacoffee.com/a2rp)
- Patreon: [https://www.patreon.com/a2rp](https://www.patreon.com/a2rp)
