import { NextResponse } from "next/server";
import { posts } from "./posts";
export async function GET(reg: Request) {
  const { searchParams } = new URL(reg.url);
  const query = searchParams.get("q");

  let currentPosts = posts;

  if (query) {
    currentPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  return NextResponse.json(currentPosts);
}

export async function POST(reg: Request) {
  const body = await reg.json();

  console.log(body);
  return NextResponse.json({ body });
}
