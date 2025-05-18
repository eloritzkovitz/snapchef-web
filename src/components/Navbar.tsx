import AppLink from './AppLink';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="navbar p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Brand */}
        <AppLink
          href="/"
          className="flex items-center space-x-3 font-berlin"
        >
          <Image
            src="/images/icon.png"
            alt="SnapChef Logo"
            width={48}
            height={48}
            priority
          />
          <span className="text-4xl font-bold">SnapChef</span>
        </AppLink>
        {/* Navigation Links */}
        <ul className="flex space-x-6 font-berlin">
          <li>
            <AppLink
              href="/api"
              className="hover:text-[#ffb89d] transition-colors"
            >
              API
            </AppLink>
          </li>
          <li>
            <AppLink
              href="/about"
              className="hover:text-[#ffb89d] transition-colors"
            >
              About
            </AppLink>
          </li>
          <li>
            <AppLink
              href="/login"
              className="hover:text-[#ffb89d] transition-colors"
            >
              Log In
            </AppLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}