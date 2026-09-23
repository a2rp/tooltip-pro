import {
    useCallback,
    useEffect,
    useId,
    useLayoutEffect,
    useRef,
    useState,
} from "react";

import { FiX } from "react-icons/fi";

import { computeFloatingPosition } from "./floating";

import { Styled } from "./styled";

const FOCUSABLE_SELECTOR = [
    "button:not([disabled])",
    "a[href]",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    '[tabindex]:not([tabindex="-1"])',
].join(",");

const Popover = ({
    trigger,
    children,
    title = "Popover",
    label = "Details",
    placement = "bottom",
    offset = 10,
}) => {
    const popoverId = useId();

    const wrapperRef = useRef(null);
    const triggerRef = useRef(null);
    const popoverRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);

    const [isPositioned, setIsPositioned] = useState(false);

    const [position, setPosition] = useState({
        x: 0,
        y: 0,
        placement,
    });

    const updatePosition = useCallback(() => {
        const nextPosition = computeFloatingPosition({
            triggerElement: triggerRef.current,

            floatingElement: popoverRef.current,

            placement,
            offset,
        });

        if (!nextPosition) {
            return;
        }

        setPosition(nextPosition);
        setIsPositioned(true);
    }, [placement, offset]);

    const openPopover = () => {
        setIsPositioned(false);
        setIsOpen(true);
    };

    const closePopover = useCallback((restoreFocus = true) => {
        setIsOpen(false);
        setIsPositioned(false);

        if (!restoreFocus) {
            return;
        }

        window.requestAnimationFrame(() => {
            triggerRef.current?.focus();
        });
    }, []);

    const togglePopover = () => {
        if (isOpen) {
            closePopover(false);

            return;
        }

        openPopover();
    };

    useLayoutEffect(() => {
        if (!isOpen) {
            return undefined;
        }

        updatePosition();

        const frame = window.requestAnimationFrame(() => {
            updatePosition();

            const firstFocusable =
                popoverRef.current?.querySelector(FOCUSABLE_SELECTOR);

            if (firstFocusable) {
                firstFocusable.focus();

                return;
            }

            popoverRef.current?.focus();
        });

        return () => {
            window.cancelAnimationFrame(frame);
        };
    }, [isOpen, updatePosition]);

    useEffect(() => {
        if (!isOpen) {
            return undefined;
        }

        const handlePointerDown = (event) => {
            if (
                wrapperRef.current?.contains(event.target) ||
                popoverRef.current?.contains(event.target)
            ) {
                return;
            }

            closePopover(false);
        };

        const handleKeyDown = (event) => {
            if (event.key !== "Escape") {
                return;
            }

            event.preventDefault();

            closePopover(true);
        };

        const handleViewportChange = () => {
            updatePosition();
        };

        document.addEventListener("pointerdown", handlePointerDown);

        document.addEventListener("keydown", handleKeyDown);

        window.addEventListener("resize", handleViewportChange);

        window.addEventListener("scroll", handleViewportChange, true);

        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);

            document.removeEventListener("keydown", handleKeyDown);

            window.removeEventListener("resize", handleViewportChange);

            window.removeEventListener("scroll", handleViewportChange, true);
        };
    }, [isOpen, closePopover, updatePosition]);

    return (
        <Styled.Wrapper ref={wrapperRef}>
            <Styled.Trigger
                ref={triggerRef}
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                aria-expanded={isOpen}
                aria-controls={isOpen ? popoverId : undefined}
                onClick={togglePopover}
                onKeyDown={(event) => {
                    if (event.key !== "Enter" && event.key !== " ") {
                        return;
                    }

                    event.preventDefault();

                    togglePopover();
                }}
            >
                {trigger}
            </Styled.Trigger>

            {isOpen && (
                <Styled.Popover
                    ref={popoverRef}
                    id={popoverId}
                    role="dialog"
                    aria-modal="false"
                    aria-label={title}
                    tabIndex={-1}
                    data-placement={position.placement}
                    $x={position.x}
                    $y={position.y}
                    $positioned={isPositioned}
                >
                    <Styled.PopoverHeader>
                        <div>
                            <span className="label">{label}</span>

                            <strong className="title">{title}</strong>
                        </div>

                        <Styled.CloseButton
                            type="button"
                            onClick={() => closePopover(true)}
                            aria-label="Close popover"
                            title="Close"
                        >
                            <FiX aria-hidden="true" />
                        </Styled.CloseButton>
                    </Styled.PopoverHeader>

                    <div className="content">{children}</div>
                </Styled.Popover>
            )}
        </Styled.Wrapper>
    );
};

export default Popover;
