import { ArrowRight, ShieldCheck, Clock, Percent } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cpf: '',
    whatsapp: '',
    value: ''
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Gostaria de fazer uma simulação de crédito.
    
*Dados informados:*
Nome: ${formData.name}
E-mail: ${formData.email}
CPF: ${formData.cpf}
WhatsApp: ${formData.whatsapp}
Valor Desejado: ${formData.value}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5554997013983?text=${encodedText}`, '_blank');
  };

  return (
    <section ref={ref} className="relative w-full pt-4 md:pt-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        <motion.div 
          style={{ opacity: opacityText }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-1 lg:col-span-8 border border-slate-200 dark:border-secondary-light/30 rounded-[2rem] p-6 sm:p-8 lg:p-14 flex flex-col justify-center relative overflow-hidden shadow-2xl"
        >
          {/* Video Background Layer */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-100 dark:opacity-80"
            >
              <source src="/bg-video.mp4" type="video/mp4" />
            </video>
            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/30 to-transparent dark:from-secondary-dark/70 dark:via-secondary-dark/40 dark:to-transparent"></div>
          </div>

          {/* Parallax Background Layer */}
          <div className="absolute -inset-20 z-0 overflow-hidden pointer-events-none">
            {/* Soft background gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl opacity-60"></div>
            
            {/* Parallax elements */}
            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]), rotate: 5 }}
              className="absolute top-[15%] right-[15%] text-primary/40 dark:text-primary/20 drop-shadow-xl"
            >
              <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
              </motion.div>
            </motion.div>

            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "150%"]), x: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) }}
              className="absolute top-[30%] left-[8%] text-primary/30 dark:text-primary/15 drop-shadow-lg"
            >
              <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
              </motion.div>
            </motion.div>

            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]), rotate: -15 }}
              className="absolute bottom-[10%] right-[25%] text-primary/30 dark:text-primary/20 drop-shadow-xl"
            >
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
              </motion.div>
            </motion.div>
            
            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), rotate: 10 }}
              className="absolute top-[60%] right-[8%] text-primary/40 dark:text-primary/25 drop-shadow-lg"
            >
              <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
                <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
              </motion.div>
            </motion.div>

            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-120%"]), rotate: -5 }}
              className="absolute top-[80%] left-[20%] text-primary/20 dark:text-primary/10 drop-shadow-md"
            >
               <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}>
                 <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
               </motion.div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 dark:bg-secondary-dark/80 border-2 border-white dark:border-secondary-light backdrop-blur-md text-sm font-semibold w-fit text-primary-light shadow-[0_0_15px_rgba(255,255,255,0.8)] dark:shadow-[0_0_15px_rgba(0,0,0,0.8)]">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(184,134,11,0.8)]"></span>
              Agência de crédito regulamentada
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900 dark:text-white [text-shadow:-1px_-1px_0_#fff,1px_-1px_0_#fff,-1px_1px_0_#fff,1px_1px_0_#fff,0_0_20px_rgba(255,255,255,0.9)] dark:[text-shadow:-1px_-1px_0_#0f172a,1px_-1px_0_#0f172a,-1px_1px_0_#0f172a,1px_1px_0_#0f172a,0_0_20px_rgba(15,23,42,0.9)]">
              Transforme seus planos em <br className="hidden md:block" />
              <span className="text-primary-dark dark:text-primary [text-shadow:-1px_-1px_0_#fff,1px_-1px_0_#fff,-1px_1px_0_#fff,1px_1px_0_#fff,0_0_15px_rgba(255,255,255,1)] dark:[text-shadow:-1px_-1px_0_#0f172a,1px_-1px_0_#0f172a,-1px_1px_0_#0f172a,1px_1px_0_#0f172a,0_0_15px_rgba(0,0,0,1)]">
                realidade hoje.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-800 dark:text-slate-200 max-w-xl leading-relaxed mt-2 font-medium [text-shadow:-1px_-1px_0_#fff,1px_-1px_0_#fff,-1px_1px_0_#fff,1px_1px_0_#fff,0_0_10px_rgba(255,255,255,1)] dark:[text-shadow:-1px_-1px_0_#0f172a,1px_-1px_0_#0f172a,-1px_1px_0_#0f172a,1px_1px_0_#0f172a,0_0_10px_rgba(15,23,42,1)]">
              As melhores taxas do mercado para crédito pessoal, consignado e financiamento com aprovação rápida.
            </p>
            
            <div className="pt-6 pb-2">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/5554997013983?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20simula%C3%A7%C3%A3o%20de%20cr%C3%A9dito!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-primary text-[#0a1422] px-10 py-5 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.7)] dark:shadow-[0_0_20px_rgba(0,0,0,0.7)] hover:bg-primary-light border-2 border-white/80 dark:border-black/50 transition-all"
              >
                Falar pelo WhatsApp
                <ArrowRight size={20} />
              </motion.a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 mt-4 border-t border-slate-200 dark:border-secondary-light/30 bg-white/40 dark:bg-black/20 p-4 rounded-2xl backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.5)] dark:shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-secondary-dark/80 border-2 border-white dark:border-secondary-light flex items-center justify-center shadow-md shadow-white/50 dark:shadow-black/50">
                  <Clock size={18} className="text-primary-light" />
                </div>
                <span className="text-sm font-bold text-slate-900 dark:text-white [text-shadow:-1px_-1px_0_#fff,1px_-1px_0_#fff,-1px_1px_0_#fff,1px_1px_0_#fff,0_0_5px_#fff] dark:[text-shadow:-1px_-1px_0_#0f172a,1px_-1px_0_#0f172a,-1px_1px_0_#0f172a,1px_1px_0_#0f172a,0_0_5px_#0f172a]">Aprovação <br/>em até 24h</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-secondary-dark/80 border-2 border-white dark:border-secondary-light flex items-center justify-center shadow-md shadow-white/50 dark:shadow-black/50">
                  <Percent size={18} className="text-primary-light" />
                </div>
                <span className="text-sm font-bold text-slate-900 dark:text-white [text-shadow:-1px_-1px_0_#fff,1px_-1px_0_#fff,-1px_1px_0_#fff,1px_1px_0_#fff,0_0_5px_#fff] dark:[text-shadow:-1px_-1px_0_#0f172a,1px_-1px_0_#0f172a,-1px_1px_0_#0f172a,1px_1px_0_#0f172a,0_0_5px_#0f172a]">Taxas reais <br/>e justas</span>
              </div>
              <div className="flex items-center gap-3 col-span-2 md:col-span-1">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-secondary-dark/80 border-2 border-white dark:border-secondary-light flex items-center justify-center shadow-md shadow-white/50 dark:shadow-black/50">
                  <ShieldCheck size={18} className="text-primary-light" />
                </div>
                <span className="text-sm font-bold text-slate-900 dark:text-white [text-shadow:-1px_-1px_0_#fff,1px_-1px_0_#fff,-1px_1px_0_#fff,1px_1px_0_#fff,0_0_5px_#fff] dark:[text-shadow:-1px_-1px_0_#0f172a,1px_-1px_0_#0f172a,-1px_1px_0_#0f172a,1px_1px_0_#0f172a,0_0_5px_#0f172a]">Processo <br/>100% seguro</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="col-span-1 lg:col-span-4 flex flex-col"
        >
          {/* Abstract financial card graphic */}
          <div className="bg-gradient-to-b from-white dark:from-secondary to-white dark:to-secondary-dark border border-slate-200 dark:border-secondary-light/50 rounded-[2rem] p-6 sm:p-8 h-full flex flex-col relative shadow-2xl">
            <div className="mb-6 relative z-10 text-center">
              <p className="text-slate-600 dark:text-slate-400 text-sm font-bold uppercase tracking-[0.2em] mb-3">Simulação Expressa</p>
              <div className="h-1 w-12 bg-primary mx-auto rounded-full"></div>
            </div>
            
            {!isFormOpen ? (
              <div className="space-y-4 flex-1 flex flex-col justify-center relative z-10 max-w-[280px] mx-auto w-full">
                <div className="bg-white dark:bg-secondary-dark/80 border border-slate-200 dark:border-secondary-light/50 rounded-2xl p-6 backdrop-blur-xl">
                   <p className="text-xs text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider mb-2">Valor desejado</p>
                   <p className="font-black text-4xl text-slate-900 dark:text-white tracking-tight">R$ 10.000</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-secondary-dark/80 border border-slate-200 dark:border-secondary-light/50 rounded-2xl p-6 backdrop-blur-xl">
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider mb-2">Parcelas</p>
                    <p className="font-bold text-2xl text-slate-900 dark:text-white">36x</p>
                  </div>
                  <div className="bg-white dark:bg-secondary-dark/80 border border-primary/20 rounded-2xl p-6 backdrop-blur-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5"></div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider mb-2 relative z-10">Taxas</p>
                    <p className="font-bold text-xl text-primary-light relative z-10">Especiais</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => setIsFormOpen(true)}
                  className="mt-4 block w-full text-center py-4 bg-primary text-[#0a1422] hover:bg-primary-light transition-colors rounded-2xl font-bold text-lg shadow-xl"
                >
                  Personalizar
                </button>
              </div>
            ) : (
              <form onSubmit={handleWhatsAppSubmit} className="space-y-3 flex-1 flex flex-col justify-center relative z-10 mx-auto w-full max-w-[280px]">
                <input
                  required
                  type="text"
                  placeholder="Nome completo"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white dark:bg-secondary-dark/80 border border-slate-200 dark:border-secondary-light/50 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <input
                  required
                  type="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white dark:bg-secondary-dark/80 border border-slate-200 dark:border-secondary-light/50 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <input
                  required
                  type="text"
                  placeholder="CPF"
                  value={formData.cpf}
                  onChange={e => setFormData({...formData, cpf: e.target.value})}
                  className="w-full bg-white dark:bg-secondary-dark/80 border border-slate-200 dark:border-secondary-light/50 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <input
                  required
                  type="tel"
                  placeholder="WhatsApp"
                  value={formData.whatsapp}
                  onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                  className="w-full bg-white dark:bg-secondary-dark/80 border border-slate-200 dark:border-secondary-light/50 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <input
                  required
                  type="text"
                  placeholder="Valor desejado (Ex: 10.000)"
                  value={formData.value}
                  onChange={e => setFormData({...formData, value: e.target.value})}
                  className="w-full bg-white dark:bg-secondary-dark/80 border border-slate-200 dark:border-secondary-light/50 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button 
                  type="submit"
                  className="mt-2 block w-full text-center py-3 bg-primary text-[#0a1422] hover:bg-primary-light transition-colors rounded-xl font-bold text-base shadow-xl"
                >
                  Calcular
                </button>
                <button 
                  type="button" 
                  onClick={() => setIsFormOpen(false)} 
                  className="text-xs text-center text-slate-500 w-full hover:text-slate-800 dark:hover:text-slate-300 py-2"
                >
                  Voltar
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
