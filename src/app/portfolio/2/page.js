"use client";
import Link from "next/link";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Images
import paolla16 from "@/assets/images/paolla/paolla16.png";
import paolla17 from "@/assets/images/paolla/paolla17.png";
import paolla18 from "@/assets/images/paolla/paolla18.png";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function PortfolioItem2() {
  return (
    <main className="single single-portfolio">
      <div id="content" className="site-content">
        <div className="center-relative content-1170">
          <div className="entry-content">
            <div className="content-wrapper" style={{ paddingTop: "0px" }}>
              <h1 className="center-text">Handmade</h1>
              <p className="center-text">
                Because they are hard, because that goal will serve to organize
                and measure the best of our energies and skills, because that
                challenge is one that we are willing to accept, one we are
                unwilling to postpone and one.
              </p>
            </div>
            <div className="full-portfolio-width">
              {/* Image slider */}
              <div className="image-slider-wrapper relative">
                <Swiper
                  id="slider1"
                  className="slider image-slider slider"
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                  }}
                  effect="fade"
                  fadeEffect={{
                    crossFade: true,
                  }}
                  autoplay
                  speed={750}
                  allowTouchMove={false}
                  modules={[Pagination, EffectFade, Autoplay]}
                >
                  <SwiperSlide className="slick-slide">
                    <img src={paolla16.src} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slick-slide">
                    <img src={paolla17.src} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slick-slide">
                    <img src={paolla18.src} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="content-wrapper">
              <p className="center-text">
                Because they are hard, because that goal will serve to organize
                and measure the best of our energies and skills, because that
                challenge is one that we are willing to accept, one we are
                unwilling to postpone and one.
              </p>
            </div>
            <div className="full-portfolio-width">
              {/* Youtube video */}
              <div className="video-framer">
                <iframe
                  src="https://www.youtube.com/embed/9oWby3V-dqA?si=8Mlum8oIZcIrKffT"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <br />
          </div>
          <div className="clear"></div>
        </div>
      </div>
      {/* Navigation links */}
      <div className="nav-links">
        <div className="content-570 center-relative">
          <div className="nav-previous">
            <Link href="/portfolio/3" rel="prev">
              <FontAwesomeIcon icon={faArrowLeft} className="icon" />

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

          <div className="nav-next">
            <Link href="/portfolio/1" rel="next">
              <FontAwesomeIcon icon={faArrowRight} className="icon" />
              <p>H&M</p>
            </Link>
            <div className="clear"></div>
            <div className="cat-links">
              <ul>
                <li>
                  <Link href="">Oppdrag</Link>
                </li>
                <li>
                  <Link href="">Fotoshoot</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </main>
  );
}
