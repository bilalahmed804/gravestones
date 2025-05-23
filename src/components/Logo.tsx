import React from 'react';

const Logo = () => {
  // Custom SVG for the headstone icon
  const HeadstoneIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-8 w-8 text-amber-600"
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M7 20h10a2 2 0 002-2V8a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM12 8v4m0 4v0m0 0v0m0-8v0m0 0v0"
      />
    </svg>
  );

  return (
    <div className="flex items-center gap-2">
      <HeadstoneIcon />
      <div>
        <h1 className="text-xl font-semibold tracking-tight">
          <span className="text-black">Casa das</span> <span className="text-amber-600">Campas</span>
        </h1>
        <p className="text-xs text-gray-600 -mt-1">Produtos Funerários de Qualidade</p>
      </div>
    </div>
  );
};

export default Logo;