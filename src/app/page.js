"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { client as sanityClient } from "../sanity/lib/client"; // Importer Sanity-klienten

// ------------

export default function Home() {
  const [loadedAll, setLoadedAll] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);

  // Fetch data from Sanity
  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "post"]{
        _id,
        title,
        excerpt,
        "imageUrl": mainImage.asset->url, // Få bildet URL fra bildet sitt asset-felt
        slug,
        publishedAt,
        categories[]->{
          title
        }
      } | order(publishedAt desc)`;
      const posts = await sanityClient.fetch(query);
      setBlogPosts(posts);
    };

    fetchPosts();
  }, []);

  const handleLoadAll = () => {
    setLoadedAll(true);
  };

  return (
    <main className="home blog">
      <div id="content" className="site-content">
        <div className="hero page-header-image content-1170 center-relative">
        </div>

        <div className="blog-holder block center-relative content-1170">
          {blogPosts.length > 0 ? (
            blogPosts.slice(0, loadedAll ? blogPosts.length : 3).map((post) => (
              <motion.article
                key={post._id}
                initial={{ opacity: 0, transform: `translateY(50px)` }}
                whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                viewport={{ once: true }}
                className="relative blog-item-holder center-relative has-post-thumbnail"
              >
                <div className="post-thumbnail">
                  <Link href={`/${post.slug.current}`}>
                    <img src={post.imageUrl} alt={post.title} />
                  </Link>
                </div>
                <div className="entry-holder">
                  <div className="entry-info">
                    <div className="cat-links">
                      <ul>
                        {post.categories.map((category) => (
                          <li key={category.title}>
                            <Link href="">{category.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <h2 className="entry-title">
                    <Link href={`/${post.slug.current}`}>{post.title}</Link>
                  </h2>
                  <div className="excerpt">
                    <p>{post.excerpt}</p>
                  </div>
                  <p className="read-more-arrow">
                    <Link href={`/${post.slug.current}`}>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="article-card-icon"
                      />
                    </Link>
                  </p>
                </div>
                <div className="clear"></div>
              </motion.article>
            ))
          ) : (
            <p>Ingen blogginnlegg funnet.</p>
          )}

          {loadedAll && blogPosts.length > 3 && (
            <motion.article
              initial={{ opacity: 0, transform: `translateY(50px)` }}
              whileInView={{ opacity: 1, transform: `translateY(0px)` }}
              viewport={{ once: true }}
              className="relative blog-item-holder center-relative has-post-thumbnail"
            >
              {/* Flere artikler her */}
            </motion.article>
          )}
        </div>

        <div className="clear"></div>
        <div className="block center-relative center-text more-posts-index-holder">
          {!loadedAll && blogPosts.length > 3 ? (
            <button className="more-posts" onClick={handleLoadAll}>
              LOAD MORE
            </button>
          ) : (
            <button className="no-more-posts">NO MORE</button>
          )}
        </div>
        <div className="clear"></div>
      </div>
    </main>
  );
}
