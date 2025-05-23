import React from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Custom SVG icons
  const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );

  const MailIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className || ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  const PhoneIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className || ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  const MapPinIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className || ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  const ClockIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className || ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-300 mt-4 text-sm">
              Especializados em produtos funerários de alta qualidade, oferecendo um serviço respeitoso e compassivo durante momentos difíceis.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-600 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-600 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a 
                href="mailto:info@casadascampas.pt" 
                className="text-gray-300 hover:text-amber-600 transition-colors"
                aria-label="Email"
              >
                <MailIcon />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-600">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-amber-600 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-amber-600 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="text-gray-300 hover:text-amber-600 transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-gray-300 hover:text-amber-600 transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-amber-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-amber-600 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-600">Produtos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/produtos/campas" className="text-gray-300 hover:text-amber-600 transition-colors">
                  Campas
                </Link>
              </li>
              <li>
                <Link href="/produtos/lapides" className="text-gray-300 hover:text-amber-600 transition-colors">
                  Lápides
                </Link>
              </li>
              <li>
                <Link href="/produtos/vasos" className="text-gray-300 hover:text-amber-600 transition-colors">
                  Vasos
                </Link>
              </li>
              <li>
                <Link href="/produtos/lanternas" className="text-gray-300 hover:text-amber-600 transition-colors">
                  Lanternas
                </Link>
              </li>
              <li>
                <Link href="/produtos/placas" className="text-gray-300 hover:text-amber-600 transition-colors">
                  Placas
                </Link>
              </li>
              <li>
                <Link href="/produtos/esculturas" className="text-gray-300 hover:text-amber-600 transition-colors">
                  Esculturas
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-600">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPinIcon className="mr-2 text-amber-600 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Rua das Flores, 123<br />
                  4000-000 Porto<br />
                  Portugal
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="mr-2 text-amber-600 flex-shrink-0" />
                <a href="tel:+351220123456" className="text-gray-300 hover:text-amber-600 transition-colors">
                  +351 220 123 456
                </a>
              </li>
              <li className="flex items-center">
                <MailIcon className="mr-2 text-amber-600 flex-shrink-0" />
                <a href="mailto:info@casadascampas.pt" className="text-gray-300 hover:text-amber-600 transition-colors">
                  info@casadascampas.pt
                </a>
              </li>
              <li className="flex items-start">
                <ClockIcon className="mr-2 text-amber-600 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Segunda - Sexta: 9h às 18h<br />
                  Sábado: 9h às 13h<br />
                  Domingo: Fechado
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Casa das Campas. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4 text-sm text-gray-400">
            <Link href="/privacidade" className="hover:text-amber-600 transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="hover:text-amber-600 transition-colors">
              Termos e Condições
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;