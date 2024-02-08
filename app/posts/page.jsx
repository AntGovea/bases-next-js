// el @ es una ruta desde root la cual esta configurada en el jsconfig.json
import PostCards from "@/components/PostCards";
import './Posts.css'

// RSC React Server Component
async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 5000))
  return data;
}

async function PostsPage() {
  const posts = await loadPosts();
  return (
    <div className="grid">
      {posts.map((post) => {
        return <PostCards post={post} key={post.id} />;
      })}
    </div>
  );
}

export default PostsPage;
