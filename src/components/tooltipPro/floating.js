const VIEWPORT_PADDING = 10;

const getPlacementParts = (placement) => {
    const [side, align = "center"] = placement.split("-");

    return {
        side,
        align,
    };
};

const getOppositePlacement = (placement) => {
    const { side, align } = getPlacementParts(placement);

    const oppositeSides = {
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left",
    };

    const oppositeSide = oppositeSides[side] || "bottom";

    return align === "center" ? oppositeSide : `${oppositeSide}-${align}`;
};

const getRawCoordinates = ({
    triggerRect,
    floatingRect,
    placement,
    offset,
}) => {
    const { side, align } = getPlacementParts(placement);

    let x = triggerRect.left + triggerRect.width / 2 - floatingRect.width / 2;

    let y = triggerRect.top + triggerRect.height / 2 - floatingRect.height / 2;

    if (side === "top") {
        y = triggerRect.top - floatingRect.height - offset;
    }

    if (side === "bottom") {
        y = triggerRect.bottom + offset;
    }

    if (side === "left") {
        x = triggerRect.left - floatingRect.width - offset;
    }

    if (side === "right") {
        x = triggerRect.right + offset;
    }

    if (side === "top" || side === "bottom") {
        if (align === "start") {
            x = triggerRect.left;
        }

        if (align === "end") {
            x = triggerRect.right - floatingRect.width;
        }
    }

    if (side === "left" || side === "right") {
        if (align === "start") {
            y = triggerRect.top;
        }

        if (align === "end") {
            y = triggerRect.bottom - floatingRect.height;
        }
    }

    return {
        x,
        y,
    };
};

const getOverflow = ({
    x,
    y,
    width,
    height,
    viewportWidth,
    viewportHeight,
    padding,
}) => {
    return {
        top: Math.max(0, padding - y),

        right: Math.max(0, x + width - (viewportWidth - padding)),

        bottom: Math.max(0, y + height - (viewportHeight - padding)),

        left: Math.max(0, padding - x),
    };
};

const getMainSideOverflow = (overflow, placement) => {
    const { side } = getPlacementParts(placement);

    return overflow[side] || 0;
};

const clamp = (value, minimum, maximum) => {
    if (maximum < minimum) {
        return minimum;
    }

    return Math.min(Math.max(value, minimum), maximum);
};

export const computeFloatingPosition = ({
    triggerElement,
    floatingElement,
    placement = "top",
    offset = 10,
    padding = VIEWPORT_PADDING,
    flip = true,
    shift = true,
}) => {
    if (!triggerElement || !floatingElement) {
        return null;
    }

    const triggerRect = triggerElement.getBoundingClientRect();

    const floatingRect = floatingElement.getBoundingClientRect();

    const viewportWidth = window.innerWidth;

    const viewportHeight = window.innerHeight;

    let finalPlacement = placement;

    let coordinates = getRawCoordinates({
        triggerRect,
        floatingRect,
        placement: finalPlacement,
        offset,
    });

    if (flip) {
        const currentOverflow = getOverflow({
            ...coordinates,
            width: floatingRect.width,
            height: floatingRect.height,
            viewportWidth,
            viewportHeight,
            padding,
        });

        const oppositePlacement = getOppositePlacement(finalPlacement);

        const oppositeCoordinates = getRawCoordinates({
            triggerRect,
            floatingRect,
            placement: oppositePlacement,
            offset,
        });

        const oppositeOverflow = getOverflow({
            ...oppositeCoordinates,
            width: floatingRect.width,
            height: floatingRect.height,
            viewportWidth,
            viewportHeight,
            padding,
        });

        const currentMainOverflow = getMainSideOverflow(
            currentOverflow,
            finalPlacement,
        );

        const oppositeMainOverflow = getMainSideOverflow(
            oppositeOverflow,
            oppositePlacement,
        );

        if (
            currentMainOverflow > 0 &&
            oppositeMainOverflow < currentMainOverflow
        ) {
            finalPlacement = oppositePlacement;

            coordinates = oppositeCoordinates;
        }
    }

    if (shift) {
        coordinates.x = clamp(
            coordinates.x,
            padding,
            viewportWidth - floatingRect.width - padding,
        );

        coordinates.y = clamp(
            coordinates.y,
            padding,
            viewportHeight - floatingRect.height - padding,
        );
    }

    return {
        x: Math.round(coordinates.x),
        y: Math.round(coordinates.y),
        placement: finalPlacement,
    };
};
