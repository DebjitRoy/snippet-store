'use client';

import * as actions from '@/actions';
import { useActionState } from 'react';

function SnippetCreate() {
  const [formState, action] = useActionState(actions.createSnippet, { message: '' });
  return (
    <form action={action}>
      <h3 className="font-bold m-3">Create a snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input name="title" className="border rounded p-2 w-full" id="title" />
        </div>
        <div className="flex gap-2">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea name="code" className="border rounded p-2 w-full h-[250px]" id="code" />
        </div>
        {formState.message && (
          <div className="my-2 p-2 bg-red-200 border rounded border-red-400">
            {formState.message}
          </div>
        )}
        <button type="submit" className=" rounded p-2 bg-blue-200">
          Save Snippet
        </button>
      </div>
    </form>
  );
}

export default SnippetCreate;
