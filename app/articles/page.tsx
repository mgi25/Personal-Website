import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';

export default function ArticlesPage() {
  const posts = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Articles</h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={post.url} className="underline">
              {post.title}
            </Link>
            <span className="ml-2 text-sm text-gray-500">{post.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
