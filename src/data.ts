import { ChevronDown, Cpu, LogIn, LogOut, Database, Zap } from 'lucide-react';

export const timelineData = [
  {
    year: 1968,
    title: 'Modicon 084',
    description: 'Nace el primer PLC de la historia, el Modicon 084, inventado por Dick Morley. Fue creado para sustituir los enormes y complejos armarios de relés electromecánicos de la industria automotriz (General Motors).',
    image: 'https://www.electronicboard.es/wp-content/uploads/2025/11/modicon-084-517x800.webp',
  },
  {
    year: 1985,
    title: 'Microprocesadores',
    description: 'La adopción masiva de microprocesadores permite reducir el tamaño de los PLC y aumentar drásticamente su velocidad de procesamiento. Se empieza a estandarizar el software de programación.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoIIocM9SpMwSH1hCfBWkXY6u8HJaO_TF3-Q&s',
  },
  {
    year: 2000,
    title: 'Redes y Buses de Campo',
    description: 'Los PLC abandonan el aislamiento y comienzan a interconectarse. Los estándares como Profibus, DeviceNet y las primeras incursiones en Ethernet industrial revolucionan las fábricas.',
    image: 'https://i0.wp.com/plcs-automation.com/wp-content/uploads/2023/07/Siemens-SIMATIC-S7-300-Controllers.jpg?fit=600%2C600&ssl=1',
  },
  {
    year: 'Actualidad',
    title: 'Industria 4.0 e IoT',
    description: 'El PLC moderno se integra en la nube, alimentando sistemas de Big Data y conformando Gemelos Digitales. Adquieren capacidades de ciberseguridad, análisis predictivo y comunicación OPC UA.',
    image: 'https://www.siensie.net/cnc/wp-content/uploads/2019/01/siemens-simatic-s7-1500-1.png',
  },
];

export const hardwareData = [
  {
    id: 'cpu',
    title: 'Cerebro Central (CPU)',
    description: 'El microprocesador que ejecuta cíclicamente el programa de control guardado en la memoria.',
    icon: Cpu,
  },
  {
    id: 'inputs',
    title: 'Módulo de Entradas',
    description: 'Recibe señales de los sensores (pulsadores, fotocélulas, termopares) y las adapta al formato digital interno.',
    icon: LogIn,
  },
  {
    id: 'outputs',
    title: 'Módulo de Salidas',
    description: 'Envía las órdenes de la CPU a los actuadores mecánicos (motores, electroválvulas, pilotos).',
    icon: LogOut,
  },
  {
    id: 'power',
    title: 'Fuente de Alimentación',
    description: 'Adecúa la tensión de red industrial a los voltajes internos seguros operando el PLC (ej. 24V DC).',
    icon: Zap,
  },
  {
    id: 'memory',
    title: 'Bloque de Memoria',
    description: 'Almacena el Sistema Operativo del PLC, el programa de usuario y los datos volátiles del proceso.',
    icon: Database,
  },
];

export const languagesData = [
  {
    id: 'ld',
    name: 'Ladder (LD)',
    fullName: 'Diagrama de Contactos',
    image: 'https://www.tecnoplc.com/wp-content/uploads/2022/06/Senal-electrica-en-la-programacion-Ladder-en-TIA-Portal.jpg',
    description: 'Simula visualmente el comportamiento de los circuitos de relés electromecánicos a través de contactos normalmente abiertos (NA) y cerrados (NC).',
    pros: ['Muy intuitivo para personal de mantenimiento eléctrico', 'Diagnóstico visual sencillo de averías'],
    apps: 'Secciones de control lógico discreto simple, botoneras de máquinas y enclavamientos.',
  },
  {
    id: 'fbd',
    name: 'FBD',
    fullName: 'Diagrama de Bloques Funcionales',
    image: 'https://www.tecnoplc.com/wp-content/uploads/2023/05/Que-son-las-conexiones-entre-funciones-LOGO.jpg',
    description: 'Consiste en unir lógicamente cajas con funciones predefinidas (puertas AND, OR, temporizadores, PID) desde sus entradas hasta sus salidas.',
    pros: ['Ideal para procesos continuos o lazo cerrado', 'Protección de código al encapsular rutinas'],
    apps: 'Sistemas de regulación (temperatura, caudal), lógica de accionamientos complejos.',
  },
  {
    id: 'st',
    name: 'ST (Texto Estructurado)',
    fullName: 'Structured Text',
    image: 'https://www.infoplc.net/files/imagenes/descargas/omron/794_06.jpg',
    description: 'Lenguaje de alto nivel en formato de texto basado en PASCAL, permitiendo construir sentencias condicionales (IF, CASE) y bucles (FOR, WHILE).',
    pros: ['Extremadamente potente para matemáticas y arrays', 'Organización de código complejo'],
    apps: 'Algoritmos estadísticos, cálculos matemáticos, manipulación de cadenas de texto y recetas.',
  },
  {
    id: 'sfc',
    name: 'SFC (Grafcet)',
    fullName: 'Sequential Function Chart',
    image: 'https://i0.wp.com/automatismoindustrial.com/wp-content/uploads/2021/02/IG1.png?ssl=1',
    description: 'Método gráfico usado para modelar el estado secuencial de automatismos mediante Etapas (acciones) y Transiciones (condiciones).',
    pros: ['Estructura visual inmediata del ciclo de máquina', 'Fácil de documentar y diagnosticar bloqueos'],
    apps: 'Organización maestra del ciclo de cualquier máquina industrial, procesos por lotes (Batch).',
  },
];

