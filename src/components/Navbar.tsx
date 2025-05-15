import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#f47851] text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Navbar Banner */}
        <Link href="/" className="flex items-center space-x-3">
          <img
            src="/icon_white.png"
            alt="SnapChef Logo"
            className="h-12 w-12"
          />
          <span className="text-4xl font-bold">SnapChef</span>
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/api"
              className="hover:text-[#ffb89d] transition-colors"
            >
              API
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-[#ffb89d] transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="hover:text-[#ffb89d] transition-colors"
            >
              Log In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}