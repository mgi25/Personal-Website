import { NextResponse } from 'next/server';
import { allEpisodes } from 'contentlayer/generated';
import { generateEpisodeRss } from '@/lib/rss';

export const runtime = 'edge';

export async function GET() {
  const items = allEpisodes.map((e) => ({ title: e.title, url: e.url, date: e.date }));
  const rss = generateEpisodeRss(items, 'https://example.com');
  return new NextResponse(rss, { headers: { 'Content-Type': 'application/xml' } });
}
