"use client";
import Link from "next/link";
import { usePosts } from "@/store";
import { useEffect, useMemo } from "react";

export const Posts = () => {
  const store = usePosts();
  const { posts, loading, getAllPosts } = useMemo(
    () => ({
      posts: store.posts,
      loading: store.loading,
      getAllPosts: store.getAllPosts,
    }),
    [store.posts, store.loading, store.getAllPosts]
  );

  useEffect(() => {
    if (!posts.length) {
      getAllPosts();
    }
  }, [posts.length, getAllPosts]);

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};
