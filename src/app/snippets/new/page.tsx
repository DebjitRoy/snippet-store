import React from 'react';

function SnippetCreate() {
  return (
    <form>
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
        <button type="submit" className=" rounded p-2 bg-blue-200">
          Save Snippet
        </button>
      </div>
    </form>
  );
}

export default SnippetCreate;
