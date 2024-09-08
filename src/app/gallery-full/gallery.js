// LightBox Images
import img01 from "@/assets/images/gallery-full/img-01.jpg";
import img02 from "@/assets/images/gallery-full/img-02.jpg";
import img03 from "@/assets/images/gallery-full/img-03.jpg";
import img04 from "@/assets/images/gallery-full/img-04.jpg";
import img05 from "@/assets/images/gallery-full/img-05.jpg";
import img06 from "@/assets/images/gallery-full/img-06.jpg";
import img07 from "@/assets/images/gallery-full/img-07.jpg";
import img08 from "@/assets/images/gallery-full/img-08.jpg";
import img09 from "@/assets/images/gallery-full/img-09.jpg";

// Gallery Images
import img01Small from "@/assets/images/gallery-full/img-01-287x400.jpg";
import img02Small from "@/assets/images/gallery-full/img-02-347x400.jpg";
import img03Small from "@/assets/images/gallery-full/img-03-287x400.jpg";
import img04Small from "@/assets/images/gallery-full/img-04-564x400.jpg";
import img05Small from "@/assets/images/gallery-full/img-05-564x400.jpg";
import img06Small from "@/assets/images/gallery-full/img-06-476x400.jpg";
import img07Small from "@/assets/images/gallery-full/img-07-436x400.jpg";
import img08Small from "@/assets/images/gallery-full/img-08-755x400.jpg";
import img09Small from "@/assets/images/gallery-full/img-09-709x400.jpg";

// The images that you will be previewed in Lightbox
const lightBoxPhotos = [
  {
    src: img01.src,
    width: 505,
    height: 705,
    title: "Neo City Lights Shine",
    description: "This is the image description",
  },
  {
    src: img02.src,
    width: 720,
    height: 830,
    title: "Wooden Stairs",
    description: "This is the image description",
  },
  {
    src: img03.src,
    width: 505,
    height: 705,
    title: "Smart Watch Interface",
    description: "This is the image description",
  },
  {
    src: img04.src,
    width: 585,
    height: 415,
    title: "Use of Wood in Architecture",
    description: "This is the image description",
  },
  {
    src: img05.src,
    width: 585,
    height: 415,
    title: "Wooden Club Desk",
    description: "This is the image description",
  },
  {
    src: img06.src,
    width: 720,
    height: 605,
    title: "Arch of Skyscrapers",
    description: "This is the image description",
  },
  {
    src: img07.src,
    width: 720,
    height: 660,
    title: "Office Chair Goes Viral",
    description: "This is the image description",
  },
  {
    src: img08.src,
    width: 1170,
    height: 620,
    title: "Smartphone & Old School",
    description: "This is the image description",
  },
  {
    src: img09.src,
    width: 1170,
    height: 660,
    title: "Green Art of Nature",
    description: "This is the image description",
  },
];

// The images that you will be previewed as gallery in the web page
export const galleryPhotos = [
  {
    src: img01Small.src,
    width: 287,
    height: 400,
    title: "Neo City Lights Shine",
    description: "This is the image description",
  },
  {
    src: img02Small.src,
    width: 347,
    height: 400,
    title: "Wooden Stairs",
    description: "This is the image description",
  },
  {
    src: img03Small.src,
    width: 287,
    height: 400,
    title: "Smart Watch Interface",
    description: "This is the image description",
  },
  {
    src: img04Small.src,
    width: 564,
    height: 400,
    title: "Use of Wood in Architecture",
    description: "This is the image description",
  },
  {
    src: img05Small.src,
    width: 564,
    height: 400,
    title: "Wooden Club Desk",
    description: "This is the image description",
  },
  {
    src: img06Small.src,
    width: 476,
    height: 400,
    title: "Arch of Skyscrapers",
    description: "This is the image description",
  },
  {
    src: img07Small.src,
    width: 436,
    height: 400,
    title: "Office Chair Goes Viral",
    description: "This is the image description",
  },
  {
    src: img08Small.src,
    width: 755,
    height: 400,
    title: "Smartphone & Old School",
    description: "This is the image description",
  },
  {
    src: img09Small.src,
    width: 709,
    height: 400,
    title: "Green Art of Nature",
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
