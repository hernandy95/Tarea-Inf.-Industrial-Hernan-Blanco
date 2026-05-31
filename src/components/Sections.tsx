import React from 'react';
import { motion } from 'motion/react';
import { hardwareData, applicationsData, brandsData } from '../data';

export function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://novedadesautomatizacion.com/wp-content/uploads/2021/01/content-image-1588754532523.jpg')` }}
      />
      <div className="absolute inset-0 z-10 bg-[#0F172A] opacity-75 MixBlendMode-multiply"></div>
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-md">
            Sistemas Secuenciales <span className="text-[#2563EB]">Programables</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light">
            CFGS Automatización y Robótica Industrial
          </p>
          <a 
            href="#intro"
            className="inline-block px-8 py-4 bg-[#2563EB] hover:bg-blue-500 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
          >
            Comenzar Formación
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function Intro() {
  return (
    <section id="intro" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight border-l-4 border-blue-600 pl-4">
              Introducción a los PLC
            </h2>
            
            <div className="prose text-gray-600">
              <h3 className="text-xl font-semibold text-slate-800">¿Qué es un PLC?</h3>
              <p className="mb-4">
                El controlador lógico programable (PLC) es un ordenador industrial rugerizado 
                diseñado específicamente para gobernar procesos de fabricación. Recibe 
                información de sensores, procesa dicha información basado en un programa pre-cargado, y 
                acciona salidas para controlar la maquinaria del mundo físico.
              </p>
              
              <h3 className="text-xl font-semibold text-slate-800">Ventajas frente a la lógica cableada:</h3>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong className="text-blue-700">Flexibilidad:</strong> Modificas el programa sin tocar un solo cable.</li>
                <li><strong className="text-blue-700">Confiabilidad:</strong> Sin contactos mecánicos desgastados (relés).</li>
                <li><strong className="text-blue-700">Diagnóstico:</strong> Monitoreo en tiempo real del estado de E/S.</li>
                <li><strong className="text-blue-700">Conectividad:</strong> Interfaz directa con pantallas HMI, SCADA e IT.</li>
              </ul>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-2xl p-4 bg-gray-50 flex justify-center border border-gray-100">
            <img 
              src="https://www.jwtech.co.th/Image/Image/PLC/Siemens/S7-1500-Image.png" 
              alt="Siemens S7-1500 PLC" 
              className="max-w-full h-auto object-contain hover:scale-105 transition-transform duration-500 max-h-[400px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Hardware() {
  return (
    <section id="hardware" className="py-24 bg-slate-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Estructura del Hardware</h2>
          <p className="text-gray-600">Conoce los bloques fundamentales de componentes internos que conforman un autómata programable.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {hardwareData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

export function ApplicationsGallery() {
  return (
    <section className="py-24 bg-[#0F172A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Aplicaciones en la Industria</h2>
          <p className="text-gray-400">Ejemplos clave del uso de sistemas secuenciales en entornos productivos.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {applicationsData.map((app, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className={`relative overflow-hidden rounded-xl border border-gray-800 group h-64 ${idx > 2 ? (idx === 3 ? 'lg:col-span-1 lg:col-start-2' : '') : ''}`}
            >
              <img 
                src={app.image} 
                alt={app.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-lg">{app.title}</h3>
                <div className="w-10 h-1 bg-blue-500 mt-2 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 delay-100"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Brands() {
  return (
    <section className="py-20 bg-white border-t border-gray-100 overflow-hidden">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <p className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-10">Fabricantes Principales del Mercado</p>
         <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
           {brandsData.map((brand, idx) => (
             <img 
               key={idx}
               src={brand.logo}
               alt={`Logo ${brand.name}`}
               className="h-10 md:h-14 max-w-[150px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300"
             />
           ))}
         </div>
       </div>
    </section>
  )
}
