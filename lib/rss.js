/**
 * Build a minimal RSS feed for posts.
 * @param {{title:string,url:string,date:string}[]} posts
 * @param {string} baseUrl
 */
export function generateRss(posts, baseUrl) {
  const items = posts
    .map(
      (p) =>
        `\n    <item>\n      <title>${p.title}</title>\n      <link>${baseUrl}${p.url}</link>\n      <pubDate>${p.date}</pubDate>\n    </item>`
    )
    .join('');
  return `<?xml version="1.0"?><rss version="2.0"><channel><title>RSS</title>${items}\n  </channel></rss>`;
}

/**
 * Build RSS for podcast episodes.
 * @param {{title:string,url:string,date:string}[]} items
 * @param {string} baseUrl
 */
export function generateEpisodeRss(items, baseUrl) {
  const xml = items
    .map(
      (i) =>
        `\n    <item>\n      <title>${i.title}</title>\n      <link>${baseUrl}${i.url}</link>\n      <pubDate>${i.date}</pubDate>\n    </item>`
    )
    .join('');
  return `<?xml version="1.0"?><rss version="2.0"><channel><title>Podcast</title>${xml}\n  </channel></rss>`;
}
