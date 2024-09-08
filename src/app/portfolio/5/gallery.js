// Images
import paolla28 from "@/assets/images/paolla/paolla28.png";
import paolla29 from "@/assets/images/paolla/paolla29.png";
import paolla30 from "@/assets/images/paolla/paolla30.png";
import paolla31 from "@/assets/images/paolla/paolla31.png";
import paolla32 from "@/assets/images/paolla/paolla32.png";
import paolla33 from "@/assets/images/paolla/paolla33.png";
import paolla34 from "@/assets/images/paolla/paolla34.png";
import paolla35 from "@/assets/images/paolla/paolla35.png";
import paolla36 from "@/assets/images/paolla/paolla36.png";

import img01Small from "@/assets/images/portfolio/5/img-01-564x400.jpg";
import img02Small from "@/assets/images/portfolio/5/img-02-476x400.jpg";
import img03Small from "@/assets/images/portfolio/5/img-03-436x400.jpg";
import img04Small from "@/assets/images/portfolio/5/img-04-287x400.jpg";
import img05Small from "@/assets/images/portfolio/5/img-05-755x400.jpg";
import img06Small from "@/assets/images/portfolio/5/img-06-347x400.jpg";
import img07Small from "@/assets/images/portfolio/5/img-07-564x400.jpg";
import img08Small from "@/assets/images/portfolio/5/img-08-287x400.jpg";
import img09Small from "@/assets/images/portfolio/5/img-09-578x400.jpg";

// The images that will be previewed in Lightbox
export const lightBox1Photos = [
  {
    src: paolla28.src,
    width: 585,
    height: 415,
    title: "Wooden Club Desk",
    description: "This is the image description",
  },
  {
    src: paolla29.src,
    width: 720,
    height: 605,
    title: "Smart Watch Interface",
    description: "This is the image description",
  },
  {
    src: paolla30.src,
    width: 720,
    height: 660,
    title: "Office Chair Goes Viral",
    description: "This is the image description",
  },
  {
    src: paolla31.src,
    width: 505,
    height: 705,
    title: "Neo City Lights Shine",
    description: "This is the image description",
  },
  {
    src: paolla32.src,
    width: 1170,
    height: 620,
    title: "Arch of Skyscrapers",
    description: "This is the image description",
  },
  {
    src: paolla33.src,
    width: 720,
    height: 830,
    title: "Use of Wood in Architecture",
    description: "This is the image description",
  },
];

// The images that will be previewed as gallery on the web page
export const gallery1Photos = [
  {
    src: paolla28.src,
    width: 564,
    height: 400,
    title: "Wooden Club Desk",
    description: "This is the image description",
  },
  {
    src: paolla29.src,
    width: 476,
    height: 400,
    title: "Smart Watch Interface",
    description: "This is the image description",
  },
  {
    src: paolla30.src,
    width: 436,
    height: 400,
    title: "Office Chair Goes Viral",
    description: "This is the image description",
  },
  {
    src: paolla31.src,
    width: 287,
    height: 400,
    title: "Neo City Lights Shine",
    description: "This is the image description",
  },
  {
    src: paolla32.src,
    width: 755,
    height: 400,
    title: "Arch of Skyscrapers",
    description: "This is the image description",
  },
  {
    src: paolla33.src,
    width: 347,
    height: 400,
    title: "Use of Wood in Architecture",
    description: "This is the image description",
  },
];

export const lightBox1Images = lightBox1Photos.map((photo) => {
  return {
    src: photo.src,
    width: photo.width,
    height: photo.height,
    title: photo.title,
    description: photo.description,
  };
});

// Second Gallery

export const lightBox2Photos = [
  {
    src: paolla34.src,
    width: 585,
    height: 415,
    title: "Use of Wood in Architecture",
    description: "This is the image description",
  },
  {
    src: paolla35.src,
    width: 505,
    height: 705,
    title: "Smart Watch Interface",
    description: "This is the image description",
  },
  {
    src: paolla36.src,
    width: 953,
    height: 660,
    title: "Green Art of Nature",
    description: "This is the image description",
  },
];

// The images that will be previewed as gallery on the web page
export const gallery2Photos = [
  {
    src: paolla34.src,
    width: 564,
    height: 400,
    title: "Use of Wood in Architecture",
    description: "This is the image description",
  },
  {
    src: paolla35.src,
    width: 287,
    height: 400,
    title: "Smart Watch Interface",
    description: "This is the image description",
  },
  {
    src: paolla36.src,
    width: 578,
    height: 400,
    title: "Green Art of Nature",
    description: "This is the image description",
  },
];

export const lightBox2Images = lightBox2Photos.map((photo) => {
  return {
    src: photo.src,
    width: photo.width,
    height: photo.height,
    title: photo.title,
    description: photo.description,
  };
});
