import Image from 'next/image';
import { books } from '@/lib/books';

export default function BooksPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Books</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {books.map((book) => (
          <div key={book.slug} className="border p-4">
            <Image src={book.cover} alt="" width={300} height={450} />
            <h2 className="text-xl font-semibold mt-2">{book.title}</h2>
            <p className="mt-1">{book.blurb}</p>
            <a href={book.buyUrl} className="underline mt-2 inline-block">
              Buy
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
