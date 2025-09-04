import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="p-4 border-b">
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/articles">Articles</Link>
        <Link href="/books">Books</Link>
        <Link href="/newsletter">Newsletter</Link>
        <Link href="/podcast">Podcast</Link>
        <Link href="/community">Community</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
