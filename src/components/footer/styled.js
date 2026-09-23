import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        background: #050505;

        border-top: 1px solid var(--border);

        .inner {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 40px;

            width: min(1240px, calc(100% - 40px));

            margin: 0 auto;

            padding: 34px 0;
        }

        .info {
            max-width: 520px;
        }

        .title {
            display: block;

            color: var(--heading);

            font-size: 0.76rem;
        }

        .text {
            margin-top: 7px;

            color: var(--muted);

            font-size: 0.58rem;
            line-height: 1.7;
        }

        .copyright {
            margin-top: 10px;

            color: var(--muted);

            font-size: 0.56rem;
        }

        .copyright a {
            color: var(--text);

            text-decoration: none;

            border-bottom: 1px solid transparent;

            transition:
                border-color 180ms ease,
                text-shadow 180ms ease;
        }

        .copyright a:hover {
            border-color: var(--accent);

            text-shadow: 0 0 10px var(--accent-soft);
        }

        .links {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex-wrap: wrap;
            gap: 7px;

            max-width: 440px;
        }

        .links a {
            display: grid;
            place-items: center;

            width: 36px;
            height: 36px;

            color: var(--text);

            border: 1px solid var(--border);

            border-radius: 8px;

            text-decoration: none;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease;
        }

        .links a:hover {
            border-color: var(--accent-border);

            box-shadow: var(--shadow-sm);
        }

        .copyright a:focus-visible,
        .links a:focus-visible {
            outline: 2px solid var(--accent);

            outline-offset: 3px;
        }

        @media (max-width: 800px) {
            .inner {
                align-items: flex-start;
                flex-direction: column;

                width: calc(100% - 28px);
            }

            .links {
                justify-content: flex-start;

                max-width: 100%;
            }
        }

        @media (max-width: 375px) {
            .links a {
                width: 34px;
                height: 34px;
            }
        }
    `,
};
