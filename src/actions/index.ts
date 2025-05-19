'use server';

import { db } from '@/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// this makes all the functions defined here as server actions

export const createSnippet = async (formState: { message: string }, formData: FormData) => {
  // get (from name prop) and validate user input
  const title = formData.get('title') as string;
  const code = formData.get('code') as string;

  if (title.length < 3) {
    return {
      message: 'Title must be longer',
    };
  }
  if (!code.length) {
    return {
      message: 'Please add a code',
    };
  }
  try {
    // throw new Error('Creation failed!');
    // create new entry in DB
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        message: e.message,
      };
    } else {
      return {
        message: `Something went wrong`,
      };
    }
  }
  // on demand cache-busting
  revalidatePath('/');
  // Redirect user back to home page
  redirect('/');
};

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  // on demand cache-busting
  // this cache busting is required, as we forcefully(generateStaticParams ) made the dynamic route snippets/[id] as static cached.
  // when someone edits the snippet, we need to cache bust to display updated page
  revalidatePath(`/snippets/${id}`);
  // use redirect inside server component, where clientComponent uses useRouter hook
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });
  // on demand cache-busting
  revalidatePath('/');
  // use redirect inside server component, where clientComponent uses useRouter hook
  redirect(`/`);
}
