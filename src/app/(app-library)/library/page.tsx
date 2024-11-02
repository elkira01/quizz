import { bookCollection } from '@/app/_api/books';

export default async function Home() {
  const result = await bookCollection();

  console.log(result);

  return <div></div>;
}
