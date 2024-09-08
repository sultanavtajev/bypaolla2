"use client";
import Link from "next/link";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Images
import paolla43 from "@/assets/images/paolla/paolla43.png";
import paolla44 from "@/assets/images/paolla/paolla44.png";
import paolla45 from "@/assets/images/paolla/paolla45.png";

// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Single() {
  return (
    <main className="single single-post">
      <div id="content" className="site-content center-relative">
        <article className="post">
          <div className="entry-header content-830 center-relative">
            <h1 className="entry-title">
              Exploring Bali: A Journey Through Jungle <i>Retreats</i> and
              Culinary<i>Adventures</i>
            </h1>
            <div className="entry-info">
              <div className="entry-date published">March 2. 2024</div>
              <div className="cat-links">
                <ul>
                  <li>
                    <Link href="#">Reise</Link>
                  </li>
                </ul>
              </div>
              <div className="author-nickname">
                <Link href="" title="Posts by Leah Faye" rel="author">
                  Paolla Avtajeva
                </Link>
              </div>
            </div>
          </div>
          <div className="entry-content">
            <div className="content-570 center-relative">
              <p>
                As I embarked on my journey to Bali, my excitement knew no
                bounds. The lush greenery, the vibrant culture, and the promise
                of adventure had me at the edge of my seat. My first
                destination? A breathtaking jungle retreat that I would call
                home for the next few days.
              </p>
              <br />
              <p>
                The Jungle Abode Nestled amidst the dense foliage, my temporary
                home in Bali was a dream come true. With walls that whispered
                stories of the wild and windows that opened up to the heart of
                nature, I found myself falling in love with it. The choice of
                attire for my first shoot in the jungle was a toss-up between a
                bikini that screamed summer and a pink one that whispered
                subtlety. Opting for a splash of color seemed fitting amidst the
                green expanse. The abode was modest yet charming, with an office
                space that doubled as a sanctuary of creativity, a cozy bed that
                promised restful nights, and a bathroom that, despite my fears
                of insects, felt like a natural extension of the outdoors. The
                simplicity of the place grew on me, reminding me that luxury
                often lies in the experience, not in the material.
              </p>
              <br />
              <p>
                Dress to Impress With a day planned for shoots, I rummaged
                through my wardrobe for the perfect outfit. My choice? A
                stunning dress from Volw that had yet to find its moment to
                shine. Dressing up in Bali wasn’t just about looking good; it
                was about feeling good. As I slipped into the dress, I couldn’t
                help but feel it was made for moments like these. Despite the
                slight uncertainty about my outfit choice, the beauty of Bali’s
                sky, painted in hues of dusk, reassured me. It was as if the
                island itself was encouraging me to embrace every part of this
                experience, outfit dilemmas included.
              </p>
              <p>
                Embracing the Bali Life The beauty of Bali isn’t just in its
                landscapes but also in its people and their stories. Living in a
                house with individuals from across the globe, I found myself
                immersed in a melting pot of cultures and experiences. One of
                the highlights was meeting a local who offered to cook for me.
                Known for his culinary skills and a YouTube channel dedicated to
                his craft, he promised a meal that was both healthy and
                delicious. The anticipation of what was to come added an extra
                layer of excitement to my Bali adventure. As the day progressed,
                I ventured outside, taking in the breathtaking views and the
                serene water. The beauty of Bali’s outdoors was unmatched,
                offering a sense of peace and tranquility that I had never
                experienced before.
              </p>

              <p>
                A Culinary Experience The anticipation for the meal was
                palpable. As the local culinary expert got to work, I found
                myself marveling at his skill and passion for food. The
                experience was not just about eating but about understanding the
                essence of Balinese cuisine. It was a reminder that food is a
                universal language, capable of bringing people together,
                irrespective of their backgrounds.
              </p>
              <br />
            </div>
            <div className="full-post-width content-1170 center-relative">
              {/* Images slider */}
              <div className="image-slider-wrapper relative">
                <Swiper
                  id="slider2"
                  className="slider image-slider"
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
                    <img src={paolla43.src} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slick-slide">
                    <img src={paolla44.src} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slick-slide">
                    <img src={paolla45.src} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="content-570 center-relative">
                <br />
                <p>
                  A Day of Adventure As my journey in Bali continued, I had the
                  pleasure of meeting Elizabeth, a fellow traveler with an
                  infectious love for adventure. Together, we explored the
                  culinary delights of Bali, each meal more exquisite than the
                  last. The highlight, however, was almost forgetting to capture
                  these moments, so engrossed were we in the experience. Bali
                  offered me more than just a retreat; it provided a journey of
                  self-discovery, cultural immersion, and culinary adventures.
                  Each day brought new experiences, new friendships, and
                  memories that would last a lifetime. As I look back on my time
                  in Bali, I am reminded of the beauty of stepping out of one’s
                  comfort zone and embracing the unknown. Bali, with its
                  enchanting landscapes and warm-hearted people, was not just a
                  destination; it was a feeling, a moment in time that I would
                  cherish forever.
                </p>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </article>

        {/* Navigation links */}
        <div className="nav-links">
          <div className="content-570 center-relative">
            <div className="nav-previous">
              <Link href="" rel="prev">
                <FontAwesomeIcon icon={faArrowLeft} className="icon" />
                <p>
                  Connection of paper and <i>web makes</i>
                </p>
              </Link>
              <div className="clear"></div>
              <div className="cat-links">
                <ul>
                  <li>
                    <Link href="">Architecture</Link>
                  </li>
                  <li>
                    <Link href="">Interior</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="nav-next">
              <Link href="" rel="next">
                <FontAwesomeIcon icon={faArrowRight} className="icon" />
                <p>
                  Contemporary, classic and inspiring <i>innovation</i> details
                </p>
              </Link>
              <div className="clear"></div>
              <div className="cat-links">
                <ul>
                  <li>
                    <Link href="">Interior</Link>
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
