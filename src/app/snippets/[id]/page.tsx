import { db } from '@/db';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import * as actions from '@/actions';

export interface SnippetShowProps {
  params: Promise<{
    id: string;
  }>;
}
export default async function SnippetShow(props: SnippetShowProps) {
  const { id } = await props.params;
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(id),
    },
  });

  if (!snippet) {
    return notFound();
  }

  // we needed to bind the method similar to client components so that we can pass arguments
  const deleteSnippetAction = actions.deleteSnippet.bind(null, parseInt(id));

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-2">
          <Link href={`/snippets/${id}/edit`} className="p-2 w-[70px] border rounded text-center">
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button type="submit" className="p-2 w-[70px] border rounded text-center">
              Delete
            </button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

// Caching dynamic routes
export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();
  return snippets.map((snippet) => ({ id: `${snippet.id}` }));
}
