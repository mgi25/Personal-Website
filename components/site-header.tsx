import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="bg-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-bold text-lg">Author</Link>
        <nav className="flex gap-4 text-sm">
          <Link href="/articles" className="hover:text-teal-400">Articles</Link>
          <Link href="/books" className="hover:text-teal-400">Books</Link>
          <Link href="/newsletter" className="hover:text-teal-400">Newsletter</Link>
          <Link href="/podcast" className="hover:text-teal-400">Podcast</Link>
          <Link href="/community" className="hover:text-teal-400">Community</Link>
          <Link href="/about" className="hover:text-teal-400">About</Link>
        </nav>
      </div>
    </header>
  );
}
