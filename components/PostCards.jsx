"use client";

import Link from "next/link";

// RCC React Client Component
function PostCards({ post }) {
  return (
    <div className="card__post bg-gray-950 p-10">
      <h3  className="text-xl font-bold mb-4">
        <Link className="card__title" href={`/posts/${post.id}`}>
          {post.id}. {post.title}
        </Link>
      </h3>
      <p className="card__texts text-slate-300">{post.body}</p>
      <button  className="card__button" onClick={() => {}}>Show</button>
    </div>
  );
}

export default PostCards;
