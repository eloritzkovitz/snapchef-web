import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#f47851] text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Navbar Banner */}
        <Link
          href="/"
          className="flex items-center space-x-3"
          style={{ fontFamily: "'Berlin Sans FB Demi Bold', sans-serif" }}
        >
          <img
            src="/icon.png"
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
              style={{ fontFamily: "'Berlin Sans FB Demi Bold', sans-serif" }}
            >
              API
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-[#ffb89d] transition-colors"
              style={{ fontFamily: "'Berlin Sans FB Demi Bold', sans-serif" }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="hover:text-[#ffb89d] transition-colors"
              style={{ fontFamily: "'Berlin Sans FB Demi Bold', sans-serif" }}
            >
              Log In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}