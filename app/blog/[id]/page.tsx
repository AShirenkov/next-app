import { getAllPosts } from "@/services/getPosts";
import type { Metadata } from "next";

async function getData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

type Props = {
  params: Promise<{ id: string }>;
};
export async function generateStaticParams() {
  const posts: any[] = await getAllPosts();

  return posts.map((post) => ({
    slug: post.id.toString(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await getData(id);
  return {
    title: post.title,
  };
}
export default async function Post({ params }: Props) {
  const { id } = await params;
  const post = await getData(id);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
