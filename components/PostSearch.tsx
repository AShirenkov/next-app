"use client";
import useSWR from "swr";

import { useState } from "react";
import { getPostsBySearch } from "@/services/getPosts";
// import { usePosts } from "@/store";

export const PostSearch = () => {
  const { mutate } = useSWR("posts");

  const [search, setSearch] = useState("");
  //   const getPostsBySearch = usePosts((state) => state.getPostsBySearch);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    const posts = await getPostsBySearch(search);
    mutate(posts);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
