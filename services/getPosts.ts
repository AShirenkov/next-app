export const getAllPosts = async () => {
  // const res = await fetch("/api/posts");
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
    // {
    //   next: { revalidate: 10 },
    // }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

export const getPostsBySearch = async (search: string) => {
  // const res = await fetch(`/api/posts?q=${search}`);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${search}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};
