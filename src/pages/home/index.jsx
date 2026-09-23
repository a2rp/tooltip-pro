import { useState } from "react";

import {
    FiActivity,
    FiCheck,
    FiCommand,
    FiInfo,
    FiLayers,
    FiMousePointer,
    FiNavigation,
    FiZap,
} from "react-icons/fi";

import { Popover, Tooltip } from "../../components/tooltipPro";

import { Styled } from "./styled";

const placements = [
    "top-start",
    "top",
    "top-end",
    "right-start",
    "right",
    "right-end",
    "bottom-start",
    "bottom",
    "bottom-end",
    "left-start",
    "left",
    "left-end",
];

const features = [
    {
        title: "Real flip",
        text: "The requested side is measured first. When it overflows, the opposite side is tested before the final position is selected.",
        icon: <FiNavigation aria-hidden="true" />,
    },
    {
        title: "Viewport shift",
        text: "Floating surfaces are shifted inside the visible viewport after placement and flip calculations are complete.",
        icon: <FiLayers aria-hidden="true" />,
    },
    {
        title: "Keyboard support",
        text: "Triggers support keyboard interaction, Escape closes active surfaces, and popover focus is restored when appropriate.",
        icon: <FiCommand aria-hidden="true" />,
    },
    {
        title: "Responsive positioning",
        text: "Open surfaces are recalculated during scrolling and viewport resizing so they remain aligned with their trigger.",
        icon: <FiActivity aria-hidden="true" />,
    },
];

