import React from "react";
import { Styled } from "./Styled.js";
import "./styles.css";
import Tooltip from "./Tooltip.jsx";
import Popover from "./Popover.jsx";
import { toast } from "react-toastify";

export default function TooltipPro() {
    return (
        <Styled.Shell>
            <Styled.Panel>
                <Styled.Title>Tooltip/Popover System</Styled.Title>
                <Styled.Sub>
                    Smart flip/shift positioning with arrow, hover/focus tooltips, click-to-open popovers. ESC or outside click closes popovers.
                </Styled.Sub>

                <Styled.Grid>
                    <Tooltip placement="top" content="I appear above and flip if needed." trigger="both">
                        <button>Tooltip: Top</button>
                    </Tooltip>

                    <Tooltip placement="bottom" content="Hello from the bottom side." trigger="both">
                        <button>Tooltip: Bottom</button>
                    </Tooltip>

                    <Tooltip placement="left" content="Left placement with viewport clamping." trigger="both">
                        <button>Tooltip: Left</button>
                    </Tooltip>

                    <Tooltip placement="right" align="start" content="Right/start aligned" trigger="both">
                        <button>Tooltip: Right (start)</button>
                    </Tooltip>

                    {/* Popovers */}
                    <Popover
                        placement="bottom"
                        trigger={<button>Open Popover</button>}
                        title="Quick Actions"
                    >
                        <div style={{ display: "grid", gap: 8 }}>
                            <button onClick={() => toast.info("Action: Create")}>Create</button>
                            <button onClick={() => toast.info("Action: Duplicate")}>Duplicate</button>
                            <button onClick={() => toast.info("Action: Archive")}>Archive</button>
                        </div>
                    </Popover>

                    <Popover
                        placement="right"
                        align="start"
                        trigger={<button>Open Popover (right)</button>}
                        title="Details"
                    >
                        <p style={{ margin: 0 }}>
                            This popover flips and shifts to stay on-screen. Click outside or press <kbd>Esc</kbd> to close.
                        </p>
                    </Popover>
                </Styled.Grid>
            </Styled.Panel>
        </Styled.Shell>
    );
}
