export interface Book {
  title: string;
  slug: string;
  cover: string;
  blurb: string;
  buyUrl: string;
}

export const books: Book[] = [
  {
    title: 'Book One',
    slug: 'book-one',
    cover: '/book-one.svg',
    blurb: 'A placeholder book about starting small.',
    buyUrl: '#',
  },
  {
    title: 'Book Two',
    slug: 'book-two',
    cover: '/book-two.svg',
    blurb: 'Another placeholder book focusing on habits.',
    buyUrl: '#',
  },
];
