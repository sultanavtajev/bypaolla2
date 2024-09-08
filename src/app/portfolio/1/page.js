"use client";
import Link from "next/link";
import { motion } from "framer-motion";

// Images
import paolla13 from "@/assets/images/paolla/paolla13.png";
import paolla14 from "@/assets/images/paolla/paolla14.png";
import paolla15 from "@/assets/images/paolla/paolla15.png";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function PortfolioItem1() {
  return (
    <main className="single single-portfolio">
      <div id="content" className="site-content">
        <div className="center-relative content-1170">
          <div className="entry-content">
            <div className="top-content">
              <motion.div
                initial={{ opacity: 0, transform: `translateY(50px)` }}
                whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                viewport={{ once: true }}
                className="one margin-0"
              >
                <img src={paolla13.src} alt="" />
              </motion.div>
              <div className="clear"></div>

              <motion.div
                initial={{ opacity: 0, transform: `translateY(50px)` }}
                whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                viewport={{ once: true }}
                className="one_half margin-0"
              >
                <img src={paolla14.src} alt="" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, transform: `translateY(50px)` }}
                whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                viewport={{ once: true }}
                className="one_half last margin-0"
              >
                <img src={paolla15.src} alt="" />
              </motion.div>
              <div className="clear"></div>
            </div>

            <div className="content-wrapper">
              <div className="one_half text-right portfolio-item-info">
                <br />
                <p>
                  <span>Prosjekt:</span>&nbsp;Fotoshoot
                  <br />
                  <span>Klient:</span> H&M
                  <br />
                  <span>År:</span> 2024
                </p>
                <br />
                <div className="text-right">
                  <Link href="" target="_self" className="button">
                    Last ned
                  </Link>
                </div>
                <br />
              </div>
              <div className="one_half last">
                <h1>Handmade for Everyone</h1>
                <p>
                  We choose to go to the moon in this decade and do the other
                  things, not because they are easy.
                </p>
                <p>
                  Because they are hard, because that goal will serve to
                  organize and measure the best of our energies and skills,
                  because that challenge is one that we are willing to accept,
                  one we are unwilling to postpone and one, because that goal
                  will serve to organize.
                  <br />
                </p>
              </div>
              <div className="clear"></div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
        {/* Navigation links */}
        <div className="nav-links">
          <div className="content-570 center-relative">
            <div className="nav-previous">
              <Link href="/portfolio/2" rel="prev">
                <FontAwesomeIcon icon={faArrowLeft} className="icon" />
                <p>Avtajeva</p>
              </Link>
              <div className="clear"></div>
              <div className="cat-links">
                <ul>
                  <li>
                    <Link href="">Modell</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
