import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        position: fixed;

        top: ${({ $visible }) => ($visible ? "0" : "-82px")};

        left: 0;

        z-index: 1000;

        width: 100%;

        background: rgba(7, 7, 7, 0.92);

        border-bottom: 1px solid var(--border);

        backdrop-filter: blur(16px);

        transition:
            top 180ms ease,
            border-color 180ms ease;

        .inner {
            display: grid;

            grid-template-columns:
                auto
                1fr
                auto;

            align-items: center;
            gap: 24px;

            width: min(1240px, calc(100% - 40px));

            min-height: 72px;

            margin: 0 auto;
        }

        .brand {
            display: inline-flex;
            align-items: center;
            gap: 10px;

            color: var(--heading);

            text-decoration: none;
        }

        .logo {
            width: 42px;
            height: 42px;

            flex-shrink: 0;

            object-fit: cover;

            border: 1px solid var(--border);

            border-radius: 10px;
        }

        .brandText {
            min-width: 0;
        }

        .brand strong {
            display: block;

            color: var(--heading);

            font-size: 0.78rem;
            line-height: 1.15;
        }

        .brand span {
            display: block;

            margin-top: 4px;

            color: var(--muted);

            font-size: 0.52rem;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;
        }

        .desktopNav {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 22px;
        }

        .desktopNav a {
            color: var(--text);

            font-size: 0.62rem;
            font-weight: 700;

            text-decoration: none;

            border-bottom: 1px solid transparent;

            transition:
                border-color 180ms ease,
                text-shadow 180ms ease;
        }

        .desktopNav a:hover {
            border-color: var(--accent);

            text-shadow: 0 0 10px var(--accent-soft);
        }

        .actions {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 8px;
        }

        .iconButton,
        .menuButton {
            display: grid;
            place-items: center;

            width: 40px;
            height: 40px;

            padding: 0;

            color: var(--text);
            background: transparent;

            border: 1px solid var(--border);

            border-radius: 9px;

            text-decoration: none;

            cursor: pointer;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease;
        }

        .iconButton:hover,
        .menuButton:hover {
            border-color: var(--accent-border);

            box-shadow: var(--shadow-sm);
        }

        .menuButton {
            display: none;
        }

        .mobileNav {
            display: none;

            border-top: 1px solid var(--border);

            background: rgba(7, 7, 7, 0.98);
        }

        .mobileNavInner {
            display: grid;

            width: calc(100% - 28px);

            margin: 0 auto;

            padding: 10px 0 14px;
        }

        .mobileNav a {
            display: flex;
            align-items: center;

            min-height: 46px;

            padding: 8px 10px;

            color: var(--text);

            border-bottom: 1px solid var(--border);

            font-size: 0.66rem;
            font-weight: 700;

            text-decoration: none;

            transition:
                border-color 180ms ease,
                text-shadow 180ms ease;
        }

        .mobileNav a:last-child {
            border-bottom: 0;
        }

        .mobileNav a:hover {
            border-color: var(--accent-border);

            text-shadow: 0 0 10px var(--accent-soft);
        }

        .brand:focus-visible,
        .desktopNav a:focus-visible,
        .mobileNav a:focus-visible,
        .iconButton:focus-visible,
        .menuButton:focus-visible {
            outline: 2px solid var(--accent);

            outline-offset: 3px;
        }

        @media (max-width: 760px) {
            .inner {
                grid-template-columns:
                    1fr
                    auto;

                width: calc(100% - 28px);
            }

            .desktopNav {
                display: none;
            }

            .menuButton {
                display: grid;
            }

            .mobileNav {
                display: block;
            }
        }

        @media (max-width: 375px) {
            .brand span {
                display: none;
            }

            .logo {
                width: 38px;
                height: 38px;
            }

            .iconButton,
            .menuButton {
                width: 38px;
                height: 38px;
            }
        }
    `,
};
