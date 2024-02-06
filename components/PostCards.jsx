'use client'

function PostCards({ post }) {
  return (
    <div>
      <h3>
        {post.id}. {post.title}
      </h3>
      <p>{post.body}</p>
      <button onClick={() => {}}>Click</button>
    </div>
  );
}

export default PostCards;
