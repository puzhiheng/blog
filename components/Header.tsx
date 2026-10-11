import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex h-16 w-full max-w-2xl items-center justify-between px-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight hover:text-zinc-600 dark:hover:text-zinc-300"
        >
          {siteConfig.title}
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            首页
          </Link>
          <Link
            href="/about"
            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            关于
          </Link>
        </nav>
      </div>
    </header>
  );
}
