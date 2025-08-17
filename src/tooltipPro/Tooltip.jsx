import React, { cloneElement, useEffect, useId, useRef, useState } from "react";
import Portal from "./Portal.jsx";
import { computePosition } from "./floating.js";

export default function Tooltip({
    children,
    content,
    placement = "top",
    align = "center",
    delayIn = 120,
    delayOut = 120,
    trigger = "hover",       // "hover" | "click" | "both"
    clickAutoHide = 1800,     // auto-hide after click-open; set 0 to disable
}) {
    const id = useId();
    const ref = useRef(null);      // trigger element
    const tipRef = useRef(null);   // tooltip surface
    const [open, setOpen] = useState(false);

    const [coords, setCoords] = useState({
        x: 0, y: 0, plc: placement, arrow: { x: 0, y: 0, side: "top" }
    });

    const isHover = trigger === "hover" || trigger === "both";
    const isClick = trigger === "click" || trigger === "both";

    const timers = useRef({ in: 0, out: 0, auto: 0 });
    const clearTimers = () => {
        clearTimeout(timers.current.in);
        clearTimeout(timers.current.out);
        clearTimeout(timers.current.auto);
    };

    const show = () => {
        clearTimers();
        timers.current.in = setTimeout(() => setOpen(true), delayIn);
    };
    const hide = () => {
        clearTimers();
        timers.current.out = setTimeout(() => setOpen(false), delayOut);
    };
    const toggleClick = () => {
        if (!isClick) return;
        clearTimers();
        setOpen((v) => {
            const next = !v;
            if (next && clickAutoHide > 0) {
                timers.current.auto = setTimeout(() => setOpen(false), clickAutoHide);
            }
            return next;
        });
    };

    // Position when open (and on resize/scroll)
    useEffect(() => {
        if (!open) return;
        const place = () => {
            const tip = tipRef.current;
            const triggerEl = ref.current;
            if (!tip || !triggerEl) return;
            const { x, y, arrow, placement: plc } = computePosition(
                triggerEl, tip, { placement, align, offset: 10, arrowSize: 8 }
            );
            setCoords({ x: Math.round(x), y: Math.round(y), plc, arrow });
        };

        place();
        const ro = new ResizeObserver(place);
        ro.observe(tipRef.current); ro.observe(ref.current);
        const on = () => place();
        window.addEventListener("scroll", on, true);
        window.addEventListener("resize", on);
        return () => { ro.disconnect(); window.removeEventListener("scroll", on, true); window.removeEventListener("resize", on); };
    }, [open, placement, align]);

    // Draw arrow each time coords change
    useEffect(() => {
        if (!open) return;
        const node = tipRef.current;
        if (!node) return;
        drawArrow(node, coords.arrow, coords.plc);
    }, [open, coords]);

    // ESC closes
    useEffect(() => {
        const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // Outside click closes a click-opened tooltip
    useEffect(() => {
        if (!open || !isClick) return;
        const onDoc = (e) => {
            const t = e.target;
            if (ref.current?.contains(t)) return;
            setOpen(false);
        };
        document.addEventListener("mousedown", onDoc);
        return () => document.removeEventListener("mousedown", onDoc);
    }, [open, isClick]);

    // Clone trigger with handlers
    const triggerProps = {
        ref,
        "aria-describedby": open ? id : undefined,
        ...(isHover && {
            onMouseEnter: (e) => { children.props.onMouseEnter?.(e); show(); },
            onMouseLeave: (e) => { children.props.onMouseLeave?.(e); hide(); },
            onFocus: (e) => { children.props.onFocus?.(e); setOpen(true); },
            onBlur: (e) => { children.props.onBlur?.(e); setOpen(false); },
        }),
        ...(isClick && {
            onClick: (e) => { children.props.onClick?.(e); toggleClick(); },
            onTouchStart: (e) => { children.props.onTouchStart?.(e); toggleClick(); }, // touch support
        }),
    };
    const triggerEl = cloneElement(children, triggerProps);

    return (
        <>
            {triggerEl}
            <Portal>
                <div
                    id={id}
                    ref={tipRef}
                    role="tooltip"
                    className="tooltip-surface"
                    data-open={open ? "true" : "false"}
                    // explicit positioning so it always shows like Popover
                    style={{
                        position: "fixed",
                        left: coords.x,
                        top: coords.y,
                        display: open ? "block" : "none",
                        transform: "none",
                    }}
                >
                    {content}
                    <div className="floating-arrow" data-arrow />
                </div>
            </Portal>
        </>
    );
}

/** Arrow triangle via CSS borders */
function drawArrow(node, arrow, placement) {
    const el = node.querySelector("[data-arrow]");
    if (!el) return;
    const size = 8;
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
        el.style.borderTop = `${size}px solid rgba(0,0,0,0.9)`;
    } else if (placement === "bottom") {
        el.style.left = `${Math.round(arrow.x - size)}px`;
        el.style.bottom = "100%";
        el.style.borderLeft = `${size}px solid transparent`;
        el.style.borderRight = `${size}px solid transparent`;
        el.style.borderBottom = `${size}px solid rgba(0,0,0,0.9)`;
    } else if (placement === "left") {
        el.style.top = `${Math.round(arrow.y - size)}px`;
        el.style.left = "100%";
        el.style.borderTop = `${size}px solid transparent`;
        el.style.borderBottom = `${size}px solid transparent`;
        el.style.borderLeft = `${size}px solid rgba(0,0,0,0.9)`;
    } else {
        el.style.top = `${Math.round(arrow.y - size)}px`;
        el.style.right = "100%";
        el.style.borderTop = `${size}px solid transparent`;
        el.style.borderBottom = `${size}px solid transparent`;
        el.style.borderRight = `${size}px solid rgba(0,0,0,0.9)`;
    }
}
