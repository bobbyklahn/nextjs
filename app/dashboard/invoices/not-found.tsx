import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-6 text-sm text-gray-700">
      <h2 className="text-lg font-semibold text-gray-900">Invoice not found</h2>
      <p>The invoice you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        href="/dashboard/invoices"
        className="inline-flex w-fit items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500"
      >
        Go back to Invoices
      </Link>
    </div>
  );
}
