// LightBox Images
import img01 from "@/assets/images/gallery/img-01.jpg";
import img02 from "@/assets/images/gallery/img-02.jpg";
import img03 from "@/assets/images/gallery/img-03.jpg";
import img04 from "@/assets/images/gallery/img-04.jpg";
import img05 from "@/assets/images/gallery/img-05.jpg";
import img06 from "@/assets/images/gallery/img-06.jpg";

// Gallery Images
import paolla37 from "@/assets/images/paolla/paolla37.png";
import paolla38 from "@/assets/images/paolla/paolla38.png";
import paolla39 from "@/assets/images/paolla/paolla39.png";
import paolla40 from "@/assets/images/paolla/paolla40.png";
import paolla41 from "@/assets/images/paolla/paolla41.png";
import paolla42 from "@/assets/images/paolla/paolla42.png";

const lightBoxPhotos = [
  {
    src: paolla37.src,
    width: 585,
    height: 415,
    title: "Wooden Club Desk",
    description: "This is the image description",
  },
  {
    src: paolla38.src,
    width: 720,
    height: 605,
    title: "Arch of Skyscrapers",
    description: "This is the image description",
  },
  {
    src: paolla39.src,
    width: 720,
    height: 660,
    title: "Office Chair Goes Viral",
    description: "This is the image description",
  },
  {
    src: paolla40.src,
    width: 505,
    height: 705,
    title: "Neo City Lights Shine",
    description: "This is the image description",
  },
  {
    src: paolla41.src,
    width: 1170,
    height: 620,
    title: "Smartphone & Old School",
    description: "This is the image description",
  },
  {
    src: paolla42.src,
    width: 585,
    height: 415,
    title: "Use of Wood in Architecture",
    description: "This is the image description",
  },
];

// The images that you will be previewed as gallery in the web page
export const galleryPhotos = [
  {
    src: paolla37.src,
    width: 564,
    height: 400,
    title: "Wooden Club Desk",
    description: "This is the image description",
  },
  {
    src: paolla38.src,
    width: 476,
    height: 400,
    title: "Arch of Skyscrapers",
    description: "This is the image description",
  },
  {
    src: paolla39.src,
    width: 436,
    height: 400,
    title: "Office Chair Goes Viral",
    description: "This is the image description",
  },
  {
    src: paolla40.src,
    width: 287,
    height: 400,
    title: "Neo City Lights Shine",
    description: "This is the image description",
  },
  {
    src: paolla41.src,
    width: 755,
    height: 400,
    title: "Smartphone & Old School",
    description: "This is the image description",
  },
  {
    src: paolla42.src,
    width: 564,
    height: 400,
    title: "Use of Wood in Architecture",
    description: "This is the image description",
  },
];

export const lightBoxImages = lightBoxPhotos.map((photo) => {
  return {
    src: photo.src,
    width: photo.width,
    height: photo.height,
    title: photo.title,
    description: photo.description,
  };
});
