import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://example.com/' },
    { url: 'https://example.com/articles' },
    { url: 'https://example.com/books' },
  ];
}
