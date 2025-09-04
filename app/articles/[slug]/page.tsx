import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

interface Props { params: { slug: string } }

export default function ArticlePage({ params }: Props) {
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <article className="prose dark:prose-invert">
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500">{post.date}</p>
      <MDXContent />
    </article>
  );
}
