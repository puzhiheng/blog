import Link from "next/link";
import type { Post } from "@/lib/posts";
import { formatDate } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="group">
      <Link href={`/posts/${post.slug}`} className="block py-5">
        <h2 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
          {post.title}
        </h2>
        <time className="mt-1 block text-sm text-zinc-500 dark:text-zinc-400">
          {formatDate(post.date)}
        </time>
        {post.description && (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {post.description}
          </p>
        )}
      </Link>
    </article>
  );
}
