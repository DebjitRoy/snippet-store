import { SnippetShowProps } from '../page';

export default async function SnippetEdit(props: SnippetShowProps) {
  const { id } = await props.params;
  return <div>Editing {id}</div>;
}
