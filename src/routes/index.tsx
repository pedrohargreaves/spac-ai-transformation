import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Compass,
  TrendingUp,
  Workflow,
  BarChart3,
  Wallet,
  Receipt,
  Sprout,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import founderVinicius from "@/assets/founder-vinicius.jpg";
import founderAugusto from "@/assets/founder-augusto.jpg";
import purposeBg from "@/assets/purpose-bg.jpg";
import servicesBg from "@/assets/services-bg.jpg";
import sectionBgDark from "@/assets/section-bg-dark.jpg";
import insight1 from "@/assets/insight-1.jpg";
import insight2 from "@/assets/insight-2.jpg";
import insight3 from "@/assets/insight-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SPAC Gestão — Transformando Sonhos em Resultados" },
      {
        name: "description",
        content:
          "Consultoria em Estratégia, Gestão e IA aplicada. Unimos sonho e visão de longo prazo com controle e gestão no curto prazo para empresas de médio e grande porte.",
      },
    ],
  }),
  component: Home,
});

/* ---------- SPAC SYMBOL ---------- */

function SpacMark({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <rect x="1" y="1" width="98" height="98" stroke="currentColor" strokeWidth="1.5" />
      <line x1="50" y1="1" x2="50" y2="99" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <line x1="1" y1="50" x2="99" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <text x="25" y="38" textAnchor="middle" fontFamily="Instrument Serif, serif" fontSize="26" fill="currentColor" fontStyle="italic">S</text>
      <text x="75" y="38" textAnchor="middle" fontFamily="Instrument Serif, serif" fontSize="26" fill="currentColor" fontStyle="italic">P</text>
      <text x="25" y="82" textAnchor="middle" fontFamily="Instrument Serif, serif" fontSize="26" fill="currentColor" fontStyle="italic">A</text>
      <text x="75" y="82" textAnchor="middle" fontFamily="Instrument Serif, serif" fontSize="26" fill="currentColor" fontStyle="italic">C</text>
    </svg>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteNav />
      <Hero />
      <Purpose />
      <Founders />
      <Values />
      <Methodology />
      <WhatWeDo />
      <Solutions />
      <Clients />
      <CaseSupernosso />
      <Testimonials />
      <CTASection />
      <SiteFooter />
    </div>
  );
}

function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/85 backdrop-blur-md border-b border-foreground/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#top" className="flex items-center gap-3">
          <SpacMark size={32} className="text-foreground" />
          <span className="font-serif italic text-2xl tracking-tight">SPAC</span>
        </a>
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.22em] font-medium text-muted">
          <a href="#quem-somos" className="hover:text-foreground transition-colors">Sócios</a>
          <a href="#metodologia" className="hover:text-foreground transition-colors">Metodologia</a>
          <a href="#o-que-fazemos" className="hover:text-foreground transition-colors">O que Fazemos</a>
          <a href="#solucoes" className="hover:text-foreground transition-colors">Soluções</a>
          <a href="#case" className="hover:text-foreground transition-colors">Case</a>
        </div>
        <a href="#contato" className="px-5 py-2.5 bg-foreground text-background text-[11px] uppercase tracking-widest font-semibold hover:bg-accent transition-colors">
          Fale com a SPAC
        </a>
      </div>
    </nav>
  );
}

/* ---------- HERO ---------- */

