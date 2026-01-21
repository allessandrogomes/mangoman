import { ArrowLeft, FileX } from 'lucide-react';
import Link from 'next/link';
import './globals.css';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary px-6 text-center">
      <h1 className="flex flex-col gap-2 items-center mt-4 text-4xl text-secondary font-bold">
        <FileX size={60} />
        Page not found
      </h1>

      <p className="mt-2 max-w-md text-sm text-secondary">
        The page you are trying to access does not exist or is no longer
        available.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-lg bg-tertiary px-6 py-3 text-sm text-white transition-all duration-300 hover:bg-orange-500"
      >
        <ArrowLeft className="mr-2" />
        Back to home
      </Link>
    </div>
  );
}
