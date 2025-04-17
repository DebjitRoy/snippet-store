import { db } from '@/db';
import { SnippetShowProps } from '../page';
import { notFound } from 'next/navigation';
import SnippetEditForm from '@/components/snippet-edit-form';

export default async function SnippetEdit(props: SnippetShowProps) {
  const { id } = await props.params;
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(id),
    },
  });

  if (!snippet) {
    return notFound();
  }
  return (
    <div className="my-10">
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
