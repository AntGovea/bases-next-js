"use client";

import Link from "next/link";

// RCC React Client Component
function PostCards({ post }) {
  return (
    <div>
      <h3>
        <Link href={`/posts/${post.id}`}>
          {post.id}. {post.title}
        </Link>
      </h3>
      <p>{post.body}</p>
      <button onClick={() => {}}>Click</button>
    </div>
  );
}

export default PostCards;
