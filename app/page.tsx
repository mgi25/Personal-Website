import Link from 'next/link';
import { allPosts, allEpisodes } from 'contentlayer/generated';
import NewsletterForm from '@/components/newsletter-form';

export default function HomePage() {
  const latestPosts = allPosts.slice(0, 3);
  const latestEpisodes = allEpisodes.slice(0, 3);
  return (
    <div className="space-y-16">
      <section className="text-center bg-gray-900 text-white p-10 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold">5 Minutes That Might Change Your Life</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg">Receive ideas shared with millions directly in your inbox each week.</p>
        <div className="mt-6 flex justify-center">
          <NewsletterForm />
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Latest Articles</h2>
        <ul className="list-disc ml-6">
          {latestPosts.map((post) => (
            <li key={post.slug}>
              <Link href={post.url}>{post.title}</Link>
            </li>
          ))}
        </ul>
        <Link href="/articles" className="underline">View all articles →</Link>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">From the Podcast</h2>
        <ul className="list-disc ml-6">
          {latestEpisodes.map((ep) => (
            <li key={ep.slug}>
              <Link href={ep.url}>{ep.title}</Link>
            </li>
          ))}
        </ul>
        <Link href="/podcast" className="underline">More episodes →</Link>
      </section>
    </div>
  );
}
