"use client";
import Link from "next/link";
import { motion } from "framer-motion";

// Images
import paolla25 from "@/assets/images/paolla/paolla25.png";
import paolla26 from "@/assets/images/paolla/paolla26.png";
import paolla27 from "@/assets/images/paolla/paolla27.png";

// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function PortfolioItem4() {
  return (
    <main className="single single-portfolio">
      <div id="content" className="site-content">
        <div className="center-relative content-1170">
          <div className="entry-content">
            <div className="content-wrapper" style={{ paddingTop: "0px" }}>
              <h1>Handmade for Everyone</h1>
              <p>
                Because they are hard, because that goal will serve to organize
                and measure the best of our energies and skills, because that
                challenge is one that we are willing to accept, one we are
                unwilling to postpone and one.
              </p>
            </div>
            {/* Images */}
            <div className="full-portfolio-width">
              <motion.img
                initial={{ opacity: 0, transform: `translateY(50px)` }}
                whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                viewport={{ once: true }}
                className=" aligncenter"
                src={paolla25.src}
                alt=""
              />
              <br />
              <motion.img
                initial={{ opacity: 0, transform: `translateY(50px)` }}
                whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                viewport={{ once: true }}
                className=" aligncenter"
                src={paolla26.src}
                alt=""
              />
              <br />
              <motion.img
                initial={{ opacity: 0, transform: `translateY(50px)` }}
                whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                viewport={{ once: true }}
                className=" aligncenter"
                src={paolla27.src}
                alt=""
              />
              <br />
            </div>
            <div className="clear"></div>
          </div>
        </div>
        {/* Navigation links */}
        <div className="nav-links">
          <div className="content-570 center-relative">
            <div className="nav-previous">
              <Link href="/portfolio/5" rel="prev">
                <FontAwesomeIcon icon={faArrowLeft} className="icon" />
                <p>Silvalot</p>
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

            <div className="nav-next">
              <Link href="/portfolio/3" rel="next">
                <FontAwesomeIcon icon={faArrowRight} className="icon" />
                <p>Lebeds</p>
              </Link>
              <div className="clear"></div>
              <div className="cat-links">
                <ul>
                  <li>
                    <Link href="">Modell</Link>
                  </li>
                  <li>
                    <Link href="">Reklame</Link>
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
