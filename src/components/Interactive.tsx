import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { timelineData, languagesData, quizQuestions } from '../data';
import { Settings, Info, ArrowDown, Play, CheckCircle2, AlertCircle } from 'lucide-react';

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="timeline" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center">Evolución e Historia</h2>
        
        {/* Timeline Nav */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0 hidden md:block"></div>
          <div className="flex flex-col md:flex-row justify-between relative z-10 gap-4 md:gap-0">
            {timelineData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border-2 ${
                  activeIndex === index 
                    ? 'bg-blue-600 border-blue-600 text-white scale-110 shadow-lg shadow-blue-500/40' 
                    : 'bg-white border-gray-200 text-gray-500 hover:border-blue-300'
                }`}
              >
                {item.year}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Content */}
        <div className="max-w-5xl mx-auto bg-slate-50 border border-gray-100 rounded-2xl p-6 md:p-10 shadow-sm min-h-[400px] flex items-center">
          <motion.div 
            key={activeIndex}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full"
          >
            <div>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-bold rounded-full text-sm mb-4">
                {timelineData[activeIndex].year}
              </span>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">{timelineData[activeIndex].title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {timelineData[activeIndex].description}
              </p>
            </div>
            <div className="flex justify-center border-4 border-white shadow-xl rounded-xl overflow-hidden bg-white p-2">
              <img 
                src={timelineData[activeIndex].image} 
                alt={timelineData[activeIndex].title}
                className="max-h-[300px] object-contain rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Languages() {
  const [selectedLang, setSelectedLang] = useState<number | null>(null);

  // Bloquear scroll si hay modal
  useEffect(() => {
    if (selectedLang !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; }
  }, [selectedLang]);

  return (
    <section id="languages" className="py-24 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4">Norma IEC 61131-3</h2>
          <p className="text-gray-600 max-w-2xl">El estándar internacional define los 4 pilares en lenguajes de programación industrial, asegurando compatibilidad técnica. Haz clic en las tarjetas para explorar.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {languagesData.map((lang, idx) => (
            <motion.button
              key={lang.id}
              onClick={() => setSelectedLang(idx)}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-300 text-left transition-all duration-300 group flex flex-col h-full"
            >
              <div className="mb-auto">
                <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center font-black text-xl mb-6 font-mono group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {lang.id.toUpperCase()}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{lang.name}</h3>
                <p className="text-sm font-medium text-gray-400 mt-1 mb-4">{lang.fullName}</p>
              </div>
              <div className="flex items-center text-blue-600 font-medium text-sm mt-4 group-hover:underline">
                <Info size={16} className="mr-2" />
                Ver detalles
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal Nativo React */}
      {selectedLang !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedLang(null)}></div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-2xl relative z-10 w-full max-w-4xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
          >
            <button 
              onClick={() => setSelectedLang(null)}
              className="absolute top-4 right-4 z-20 bg-white/50 hover:bg-gray-100 p-2 rounded-full backdrop-blur-md"
            >
              ✕
            </button>
            <div className="w-full md:w-1/2 p-6 bg-slate-50 flex items-center justify-center border-r border-gray-200">
              <img 
                src={languagesData[selectedLang].image} 
                alt={languagesData[selectedLang].name} 
                className="max-h-[50vh] object-contain rounded-lg shadow-sm border border-gray-200 bg-white"
              />
            </div>
            <div className="w-full md:w-1/2 p-8 overflow-y-auto">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-bold rounded-lg text-sm mb-4">NORMA IEC 61131-3</div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">{languagesData[selectedLang].name}</h3>
              <p className="text-gray-500 font-medium mb-6 pb-6 border-b border-gray-100">{languagesData[selectedLang].fullName}</p>
              
              <div className="space-y-6 text-slate-700">
                <div>
                  <h4 className="font-bold flex items-center gap-2 mb-2"><Settings size={18} className="text-blue-600"/> Descripción</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">{languagesData[selectedLang].description}</p>
                </div>
                <div>
                  <h4 className="font-bold flex items-center gap-2 mb-2"><CheckCircle2 size={18} className="text-green-600"/> Ventajas Clave</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                    {languagesData[selectedLang].pros.map((pro, i) => <li key={i}>{pro}</li>)}
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-bold mb-1 text-blue-900 flex items-center gap-2"><Play size={16} /> Aplicaciones Ideales</h4>
                  <p className="text-sm text-blue-800">{languagesData[selectedLang].apps}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

export function ScanCycle() {
  const steps = [
    { name: '1. Leer Entradas', color: 'bg-green-500 text-white' },
    { name: '2. Ejecutar Lógica', color: 'bg-blue-600 text-white' },
    { name: '3. Escribir Salidas', color: 'bg-purple-600 text-white' },
  ];
  
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1500); // Avanzar cada 1.5s
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section id="scancycle" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">El Ciclo de Scan Continuo</h2>
             <p className="text-lg text-gray-600 mb-6 leading-relaxed">
               Un PLC no ejecuta un script y termina, funciona en un bucle cerrado ininterrumpido (Scan Cycle o Sweep). 
               Este proceso ocurre típicamente en pocos milisegundos y garantiza que el sistema reaccione continuamente al mundo físico.
             </p>
             <ul className="space-y-6">
                <li className={`p-4 rounded-lg border-2 transition-colors ${activeStep === 0 ? 'border-green-500 bg-green-50' : 'border-gray-100 opacity-50'}`}>
                  <strong className="block text-green-700 text-xl font-bold mb-1">1. Lectura de Entradas</strong>
                  El procesador lee los datos lógicos y analógicos de las tarjetas de entrada físicas y congela el estado en una imagen de memoria (PII - Process Image Input).
                </li>
                <li className={`p-4 rounded-lg border-2 transition-colors ${activeStep === 1 ? 'border-blue-500 bg-blue-50' : 'border-gray-100 opacity-50'}`}>
                  <strong className="block text-blue-800 text-xl font-bold mb-1">2. Ejecución del Programa</strong>
                  El procesador analiza línea a línea el código (Ladder, SCL) combinando las instrucciones con la tabla de entradas para calcular las nuevas salidas (PIQ).
                </li>
                <li className={`p-4 rounded-lg border-2 transition-colors ${activeStep === 2 ? 'border-purple-500 bg-purple-50' : 'border-gray-100 opacity-50'}`}>
                  <strong className="block text-purple-700 text-xl font-bold mb-1">3. Actualización de Salidas</strong>
                  Vuelca masivamente los resultados lógicos almacenados en el módulo de hardware físico, encendiendo reales contactores o válvulas. Tras esto, vuelve corriendo al punto 1.
                </li>
             </ul>
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-center justify-center p-8 bg-slate-50 rounded-2xl border border-gray-200">
             {/* Fallback Image y Diagrama CSS/JS puro combinado */}
             <div className="w-full flex justify-center mb-8">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPBhDYqy9Anlgvo0ubMnvffbtn8hNs22ni2g&s" alt="Scan Cycle Support" className="rounded-lg shadow-sm w-48 opacity-60 mix-blend-multiply" />
             </div>
             
             <div className="w-full relative py-12 flex flex-col items-center h-[350px] justify-between z-10 border-4 border-dashed border-gray-200 rounded-full p-8 animate-[spin_30s_linear_infinite]">
                 {steps.map((step, idx) => (
                   <div 
                     key={idx}
                     className={`absolute transition-all duration-500 w-48 text-center p-4 rounded-xl shadow-lg font-bold
                     animate-[spin_30s_linear_infinite_reverse]
                     ${activeStep === idx ? `${step.color} scale-110 shadow-[0_0_20px_rgba(0,0,0,0.2)]` : 'bg-white text-gray-400 border border-gray-200'}
                     `}
                     style={{
                        top: idx === 0 ? '-20px' : (idx === 1 ? '70%' : '70%'),
                        left: idx === 0 ? '50%' : (idx === 1 ? '100%' : '0%'),
                        transform: `translate(-50%, -50%)`,
                     }}
                   >
                     {step.name}
                   </div>
                 ))}
             </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export function UseCase() {
  const [doorState, setDoorState] = useState<'cerrada' | 'abriendo' | 'abierta' | 'cerrando'>('cerrada');

  const handeClick = () => {
     if (doorState === 'cerrada') {
       setDoorState('abriendo');
       setTimeout(() => setDoorState('abierta'), 3000);
     } else if (doorState === 'abierta') {
       setDoorState('cerrando');
       setTimeout(() => setDoorState('cerrada'), 3000);
     }
  }

  return (
    <section className="py-24 bg-slate-900 border-b-8 border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Caso Práctico: Control Puerta Garaje</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          <div className="bg-slate-800 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><Settings className="text-blue-400"/> Lógica de Implementación</h3>
            
            <div className="space-y-6">
              <div className="bg-slate-700/50 p-4 rounded-lg border border-white/5">
                <h4 className="text-blue-400 font-bold mb-2 font-mono text-sm">ENTRADAS AL PLC (Mundo -&gt; Cerebro)</h4>
                <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                  <li><strong>I0.0:</strong> Pulsador de Llave (Orden abrir/cerrar)</li>
                  <li><strong>I0.1:</strong> Final de Carrera SUPERIOR (Contacto puerta arriba)</li>
                  <li><strong>I0.2:</strong> Final de Carrera INFERIOR (Contacto puerta abajo)</li>
                  <li><strong>I0.3:</strong> Fotocélula Seguridad (Detecta coches cruzando)</li>
                </ul>
              </div>
              
              <div className="bg-slate-700/50 p-4 rounded-lg border border-white/5">
                <h4 className="text-green-400 font-bold mb-2 font-mono text-sm">SALIDAS DEL PLC (Cerebro -&gt; Mundo)</h4>
                <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                  <li><strong>Q0.0:</strong> Contactor KM1 (Motor Giro Subida)</li>
                  <li><strong>Q0.1:</strong> Contactor KM2 (Motor Giro Bajada)</li>
                  <li><strong>Q0.2:</strong> Sirena Luminosa Parpadeante (¡Precaución!)</li>
                </ul>
              </div>

              <p className="text-xs text-gray-400 italic mt-4">*Este mapeo I/O es el paso previo a dibujar la lógica general o de Graphcet.</p>
            </div>
          </div>

          <div className="bg-slate-100 rounded-2xl p-8 flex flex-col items-center justify-center text-slate-800 relative overflow-hidden">
             
             <div className="w-full text-center font-bold text-xl mb-4 uppercase tracking-widest text-slate-400">Simulación Visual</div>
             
             {/* Dibujo Puerta CSS */}
             <div className="relative w-64 h-64 border-8 border-slate-700 rounded-t-xl bg-slate-300 overflow-hidden mb-8 custom-shadow shadow-slate-900/50 shadow-2xl">
                <div 
                  className="absolute inset-x-0 top-0 bg-blue-700 flex flex-col justify-end transition-all duration-[3000ms] ease-in-out border-b-8 border-amber-500"
                  style={{ height: doorState === 'cerrada' ? '100%' : (doorState === 'abierta' ? '0%' : '50%') }}
                >
                  {/* Secciones de la puerta */}
                  <div className="w-full h-8 border-t-2 border-blue-800"></div>
                  <div className="w-full h-8 border-t-2 border-blue-800"></div>
                  <div className="w-full h-8 border-t-2 border-blue-800"></div>
                  <div className="w-full h-8 border-t-2 border-blue-800"></div>
                </div>
                {/* Coche / Fondo */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-40 h-20 opacity-20 pointer-events-none">
                  <svg viewBox="0 0 100 50" fill="currentColor"><path d="M10,40 L90,40 L80,20 L60,10 L30,10 L20,20 Z" /></svg>
                </div>
             </div>

             {/* UI Controles de simulación */}
             <div className="flex gap-4">
               <button 
                 onClick={handeClick}
                 disabled={doorState === 'abriendo' || doorState === 'cerrando'}
                 className="px-6 py-3 bg-red-600 disabled:bg-gray-400 text-white font-bold rounded-lg uppercase tracking-wider shadow-md hover:bg-red-700 transition active:translate-y-1"
               >
                 {doorState === 'cerrada' || doorState === 'abierta' ? 'Pulsar (I0.0)' : 'Motoring...'}
               </button>
             </div>
             
             <div className="mt-6 flex flex-wrap justify-center gap-2">
                 <span className={`px-2 py-1 rounded text-xs font-bold border ${doorState === 'cerrada' ? 'bg-amber-100 text-amber-700 border-amber-300' : 'bg-gray-100 text-gray-400 border-gray-200'}`}>I0.2 FC INFERIOR</span>
                 <span className={`px-2 py-1 rounded text-xs font-bold border ${doorState === 'abierta' ? 'bg-amber-100 text-amber-700 border-amber-300' : 'bg-gray-100 text-gray-400 border-gray-200'}`}>I0.1 FC SUPERIOR</span>
                 <span className={`px-2 py-1 rounded text-xs font-bold border ${(doorState === 'abriendo' || doorState === 'cerrando') ? 'bg-blue-100 text-blue-700 border-blue-300' : 'bg-gray-100 text-gray-400 border-gray-200'}`}>Q0.2 LUZ</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Quiz() {
  const [answers, setAnswers] = useState<{[key: number]: number}>({});
  const [submitted, setSubmitted] = useState(false);
  
  const handleSelect = (qIdx: number, optIdx: number) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  const calculateScore = () => {
    let correct = 0;
    quizQuestions.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) correct++;
    });
    return correct;
  };

  const score = calculateScore();

  return (
    <section id="quiz" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h2 className="text-4xl font-bold text-slate-900 mb-4">Evaluación de Conocimientos</h2>
           <p className="text-gray-600">Demuestra tus aptitudes en Automatización superando este cuestionario de 10 preguntas.</p>
        </div>

        <div className="space-y-12">
          {quizQuestions.map((q, qIndex) => (
            <div key={qIndex} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h3 className="text-lg font-bold text-slate-800 mb-6 flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                  {qIndex + 1}
                </span>
                {q.question}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {q.options.map((option, oIndex) => {
                  const isSelected = answers[qIndex] === oIndex;
                  const isCorrect = q.correctAnswer === oIndex;
                  let btnClass = "text-left px-4 py-3 rounded-lg border-2 transition-all ";
                  
                  if (!submitted) {
                    btnClass += isSelected ? "border-blue-500 bg-blue-50 text-blue-800" : "border-gray-200 hover:border-blue-300 text-gray-700";
                  } else {
                    if (isCorrect) {
                      btnClass += "border-green-500 bg-green-50 text-green-800 font-medium";
                    } else if (isSelected && !isCorrect) {
                      btnClass += "border-red-500 bg-red-50 text-red-800 line-through opacity-70";
                    } else {
                      btnClass += "border-gray-100 text-gray-400 opacity-50";
                    }
                  }

                  return (
                    <button
                      key={oIndex}
                      onClick={() => handleSelect(qIndex, oIndex)}
                      className={btnClass}
                      disabled={submitted}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Submit & Results Area */}
        <div className="mt-12 text-center bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-100">
          {!submitted ? (
            <button
               onClick={() => setSubmitted(true)}
               disabled={Object.keys(answers).length < quizQuestions.length}
               className="px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold rounded-lg text-lg transition-colors shadow-lg"
            >
              Corregir Cuestionario
            </button>
          ) : (
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="flex flex-col items-center"
            >
              <div className={`w-32 h-32 rounded-full border-8 flex items-center justify-center text-4xl font-black mb-6 ${
                score >= 8 ? 'border-green-500 text-green-500' :
                score >= 5 ? 'border-amber-400 text-amber-500' :
                'border-red-500 text-red-500'
              }`}>
                {score}/10
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {score >= 8 ? '¡Excelente, nivel Ingeniero! 🚀' :
                 score >= 5 ? 'Aprobado. Hay margen de mejora. ⚡' :
                 'Debes repasar la teoría básica. 📘'}
              </h3>
              
              <button
                onClick={() => { setSubmitted(false); setAnswers({}); }}
                className="mt-6 px-6 py-2 border-2 border-slate-900 text-slate-900 font-bold rounded-lg hover:bg-slate-900 hover:text-white transition-colors"
              >
                Reintentar Test
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
