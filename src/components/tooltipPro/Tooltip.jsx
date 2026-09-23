import {
    useCallback,
    useEffect,
    useId,
    useLayoutEffect,
    useRef,
    useState,
} from "react";

import { computeFloatingPosition } from "./floating";

import { Styled } from "./styled";

const Tooltip = ({
    children,
    content,
    placement = "top",
    trigger = "hover",
    offset = 10,
    disabled = false,
    openDelay = 120,
    closeDelay = 80,
}) => {
    const tooltipId = useId();

    const wrapperRef = useRef(null);
    const triggerRef = useRef(null);
    const tooltipRef = useRef(null);

    const openTimerRef = useRef(null);
    const closeTimerRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);

    const [isPositioned, setIsPositioned] = useState(false);

    const [position, setPosition] = useState({
        x: 0,
        y: 0,
        placement,
    });

    const clearTimers = () => {
        window.clearTimeout(openTimerRef.current);

        window.clearTimeout(closeTimerRef.current);
    };

    const updatePosition = useCallback(() => {
        const nextPosition = computeFloatingPosition({
            triggerElement: triggerRef.current,

            floatingElement: tooltipRef.current,

            placement,
            offset,
        });

        if (!nextPosition) {
            return;
        }

        setPosition(nextPosition);
        setIsPositioned(true);
    }, [placement, offset]);

    const openTooltip = () => {
        if (disabled) {
            return;
        }

        clearTimers();

        openTimerRef.current = window.setTimeout(() => {
            setIsPositioned(false);
            setIsOpen(true);
        }, openDelay);
    };

    const closeTooltip = () => {
        clearTimers();

        closeTimerRef.current = window.setTimeout(() => {
            setIsOpen(false);
            setIsPositioned(false);
        }, closeDelay);
    };

    const toggleTooltip = () => {
        if (disabled) {
            return;
        }

        clearTimers();

        setIsPositioned(false);

        setIsOpen((current) => !current);
    };

    useLayoutEffect(() => {
        if (!isOpen) {
            return undefined;
        }

        updatePosition();

        const frame = window.requestAnimationFrame(updatePosition);

        return () => {
            window.cancelAnimationFrame(frame);
        };
    }, [isOpen, content, updatePosition]);

    useEffect(() => {
        if (!isOpen) {
            return undefined;
        }

        const handleViewportChange = () => {
            updatePosition();
        };

        window.addEventListener("resize", handleViewportChange);

        window.addEventListener("scroll", handleViewportChange, true);

        return () => {
            window.removeEventListener("resize", handleViewportChange);

            window.removeEventListener("scroll", handleViewportChange, true);
        };
    }, [isOpen, updatePosition]);

    useEffect(() => {
        if (!isOpen || trigger !== "click") {
            return undefined;
        }

        const handlePointerDown = (event) => {
            if (wrapperRef.current?.contains(event.target)) {
                return;
            }

            setIsOpen(false);
            setIsPositioned(false);
        };

        const handleKeyDown = (event) => {
            if (event.key !== "Escape") {
                return;
            }

            setIsOpen(false);
            setIsPositioned(false);

            triggerRef.current?.focus();
        };

        document.addEventListener("pointerdown", handlePointerDown);

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);

            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, trigger]);

    useEffect(() => {
        return () => {
            clearTimers();
        };
    }, []);

    const triggerProps =
        trigger === "click"
            ? {
                  onClick: toggleTooltip,

                  onKeyDown: (event) => {
                      if (event.key !== "Enter" && event.key !== " ") {
                          return;
                      }

                      event.preventDefault();

                      toggleTooltip();
                  },

                  role: "button",
                  tabIndex: 0,

                  "aria-expanded": isOpen,

                  "aria-describedby": isOpen ? tooltipId : undefined,
              }
            : {
                  onMouseEnter: openTooltip,

                  onMouseLeave: closeTooltip,

                  onFocus: openTooltip,

                  onBlur: closeTooltip,

                  tabIndex: 0,

                  "aria-describedby": isOpen ? tooltipId : undefined,
              };

    return (
        <Styled.Wrapper ref={wrapperRef}>
            <Styled.Trigger ref={triggerRef} {...triggerProps}>
                {children}
            </Styled.Trigger>

            {isOpen && (
                <Styled.Tooltip
                    ref={tooltipRef}
                    id={tooltipId}
                    role="tooltip"
                    data-placement={position.placement}
                    $x={position.x}
                    $y={position.y}
                    $positioned={isPositioned}
                >
                    {content}
                </Styled.Tooltip>
            )}
        </Styled.Wrapper>
    );
};

export default Tooltip;
