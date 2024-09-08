"use client";
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
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// Data
import { galleryPhotos, lightBoxImages } from "./gallery";

export default function PortfolioItem3() {
  const [lightboxImageIndex, setLightboxImageIndex] = useState(-1);

  // Handle opening image Lightbox when clicking on images
  const handleChangeLightBoxImageIndex = (index) => {
    setLightboxImageIndex(index);
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
  const renderPhoto = ({
    imageProps: { alt, style, title, ...restImageProps },
  }) => (
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
                <h1 className="center-text">Handmade</h1>
                <p className="center-text">
                  Because they are hard, because that goal will serve to
                  organize and measure the best of our energies and skills,
                  because that challenge is one that we are willing to accept,
                  one we are unwilling to postpone and one.
                </p>
              </div>
              {/* Image gallery */}
              <div className="full-portfolio-width">
                <PhotoAlbum
                  layout="rows"
                  photos={galleryPhotos}
                  spacing={(containerWidth) => (containerWidth < 710 ? 10 : 20)}
                  targetRowHeight={285}
                  renderContainer={renderContainer}
                  renderPhoto={renderPhoto}
                  onClick={({ index: current }) =>
                    handleChangeLightBoxImageIndex(current)
                  }
                />
              </div>
              <div className="content-wrapper">
                <div className="one_half">
                  Because they are hard, because that goal will serve to
                  organize and measure the best of our energies and skills,
                  because that challenge is one that we are willing to accept,
                  one we are unwilling to postpone and one.
                </div>
                <div className="one_half last">
                  Because they are hard, because that goal will serve to
                  organize and measure the best of our energies and skills,
                  because that challenge is one that we are willing to accept,
                  one we are unwilling to postpone and one.
                </div>
                <div className="clear"></div>
                <br />
                <div className="center-text">
                  <Link href="" target="_self" className="button">
                    Download
                  </Link>
                </div>
              </div>
              <div className="clear"></div>
            </div>
          </div>

          {/* Navigation links */}
          <div className="nav-links">
            <div className="content-570 center-relative">
              <div className="nav-previous">
                <Link href="/portfolio/4" rel="prev">
                  <FontAwesomeIcon icon={faArrowLeft} className="icon" />
                  <p>Swan</p>
                </Link>
                <div className="clear"></div>
                <div className="cat-links">
                  <ul>
                    <li>
                      <Link href="">Content</Link>
                    </li>
                    <li>
                      <Link href="">skjønnhet</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="nav-next">
                <Link href="/portfolio/2" rel="next">
                  <FontAwesomeIcon icon={faArrowRight} className="icon" />
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
      {/* Image gallery Lightbox */}
      <Lightbox
        plugins={[Captions]}
        index={lightboxImageIndex}
        slides={lightBoxImages}
        open={lightboxImageIndex >= 0}
        close={() => handleChangeLightBoxImageIndex(-1)}
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
