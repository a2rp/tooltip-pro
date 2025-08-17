import React, { cloneElement, useEffect, useId, useRef, useState } from "react";
import Portal from "./Portal.jsx";
import { computePosition } from "./floating.js";

export default function Popover({
    trigger,
    title = "Popover",
    children,
    placement = "bottom",
    align = "center",
}) {
    const id = useId();
    const btnRef = useRef(null);
    const popRef = useRef(null);
    const [open, setOpen] = useState(false);

    // explicit coords + arrow
    const [coords, setCoords] = useState({ x: 0, y: 0, plc: placement, arrow: { x: 0, y: 0, side: "top" } });

    const toggle = () => setOpen((v) => !v);
    const close = () => setOpen(false);

    // position when open (and on resize/scroll)
    useEffect(() => {
        if (!open) return;
        const place = () => {
            const pop = popRef.current;
            const btn = btnRef.current;
            if (!pop || !btn) return;
            const { x, y, arrow, placement: plc } = computePosition(btn, pop, { placement, align, offset: 10, arrowSize: 9 });
            setCoords({ x: Math.round(x), y: Math.round(y), plc, arrow });
        };

        // run now and on changes
        place();
        const ro = new ResizeObserver(place);
        ro.observe(popRef.current); ro.observe(btnRef.current);
        const on = () => place();
        window.addEventListener("scroll", on, true);
        window.addEventListener("resize", on);
        return () => { ro.disconnect(); window.removeEventListener("scroll", on, true); window.removeEventListener("resize", on); };
    }, [open, placement, align]);

    // outside click to close
    useEffect(() => {
        if (!open) return;
        const onDoc = (e) => {
            const pop = popRef.current, btn = btnRef.current;
            if (!pop || !btn) return;
            if (!pop.contains(e.target) && !btn.contains(e.target)) setOpen(false);
        };
        document.addEventListener("mousedown", onDoc);
        return () => document.removeEventListener("mousedown", onDoc);
    }, [open]);

    // ESC to close
    useEffect(() => {
        const onKey = (e) => { if (e.key === "Escape") close(); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // enhance trigger
    const opener = cloneElement(trigger, {
        ref: btnRef,
        type: trigger.props.type ?? "button",
        "aria-haspopup": "dialog",
        "aria-expanded": open ? "true" : "false",
        "aria-controls": open ? id : undefined,
        onClick: (e) => { trigger.props.onClick?.(e); toggle(); },
    });

    // keep arrow drawing in sync with coords
    useEffect(() => {
        if (!open) return;
        const node = popRef.current;
        if (!node) return;
        drawArrow(node, coords.arrow, coords.plc);
    }, [open, coords]);

    function drawArrow(node, arrow, placement) {
        const el = node.querySelector("[data-arrow]");
        if (!el) return;
        const size = 9;
        el.style.removeProperty("top");
        el.style.removeProperty("bottom");
        el.style.removeProperty("left");
        el.style.removeProperty("right");
        el.style.border = "none";

        if (placement === "top") {
            el.style.left = `${Math.round(arrow.x - size)}px`;
            el.style.top = "100%";
            el.style.borderLeft = `${size}px solid transparent`;
            el.style.borderRight = `${size}px solid transparent`;
            el.style.borderTop = `${size}px solid var(--card)`;
        } else if (placement === "bottom") {
            el.style.left = `${Math.round(arrow.x - size)}px`;
            el.style.bottom = "100%";
            el.style.borderLeft = `${size}px solid transparent`;
            el.style.borderRight = `${size}px solid transparent`;
            el.style.borderBottom = `${size}px solid var(--card)`;
        } else if (placement === "left") {
            el.style.top = `${Math.round(arrow.y - size)}px`;
            el.style.left = "100%";
            el.style.borderTop = `${size}px solid transparent`;
            el.style.borderBottom = `${size}px solid transparent`;
            el.style.borderLeft = `${size}px solid var(--card)`;
        } else {
            el.style.top = `${Math.round(arrow.y - size)}px`;
            el.style.right = "100%";
            el.style.borderTop = `${size}px solid transparent`;
            el.style.borderBottom = `${size}px solid transparent`;
            el.style.borderRight = `${size}px solid var(--card)`;
        }
    }


    return (
        <>
            {opener}
            <Portal>
                <div
                    id={id}
                    ref={popRef}
                    role="dialog"
                    aria-label={title}
                    className="popover-surface"
                    data-open={open ? "true" : "false"}
                    // ⬇️ explicit placement so it always shows
                    style={{
                        position: "fixed",
                        left: coords.x,
                        top: coords.y,
                        display: open ? "block" : "none",
                        transform: "none",
                    }}
                >
                    <div className="floating-arrow" data-arrow />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, marginBottom: 8 }}>
                        <strong>{title}</strong>
                        <button aria-label="Close popover" onClick={close}>✕</button>
                    </div>
                    <div style={{ color: "var(--muted)" }}>{children}</div>
                </div>
            </Portal>
        </>
    );
}
