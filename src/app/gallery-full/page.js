"use client";

// Photo Gallery
import { PhotoAlbum } from "react-photo-album";

// Light Box
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

// Icon
import { useState } from "react";

// Data
import { galleryPhotos, lightBoxImages } from "./gallery";

export default function GalleryFull() {
  const [lightboxImageIndex, setLightboxImageIndex] = useState(-1);

  // Handle opening image Lightbox when clicking on images
  const handleChangeLightBoxImageIndex = (index) => {
    setLightboxImageIndex(index);
  };

  // The rendered container of our image gallery
  const renderContainer = ({ containerProps, children, containerRef }) => (
    <div id="gallery1" className="our-img-gallery" style={{ padding: "20px" }}>
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
      <main className="page page-template-park-full-width">
        <div id="content" className="site-content">
          <div className="header-content content-1170 center-relative block">
            <h1 className="entry-title">
              Photography is a way <br />
              of{" "}
              <i>
                <span className="underline">feeling,</span>
              </i>{" "}
              of{" "}
              <i>
                <span className="underline">touching,</span>
              </i>{" "}
              of{" "}
              <i>
                <span className="underline">loving.</span>
              </i>
            </h1>
          </div>
          <div className="page-content-wrapper center-relative">
            <div className="page-content">
              <div className="two_third">
                Nullam sed odio quis felis feugiat sodales sit amet sed sem.
                Etiam massa urna, pulvinar et odio vitae, consequat varius nisi.
                Aliquam scelerisque eu arcu ut feugiat. Vestibulum finibus, ex
                fringilla maximus commodo, dui arcu faucibus dui, in pharetra
                erat nibh eget erat. Nullam ac bibendum diam.
              </div>
              <div className="one_third last">
                Sed ultricies libero non ex sagittis tempor. Nulla ut turpis
                mauris. Integer vitae odio ut risus viverra auctor.
              </div>
              <div className="clear"></div>
            </div>
            <div className="full-page-width center-relative">
              <br />
              {/* Image gallery */}
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