function Hero() {
  return (
    <header id="top" className="relative px-6 pt-24 pb-32 max-w-7xl mx-auto">
      <div className="max-w-5xl animate-fade-up">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6 block">
          Consultoria em Estratégia, Gestão e IA
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance mb-10">
          Transformando <span className="italic text-accent">Sonhos</span> em Resultados.
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl mb-12 leading-relaxed">
          Da formulação estratégica à execução no chão da operação — com tecnologia,
          IA aplicada, governança e quickwins que transformam empresas de médio e grande porte.
        </p>
        <div className="flex flex-wrap gap-6 items-center">
          <a href="#contato" className="px-8 py-4 bg-foreground text-background text-xs uppercase tracking-[0.22em] font-bold hover:bg-accent transition-all">
            Agendar Conversa
          </a>
          <a href="#metodologia" className="text-xs uppercase tracking-[0.22em] font-semibold border-b border-foreground/30 pb-1 hover:border-accent hover:text-accent transition-all">
            Conhecer a Metodologia S.P.A.C.
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- PURPOSE (with background) ---------- */

function Purpose() {
  return (
    <section
      className="relative py-32 md:py-40 px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${purposeBg})` }}
    >
      <div className="absolute inset-0 bg-dark/70" />
      <div className="relative max-w-5xl mx-auto text-center text-background">
        <SpacMark size={56} className="mx-auto mb-10 text-accent opacity-90" />
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6 block">
          Propósito
        </span>
        <p className="font-serif text-3xl md:text-5xl leading-tight italic text-balance">
          “Democratizar a transformação para todos que querem fazer a diferença.”
        </p>
      </div>
    </section>
  );
}

/* ---------- FOUNDERS ---------- */

const founders = [
  {
    name: "Vinícius Aroeira",
    photo: founderVinicius,
    role: "Sócio Fundador",
    intro:
      "Há mais de 15 anos liderando transformações em Finanças, Governança Corporativa, Tecnologia, E-commerce, CRM e Novos Negócios.",
    bullets: [
      "CFO e CTO em empresa de faturamento acima de R$ 4 Bi",
      "Líder de Consultoria em gestão e estratégia por mais de 7 anos",
      "Mais de R$ 1,2 Bi em ganhos de gestão implementados",
      "Criação de fundos e empresas de soluções financeiras",
      "Trabalhos desenvolvidos em 4 países: Brasil, EUA, México e Peru",
    ],
    schools: [
      { name: "Stanford", domain: "stanford.edu" },
      { name: "USF", domain: "usf.edu" },
      { name: "ESADE", domain: "esade.edu" },
      { name: "UFMG", domain: "ufmg.br" },
      { name: "FDC", domain: "fdc.org.br" },
    ],
  },
  {
    name: "Augusto Teixeira",
    photo: founderAugusto,
    role: "Sócio Fundador",
    intro:
      "Mais de 10 anos em Gestão Comercial, Orçamentária, Marketing, Digital, CRM, Estratégia de Vendas, Processos e Inovação Empresarial.",
    bullets: [
      "Projetos em fusões, aquisições e criação de novas frentes de negócios",
      "Gestão Comercial em Distribuidora com faturamento superior a R$ 600 MM",
      "Estruturação de Financeira para Varejista",
      "Aquisição de 2 Startups: da estruturação à integração",
      "+R$ 300 MM em ganhos de gestão implementados",
    ],
    schools: [
      { name: "Harvard", domain: "hbs.edu" },
      { name: "UFMG", domain: "ufmg.br" },
      { name: "FDC", domain: "fdc.org.br" },
    ],
  },
];

function LogoImg({ domain, name, className = "", dark = false }: { domain: string; name: string; className?: string; dark?: boolean }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <span className={`inline-flex items-center px-3 py-1.5 text-[10px] uppercase tracking-wider border ${dark ? "border-white/20 text-white/70" : "border-foreground/15 text-foreground/70"} ${className}`}>
        {name}
      </span>
    );
  }
  return (
    <img
      src={`https://logo.clearbit.com/${domain}`}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`h-8 md:h-9 w-auto object-contain ${dark ? "brightness-0 invert opacity-70" : "opacity-70"} ${className}`}
    />
  );
}

