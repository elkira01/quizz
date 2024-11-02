import { BookType } from '@/types/book';

export function BookCard({ book }: { book: BookType }) {
  return <>{book.title}</>;
}