export const applicationsData = [
  {
    title: 'Cintas Transportadoras y Logística',
    image: 'https://aguiasistemas.com.br/wp-content/uploads/2025/12/DJI_0061-1_Easy-Resize.com_-1024x576.jpg.webp',
  },
  {
    title: 'Brazos Robóticos y Manufactura',
    image: 'https://proyectaestudio.es/wp-content/uploads/2020/10/Rob%C3%B3tica-en-la-industria-la-producci%C3%B3n-eficiente_proyecta-link-1080x667.jpg',
  },
  {
    title: 'Plantas de Embotellado',
    image: 'https://www.catsensors.com/imagen/650/400/Imagenes_noticias/limpieza-embotelladoras-keller-catsensors.jpg',
  },
  {
    title: 'Control de Sistemas de Elevación',
    image: 'https://i.ytimg.com/vi/RWD30SuRhQU/maxresdefault.jpg',
  },
  {
    title: 'Líneas de Clasificación Automática',
    image: 'https://www.veserkal.com/wp-content/uploads/2020/12/Veserkal_Clasificador_agrupador.jpg',
  },
];

export const brandsData = [
  {
    name: 'Siemens',
    logo: 'https://control.com/uploads/articles/siemens-logo.jpg',
  },
  {
    name: 'Schneider Electric',
    logo: 'https://enertic.org/wp-content/uploads/2024/12/art-schneider.jpg.webp',
  },
  {
    name: 'Omron',
    logo: 'https://impoelectro.com/wp-content/uploads/2024/09/Omron_logo.png',
  },
  {
    name: 'Mitsubishi Electric',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN59urKRc_tfBai2yq4UWzkE6GhJ2OanvCTw&s',
  },
  {
    name: 'Rockwell Automation',
    logo: 'https://mma.prnewswire.com/media/1981317/Rockwell_Automation_Logo.jpg?p=facebook',
  },
];

export const quizQuestions = [
  {
    question: '¿Qué significan las siglas PLC?',
    options: [
      'Personal Logic Computer',
      'Programmable Logic Controller',
      'Process Line Controller',
      'Primary Logical Communication'
    ],
    correctAnswer: 1
  },
  {
    question: '¿Cuál es la función principal de la CPU en un PLC?',
    options: [
      'Ejecutar el programa de control',
      'Filtrar ruido eléctrico',
      'Activar de forma analógica válvulas',
      'Dar tensión a toda la industria'
    ],
    correctAnswer: 0
  },
  {
    question: 'Para conectar un pulsador manual al PLC, ¿qué módulo utilizamos?',
    options: [
      'Fuente de alimentación',
      'Módulo de Salidas Digitales',
      'Memoria ROM',
      'Módulo de Entradas Digitales'
    ],
    correctAnswer: 3
  },
  {
    question: '¿En qué consiste el Scan Cycle (Ciclo de Scan) de un PLC?',
    options: [
      'Compilar el código fuente en hardware',
      'Restricción térmica del ventilador',
      'Lectura de entradas, ejecución del programa, actualización de salidas',
      'Actualización del firmware por internet'
    ],
    correctAnswer: 2
  },
  {
    question: '¿Cuál de los siguientes NO es un lenguaje estándar de PLC definido por la norma IEC 61131-3?',
    options: [
      'Ladder (LD)',
      'Grafcet (SFC)',
      'Texto Estructurado (ST)',
      'Pýthon'
    ],
    correctAnswer: 3
  },
  {
    question: '¿Qué inventor es conocido como el "padre del PLC" por la creación del Modicon 084?',
    options: [
      'Alan Turing',
      'Nikola Tesla',
      'Dick Morley',
      'Thomas Edison'
    ],
    correctAnswer: 2
  },
  {
    question: 'El lenguaje LADDER (LD) se utiliza ampliamente porque basó su componente visual en:',
    options: [
      'El sistema Unix',
      'Código binario estructurado',
      'Esquemas de circuitos de relés eléctricos',
      'Planos de AutoCAD'
    ],
    correctAnswer: 2
  },
  {
    question: 'En un automatismo como una puerta de garaje automatizada, ¿el motor que abre la puerta actuará como...?',
    options: [
      'Una Señal Analógica',
      'Un Registro',
      'Una Entrada',
      'Una Salida'
    ],
    correctAnswer: 3
  },
  {
    question: '¿Qué principal ventaja tiene un PLC frente a la lógica cableada tradicional?',
    options: [
      'Mayor flexibilidad ante cambios sin recablear',
      'Cuesta siempre menos al principio',
      'Funciona sin suministro de energía',
      'No necesita que nadie lo programe'
    ],
    correctAnswer: 0
  },
  {
    question: 'En el contexto de IoT e Industria 4.0, los PLCs modernos...',
    options: [
      'Han quedado obsoletos e inutilizables',
      'Se integran en redes enviando datos a niveles superiores IT',
      'No pueden usar internet por seguridad',
      'Ya no usan módulos de entrada ni salida'
    ],
    correctAnswer: 1
  }
];
