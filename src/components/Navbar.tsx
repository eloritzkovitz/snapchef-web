import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Navbar Banner */}
        <Link href="/" className="text-xl font-bold hover:underline">
          SnapChef
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/api" className="hover:underline">
              API
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:underline">
              Log In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}