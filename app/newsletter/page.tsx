import Link from 'next/link';
import { allNotes } from 'contentlayer/generated';
import NewsletterForm from '@/components/newsletter-form';

export default function NewsletterPage() {
  const notes = allNotes.sort((a, b) => (a.date > b.date ? -1 : 1)).slice(0, 10);
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-3xl font-bold">Newsletter</h1>
        <p className="mt-2">Short notes and prompts every few weeks.</p>
        <div className="mt-4">
          <NewsletterForm />
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Recent Notes</h2>
        <ul className="space-y-2">
          {notes.map((note) => (
            <li key={note.slug}>
              <Link href={note.url} className="underline">
                {note.title}
              </Link>
              <span className="ml-2 text-sm text-gray-500">{note.date}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
