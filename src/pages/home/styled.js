import styled from "styled-components";

export const Styled = {
    Wrapper: styled.main`
        width: 100%;

        .container {
            width: min(1240px, calc(100% - 40px));
            margin: 0 auto;
        }

        .hero {
            min-height: 780px;

            display: flex;
            align-items: center;

            padding: 120px 0 90px;

            border-bottom: 1px solid var(--border);

            background:
                radial-gradient(
                    circle at 14% 20%,
                    var(--accent-soft),
                    transparent 28rem
                ),
                var(--background);
        }

        .heroGrid {
            display: grid;
            grid-template-columns:
                minmax(0, 1.05fr)
                minmax(380px, 0.95fr);

            gap: 70px;
            align-items: center;
        }

        .label {
            margin: 0;

            color: var(--accent);

            font-size: 0.62rem;
            font-weight: 800;
            letter-spacing: 0.13em;
            text-transform: uppercase;
        }

        .hero h1 {
            max-width: 780px;

            margin: 12px 0 0;

            color: var(--heading);

            font-size: clamp(4rem, 8vw, 7.8rem);
            font-weight: 800;
            letter-spacing: -0.075em;
            line-height: 0.88;
        }

        .hero h1 span {
            display: block;

            color: var(--muted);
        }

        .heroText {
            max-width: 650px;

            margin: 28px 0 0;

            color: var(--text);

            font-size: 0.78rem;
            line-height: 1.9;
        }

        .heroActions {
            display: flex;
            flex-wrap: wrap;
            gap: 9px;

            margin-top: 30px;
        }

        .primaryLink,
        .secondaryLink {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;

            min-height: 44px;

            padding: 9px 13px;

            border-radius: 8px;

            font-size: 0.63rem;
            font-weight: 800;

            text-decoration: none;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease,
                text-shadow 180ms ease;
        }

        .primaryLink {
            color: #ffffff;
            background: var(--accent);

            border: 1px solid var(--accent);
        }

        .secondaryLink {
            color: var(--heading);
            background: transparent;

            border: 1px solid var(--border-strong);
        }

        .primaryLink:hover,
        .secondaryLink:hover {
            border-color: var(--heading);

            box-shadow: var(--shadow-sm);
        }

        .primaryLink:focus-visible,
        .secondaryLink:focus-visible {
            outline: 2px solid var(--accent);
            outline-offset: 3px;
        }

        .heroDemo {
            overflow: visible;

            background: var(--card);

            border: 1px solid var(--border);
            border-radius: 18px;

            box-shadow: var(--shadow-lg);
        }

        .heroDemoHeader,
        .heroDemoFooter {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;

            padding: 14px 16px;

            color: var(--muted);

            font-size: 0.56rem;
            font-weight: 700;

            letter-spacing: 0.06em;
            text-transform: uppercase;
        }

        .heroDemoHeader {
            border-bottom: 1px solid var(--border);
        }

        .heroDemoFooter {
            justify-content: flex-start;
            flex-wrap: wrap;

            border-top: 1px solid var(--border);
        }

        .heroDemoFooter span {
            padding: 5px 7px;

            border: 1px solid var(--border);
            border-radius: 6px;
        }

        .status {
            color: var(--success);

            border: 1px solid rgba(123, 207, 155, 0.35);

            border-radius: 6px;

            padding: 4px 7px;
        }

        .heroDemoStage {
            display: grid;
            place-items: center;

            min-height: 390px;

            padding: 50px 25px;

            background:
                linear-gradient(var(--grid-line) 1px, transparent 1px),
                linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);

            background-size: 28px 28px;
        }

        .largeTrigger,
        .placementTrigger,
        .demoTrigger,
        .edgeTrigger {
            display: inline-flex;
            align-items: center;
            justify-content: center;

            color: var(--heading);
            background: var(--card-soft);

            border: 1px solid var(--border-strong);
            border-radius: 8px;

            font-weight: 700;

            cursor: default;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease,
                text-shadow 180ms ease;
        }

        .largeTrigger {
            min-height: 52px;

            padding: 12px 18px;

            font-size: 0.72rem;
        }

        .largeTrigger:hover,
        .placementTrigger:hover,
        .demoTrigger:hover,
        .edgeTrigger:hover {
            border-color: var(--accent-border);

            box-shadow: var(--shadow-sm);

            text-shadow: 0 0 10px var(--accent-soft);
        }

        .section {
            padding: 100px 0;

            border-bottom: 1px solid var(--border);
        }

        .sectionSoft {
            background: var(--background-soft);
        }

        .sectionHeader {
            display: grid;
            grid-template-columns: minmax(0, 1fr) 420px;
            gap: 60px;
            align-items: end;

            margin-bottom: 34px;
        }

        .sectionHeader h2 {
            max-width: 760px;

            margin: 9px 0 0;

            color: var(--heading);

            font-size: clamp(2.5rem, 5vw, 4.8rem);
            font-weight: 800;
            letter-spacing: -0.06em;
            line-height: 0.96;
        }

        .sectionHeader > p {
            margin: 0;

            color: var(--text);

            font-size: 0.7rem;
            line-height: 1.8;
        }

        .placementGrid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 10px;

            padding: 42px;

            background: var(--card);

            border: 1px solid var(--border);
            border-radius: 16px;
        }

        .placementGrid > span {
            width: 100%;
        }

        .placementTrigger {
            width: 100%;
            min-height: 56px;

            padding: 10px;

            font-size: 0.61rem;
        }

        .interactionGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
        }

        .demoCard,
        .featureCard,
        .popoverDemo {
            padding: 24px;

            background: var(--card);

            border: 1px solid var(--border);
            border-radius: 14px;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease;
        }

        .demoCard:hover,
        .featureCard:hover,
        .popoverDemo:hover {
            border-color: var(--border-strong);

            box-shadow: var(--shadow-sm);
        }

        .demoIcon {
            display: grid;
            place-items: center;

            width: 40px;
            height: 40px;

            color: var(--accent);

            border: 1px solid var(--accent-border);
            border-radius: 9px;
        }

        .demoCard h3,
        .featureCard h3,
        .popoverDemo h3 {
            margin: 19px 0 0;

            color: var(--heading);

            font-size: 0.84rem;
        }

        .demoCard p,
        .featureCard p,
        .popoverDemo p {
            margin: 9px 0 0;

            color: var(--text);

            font-size: 0.67rem;
            line-height: 1.75;
        }

        .demoArea {
            display: flex;
            align-items: center;

            min-height: 110px;

            margin-top: 22px;
            padding: 18px;

            background: var(--background);

            border: 1px solid var(--border);
            border-radius: 10px;
        }

        .demoTrigger {
            min-height: 40px;

            padding: 8px 11px;

            font-size: 0.6rem;

            cursor: pointer;
        }

        .edgeDemo {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;

            min-height: 110px;

            margin-top: 22px;
            padding: 18px 4px;

            background: var(--background);

            border-top: 1px solid var(--border);
            border-bottom: 1px solid var(--border);
        }

        .edgeTrigger {
            min-height: 39px;

            padding: 8px 11px;

            font-size: 0.58rem;
        }

        .popoverGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
        }

        .popoverDemo {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 30px;

            min-height: 240px;
        }

        .popoverDemo > div:first-child {
            max-width: 430px;
        }

        .popoverActions {
            display: grid;
            gap: 7px;
        }

        .popoverActions button {
            width: 100%;

            min-height: 38px;

            padding: 8px 10px;

            color: var(--heading);
            background: var(--background);

            border: 1px solid var(--border);
            border-radius: 7px;

            font: inherit;
            font-size: 0.61rem;
            font-weight: 700;

            cursor: pointer;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease;
        }

        .popoverActions button:hover {
            border-color: var(--accent-border);

            box-shadow: var(--shadow-sm);
        }

        .popoverActions button:focus-visible {
            outline: 2px solid var(--accent);
            outline-offset: 2px;
        }

        .actionStatus {
            display: flex;
            align-items: center;
            gap: 9px;

            margin-top: 14px;
            padding: 14px;

            color: var(--text);
            background: var(--card);

            border: 1px solid var(--border);
            border-radius: 10px;

            font-size: 0.62rem;
        }

        .actionStatus svg {
            color: var(--success);
        }

        .featureGrid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 12px;
        }

        @media (max-width: 1050px) {
            .heroGrid {
                grid-template-columns: 1fr;
            }

            .heroDemo {
                max-width: 720px;
            }

            .interactionGrid {
                grid-template-columns: repeat(2, 1fr);
            }

            .featureGrid {
                grid-template-columns: repeat(2, 1fr);
            }

            .placementGrid {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        @media (max-width: 800px) {
            .container {
                width: calc(100% - 28px);
            }

            .hero {
                min-height: auto;

                padding: 100px 0 70px;
            }

            .section {
                padding: 75px 0;
            }

            .sectionHeader {
                grid-template-columns: 1fr;
                gap: 20px;
            }

            .sectionHeader > p {
                max-width: 650px;
            }

            .popoverGrid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 600px) {
            .hero h1 {
                font-size: clamp(3.4rem, 16vw, 5.5rem);
            }

            .heroDemoStage {
                min-height: 300px;
            }

            .placementGrid {
                grid-template-columns: repeat(2, 1fr);

                padding: 18px;
            }

            .interactionGrid,
            .featureGrid {
                grid-template-columns: 1fr;
            }

            .popoverDemo {
                align-items: flex-start;
                flex-direction: column;
            }

            .heroActions {
                display: grid;
            }

            .primaryLink,
            .secondaryLink {
                width: 100%;
            }
        }

        @media (max-width: 375px) {
            .placementGrid {
                grid-template-columns: 1fr;
            }
        }
    `,
};
