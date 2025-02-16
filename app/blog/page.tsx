import type { Metadata } from "next";
import { Posts } from "@/components/Posts";
import { PostSearch } from "@/components/PostSearch";

export const revalidate = 10;

export default function Blog() {
  return (
    <>
      <h1>Blog Page</h1>
      <PostSearch />
      <Posts />
    </>
  );
}
