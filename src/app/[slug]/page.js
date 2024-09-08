"use client";
import { client as sanityClient } from "../../sanity/lib/client"; // Importer Sanity-klienten
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Sanity-bildeverktøy
import { urlFor } from "../../sanity/lib/image";

// Komponenter for PortableText som håndterer bilder i blogginnlegg
const components = {
  types: {
    image: ({ value }) => (
      <div className="post-image">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || "Blog image"}
          width={800}
          height={600}
        />
        {value.caption && <p className="image-caption">{value.caption}</p>}
      </div>
    ),
  },
};

// Server Component for å vise blogginnlegget basert på slug
export default async function BlogPost({ params }) {
  const { slug } = params;

  // Sanity-spørring for å hente blogginnlegget basert på slug
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    publishedAt,
    "mainImage": mainImage.asset->url,
    "images": body[]{
      ...,
      _type == 'image' => {
        "imageUrl": asset->url,
        alt
      }
    },
    "author": author->name,
    "categories": categories[]->title
  }`;

  const post = await sanityClient.fetch(query, { slug });

  if (!post) {
    return <div>404: Post not found</div>;
  }

  return (
    <main className="single single-post">
      <div
        id="content"
        className="site-content center-relative"
        style={{ backgroundColor: "#FCF6F1" }}
      >
        <article className="post">
          <div className="entry-header content-830 center-relative">
            <h1 className="entry-title" style={{ color: "#D8A4BB" }}>
              {post.title}
            </h1>
            <div className="entry-info">
              <div className="entry-date published">
                {post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString()
                  : "Dato ikke oppgitt"}
              </div>
              <div className="cat-links">
                <ul>
                  {post.categories?.map((category, index) => (
                    <li key={index}>
                      <Link href={`/category/${category.toLowerCase()}`}>
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="author-nickname">
                <Link
                  href={`/author/${post.author?.toLowerCase()}`}
                  title="Forfatter"
                  rel="author"
                >
                  {post.author || "Ukjent forfatter"}
                </Link>
              </div>
            </div>
          </div>

          <div className="entry-content" style={{ backgroundColor: "#FCF6F1" }}>
            <div
              className="content-570 center-relative"
              style={{ color: "#433F3D" }}
            >
              <PortableText value={post.body} components={components} />
            </div>
            <div className="full-post-width content-1170 center-relative">
              {post.mainImage && (
                <div className="image-slider-wrapper relative">
                  <Swiper
                    id="slider2"
                    className="slider image-slider"
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    autoplay
                    speed={750}
                    allowTouchMove={false}
                    modules={[Pagination, EffectFade, Autoplay]}
                  >
                    <SwiperSlide className="slick-slide">
                      <Image
                        src={post.mainImage}
                        alt={post.title}
                        width={600}
                        height={400}
                      />
                    </SwiperSlide>
                    {post.images?.map((image, index) => (
                      <SwiperSlide key={index} className="slick-slide">
                        <Image
                          src={image.imageUrl}
                          alt={image.alt || "Blog image"}
                          width={600}
                          height={400}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
            </div>
          </div>
          <div className="clear"></div>
        </article>

        {/* Navigasjonslenker */}
        <div className="nav-links" style={{backgroundColor: "#FCF6F1" }}>
          <div className="content-570 center-relative">
            <div className="nav-previous">
              <Link href="" rel="prev">
                <FontAwesomeIcon icon={faArrowLeft} className="icon" />
                <p>Tidligere innlegg</p>
              </Link>
              <div className="clear"></div>
              <div className="cat-links">
                <ul>
                  <li>
                    <Link href="">Kategori</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="nav-next">
              <Link href="" rel="next">
                <FontAwesomeIcon icon={faArrowRight} className="icon" />
                <p>Neste innlegg</p>
              </Link>
              <div className="clear"></div>
              <div className="cat-links">
                <ul>
                  <li>
                    <Link href="">Kategori</Link>
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
