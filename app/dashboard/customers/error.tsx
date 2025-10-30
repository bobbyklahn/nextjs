'use client';

import { useEffect } from 'react';
import { Button } from '@/app/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-6 text-sm text-red-700">
      <p className="font-semibold text-red-800">Failed to load customers.</p>
      <p>Please refresh the page or try again.</p>
      <Button type="button" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
