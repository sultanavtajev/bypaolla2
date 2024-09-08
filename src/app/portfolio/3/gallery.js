// LightBox Images
import paolla19 from "@/assets/images/paolla/paolla19.png";
import paolla20 from "@/assets/images/paolla/paolla20.png";
import paolla21 from "@/assets/images/paolla/paolla21.png";
import paolla22 from "@/assets/images/paolla/paolla22.png";
import paolla23 from "@/assets/images/paolla/paolla23.png";
import paolla24 from "@/assets/images/paolla/paolla24.png";

// Gallery Images
import img01Small from "@/assets/images/portfolio/3/img-01-564x400.jpg";
import img02Small from "@/assets/images/portfolio/3/img-02-287x400.jpg";
import img03Small from "@/assets/images/portfolio/3/img-03-436x400.jpg";
import img04Small from "@/assets/images/portfolio/3/img-04-287x400.jpg";
import img05Small from "@/assets/images/portfolio/3/img-05-476x400.jpg";
import img06Small from "@/assets/images/portfolio/3/img-06-564x400.jpg";

// The images that you will be previewed in Lightbox
const lightBoxPhotos = [
  {
    src: paolla19.src,
    width: 585,
    height: 415,
    title: "Wooden Club Desk",
    description: "This is the image description",
  },
  {
    src: paolla20.src,
    width: 505,
    height: 705,
    title: "Smart Watch Interface",
    description: "This is the image description",
  },
  {
    src: paolla21.src,
    width: 720,
    height: 660,
    title: "Office Chair Goes Viral",
    description: "This is the image description",
  },
  {
    src: paolla22.src,
    width: 505,
    height: 705,
    title: "Neo City Lights Shine",
    description: "This is the image description",
  },
  {
    src: paolla23.src,
    width: 720,
    height: 605,
    title: "Arch of Skyscrapers",
    description: "This is the image description",
  },
  {
    src: paolla24.src,
    width: 585,
    height: 415,
    title: "Use of Wood in Architecture",
    description: "This is the image description",
  },
];

// The images that you will be previewed as gallery in the web page
export const galleryPhotos = [
  {
    src: paolla19.src,
    width: 564,
    height: 400,
    title: "Wooden Club Desk",
    description: "This is the image description",
  },
  {
    src: paolla20.src,
    width: 287,
    height: 400,
    title: "Smart Watch Interface",
    description: "This is the image description",
  },
  {
    src: paolla21.src,
    width: 436,
    height: 400,
    title: "Office Chair Goes Viral",
    description: "This is the image description",
  },
  {
    src: paolla22.src,
    width: 287,
    height: 400,
    title: "Neo City Lights Shine",
    description: "This is the image description",
  },
  {
    src: paolla23.src,
    width: 476,
    height: 400,
    title: "Arch of Skyscrapers",
    description: "This is the image description",
  },
  {
    src: paolla24.src,
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
