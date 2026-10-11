import { siteConfig } from "@/lib/site";

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">关于我</h1>

      <div className="prose prose-zinc dark:prose-invert mt-8 max-w-none">
        <p>你好，我是{siteConfig.author}，欢迎来到我的博客。</p>
        <p>
          这里记录我的学习、思考与生活点滴。你可以修改这段介绍，写上自己的故事。
        </p>

        <h2>联系方式</h2>
        <ul>
          <li>邮箱：you@example.com</li>
          <li>GitHub：https://github.com/yourname</li>
        </ul>
      </div>
    </main>
  );
}
