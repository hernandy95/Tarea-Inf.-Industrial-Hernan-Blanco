import React from 'react';

export function Navigation() {
  const links = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Introducción', href: '#intro' },
    { name: 'Evolución', href: '#timeline' },
    { name: 'Hardware', href: '#hardware' },
    { name: 'Lenguajes', href: '#languages' },
    { name: 'Scan Cycle', href: '#scancycle' },
    { name: 'Casos y Test', href: '#quiz' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0F172A] bg-opacity-95 backdrop-blur-md shadow-xl border-b border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-[#2563EB] flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/30">
              PLC
            </div>
            <span className="text-white font-bold tracking-tight text-xl hidden sm:block">Automática Industrial</span>
          </div>
          <div className="hidden md:flex space-x-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-800"
              >
                {link.name}
              </a>
            ))}
          </div>
          {/* Mobile menu simple icon */}
          <div className="md:hidden flex items-center text-white">
            <span className="text-xs font-semibold px-2 py-1 bg-blue-600 rounded">Menú en Scroll</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Datos del Proyecto</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Titulación:</strong> CFGS Automatización y Robótica Industrial</li>
              <li><strong>Módulo:</strong> Sistemas Secuenciales Programables</li>
              <li><strong>Objetivo:</strong> Recursos Educativos Abiertos</li>
              <li className="mt-4"><span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded border border-blue-700/50 text-xs">Versión Interactiva Vanilla + React</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Bibliografía y Fuentes</h3>
            <details className="group border border-gray-700 rounded-lg bg-gray-800/30 p-2 cursor-pointer transition-all">
              <summary className="font-medium text-gray-300 px-2 py-1 select-none flex justify-between items-center">
                Ver fuentes consultadas
                <span className="text-gray-500 group-open:-rotate-180 transition-transform">▼</span>
              </summary>
              <ul className="mt-3 px-4 pb-2 space-y-1 justify-top text-xs list-disc text-gray-400">
                <li>Norma Internacional IEC 61131-3 para Autómatas Programables.</li>
                <li>Documentación Técnica Siemens SIMATIC S7.</li>
                <li>Historia de Dick Morley y los primeros PLC (Modicon).</li>
                <li>Recursos audiovisuales académicos de automática.</li>
              </ul>
            </details>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs">
          <p>Desarrollado para la comunidad formativa industrial.</p>
        </div>
      </div>
    </footer>
  );
}
