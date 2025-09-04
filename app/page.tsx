import Link from 'next/link';
import { allPosts, allNotes, allEpisodes } from 'contentlayer/generated';

export default function HomePage() {
  const latestPosts = allPosts.slice(0, 3);
  const latestEpisodes = allEpisodes.slice(0, 3);
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold">Welcome</h1>
        <p className="mt-2">I write about living with intention.</p>
        <div className="mt-4 flex gap-4">
          <Link href="/articles" className="underline">Read Articles</Link>
          <Link href="/newsletter" className="underline">Join Newsletter</Link>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Latest Articles</h2>
        <ul className="list-disc ml-6">
          {latestPosts.map((post) => (
            <li key={post.slug}>
              <Link href={post.url}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">From the Podcast</h2>
        <ul className="list-disc ml-6">
          {latestEpisodes.map((ep) => (
            <li key={ep.slug}>
              <Link href={ep.url}>{ep.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
