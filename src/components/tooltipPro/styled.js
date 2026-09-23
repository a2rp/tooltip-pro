import styled from "styled-components";

export const Styled = {
    Wrapper: styled.span`
        position: relative;

        display: inline-flex;

        max-width: 100%;
    `,

    Trigger: styled.span`
        display: inline-flex;
        align-items: center;

        max-width: 100%;

        border-radius: 8px;

        &:focus-visible {
            outline: 2px solid var(--accent);

            outline-offset: 3px;
        }
    `,

    Tooltip: styled.span`
        position: fixed;

        top: ${({ $y }) => `${$y}px`};
        left: ${({ $x }) => `${$x}px`};

        z-index: 1500;

        max-width: min(280px, calc(100vw - 24px));

        padding: 8px 10px;

        color: var(--tooltip-text);
        background: var(--tooltip-bg);

        border: 1px solid var(--tooltip-border);

        border-radius: 8px;

        box-shadow: var(--shadow-md);

        font-size: 0.65rem;
        font-weight: 700;
        line-height: 1.55;

        visibility: ${({ $positioned }) =>
            $positioned ? "visible" : "hidden"};

        opacity: ${({ $positioned }) => ($positioned ? 1 : 0)};

        pointer-events: none;

        transition:
            opacity 120ms ease,
            border-color 180ms ease;

        &::after {
            position: absolute;

            width: 8px;
            height: 8px;

            content: "";

            background: var(--tooltip-bg);

            border: 1px solid var(--tooltip-border);

            transform: rotate(45deg);
        }

        &[data-placement^="top"]::after {
            bottom: -5px;
            left: 50%;

            border-top: 0;
            border-left: 0;

            transform: translateX(-50%) rotate(45deg);
        }

        &[data-placement^="bottom"]::after {
            top: -5px;
            left: 50%;

            border-right: 0;
            border-bottom: 0;

            transform: translateX(-50%) rotate(45deg);
        }

        &[data-placement^="left"]::after {
            top: 50%;
            right: -5px;

            border-bottom: 0;
            border-left: 0;

            transform: translateY(-50%) rotate(45deg);
        }

        &[data-placement^="right"]::after {
            top: 50%;
            left: -5px;

            border-top: 0;
            border-right: 0;

            transform: translateY(-50%) rotate(45deg);
        }
    `,

    Popover: styled.div`
        position: fixed;

        top: ${({ $y }) => `${$y}px`};
        left: ${({ $x }) => `${$x}px`};

        z-index: 1600;

        width: min(340px, calc(100vw - 24px));

        padding: 16px;

        color: var(--text);
        background: var(--card);

        border: 1px solid var(--border-strong);

        border-radius: 12px;

        box-shadow: var(--shadow-lg);

        visibility: ${({ $positioned }) =>
            $positioned ? "visible" : "hidden"};

        opacity: ${({ $positioned }) => ($positioned ? 1 : 0)};

        transition:
            opacity 120ms ease,
            border-color 180ms ease;

        outline: none;

        .label {
            display: block;

            color: var(--accent);

            font-size: 0.56rem;
            font-weight: 800;
            letter-spacing: 0.1em;
            text-transform: uppercase;
        }

        .title {
            display: block;

            margin-top: 5px;

            color: var(--heading);

            font-size: 0.84rem;
            font-weight: 800;
        }

        .content {
            margin-top: 12px;

            color: var(--text);

            font-size: 0.68rem;
            line-height: 1.7;
        }
    `,

    PopoverHeader: styled.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;
    `,

    CloseButton: styled.button`
        display: grid;
        place-items: center;

        width: 34px;
        height: 34px;

        flex-shrink: 0;

        padding: 0;

        color: var(--text);
        background: transparent;

        border: 1px solid var(--border);

        border-radius: 8px;

        cursor: pointer;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease;

        &:hover {
            border-color: var(--accent-border);

            box-shadow: var(--shadow-sm);
        }

        &:focus-visible {
            outline: 2px solid var(--accent);

            outline-offset: 2px;
        }
    `,
};
