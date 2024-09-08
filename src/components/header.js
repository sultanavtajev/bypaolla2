"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

// Images
import logo from "../assets/images/logo.png";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// Hooks
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuPreview, setMenuPreview] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const pathname = usePathname();

  const toggleSubMenu = () => {
    setIsSubmenuOpen((prev) => !prev);
  };

  const handleMenuShow = () => {
    setMenuPreview(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseMenu = (e) => {
    const target = e.target;
    if (target) {
      if (
        target.parentElement?.className === "sub-menu-toggler" ||
        target.className === "sub-menu-toggler"
      ) {
        return;
      }
    }
    setMenuPreview(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* Header */}
      <div
        className={
          "header-holder center-relative relative content-1170" +
          (menuPreview ? " down" : "")
        }
      >
        <div className="header-logo">
          <Link href="/">
            <div>
              <h1 className="entry-title">
                PAOLLA AVTAJEVA
              </h1>
            </div>
          </Link>
        </div>
        <div className="toggle-holder">
          <div id="toggle" onClick={handleMenuShow}>
            <div className="first-menu-line"></div>
            <div className="second-menu-line"></div>
            <div className="third-menu-line"></div>
          </div>
        </div>
        <div className="clear"></div>
      </div>

      {/* Navigation */}
      <AnimatePresence>
        {menuPreview && (
          <motion.div
            key="nav-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="menu-wraper center-relative"
            onClick={handleCloseMenu}
          >
            <motion.div
              key="nav-holder"
              initial={{ transform: `translateY(30px)` }}
              animate={{ transform: `translateY(0px)` }}
              exit={{ transform: `translateY(30px)` }}
              className="menu-holder"
            >
              <nav id="header-main-menu" className="big-menu">
                {/* Nav Links */}
                <ul className="main-menu sm sm-clean">
                  <li>
                    <Link
                      href="/"
                      className={pathname === "/" ? "current" : ""}
                    >
                      home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className={pathname === "/about/" ? "current" : ""}
                    >
                      me
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portfolio"
                      className={pathname === "/portfolio/" ? "current" : ""}
                    >
                      portfolio
                    </Link>
                  </li>

                  <li className="sum-menu-li">
                    <div className="sub-menu-toggler" onClick={toggleSubMenu}>
                      <Link
                        href=""
                        className={
                          /^\/portfolio\/.+\/$/.test(pathname) ? "current" : ""
                        }
                      >
                        categories
                      </Link>

                      <div className="expandable-icon">
                        <motion.div
                          variants={{
                            expanded: { rotate: -180 },
                            collapsed: { rotate: 0 },
                          }}
                          initial="collapsed"
                          animate={isSubmenuOpen ? "expanded" : "collapsed"}
                          transition={{ duration: 0.3 }}
                        >
                          <FontAwesomeIcon icon={faChevronDown} />
                        </motion.div>
                      </div>
                    </div>
                    <motion.ul
                      variants={{
                        expanded: {
                          height: "auto",
                          opacity: 1,
                        },
                        collapsed: {
                          height: 0,
                          opacity: 0,
                        },
                      }}
                      animate={isSubmenuOpen ? "expanded" : "collapsed"}
                      initial="collapsed"
                      transition={{ duration: 0.3 }}
                      className="sub-menu"
                      style={{
                        overflow: "hidden",
                      }}
                    >
                      <li>
                        <Link
                          href="/portfolio/1"
                          className={
                            pathname === "/portfolio/1/" ? "current" : ""
                          }
                        >
                          travel
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/portfolio/2"
                          className={
                            pathname === "/portfolio/2/" ? "current" : ""
                          }
                        >
                          beauty
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/portfolio/3"
                          className={
                            pathname === "/portfolio/3/" ? "current" : ""
                          }
                        >
                          fashion
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/portfolio/4"
                          className={
                            pathname === "/portfolio/4/" ? "current" : ""
                          }
                        >
                          thoughts
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/portfolio/5"
                          className={
                            pathname === "/portfolio/5/" ? "current" : ""
                          }
                        >
                          journal
                        </Link>
                      </li>
                    </motion.ul>
                  </li>

                  <li>
                    <Link
                      href="/gallery"
                      className={pathname === "/gallery/" ? "current" : ""}
                    >
                      spalten
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/contact"
                      className={pathname === "/contact/" ? "current" : ""}
                    >
                      contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