function Founders() {
  return (
    <section id="quem-somos" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="max-w-2xl mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">
          Quem somos
        </span>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight">
          Sócios <span className="italic">Fundadores</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {founders.map((p) => (
          <article key={p.name}>
            <div className="overflow-hidden mb-8 bg-foreground/5">
              <img
                src={p.photo}
                alt={p.name}
                width={1024}
                height={1280}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-3">
              {p.role}
            </div>
            <h3 className="font-serif text-3xl md:text-4xl mb-5">{p.name}</h3>
            <p className="text-muted leading-relaxed mb-6">{p.intro}</p>
            <ul className="space-y-2.5 mb-8">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed">
                  <span className="text-accent mt-2 size-1 rounded-full bg-accent shrink-0"></span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted mb-4">
                Formação
              </div>
              <div className="flex flex-wrap gap-5 items-center">
                {p.schools.map((s) => (
                  <LogoImg key={s.name} domain={s.domain} name={s.name} />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- VALUES ---------- */

const values = [
  { t: "Foco total no cliente", d: "Sempre priorizamos as necessidades dos clientes, entregando valor com conhecimento profundo e soluções estratégicas de alto impacto." },
  { t: "Alta performance como padrão", d: "Buscamos excelência em tudo o que fazemos, garantindo resultados inegociáveis por meio do alinhamento entre teoria e prática." },
  { t: "Pensamento de longo prazo", d: "Atuamos com uma visão estratégica sustentável, combinando inovação e controle para crescimento exponencial com gestão eficaz." },
  { t: "Mentalidade empreendedora", d: "Agimos como donos, buscando oportunidades, assumindo riscos calculados e inovando constantemente para gerar impacto real." },
  { t: "Ambiente positivo e colaborativo", d: "Valorizamos o relacionamento, promovemos um ambiente de energia positiva e incentivamos o desenvolvimento contínuo de todos ao nosso redor." },
];

function Values() {
  return (
    <section
      className="relative bg-dark text-background py-32 px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${sectionBgDark})` }}
    >
      <div className="absolute inset-0 bg-dark/85" />
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">
            Nossos valores
          </span>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            O que nos <span className="italic text-accent">move</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {values.map((v, i) => (
            <div key={v.t} className="bg-dark p-10">
              <div className="font-mono text-xs text-accent mb-6">0{i + 1} /</div>
              <h3 className="font-serif text-2xl mb-4">{v.t}</h3>
              <p className="text-white/60 leading-relaxed text-sm">{v.d}</p>
            </div>
          ))}
        </div>
        <p className="relative mt-16 max-w-3xl font-serif text-2xl md:text-3xl italic text-white/85 leading-snug">
          Unimos <span className="text-accent">sonho</span> e visão de longo prazo com controle e gestão no curto prazo.
        </p>
      </div>
    </section>
  );
}

/* ---------- METHODOLOGY ---------- */

const spac = [
  { letter: "S", word: "Sonhar", label: "Visão estratégica", desc: "Onde queremos chegar?" },
  { letter: "P", word: "Planejar", label: "Objetivos tangíveis", desc: "Como vamos alcançar?" },
  { letter: "A", word: "Agir", label: "Execução do plano", desc: "Como vamos operar?" },
  { letter: "C", word: "Controlar", label: "Rituais de gestão", desc: "Alinhamento de rota." },
];

function Methodology() {
  return (
    <section id="metodologia" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-10 md:gap-16 items-center mb-20">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">
            Nosso jeito de fazer
          </span>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Metodologia <span className="italic">S.P.A.C.</span>
          </h2>
        </div>
        <SpacMark size={120} className="text-accent hidden md:block" />
        <p className="text-muted text-lg leading-relaxed">
          Um método que combina o sonho de longo prazo com a disciplina do dia a dia.
          Cada letra é uma etapa — e todas rodam juntas, o tempo inteiro, dentro da sua operação.
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-px bg-foreground/10">
        {spac.map((s) => (
          <div key={s.letter} className="bg-background p-10 min-h-[280px] flex flex-col">
            <div className="font-serif text-7xl text-accent mb-6 leading-none">{s.letter}</div>
            <h3 className="font-serif text-2xl mb-2">{s.word}</h3>
            <div className="font-mono text-[9px] uppercase tracking-widest text-muted mb-4">
              {s.label}
            </div>
            <p className="text-sm text-muted mt-auto">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- WHAT WE DO ---------- */

const whatWeDo = [
  { n: "01", t: "Identidade", d: "Propósito, Missão e Valores" },
  { n: "02", t: "Estratégia", d: "Formulação, Planejamento e Execução" },
  { n: "03", t: "Digital", d: "E-commerce, Retail Media e CRM" },
  { n: "04", t: "Metas", d: "Alinhamento e Desdobramento" },
  { n: "05", t: "Growth", d: "Aquisição, Retenção e LTV" },
  { n: "06", t: "Gestão Comercial", d: "Funil, Força de Vendas e Pricing" },
  { n: "07", t: "Financeira e M&A", d: "Capital, Fusões e Aquisições" },
  { n: "08", t: "Gestão de Gastos", d: "Orçamento e Eficiência" },
  { n: "09", t: "Processos", d: "Rotina, IA e Padronização" },
];

function WhatWeDo() {
  return (
    <section id="o-que-fazemos" className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
        style={{ backgroundImage: `url(${servicesBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">
            O que fazemos
          </span>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
            Um portfólio completo de <span className="italic text-accent">transformação</span>.
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Nove frentes de trabalho que atravessam toda a cadeia de valor da sua empresa.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
          {whatWeDo.map((item) => (
            <div
              key={item.n}
              className="bg-background p-8 md:p-10 group hover:bg-dark hover:text-background transition-all duration-500 cursor-default"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-mono text-xs text-accent">{item.n}</span>
                <ArrowUpRight className="size-4 text-muted group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl mb-2">{item.t}</h3>
              <p className="text-sm text-muted group-hover:text-white/60 transition-colors">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SOLUTIONS (with icons, aquila-style) ---------- */

const solutions = [
  {
    icon: Compass,
    t: "Estratégia e Planejamento",
    d: "Proposta de valor, posicionamento, ambição metrificada, análise interna e externa, matriz de priorização e execução dos projetos estratégicos.",
  },
  {
    icon: TrendingUp,
    t: "Gestão Comercial",
    d: "Funil de vendas, carteira, força de vendas, portfólio, canais, rituais, políticas de pricing, pós-vendas e remuneração variável.",
  },
  {
    icon: Workflow,
    t: "Gestão de Rotina e Processos",
    d: "Mapeamento, identificação de gargalos, planejamento de IA, implantação de padrões, treinamento e gatilhos de gestão.",
  },
  {
    icon: BarChart3,
    t: "Indicadores e Metas",
    d: "Cadeia de valor, variáveis-chave, metas em lucratividade, rentabilidade e crescimento com desdobramento e gestão de desvios.",
  },
  {
    icon: Wallet,
    t: "Capital Empregado",
    d: "Compras, estoque e recebimento — os 3 pilares da necessidade de capital de giro com metas, plano de ação e rituais.",
  },
  {
    icon: Receipt,
    t: "Gestão de Despesas",
    d: "Estudo de viabilidade de IA, gestão orçamentária, estrutura de pacotes, metas e acompanhamento do plano de ação.",
  },
  {
    icon: Sprout,
    t: "Growth",
    d: "Personas, ICP, jornada, canais, estratégias de aquisição, retenção e up-sell. Acompanhamento de LTV, CAC e novos clientes.",
  },
  {
    icon: Globe,
    t: "Digital",
    d: "Estratégia de canais, jornadas digitais, pós-venda, marketing digital, esteira de testes, LTV/CAC e P&L do negócio digital.",
  },
];

function Solutions() {
  return (
    <section id="solucoes" className="bg-white/50 border-y border-foreground/5 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">
            Soluções
          </span>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Oito frentes, um único <span className="italic">método</span>.
          </h2>
          <p className="text-muted mt-6 text-lg leading-relaxed">
            Toda solução carrega três marcas registradas da SPAC:
            <span className="text-accent"> tecnologia e IA</span>,
            <span className="text-accent"> governança</span> e
            <span className="text-accent"> quickwins</span>.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.t}
                className="group relative bg-background p-8 border border-foreground/10 hover:border-accent hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="mb-8 inline-flex items-center justify-center size-14 border border-accent/30 bg-accent/5 text-accent group-hover:bg-accent group-hover:text-background transition-all">
                  <Icon className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl mb-3 leading-tight">{s.t}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- CLIENTS (marquee grayscale → color) ---------- */

const clients = [
  { name: "ABC", domain: "abcalgar.com.br" },
  { name: "Grupo Zelo", domain: "grupozelo.com" },
  { name: "Apoio Mineiro", domain: "apoiomineiro.com.br" },
  { name: "Nagumo", domain: "nagumo.com.br" },
  { name: "Banana Brasil", domain: "bananabrasil.com.br" },
  { name: "Angus", domain: "angus.com.br" },
  { name: "BORA", domain: "bora.com.br" },
  { name: "Grupo Dec", domain: "decdistribuidora.com.br" },
  { name: "Big Box", domain: "bigbox.com.br" },
  { name: "Supernosso", domain: "supernosso.com" },
  { name: "Be Honest", domain: "behonest.com.br" },
  { name: "Macré", domain: "macre.com.br" },
  { name: "Orgânico do Chico", domain: "organicodochico.com.br" },
  { name: "Terral", domain: "terral.agr.br" },
  { name: "Supermercados REX", domain: "rexsupermercados.com.br" },
  { name: "Interweg Seguros", domain: "interwegseguros.com.br" },
];

function ClientLogo({ name, domain }: { name: string; domain: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="shrink-0 w-44 md:w-56 h-24 md:h-28 mx-6 flex items-center justify-center border border-foreground/10 bg-background/50">
      {failed ? (
        <span className="font-serif text-lg md:text-xl text-foreground/70 grayscale hover:grayscale-0 transition-all">
          {name}
        </span>
      ) : (
        <img
          src={`https://logo.clearbit.com/${domain}`}
          alt={name}
          loading="lazy"
          onError={() => setFailed(true)}
          className="max-h-14 md:max-h-16 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        />
      )}
    </div>
  );
}

function Clients() {
  const loop = [...clients, ...clients];
  return (
    <section className="py-24 border-b border-foreground/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex justify-between items-end gap-8 flex-wrap">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">
              Onde fizemos
            </span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Empresas que confiaram na <span className="italic">SPAC</span>
            </h2>
          </div>
          <p className="text-muted text-sm max-w-sm">
            Passe o cursor sobre cada marca para ver o logo em cor.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {loop.map((c, i) => (
            <ClientLogo key={`${c.name}-${i}`} name={c.name} domain={c.domain} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CASE SUPERNOSSO ---------- */

const caseNumbers = [
  { v: "30x", l: "Crescimento no Digital" },
  { v: "3x", l: "Aumento da base de clientes ativos" },
  { v: "3", l: "Lançamentos e estruturação de e-commerces" },
  { v: "50%", l: "Da venda digital via programa de assinatura" },
  { v: "1000%", l: "Aumento na arrecadação de verbas de fornecedores" },
  { v: "R$ 500 MM", l: "Ganhos de gestão acumulados" },
  { v: "10x", l: "Crescimento em 3 M&A realizados" },
  { v: "10%", l: "Da venda total via programa de assinatura" },
];

function CaseSupernosso() {
  return (
    <section id="case" className="bg-dark text-background py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <div className="grid grid-cols-12 h-full w-full divide-x divide-white/30">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i}></div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">
            Case — Grupo Supernosso
          </span>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Uma década transformando um dos maiores <span className="italic text-accent">grupos varejistas</span> de Minas.
          </h2>
          <p className="text-white/60 mt-6 text-lg leading-relaxed">
            Novas fontes de receita — retail media, serviços financeiros, modalidades de entrega
            e WhatsApp — combinadas a ganhos de gestão em vendas, margem, despesas e perdas.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {caseNumbers.map((n) => (
            <div key={n.l} className="bg-dark p-8 md:p-10">
              <div className="font-serif text-4xl md:text-5xl text-accent mb-3">{n.v}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-white/50 leading-relaxed">
                {n.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */

const quotes = [
  {
    q: "O trabalho foi excelente no Grupo Supernosso, contribuiu ativamente à gestão e transformação da empresa, não só em processos e gestão tradicional, mas também em inovação com marketing, CRM e digital. Recomendo muito!",
    n: "Rodolfo Nejm",
    r: "Vice Presidente e acionista — Grupo Supernosso",
    img: insight1,
  },
  {
    q: "Augusto é uma pessoa que sempre abraçou muito as parcerias de negócio, trazendo soluções e pensando em como ajudar o business. É um profissional extremamente capacitado e preparado!",
    n: "Karina Arcuri",
    r: "Diretora de E-commerce e CRM — AMBEV",
    img: insight2,
  },
  {
    q: "A Expand teve sua gestão transformada em apenas 6 meses de trabalho. Os resultados de crescimento de faturamento e lucro falam por si só, e a maturidade da equipe evoluiu muito.",
    n: "Felipe Lourenço",
    r: "Sócio Fundador — Expand Bebidas",
    img: insight3,
  },
];

function Testimonials() {
  return (
    <section id="depoimentos" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="max-w-2xl mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">
          Depoimentos
        </span>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight">
          Quem já viveu a <span className="italic">transformação</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-10 md:gap-12">
        {quotes.map((q) => (
          <article key={q.n} className="flex flex-col">
            <div className="overflow-hidden mb-8">
              <img
                src={q.img}
                alt={q.n}
                width={800}
                height={800}
                loading="lazy"
                className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <blockquote className="font-serif text-xl italic leading-snug mb-6">
              “{q.q}”
            </blockquote>
            <div className="mt-auto">
              <div className="text-sm font-semibold">{q.n}</div>
              <div className="text-[11px] text-muted uppercase tracking-widest mt-1">{q.r}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */

function CTASection() {
  return (
    <section id="contato" className="py-32 px-6 bg-accent/5 border-t border-foreground/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <SpacMark size={48} className="mx-auto mb-8 text-accent" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6 block">
            Fale com a SPAC
          </span>
          <h2 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">
            Pronto para <span className="italic">transformar</span> sua empresa?
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Conte um pouco do seu momento. Retornamos com uma primeira leitura estratégica
            do seu negócio antes de qualquer compromisso.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-8">
          <div className="bg-dark text-background p-10 flex flex-col justify-between">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-6">
                Contato direto
              </div>
              <p className="font-serif text-2xl leading-snug mb-8">
                Prefere falar agora com o time?
              </p>
            </div>
            <div className="space-y-5 text-sm">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">E-mail</div>
                <a href="mailto:augusto@spacgestao.com" className="hover:text-accent transition-colors">
                  augusto@spacgestao.com
                </a>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Telefone / WhatsApp</div>
                <a href="https://wa.me/5531995552638" className="hover:text-accent transition-colors">
                  +55 31 9 9555-2638
                </a>
              </div>
            </div>
          </div>

          <form
            className="bg-white p-8 md:p-10 shadow-2xl shadow-black/5 ring-1 ring-black/5 grid gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" required placeholder="Nome completo" className="border-b border-foreground/15 py-3 text-sm focus:border-accent outline-hidden bg-transparent" />
              <input type="email" required placeholder="E-mail corporativo" className="border-b border-foreground/15 py-3 text-sm focus:border-accent outline-hidden bg-transparent" />
            </div>
            <input type="text" placeholder="Empresa e cargo" className="border-b border-foreground/15 py-3 text-sm focus:border-accent outline-hidden bg-transparent" />
            <input type="text" placeholder="Faturamento anual aproximado" className="border-b border-foreground/15 py-3 text-sm focus:border-accent outline-hidden bg-transparent" />
            <textarea placeholder="Qual desafio você quer resolver?" rows={3} className="border-b border-foreground/15 py-3 text-sm focus:border-accent outline-hidden bg-transparent resize-none" />
            <button type="submit" className="w-full py-5 bg-foreground text-background text-xs uppercase tracking-[0.3em] font-bold mt-2 hover:bg-accent transition-all">
              Solicitar Conversa
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */

function SiteFooter() {
  return (
    <footer className="py-20 px-6 border-t border-foreground/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-sm">
          <div className="flex items-center gap-3 mb-4">
            <SpacMark size={36} className="text-foreground" />
            <div className="font-serif italic text-3xl">SPAC</div>
          </div>
          <p className="text-muted text-sm leading-relaxed mb-6">
            Transformando sonhos em resultados.
          </p>
          <p className="text-muted text-[11px] uppercase tracking-widest">
            Estratégia · Gestão · Inteligência Artificial
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16">
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest mb-6">Contato</h5>
            <ul className="text-xs text-muted space-y-2">
              <li><a href="mailto:augusto@spacgestao.com" className="hover:text-accent">augusto@spacgestao.com</a></li>
              <li><a href="https://wa.me/5531995552638" className="hover:text-accent">+55 31 9 9555-2638</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest mb-6">Navegar</h5>
            <ul className="text-xs text-muted space-y-2">
              <li><a href="#quem-somos" className="hover:text-accent">Sócios</a></li>
              <li><a href="#metodologia" className="hover:text-accent">Metodologia</a></li>
              <li><a href="#solucoes" className="hover:text-accent">Soluções</a></li>
              <li><a href="#case" className="hover:text-accent">Case Supernosso</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest mb-6">Legal</h5>
            <ul className="text-xs text-muted space-y-2">
              <li>Privacidade</li>
              <li>Termos</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-muted uppercase tracking-[0.2em]">
        <span>© 2026 SPAC Gestão · Todos os direitos reservados</span>
        <span>Tecnologia · Governança · Quickwins</span>
      </div>
    </footer>
  );
}
