import React from "react";

const async function  PostPage ()  {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json()
  return (
    <div className=" space-y-8">
      <section className=" space-y-4">
        <h1 className=" text-center text-4xl font-semibold text-zinc-950 sm:text-5xl">
          Posts
        </h1>
      </section>
    </div>
  );
};

export default PostPage;
