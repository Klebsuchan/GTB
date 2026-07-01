import { Building2 } from 'lucide-react';

const banks = [
  { name: 'Banco do Brasil', logo: '/brasil.jpg' },
  { name: 'Banrisul', logo: '/banrisul.jpg' },
  { name: 'Santander', logo: '/santander.jpg' },
  { name: 'Itaú', logo: '/itau.png' },
  { name: 'C6 Bank', logo: '/c6.jpg' },
  { name: 'PicPay', logo: '/picpay.jpg' },
  { name: 'Banco Safra', logo: '/safra.png' },
  { name: 'Bradesco', logo: '/bradesco.jpg' },
  { name: 'Caixa', logo: '/caixa.jpg' },
  { name: 'Banco BMG', logo: '/bmg.webp' },
  { name: 'Banco PAN', logo: '/pan.png' },
  { name: 'Daycoval', logo: '/daycoval.jpg' },
  { name: 'Facta Financeira', logo: '/facta.jpg' },
  { name: 'Banco Inbursa', logo: '/inubrasa.png' },
  { name: 'Agibank', logo: '/agibank.png' },
  { name: 'Cetelem', logo: '/cetelem.png' },
  { name: 'Banco Master', logo: '/master.jpg' },
  { name: 'Banco Mercantil', logo: '/banco mercantil.png' },
  { name: 'BV Financeira', logo: '/bv.png' },
  { name: 'Sicoob', logo: '/sicoob.png' },
  { name: 'Sicredi', logo: '/sicredi.webp' },
  { name: 'Omni', logo: '/omni.png' },
  { name: 'Porto Seguro', logo: '/porto seguro.jpg' },
  { name: 'Banco Inter', logo: '/inter.webp' },
  { name: 'Nubank', logo: '/nubank.png' },
  { name: 'Neon', logo: '/neon.png' },
  { name: 'Banco Original', logo: '/original.webp' },
  { name: 'Banco Pine', logo: '/pine.jpg' },
  { name: 'Banco Alfa', logo: '/alfa.jpg' },
  { name: 'BTG Pactual', logo: '/btg.png' },
  { name: 'Creditas', logo: '/creditas.jpg' },
  { name: 'Banco Semear', logo: '/semear.jpg' },
  { name: 'Paraná Banco', logo: '/parana.png' },
  { name: 'BRB', logo: '/brb.png' },
  { name: 'Banco Paulista', logo: '/paulista.png' },
  { name: 'Banco Votorantim', logo: '/votarantim.png' },
  { name: 'Financeira Alfa', logo: '/alfa financeira.png' },
  { name: 'Banco do Nordeste', logo: '/nordeste.webp' },
  { name: 'Banco da Amazônia', logo: '/amazonia.jpg' },
  { name: 'Financeira BRB', logo: '/financeirabrb.jpg' },
  { name: 'CREFISA', logo: '/crefisa.jpg' },
  { name: 'Via Certa', logo: '/via certa.jpg' },
  { name: 'Mercantil do Brasil', logo: '/mercantil.jpg' }
];

export default function Partners() {
  return (
    <section className="w-full">
      <div className="bg-white dark:bg-secondary/40 border border-slate-200 dark:border-secondary-light/30 rounded-[2rem] p-8 lg:p-14 relative overflow-hidden flex flex-col justify-center shadow-xl backdrop-blur-sm">
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 z-10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <h2 className="text-sm font-bold tracking-[0.2em] text-primary-light uppercase">Bancos Parceiros</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Os <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary">melhores</span> do mercado.
            </h3>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base font-light max-w-sm leading-relaxed md:pb-2">
            Comparamos e filtramos as taxas em dezenas de instituições financeiras para garantir a oferta perfeita para o seu perfil.
          </p>
        </div>

        {/* Marquee Wrapper with soft fade edges */}
        <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-2 group">
          <div className="flex gap-4 animate-marquee group-hover:[animation-play-state:paused] pr-4">
            {banks.map((bank, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 bg-white dark:bg-secondary-dark/80 border border-slate-200 dark:border-secondary-light/50 rounded-2xl px-6 py-4 flex items-center justify-center gap-4 transition-all hover:border-primary/50 hover:bg-white dark:hover:bg-secondary-dark cursor-default shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-secondary/50 border border-slate-200 dark:border-secondary-light/50 flex items-center justify-center text-primary-light transition-all duration-300 overflow-hidden">
                  {bank.logo ? (
                    <img src={bank.logo} alt={bank.name} className="w-full h-full object-contain p-1" />
                  ) : (
                    <Building2 size={18} />
                  )}
                </div>
                <span className="font-bold text-slate-700 dark:text-slate-300 text-base transition-colors">{bank.name}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-4 animate-marquee group-hover:[animation-play-state:paused] pr-4" aria-hidden="true">
            {banks.map((bank, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 bg-white dark:bg-secondary-dark/80 border border-slate-200 dark:border-secondary-light/50 rounded-2xl px-6 py-4 flex items-center justify-center gap-4 transition-all hover:border-primary/50 hover:bg-white dark:hover:bg-secondary-dark cursor-default shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-secondary/50 border border-slate-200 dark:border-secondary-light/50 flex items-center justify-center text-primary-light transition-all duration-300 overflow-hidden">
                  {bank.logo ? (
                    <img src={bank.logo} alt={bank.name} className="w-full h-full object-contain p-1" />
                  ) : (
                    <Building2 size={18} />
                  )}
                </div>
                <span className="font-bold text-slate-700 dark:text-slate-300 text-base transition-colors">{bank.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