const Home = () => {
    const [actionMessage, setActionMessage] = useState(
        "Choose an action inside the popover.",
    );

    const handleAction = (action) => {
        setActionMessage(`${action} action selected.`);
    };

    return (
        <Styled.Wrapper id="top">
            <section className="hero">
                <div className="container heroGrid">
                    <div className="heroContent">
                        <p className="label">React Floating UI Demo</p>

                        <h1>
                            Small surfaces.
                            <span>Better positioning.</span>
                        </h1>

                        <p className="heroText">
                            Tooltip Pro is a focused React demo for accessible
                            tooltips and popovers with real viewport-aware flip
                            and shift positioning.
                        </p>

                        <div className="heroActions">
                            <a className="primaryLink" href="#tooltips">
                                <FiMousePointer aria-hidden="true" />
                                Explore Tooltips
                            </a>

                            <a className="secondaryLink" href="#behavior">
                                View Behavior
                            </a>
                        </div>
                    </div>

                    <div className="heroDemo">
                        <div className="heroDemoHeader">
                            <span>Live Preview</span>

                            <span className="status">Active</span>
                        </div>

                        <div className="heroDemoStage">
                            <Tooltip
                                content="This tooltip automatically flips when the requested side does not have enough space."
                                placement="top"
                            >
                                <span className="largeTrigger">
                                    Hover or focus
                                </span>
                            </Tooltip>
                        </div>

                        <div className="heroDemoFooter">
                            <span>Hover</span>

                            <span>Focus</span>

                            <span>Flip</span>

                            <span>Shift</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="tooltips">
                <div className="container">
                    <div className="sectionHeader">
                        <div>
                            <p className="label">Tooltip Placements</p>

                            <h2>
                                Twelve placement options, one positioning
                                engine.
                            </h2>
                        </div>

                        <p>
                            Hover or keyboard-focus each trigger. The requested
                            placement remains preferred, but Tooltip Pro can
                            flip when the viewport does not have enough room.
                        </p>
                    </div>

                    <div className="placementGrid">
                        {placements.map((placement) => (
                            <Tooltip
                                key={placement}
                                content={`Placement: ${placement}`}
                                placement={placement}
                            >
                                <span className="placementTrigger">
                                    {placement}
                                </span>
                            </Tooltip>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section sectionSoft">
                <div className="container">
                    <div className="sectionHeader">
                        <div>
                            <p className="label">Interaction Modes</p>

                            <h2>Hover, focus, or click.</h2>
                        </div>

                        <p>
                            Tooltip triggers can follow normal hover and focus
                            behavior or remain open through explicit click
                            interaction.
                        </p>
                    </div>

                    <div className="interactionGrid">
                        <article className="demoCard">
                            <span className="demoIcon">
                                <FiMousePointer aria-hidden="true" />
                            </span>

                            <h3>Hover + Focus</h3>

                            <p>
                                Best for short supporting information attached
                                to labels, icons, and compact controls.
                            </p>

                            <div className="demoArea">
                                <Tooltip
                                    content="Opened by hover or keyboard focus."
                                    placement="top"
                                >
                                    <span className="demoTrigger">
                                        Try tooltip
                                    </span>
                                </Tooltip>
                            </div>
                        </article>

                        <article className="demoCard">
                            <span className="demoIcon">
                                <FiZap aria-hidden="true" />
                            </span>

                            <h3>Click Trigger</h3>

                            <p>
                                Useful when tooltip content should remain
                                available until the user clicks again, clicks
                                outside, or presses Escape.
                            </p>

                            <div className="demoArea">
                                <Tooltip
                                    content="Click again, click outside, or press Escape to close."
                                    placement="bottom"
                                    trigger="click"
                                >
                                    <span className="demoTrigger">
                                        Click tooltip
                                    </span>
                                </Tooltip>
                            </div>
                        </article>

                        <article className="demoCard edgeCard">
                            <span className="demoIcon">
                                <FiNavigation aria-hidden="true" />
                            </span>

                            <h3>Edge Flip Test</h3>

                            <p>
                                These triggers intentionally sit close to
                                opposite edges so you can observe viewport
                                correction.
                            </p>

                            <div className="edgeDemo">
                                <Tooltip
                                    content="Requested on the left. Near the viewport edge it can flip to the right."
                                    placement="left"
                                >
                                    <span className="edgeTrigger">Left</span>
                                </Tooltip>

                                <Tooltip
                                    content="Requested on the right. Near the viewport edge it can flip to the left."
                                    placement="right"
                                >
                                    <span className="edgeTrigger">Right</span>
                                </Tooltip>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section" id="popovers">
                <div className="container">
                    <div className="sectionHeader">
                        <div>
                            <p className="label">Popovers</p>

                            <h2>Interactive floating content.</h2>
                        </div>

                        <p>
                            Popovers support richer content, focus movement,
                            outside-click closing, Escape, and responsive
                            repositioning.
                        </p>
                    </div>

                    <div className="popoverGrid">
                        <article className="popoverDemo">
                            <div>
                                <span className="demoIcon">
                                    <FiInfo aria-hidden="true" />
                                </span>

                                <h3>Information Popover</h3>

                                <p>
                                    A compact dialog for contextual details
                                    without navigating away from the current
                                    interface.
                                </p>
                            </div>

                            <Popover
                                label="Information"
                                title="Tooltip Pro"
                                placement="bottom-start"
                                trigger={
                                    <span className="demoTrigger">
                                        Open information
                                    </span>
                                }
                            >
                                <p>
                                    Tooltip Pro calculates the requested
                                    position, compares viewport overflow, then
                                    applies flip and shift behavior.
                                </p>
                            </Popover>
                        </article>

                        <article className="popoverDemo">
                            <div>
                                <span className="demoIcon">
                                    <FiZap aria-hidden="true" />
                                </span>

                                <h3>Action Popover</h3>

                                <p>
                                    Interactive controls can live inside the
                                    floating surface while outside clicks remain
                                    available for closing.
                                </p>
                            </div>

                            <Popover
                                label="Quick Actions"
                                title="Choose an action"
                                placement="bottom-end"
                                trigger={
                                    <span className="demoTrigger">
                                        Open actions
                                    </span>
                                }
                            >
                                <div className="popoverActions">
                                    <button
                                        type="button"
                                        onClick={() => handleAction("Create")}
                                    >
                                        Create
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleAction("Duplicate")
                                        }
                                    >
                                        Duplicate
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => handleAction("Archive")}
                                    >
                                        Archive
                                    </button>
                                </div>
                            </Popover>
                        </article>
                    </div>

                    <div
                        className="actionStatus"
                        role="status"
                        aria-live="polite"
                    >
                        <FiCheck aria-hidden="true" />
                        {actionMessage}
                    </div>
                </div>
            </section>

            <section className="section sectionSoft" id="behavior">
                <div className="container">
                    <div className="sectionHeader">
                        <div>
                            <p className="label">Behavior</p>

                            <h2>Built around predictable floating UI.</h2>
                        </div>

                        <p>
                            The component stays intentionally small, with
                            positioning and interaction behavior implemented
                            directly in React and browser APIs.
                        </p>
                    </div>

                    <div className="featureGrid">
                        {features.map((feature) => (
                            <article
                                className="featureCard"
                                key={feature.title}
                            >
                                <span className="demoIcon">{feature.icon}</span>

                                <h3>{feature.title}</h3>

                                <p>{feature.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </Styled.Wrapper>
    );
};

export default Home;
