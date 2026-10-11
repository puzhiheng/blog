import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-12">
      <h1 className="text-2xl font-bold tracking-tight">文章</h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {siteConfig.description}
      </p>

      <div className="mt-6 divide-y divide-zinc-200 dark:divide-zinc-800">
        {posts.length === 0 ? (
          <p className="py-8 text-sm text-zinc-500 dark:text-zinc-400">
            还没有文章，去 content/posts 目录添加第一篇吧。
          </p>
        ) : (
          posts.map((post) => <PostCard key={post.slug} post={post} />)
        )}
      </div>
    </main>
  );
}
