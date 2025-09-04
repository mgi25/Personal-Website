import assert from 'node:assert';
import { readingTime } from '../lib/reading-time.js';
import { slugify } from '../lib/slugify.js';
import { generateRss } from '../lib/rss.js';

function testReadingTime() {
  const text = 'one two three four five';
  assert.strictEqual(readingTime(text, 200), 1);
}

function testSlugify() {
  assert.strictEqual(slugify('Hello World!'), 'hello-world');
}

function testRss() {
  const posts = [{ title: 'Test', url: '/test', date: '2024-01-01' }];
  const rss = generateRss(posts, 'https://example.com');
  assert.ok(rss.includes('<title>Test</title>'));
}

testReadingTime();
testSlugify();
testRss();

console.log('All tests passed');
