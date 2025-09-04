import { notFound } from 'next/navigation';
import { allEpisodes } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

interface Props { params: { slug: string } }

export default function EpisodePage({ params }: Props) {
  const ep = allEpisodes.find((e) => e.slug === params.slug);
  if (!ep) return notFound();
  const MDXContent = useMDXComponent(ep.body.code);
  return (
    <article className="prose dark:prose-invert">
      <h1>{ep.title}</h1>
      <p className="text-sm text-gray-500">{ep.date} • {ep.duration}</p>
      <audio controls src={ep.audioUrl} className="my-4" />
      <MDXContent />
    </article>
  );
}
