import { Building, Users, Target } from 'lucide-react';
import { motion } from 'motion/react';

const values = [
  {
    icon: Building,
    title: 'Nossa História',
    desc: 'Com anos de experiência no mercado financeiro, a GTB nasceu do desejo de desburocratizar o acesso ao crédito, conectando clientes às melhores oportunidades com transparência e agilidade.'
  },
  {
    icon: Users,
    title: 'Nossa Equipe',
    desc: 'Contamos com especialistas dedicados que analisam o seu perfil de forma individual. Nosso atendimento humano garante que você terá suporte em todas as etapas.'
  },
  {
    icon: Target,
    title: 'Nossa Missão',
    desc: 'Viabilizar os projetos e sonhos dos nossos clientes por meio de soluções financeiras inteligentes e taxas competitivas no mercado.'
  }
];

export default function AboutUs() {
  return (
    <motion.section 
      id="quem-somos" 
      className="w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full bg-white/60 dark:bg-secondary/40 border border-slate-200 dark:border-secondary-light/30 rounded-3xl md:rounded-[2rem] p-6 lg:p-14 overflow-hidden relative backdrop-blur-none lg:backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <h2 className="text-sm font-bold tracking-[0.2em] text-primary-light uppercase">Quem Somos</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-6 leading-[1.1]">
              A ponte para os seus<br/>
              <span className="text-primary-light">objetivos financeiros.</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-light">
              Na GTB, acreditamos que encontrar o crédito ideal não precisa ser complicado. Somos correspondentes bancários autorizados, trabalhando ao lado dos maiores bancos do Brasil para oferecer segurança e soluções personalizadas para você.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-50 dark:bg-secondary-dark/80 border border-slate-200 dark:border-secondary-light/50 p-8 rounded-[1.5rem] flex flex-col items-start hover:-translate-y-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-xl bg-white/60 dark:bg-secondary flex items-center justify-center border border-slate-200 dark:border-secondary-light/50 mb-6 shadow-sm">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">{v.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
