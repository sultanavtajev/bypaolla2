"use client";
import { useState } from "react";
import Link from "next/link";

// Photo Gallery
import { PhotoAlbum } from "react-photo-album";

// Light Box
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Data
import {
  gallery1Photos,
  lightBox1Images,
  gallery2Photos,
  lightBox2Images,
} from "./gallery";

export default function PortfolioItem5() {
  const [lightbox1ImageIndex, setLightbox1ImageIndex] = useState(-1);
  const [lightbox2ImageIndex, setLightbox2ImageIndex] = useState(-1);

  // Handle opening image Lightbox (in the first lightbox) when clicking on images
  const handleChangeLightBox1ImageIndex = (index) => {
    setLightbox1ImageIndex(index);
  };

  // Handle opening image Lightbox (in the second lightbox) when clicking on images
  const handleChangeLightBox2ImageIndex = (index) => {
    setLightbox2ImageIndex(index);
  };

  // The rendered container of our image gallery
  const renderContainer = ({ containerProps, children, containerRef }) => (
    <div id="gallery1" className="our-img-gallery">
      <div ref={containerRef} {...containerProps}>
        {children}
      </div>
    </div>
  );

  // Image HTML element to be rendered
  const renderPhoto = ({ imageProps: { style, title, ...restImageProps } }) => (
    <div
      className="coco-gallery-item"
      style={{ width: style?.width, cursor: "pointer" }}
    >
      <div className="prettyPhotoLink" title={title}>
        <img {...restImageProps} style={{ width: "100%" }} />
      </div>
      <div className="caption">{title}</div>
    </div>
  );

  return (
    <>
      <main className="single single-portfolio">
        <div id="content" className="site-content">
          <div className="center-relative content-1170">
            <div className="entry-content">
              <div className="content-wrapper" style={{ paddingTop: "0px" }}>
                <div className="one">
                  <h1 className="center-text">Multi Gallery Example</h1>
                  <p className="center-text">
                    Because they are hard, because that goal will serve to
                    organize and measure the best of our energies and skills,
                    because that challenge is one that we are willing to accept,
                    one we are unwilling to postpone and one.
                  </p>
                </div>
                <div className="clear"></div>
              </div>
              {/* Image Gallery 1 */}
              <div className="full-portfolio-width">
                <PhotoAlbum
                  layout="rows"
                  photos={gallery1Photos}
                  spacing={(containerWidth) => (containerWidth < 710 ? 10 : 20)}
                  targetRowHeight={285}
                  renderContainer={renderContainer}
                  renderPhoto={renderPhoto}
                  onClick={({ index: current }) =>
                    handleChangeLightBox1ImageIndex(current)
                  }
                />
              </div>
              <div className="content-wrapper">
                <div className="one">
                  <p className="center-text">
                    Because they are hard, because that goal will serve to
                    organize and measure the best of our energies and skills,
                    because that challenge is one that we are willing to accept,
                    one we are unwilling to postpone and one.
                  </p>
                </div>
                <div className="clear"></div>
              </div>
              {/* Image Gallery 2 */}
              <div className="full-portfolio-width">
                <PhotoAlbum
                  layout="rows"
                  photos={gallery2Photos}
                  spacing={(containerWidth) => (containerWidth < 710 ? 10 : 20)}
                  targetRowHeight={285}
                  renderContainer={renderContainer}
                  renderPhoto={renderPhoto}
                  onClick={({ index: current }) =>
                    handleChangeLightBox2ImageIndex(current)
                  }
                />
                <br />
                <br />
              </div>
              <div className="clear"></div>
            </div>
          </div>

          {/* Navigation links */}
          <div className="nav-links">
            <div className="content-570 center-relative">
              <div className="nav-next">
                <Link href="/portfolio/4" rel="next">
                  <FontAwesomeIcon icon={faArrowRight} className="icon" />
                  <p>Swan</p>
                </Link>
                <div className="clear"></div>
                <div className="cat-links">
                  <ul>
                    <li>
                      <Link href="">Content</Link>
                    </li>
                    <li>
                      <Link href="">Skjønnhet</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="clear"></div>
            </div>
          </div>
        </div>
      </main>
      {/* First image gallery Lightbox */}
      <Lightbox
        plugins={[Captions]}
        index={lightbox1ImageIndex}
        slides={lightBox1Images}
        open={lightbox1ImageIndex >= 0}
        close={() => handleChangeLightBox1ImageIndex(-1)}
        animation={{
          fade: 300,
          easing: {
            fade: "ease-in",
          },
        }}
      />
      {/* Second image gallery Lightbox */}
      <Lightbox
        plugins={[Captions]}
        index={lightbox2ImageIndex}
        slides={lightBox2Images}
        open={lightbox2ImageIndex >= 0}
        close={() => handleChangeLightBox2ImageIndex(-1)}
        animation={{
          fade: 300,
          easing: {
            fade: "ease-in",
          },
        }}
      />
    </>
  );
}
