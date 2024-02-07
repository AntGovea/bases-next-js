async function loadPost(postId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await res.json();
return data
}
async function PostPage({ params: { postId } }) {
 const post= await loadPost(postId);

  return (
    <>
      <h3>{`${post.id}: ${post.title}`}</h3>
      <p>{post.body}</p>
    </>
  );
}

export default PostPage;
