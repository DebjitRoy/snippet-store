'use client';

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}
function ErrorPage({ error }: ErrorPageProps) {
  return <div>{error.message}</div>;
}

export default ErrorPage;
