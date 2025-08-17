export function computePosition(
    referenceEl,
    floatingEl,
    { placement = "top", align = "center", offset = 8, arrowSize = 8 } = {}
) {
    const r = referenceEl.getBoundingClientRect();
    const fW = floatingEl.offsetWidth;
    const fH = floatingEl.offsetHeight;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // base x/y for the requested placement
    const base = (plc) => {
        let x = 0,
            y = 0;
        if (plc === "top") {
            y = r.top - fH - offset;
            x = alignX(r, fW, align);
        } else if (plc === "bottom") {
            y = r.bottom + offset;
            x = alignX(r, fW, align);
        } else if (plc === "left") {
            x = r.left - fW - offset;
            y = alignY(r, fH, align);
        } else {
            // right
            x = r.right + offset;
            y = alignY(r, fH, align);
        }
        return { x, y };
    };

    // helpers for alignment
    const alignX = (rect, width, a) => {
        if (a === "start") return rect.left;
        if (a === "end") return rect.right - width;
        return rect.left + rect.width / 2 - width / 2;
    };
    const alignY = (rect, height, a) => {
        if (a === "start") return rect.top;
        if (a === "end") return rect.bottom - height;
        return rect.top + rect.height / 2 - height / 2;
    };

    // Try desired placement
    const tryPlacement = (plc) => {
        let { x, y } = base(plc);

        // shift into the viewport (8px padding)
        const pad = 8;
        x = Math.min(Math.max(x, pad), vw - fW - pad);
        y = Math.min(Math.max(y, pad), vh - fH - pad);

        return { x, y, placement: plc };
    };

    // initial try
    let pos = tryPlacement(placement);

    // flip logic: if surface still collides heavily with edges related to that axis, flip
    const overTop = pos.y < 8;
    const overBottom = pos.y + fH > vh - 8;
    const overLeft = pos.x < 8;
    const overRight = pos.x + fW > vw - 8;

    if (placement === "top" && overTop) pos = tryPlacement("bottom");
    else if (placement === "bottom" && overBottom) pos = tryPlacement("top");
    else if (placement === "left" && overLeft) pos = tryPlacement("right");
    else if (placement === "right" && overRight) pos = tryPlacement("left");

    // arrow position (center it on the corresponding side)
    let arrow = { x: 0, y: 0, side: "bottom" };
    if (pos.placement === "top") {
        arrow = { x: r.left + r.width / 2 - pos.x, y: fH - 1, side: "bottom" };
    } else if (pos.placement === "bottom") {
        arrow = { x: r.left + r.width / 2 - pos.x, y: -1, side: "top" };
    } else if (pos.placement === "left") {
        arrow = { x: fW - 1, y: r.top + r.height / 2 - pos.y, side: "right" };
    } else if (pos.placement === "right") {
        arrow = { x: -1, y: r.top + r.height / 2 - pos.y, side: "left" };
    }

    // clamp arrow to stay inside surface
    arrow.x = Math.max(arrowSize + 4, Math.min(fW - arrowSize - 4, arrow.x));
    arrow.y = Math.max(arrowSize + 4, Math.min(fH - arrowSize - 4, arrow.y));

    return { ...pos, arrow };
}
