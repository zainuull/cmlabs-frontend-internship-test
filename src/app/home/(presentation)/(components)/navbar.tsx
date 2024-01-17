'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else if (window.scrollY >= 5 && window.innerWidth <= 650) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      className={` ${
        shadow
          ? `shadow-lg backdrop-filter backdrop-blur-md transition-all duration-700`
          : 'shadow-none bg-transparent'
      }w-full flex items-center justify-between h-20 px-2 lg:px-6 select-none`}>
      <h1 className="text-2xl font-semibold text-[#00503D]">My Restaurant</h1>
      <div className="flex items-center gap-x-6">
        <Link
          href={'/'}
          className={`${
            pathname == '/' ? 'text-[#00503D] text-xl' : 'text-gray-500 text-base'
          } font-semibold`}>
          Home
        </Link>
        <Link
          href={'/menu'}
          className={`${
            pathname.match(/^\/menu/)
              ? 'text-[#00503D] text-xl'
              : 'text-gray-500 text-base'
          } font-semibold`}>
          Menu
        </Link>
      </div>
      <div className="hidden lg:block"></div>
    </div>
  );
};

export default Navbar;
