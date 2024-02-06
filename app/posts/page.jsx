import PostCards from "@/components/PostCards";

async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return data;
}

async function Page() {
  const posts = await loadPosts();
  return (
    <div>
      {posts.map((post) => {
        return <PostCards post={post} key={post.id} />;
      })}
    </div>
  );
}

export default Page;
