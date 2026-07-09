import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      role: "Mãe e Professora",
      image: "https://i.pravatar.cc/150?img=5",
      content: "Eu estava desesperada precisando ajudar no tratamento médico da minha filha e os bancos tradicionais fechavam as portas. Com a GTB, consegui o crédito rápido e sem burocracia. Hoje ela está bem, e a gratidão que sinto não cabe no peito.",
      rating: 5,
    },
    {
      id: 2,
      name: "Carlos Eduardo",
      role: "Empreendedor",
      image: "https://i.pravatar.cc/150?img=11",
      content: "Meu pequeno negócio estava por um fio durante a crise. O crédito que consegui através da GTB foi o respiro que precisávamos. Graças a esse apoio, minha empresa não só sobreviveu, mas deu os passos para o verdadeiro sucesso.",
      rating: 5,
    },
    {
      id: 3,
      name: "Ana Paula",
      role: "Autônoma",
      image: "https://i.pravatar.cc/150?img=9",
      content: "Sempre achei que seria impossível conseguir crédito sendo autônoma. O atendimento humano fez toda a diferença, me ouviram e entenderam minha real necessidade. Realizei o sonho de reformar minha casa e dar conforto para meus pais.",
      rating: 5,
    }
  ];

  return (
    <section id="depoimentos" className="w-full">
      <div className="bg-white/60 dark:bg-secondary/40 border border-slate-200 dark:border-secondary-light/30 rounded-3xl md:rounded-[2rem] p-6 sm:p-8 md:p-14 relative overflow-hidden backdrop-blur-none lg:backdrop-blur-sm shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl md:blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl md:blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary-dark dark:text-primary-light uppercase">Histórias Reais</h2>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
            Mais que crédito, <span className="text-primary-dark dark:text-primary-light">transformação de vidas.</span>
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl font-light">
            Veja como ajudamos pessoas reais a superarem desafios e alcançarem seus sonhos nos momentos em que mais precisavam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          {testimonials.map((t, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              key={t.id}
              className="bg-white/60 dark:bg-secondary-dark/60 border border-slate-200 dark:border-secondary-light/30 rounded-3xl p-8 relative group hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:border-primary/30 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-10 h-10 text-primary/20 mb-6 group-hover:text-primary/40 transition-colors" />
                <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-8 italic">
                  "{t.content}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-auto border-t border-slate-100 dark:border-secondary-light/30 pt-6">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary/20" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{t.name}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t.role}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
