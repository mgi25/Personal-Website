import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm">
      <div className="max-w-4xl mx-auto p-4 flex flex-col items-center gap-2">
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-teal-400">Privacy</Link>
          <Link href="/terms" className="hover:text-teal-400">Terms</Link>
          <Link href="/contact" className="hover:text-teal-400">Contact</Link>
        </div>
        <p>© {new Date().getFullYear()} Author. All rights reserved.</p>
      </div>
    </footer>
  );
}
