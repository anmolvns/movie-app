'use client';

import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <div className="text-white text-lg font-semibold">Movie List</div>
        </Link>
        <Link href="/favorites">
          <div className="text-white text-lg font-semibold">
            Favorite Movies
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
