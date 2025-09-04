import { NextResponse } from 'next/server';
import { allPosts } from 'contentlayer/generated';
import { generateRss } from '@/lib/rss';

export const runtime = 'edge';

export async function GET() {
  const rss = generateRss(allPosts, 'https://example.com');
  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
