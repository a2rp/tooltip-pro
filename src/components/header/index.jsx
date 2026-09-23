import { useEffect, useRef, useState } from "react";

import { FiGithub, FiMenu, FiX } from "react-icons/fi";

import { Styled } from "./styled";

const Header = () => {
    const lastScrollYRef = useRef(0);

    const [isVisible, setIsVisible] = useState(true);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (isMenuOpen) {
                setIsVisible(true);

                lastScrollYRef.current = currentScrollY;

                return;
            }

            if (currentScrollY <= 20) {
                setIsVisible(true);

                lastScrollYRef.current = currentScrollY;

                return;
            }

            setIsVisible(currentScrollY < lastScrollYRef.current);

            lastScrollYRef.current = currentScrollY;
        };

        lastScrollYRef.current = window.scrollY;

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
            }
        };

        const handleResize = () => {
            if (window.innerWidth > 760) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        window.addEventListener("resize", handleResize);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);

            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleMenuToggle = () => {
        setIsVisible(true);

        setIsMenuOpen((current) => !current);
    };

    const handleNavigation = () => {
        setIsMenuOpen(false);
    };

    return (
        <Styled.Wrapper $visible={isVisible || isMenuOpen}>
            <div className="inner">
                <a
                    className="brand"
                    href="#top"
                    onClick={handleNavigation}
                    aria-label="Tooltip Pro home"
                >
                    <img
                        className="logo"
                        src={`${import.meta.env.BASE_URL}logo.png`}
                        alt=""
                        aria-hidden="true"
                    />

                    <div className="brandText">
                        <strong>Tooltip Pro</strong>

                        <span>Floating UI Demo</span>
                    </div>
                </a>

                <nav className="desktopNav" aria-label="Primary navigation">
                    <a href="#tooltips">Tooltips</a>

                    <a href="#popovers">Popovers</a>

                    <a href="#behavior">Behavior</a>
                </nav>

                <div className="actions">
                    <a
                        className="iconButton"
                        href="https://github.com/a2rp/tooltip-pro"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Tooltip Pro on GitHub"
                        title="View on GitHub"
                    >
                        <FiGithub aria-hidden="true" />
                    </a>

                    <button
                        className="menuButton"
                        type="button"
                        onClick={handleMenuToggle}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        aria-label={
                            isMenuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        title={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMenuOpen ? (
                            <FiX aria-hidden="true" />
                        ) : (
                            <FiMenu aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <nav
                    id="mobile-navigation"
                    className="mobileNav"
                    aria-label="Mobile navigation"
                >
                    <div className="mobileNavInner">
                        <a href="#tooltips" onClick={handleNavigation}>
                            Tooltips
                        </a>

                        <a href="#popovers" onClick={handleNavigation}>
                            Popovers
                        </a>

                        <a href="#behavior" onClick={handleNavigation}>
                            Behavior
                        </a>
                    </div>
                </nav>
            )}
        </Styled.Wrapper>
    );
};

export default Header;
