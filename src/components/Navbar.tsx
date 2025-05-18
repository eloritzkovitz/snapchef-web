import AppLink from './AppLink';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo-nav">
          <Image
            src="/images/icon.png"
            alt="SnapChef Logo"
            width={48}
            height={48}
            className="nav-logo"
          />
          <span className="nav-brand">SnapChef</span>
        </div>
        <ul className="nav-links">
          <li>
            <AppLink
              href="/"
              className="nav-link"
            >
              Home
            </AppLink>
          </li>
          <li>
            <AppLink
              href="/api"
              className="nav-link"
            >
              API
            </AppLink>
          </li>
          <li>
            <AppLink
              href="/about"
              className="nav-link"
            >
              About
            </AppLink>
          </li>
          <li>
            <AppLink
              href="/ingredients"
              className="nav-link"
            >
              Ingredients
            </AppLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}