'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global error boundary:', error);
  }, [error]);

  return (
    <html>
      <body>
        <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-50 px-6 text-center text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900">
            Something went wrong.
          </h2>
          <p>Please try again or contact support if the issue persists.</p>
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
