"use client";

import type { Metadata } from "next";
import { getAllPosts } from "@/services/getPosts";
import Link from "next/link";
import { Posts } from "@/components/Posts";
import { useState, useEffect } from "react";
import { PostSearch } from "@/components/PostSearch";

// export const metadata: Metadata = {
//   title: "Blog | Next App",
// };

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  // const posts = await getData();

  return (
    <>
      <h1>Blog Page</h1>
      <PostSearch onSearch={setPosts} />
      {loading ? <h3>Loading...</h3> : <Posts posts={posts} />}
    </>
  );
}
