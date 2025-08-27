import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-lg font-semibold text-gray-800 hover:text-blue-600">
        Home
      </Link>
      <div>
        <Link href="/profile" className="text-gray-600 hover:text-blue-600 mr-4">
          Profile
        </Link>
        <Link href="/login" className="text-gray-600 hover:text-blue-600">
          Login
        </Link>
      </div>
    </header>
  );
}
