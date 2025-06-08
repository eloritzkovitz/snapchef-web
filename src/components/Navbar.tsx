'use client';

import AppLink from './AppLink';
import Image from 'next/image';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const { user, logout, loading, isAdmin } = useAuth();

  const handleLogout = () => {
    logout();
  };

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
        <ul className="flex space-x-6 font-berlin items-center">
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
          
          {!loading && (
            <>
              {user ? (
                <>
                  {/* Admin Dashboard Link - ללא רקע אדום */}
                  {isAdmin && (
                    <li>
                      <AppLink
                        href="/admin/dashboard"
                        className="hover:text-[#ffb89d] transition-colors font-medium underline"
                      >
                        Admin Dashboard
                      </AppLink>
                    </li>
                  )}
                  
                  {/* User Info */}
                  <li className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      {user.profilePicture ? (
                        <img
                          src={user.profilePicture}
                          alt="Profile"
                          className="w-8 h-8 rounded-full border-2 border-white"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center border-2 border-white">
                          <span className="text-white text-sm font-medium">
                            {user.firstName[0]}{user.lastName[0]}
                          </span>
                        </div>
                      )}
                      <span className="text-white font-medium">
                        {user.firstName}
                      </span>
                      {isAdmin && (
                        <span className="text-yellow-300 text-xs font-bold">
                          (Admin)
                        </span>
                      )}
                    </div>
                    
                    {/* Logout Button - ללא רקע לבן */}
                    <button
                      onClick={handleLogout}
                      className="hover:text-[#ffb89d] transition-colors font-medium underline"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <AppLink
                    href="/login"
                    className="hover:text-[#ffb89d] transition-colors"
                  >
                    Log In
                  </AppLink>
                </li>
              )}
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}