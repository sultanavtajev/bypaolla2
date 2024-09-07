"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { client as sanityClient } from "../sanity/lib/client"; // Importer Sanity-klienten

export default function BlogDisplay() {
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
        publishedAt
      } | order(publishedAt desc)`; // Sorter etter publiseringsdato
      const posts = await sanityClient.fetch(query);
      setBlogPosts(posts);
    };

    fetchPosts();
  }, []);

  return (
    <main className="flex-1">
      <section className="w-full py-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Velkommen til vår Moteblogg
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Utforsk de siste trendene, stiltips og moteinspirasjon.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input type="text" placeholder="Søk i bloggen..." />
                  <Button type="submit">Søk</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8">
            Siste Innlegg
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.length > 0 ? (
              blogPosts.map((post) => (
                <Card key={post._id} className="flex flex-col">
                  <CardHeader className="p-0">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="flex-grow p-4">
                    <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button asChild variant="link" className="px-0">
                      {/* Lenke til den dynamiske ruten basert på slug */}
                      <Link href={`/${post.slug.current}`}>Les mer</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <p>Ingen blogginnlegg funnet.</p>
            )}
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/blog">Se alle innlegg</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
