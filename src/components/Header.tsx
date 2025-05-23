"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/sobre', label: 'Sobre Nós' },
    { href: '/produtos', label: 'Produtos' },
    { href: '/galeria', label: 'Galeria' },
    { href: '/blog', label: 'Blog' },
    { href: '/contacto', label: 'Contacto' },
  ];

  // Custom SVG icons
  const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );

  const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white bg-opacity-95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`
                    font-medium text-sm tracking-wide transition-colors duration-200
                    ${pathname === link.href 
                      ? 'text-amber-600 border-b-2 border-amber-600' 
                      : 'text-gray-700 hover:text-amber-600'}
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            <Link 
              href="/contacto" 
              className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            >
              <PhoneIcon />
              <span>Contactar</span>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-amber-600 p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`
        md:hidden transition-all duration-300 ease-in-out overflow-hidden
        ${isOpen ? 'max-h-screen bg-white shadow-lg' : 'max-h-0'}
      `}>
        <div className="px-4 py-2 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                block px-3 py-3 text-base font-medium transition-colors duration-200
                ${pathname === link.href 
                  ? 'text-amber-600 border-l-4 border-amber-600 pl-2' 
                  : 'text-gray-700 hover:text-amber-600'}
              `}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 pb-4">
            <Link 
              href="/contacto" 
              className="flex items-center justify-center gap-2 w-full bg-amber-600 hover:bg-amber-700 text-white px-4 py-3 rounded-lg transition-colors duration-300"
              onClick={closeMenu}
            >
              <PhoneIcon />
              <span>Contactar</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;