"use client";
import { useState } from "react";
import Link from "next/link";
import { Masonry } from "@mui/lab";
import { AnimatePresence, motion } from "framer-motion";

// Images
import paolla8 from "@/assets/images/paolla/paolla8.png";
import paolla9 from "@/assets/images/paolla/paolla9.png";
import paolla10 from "@/assets/images/paolla/paolla10.png";
import paolla11 from "@/assets/images/paolla/paolla11.png";
import paolla12 from "@/assets/images/paolla/paolla12.png";

export default function Portfolio() {
  const [loadedAll, setLoadedAll] = useState(false);
  const [filter, setFilter] = useState("all");

  /**
   * Showing the portfolio item that are from the selected category only
   *
   * @param selectedFilter item category to be selecting
   */
  const handleChangeFilter = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  /**
   * Load all portfolio items
   */
  const handleLoadAll = () => {
    setLoadedAll(true);
  };

  return (
    <main className="page portfolio">
      <div id="content" className="site-content">
        <div className="header-content content-1170 center-relative block">
          <h1 className="entry-title">
            Her er noe av <br />
            <i>
              <span className="">arbeidet</span>
            </i>{" "}
            mitt.
          </h1>
        </div>

        {/* Filter buttons */}
        <div className="portfolio-category content-1170 center-relative">
          <div
            className={filter === "all" ? "filter-btn active" : "filter-btn"}
            onClick={() => handleChangeFilter("all")}
          >
            Alle
          </div>
          <div
            className={filter === "app" ? "filter-btn active" : "filter-btn"}
            onClick={() => handleChangeFilter("app")}
          >
            Modell
          </div>
          <div
            className={filter === "art" ? "filter-btn active" : "filter-btn"}
            onClick={() => handleChangeFilter("art")}
          >
            Content
          </div>
          <div
            className={
              filter === "elements" ? "filter-btn active" : "filter-btn"
            }
            onClick={() => handleChangeFilter("elements")}
          >
            Klær
          </div>
          <div
            className={
              filter === "hardware" ? "filter-btn active" : "filter-btn"
            }
            onClick={() => handleChangeFilter("hardware")}
          >
            Sminke
          </div>
        </div>

        {/* Portfolio items cards container */}
        <div id="portfolio" className="grid">
          <div className="portfolio-mansoury-container">
            <Masonry columns={2} spacing={6} className="portfolio-masonry">
              {/* Portfolio item  */}
              {(filter === "all" || filter === "hardware") && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, transform: `translateY(50px)` }}
                    whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                    viewport={{ once: true }}
                    className="grid-item"
                  >
                    <div className="item-wrapper ">
                      <div className="portfolio-thumbnail">
                        <Link href="/portfolio/1">
                          <img src={paolla8.src} alt="" />
                        </Link>
                      </div>
                      <div className="entry-holder">
                        <h2>
                          <Link href="/portfolio/1">H&M</Link>
                        </h2>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
              {/* Portfolio item  */}
              {(filter === "all" || filter === "art") && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, transform: `translateY(50px)` }}
                    whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                    viewport={{ once: true }}
                    className="grid-item"
                  >
                    <div className="item-wrapper ">
                      <div className="portfolio-thumbnail">
                        <Link href="/portfolio/2">
                          <img src={paolla9.src} alt="" />
                        </Link>
                      </div>
                      <div className="entry-holder">
                        <h2>
                          <Link href="/portfolio/2">Avtajeva</Link>
                        </h2>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
              {/* Portfolio item  */}
              {(filter === "all" || filter === "elements") && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, transform: `translateY(50px)` }}
                    whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                    viewport={{ once: true }}
                    className="grid-item"
                  >
                    <div className="item-wrapper ">
                      <div className="portfolio-thumbnail">
                        <Link href="/portfolio/3">
                          <img src={paolla10.src} alt="" />
                        </Link>
                      </div>
                      <div className="entry-holder">
                        <h2>
                          <Link href="/portfolio/3">Lebeds</Link>
                        </h2>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
              {/* Portfolio item  */}
              {(filter === "all" || filter === "app") && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, transform: `translateY(50px)` }}
                    whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                    viewport={{ once: true }}
                    className="grid-item"
                  >
                    <div className="item-wrapper ">
                      <div className="portfolio-thumbnail">
                        <Link href="/portfolio/4">
                          <img src={paolla11.src} alt="" />
                        </Link>
                      </div>
                      <div className="entry-holder">
                        <h2>
                          <Link href="/portfolio/4">Swan</Link>
                        </h2>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
              {/* Items that are hidden and appears when clicking load more button */}
              {loadedAll && (
                <>
                  {/* Portfolio item  */}
                  {(filter === "all" || filter === "app") && (
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, transform: `translateY(50px)` }}
                        whileInView={{
                          opacity: 1,
                          transform: `translateY(0px)`,
                        }}
                        viewport={{ once: true }}
                        className="grid-item"
                      >
                        <div className="item-wrapper ">
                          <div className="portfolio-thumbnail">
                            <Link href="/portfolio/5">
                              <img src={paolla12.src} alt="" />
                            </Link>
                          </div>
                          <div className="entry-holder">
                            <h2>
                              <Link href="/portfolio/5">Silvalot</Link>
                            </h2>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  )}
                </>
              )}
            </Masonry>
          </div>
        </div>

        {/* Loading more items buttons */}
        <div className="block center-relative center-text more-posts-index-holder">
          {!loadedAll ? (
            <button className="more-posts-portfolio" onClick={handleLoadAll}>
              LOAD MORE
            </button>
          ) : (
            <button className="no-more-posts-portfolio">NO MORE</button>
          )}
        </div>
      </div>
    </main>
  );
}
