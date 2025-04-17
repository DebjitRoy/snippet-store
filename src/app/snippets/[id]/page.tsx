import { db } from '@/db';
import { notFound } from 'next/navigation';

interface SnippetShowProps {
  params: Promise<{
    id: string;
  }>;
}
async function SnippetShow(props: SnippetShowProps) {
  const { id } = await props.params;
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(id),
    },
  });

  if (!snippet) {
    return notFound();
  }

  return <div>{snippet.title}</div>;
}

export default SnippetShow;
