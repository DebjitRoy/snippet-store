import { db } from '@/db';
import Link from 'next/link';

// 'force-dynamic disables caching entirely on homepage
// export const dynamic = 'force-dynamic';
export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((snippet) => (
    <Link
      key={snippet.id}
      className="flex justify-between items-center p-4 border rounded"
      href={`/snippets/${snippet.id}`}
    >
      <div>{snippet.title}</div>
      <div>View</div>
    </Link>
  ));

  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-2xl font-bold">Snippets</h1>
        <Link href="/snippets/new" className="border p-2 rounded">
          New
        </Link>
      </div>
      <div className="mt-12 flex flex-col gap-2">{renderedSnippets}</div>
    </div>
  );
}
