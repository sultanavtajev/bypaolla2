import { client as sanityClient } from "../../sanity/lib/client"; // Importer Sanity-klienten
import Image from "next/image";
import { PortableText } from "@portabletext/react";

// Server Component for å vise blogginnlegget basert på slug
export default async function BlogPost({ params }) {
  const { slug } = params;

  // Sanity-spørring for å hente blogginnlegget basert på slug
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    "mainImage": mainImage.asset->url
  }`;

  const post = await sanityClient.fetch(query, { slug });

  if (!post) {
    return <div>404: Post not found</div>;
  }

  return (
    <div className="container">
      <h1>{post.title}</h1>
      {post.mainImage && (
        <Image src={post.mainImage} alt={post.title} width={600} height={400} />
      )}
      {/* Render Sanity's block content */}
      <PortableText value={post.body} />
    </div>
  );
}
