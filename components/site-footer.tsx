import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="p-4 border-t text-sm text-center">
      <div className="flex justify-center gap-4">
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <p className="mt-2">© {new Date().getFullYear()} Author.</p>
    </footer>
  );
}
