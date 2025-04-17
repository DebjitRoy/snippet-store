'use client';

import type { Snippet } from '@prisma/client';
import { Editor } from '@monaco-editor/react';
import { useState } from 'react';
import * as actions from '@/actions';
import { useRouter } from 'next/navigation';

interface SnippetEditFormProps {
  snippet: Snippet;
}
export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [currentSnippet, setCurrentSnippet] = useState(snippet.code);
  const handleEditorChange = (value = '') => {
    setCurrentSnippet(value);
  };
  const router = useRouter(); // use routers can only be used inside client component
  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, currentSnippet);

  const cancelEdit = () => {
    router.push(`/snippets/${snippet.id}`);
  };
  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction} className="flex gap-2 mt-5">
        <button type="submit" className="p-2 border rounded w-[70px]">
          Save
        </button>
        <button className="p-2 border rounded w-[70px]" onClick={cancelEdit}>
          Cancel
        </button>
      </form>
    </div>
  );
}
