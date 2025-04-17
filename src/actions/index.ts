'use server';

import { db } from '@/db';
import { redirect } from 'next/navigation';

// this makes all the functions defined here as server actions

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  // use redirect inside server component, where clientComponent uses useRouter hook
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });
  // use redirect inside server component, where clientComponent uses useRouter hook
  redirect(`/`);
}
