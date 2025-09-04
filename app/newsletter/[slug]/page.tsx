import { notFound } from 'next/navigation';
import { allNotes } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

interface Props { params: { slug: string } }

export default function NotePage({ params }: Props) {
  const note = allNotes.find((n) => n.slug === params.slug);
  if (!note) return notFound();
  const MDXContent = useMDXComponent(note.body.code);
  return (
    <article className="prose dark:prose-invert">
      <h1>{note.title}</h1>
      <p className="text-sm text-gray-500">{note.date}</p>
      <MDXContent />
    </article>
  );
}
