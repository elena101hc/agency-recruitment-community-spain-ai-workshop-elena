import React, { useState, useEffect } from 'react';

// Landing Page: Conoce a los Candidatos a Fondo
// Agency Recruitment Community Spain - AI's Workshops

export default function LandingConoceCandidatos() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      icon: '🎯',
      title: 'Análisis DISC',
      subtitle: 'Gem de Gemini #1',
      description: 'Perfil de comportamiento del candidato antes de la reunión',
      color: 'from-violet-500 to-purple-600'
    },
    {
      icon: '📋',
      title: 'Talk Track',
      subtitle: 'Gem de Gemini #2',
      description: 'Guidelines personalizados de cómo abordar la conversación',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🎙️',
      title: 'Análisis Post-Reunión',
      subtitle: 'Granola IA',
      description: 'Captura invisible + chat interactivo con insights del candidato',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const comparisons = [
    { aspect: 'Presencia', fireflies: 'Bot visible en la llamada', granola: 'Invisible - captura del sistema' },
    { aspect: 'Velocidad', fireflies: 'Minutos después', granola: 'Segundos - instantáneo' },
    { aspect: 'Análisis', fireflies: 'Manual - tú lees', granola: 'Chat interactivo con IA' },
    { aspect: 'Templates', fireflies: 'Limitados', granola: '~30 + personalizables' }
  ];

  const questions = [
    '¿Qué valora más el candidato?',
    '¿Cuál es su predisposición al cambio?',
    '¿Qué condiciones nunca aceptará?',
    '¿Dónde están los márgenes de negociación?'
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Gradient Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/10 backdrop-blur-xl bg-black/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center font-bold text-lg">
              ARC
            </div>
            <div>
              <span className="font-semibold tracking-wide text-white">Agency Recruitment Community Spain</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#problema" onClick={(e) => scrollToSection(e, 'problema')} className="hover:text-white transition-colors">El Problema</a>
            <a href="#sistema" onClick={(e) => scrollToSection(e, 'sistema')} className="hover:text-white transition-colors">Sistema 3 Pasos</a>
            <a href="#granola" onClick={(e) => scrollToSection(e, 'granola')} className="hover:text-white transition-colors">Granola IA</a>
            <a href="#comparativa" onClick={(e) => scrollToSection(e, 'comparativa')} className="hover:text-white transition-colors">Comparativa</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-300 text-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            Agency Recruitment Community Spain AI's workshops
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.95] tracking-tight">
            <span className="block text-white">
              Conoce a los
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400">
              candidatos a fondo
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Un sistema de <span className="text-white font-semibold">3 pasos con IA</span> para evaluar soft skills, 
            preparar entrevistas y conocer lo que realmente valoran tus candidatos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={(e) => scrollToSection(e, 'sistema')}
              className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 font-semibold text-lg text-white hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Ver el Sistema
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button 
              onClick={(e) => scrollToSection(e, 'granola')}
              className="px-8 py-4 rounded-2xl border border-white/20 hover:border-white/40 hover:bg-white/10 font-medium text-lg text-white transition-all"
            >
              ¿Qué es Granola IA?
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent animate-pulse" />
        </div>
      </section>

      {/* PROBLEMA SECTION */}
      <section id="problema" className="relative py-32 px-6 bg-zinc-950" data-animate>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
                El Problema
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                El 85% de los fracasos en contratación no son técnicos
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Son incompatibilidades en <span className="text-white font-semibold">soft skills</span>: 
                comunicación, liderazgo, adaptabilidad, inteligencia emocional. 
                Las cualidades que realmente determinan el éxito en un puesto.
              </p>
              <div className="space-y-4">
                {[
                  'Un CV no revela cómo maneja el estrés',
                  'Las entrevistas estándar no muestran colaboración real',
                  'Después de 5 entrevistas, perdemos los matices'
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-red-500/30 text-red-400 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">✗</span>
                    <span className="text-gray-200">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-blue-600/20 rounded-3xl blur-xl" />
              <div className="relative bg-zinc-900 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-orange-500 mb-4">
                  85%
                </div>
                <p className="text-xl text-gray-200">
                  de las contrataciones fallidas se deben a{' '}
                  <span className="text-white font-semibold">soft skills</span>, no a habilidades técnicas
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-gray-400 text-sm">
                    Fuente: Estudios de Harvard Business Review y LinkedIn Talent Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SISTEMA 3 PASOS */}
      <section id="sistema" className="relative py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              La Solución
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Sistema de 3 Pasos con IA
            </h2>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Un flujo replicable que cualquiera puede implementar mañana
            </p>
          </div>

          {/* Steps Timeline */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`relative group transition-all duration-500 ${
                    activeStep === index ? 'scale-105' : 'scale-100 opacity-80'
                  }`}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div className={`
                    absolute inset-0 rounded-3xl bg-gradient-to-r ${step.color} opacity-0 
                    group-hover:opacity-20 transition-opacity duration-300 blur-xl
                  `} />
                  
                  <div className="relative bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-black border-2 border-white/30 flex items-center justify-center font-bold text-lg text-white">
                      {index + 1}
                    </div>
                    
                    <div className="text-5xl mb-6">{step.icon}</div>
                    
                    <h3 className="text-2xl font-bold mb-2 text-white">{step.title}</h3>
                    <p className={`text-sm font-semibold mb-4 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                      {step.subtitle}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Timing Badge */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <span className="text-xs text-gray-400 uppercase tracking-wider">
                        {index === 0 && 'Antes de la reunión'}
                        {index === 1 && 'Preparación'}
                        {index === 2 && 'Durante y después'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step Details */}
          <div className="mt-16 bg-zinc-900 border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="text-violet-400 font-semibold">Paso 1: Gem DISC</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Dale a la Gem el CV, LinkedIn o notas del candidato. 
                  Te genera un análisis de si es <span className="text-white font-medium">Dominante, Influyente, Estable o Concienzudo</span>. 
                  Esto cambia completamente cómo abordarás la conversación.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-blue-400 font-semibold">Paso 2: Gem Talk Track</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Con el perfil DISC, esta Gem aplica la metodología Talk Track: 
                  qué frases usar, cuáles evitar, cómo orientar el mensaje, 
                  <span className="text-white font-medium"> qué preguntas desbloquean soft skills</span>.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-emerald-400 font-semibold">Paso 3: Granola IA</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Durante la entrevista, captura invisible. Después, 
                  <span className="text-white font-medium"> chat interactivo</span> para preguntar: 
                  qué valora, márgenes de negociación, líneas rojas...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRANOLA IA SECTION */}
      <section id="granola" className="relative py-32 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
                La Herramienta
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                Granola IA: Tu aliado invisible
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                No es un bot que se une a la llamada. <span className="text-white font-semibold">Es invisible</span>. 
                Captura el audio directamente desde tu ordenador sin que nadie lo note.
              </p>

              <div className="space-y-6">
                <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                      <span className="text-xl">📝</span>
                    </div>
                    <h4 className="font-semibold text-lg text-white">Enhanced Notes</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Sumarios automáticos en segundos. Puntos clave, decisiones, próximos pasos. 
                    Combina lo que escribes con el contexto de la transcripción.
                  </p>
                </div>

                <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <span className="text-xl">💬</span>
                    </div>
                    <h4 className="font-semibold text-lg text-white">Ask Granola</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Chat con tu reunión. Hazle preguntas específicas sobre el candidato 
                    y obtén insights que podrías haber pasado por alto.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Questions Demo */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 rounded-3xl blur-xl" />
              <div className="relative bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden">
                <div className="p-4 border-b border-white/10 flex items-center gap-3 bg-zinc-800">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm text-gray-300">Ask Granola</span>
                </div>
                <div className="p-6 space-y-4 min-h-[300px]">
                  <p className="text-gray-400 text-sm mb-6">Preguntas que puedes hacer:</p>
                  {questions.map((q, i) => (
                    <div 
                      key={i}
                      className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/30 transition-colors">
                        ?
                      </div>
                      <span className="text-gray-200 group-hover:text-white transition-colors">{q}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-white/10 bg-zinc-800">
                  <div className="flex items-center gap-3 bg-zinc-700 rounded-xl px-4 py-3">
                    <span className="text-gray-400">Pregunta algo sobre la reunión...</span>
                    <div className="ml-auto w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                      <span className="text-white">↑</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARATIVA */}
      <section id="comparativa" className="relative py-32 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Comparativa
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              ¿Por qué Granola y no Fireflies?
            </h2>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Fireflies es bueno en transcripción. Pero para recruitment, necesitas más.
            </p>
          </div>

          <div className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-3 gap-px bg-white/5">
              <div className="bg-zinc-800 p-6">
                <span className="text-gray-300 text-sm font-medium">Aspecto</span>
              </div>
              <div className="bg-zinc-800 p-6 text-center">
                <span className="text-gray-300 font-medium">Fireflies / Otter</span>
              </div>
              <div className="bg-zinc-800 p-6 text-center">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-bold">
                  Granola IA
                </span>
              </div>
            </div>
            
            {comparisons.map((row, i) => (
              <div key={i} className="grid grid-cols-3 gap-px bg-white/5">
                <div className="bg-zinc-900 p-6">
                  <span className="font-medium text-white">{row.aspect}</span>
                </div>
                <div className="bg-zinc-900 p-6 text-center">
                  <span className="text-gray-400">{row.fireflies}</span>
                </div>
                <div className="bg-zinc-900 p-6 text-center bg-emerald-500/5">
                  <span className="text-emerald-300">{row.granola}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-2xl p-8 text-center">
            <p className="text-lg text-gray-200 mb-2">
              <span className="text-white font-semibold">Diferenciador clave:</span>
            </p>
            <p className="text-gray-300">
              Granola no graba ni almacena audio/vídeo. Solo transcripción y notas. 
              <span className="text-emerald-300 font-medium"> Ideal para candidatos sensibles a grabación</span> o 
              clientes con políticas estrictas de privacidad.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-32 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-blue-600/20 to-cyan-600/20 rounded-3xl blur-3xl" />
            <div className="relative bg-zinc-900 border border-white/10 rounded-3xl p-12 md:p-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Implementa el sistema hoy
              </h2>
              <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
                Conocer a los candidatos a fondo no es un lujo. Es una{' '}
                <span className="text-white font-semibold">necesidad competitiva</span>.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-10 text-left max-w-2xl mx-auto">
                {[
                  'Evaluar soft skills objetivamente',
                  'Ahorrar horas en análisis manual',
                  'Persuadir más rápido a candidatos',
                  'Reducir rotación y mejorar fit'
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/30 text-emerald-400 flex items-center justify-center text-sm">
                      ✓
                    </div>
                    <span className="text-gray-200">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://www.granola.ai" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 font-semibold text-lg text-white hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Probar Granola Gratis
                </a>
                <a 
                  href="https://gemini.google.com/app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-2xl border border-white/20 hover:border-white/40 hover:bg-white/10 font-medium text-lg text-white transition-all"
                >
                  Crear Gems en Gemini
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/10 py-12 px-6 bg-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center font-bold text-sm text-white">
              ARC
            </div>
            <div>
              <span className="font-semibold text-white">Agency Recruitment Community Spain</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            Agency Recruitment Community Spain AI's workshops
          </p>
        </div>
      </footer>
    </div>
  );
}
