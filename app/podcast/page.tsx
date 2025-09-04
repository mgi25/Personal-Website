import Link from 'next/link';
import { allEpisodes } from 'contentlayer/generated';

export default function PodcastPage() {
  const eps = allEpisodes.sort((a, b) => (a.date > b.date ? -1 : 1));
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Podcast</h1>
      <ul className="space-y-2">
        {eps.map((ep) => (
          <li key={ep.slug}>
            <Link href={ep.url} className="underline">
              {ep.title}
            </Link>
            <span className="ml-2 text-sm text-gray-500">{ep.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
