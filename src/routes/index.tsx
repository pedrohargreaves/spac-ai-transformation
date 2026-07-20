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
  Sparkles,
  UserCheck,
  Gauge,
} from "lucide-react";
import purposeBg from "@/assets/purpose-bg.jpg";
import servicesBg from "@/assets/services-bg.jpg";
import sectionBgDark from "@/assets/section-bg-dark.jpg";

// Brand logo
import spacLogoDark from "@/assets/spac/spac-logo-dark.png";
import spacLogoLight from "@/assets/spac/spac-logo-light.png";

// Founders + universities
import founderVinicius from "@/assets/spac/founder-vinicius.png";
import founderAugusto from "@/assets/spac/founder-augusto.png";
import uniStanford from "@/assets/spac/uni-stanford.png";
import uniHarvard from "@/assets/spac/uni-harvard.png";
import uniEsade from "@/assets/spac/uni-esade.png";
import uniUfmg from "@/assets/spac/uni-ufmg.png";
import uniFdc from "@/assets/spac/uni-fdc.png";
import uniSouthFlorida from "@/assets/spac/uni-southflorida.png";

// Testimonial photos
import depoRodolfo from "@/assets/spac/depo-rodolfo.png";
import depoKarina from "@/assets/spac/depo-karina.png";
import depoFelipe from "@/assets/spac/depo-felipe.png";

// Client logos (from institutional PDF)
import clAbc from "@/assets/spac/client-abc.jpg";
import clZelo from "@/assets/spac/client-zelo.jpg";
import clApoio from "@/assets/spac/client-apoio.png";
import clNagumo from "@/assets/spac/client-nagumo.jpg";
import clBanana from "@/assets/spac/client-banana.jpg";
import clAngus from "@/assets/spac/client-angus.jpg";
import clBora from "@/assets/spac/client-bora.jpg";
import clDecminas from "@/assets/spac/client-decminas.png";
import clBigbox from "@/assets/spac/client-bigbox.jpg";
import clSupernosso from "@/assets/spac/client-supernosso.png";
import clBehonest from "@/assets/spac/client-behonest.png";
import clMacre from "@/assets/spac/client-macre.png";
import clOrganico from "@/assets/spac/client-organico.png";
import clTerral from "@/assets/spac/client-terral.png";
import clAeris from "@/assets/spac/client-aeris.png";
import clNyrstar from "@/assets/spac/client-nyrstar.png";
import clMilton from "@/assets/spac/client-miltoncampos.png";
import clNetservice from "@/assets/spac/client-netservice.png";
import clRaros from "@/assets/spac/client-raros.png";
import clFazenda from "@/assets/spac/client-fazendaconforto.png";
import clBaleia from "@/assets/spac/client-hospitalbaleia.png";

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

/* ---------- BRAND LOGO ---------- */

function SpacLogo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <img
      src={variant === "dark" ? spacLogoDark : spacLogoLight}
      alt="SPAC"
      className={className}
    />
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteNav />
      <Hero />
      <Purpose />
      <Founders />
      <SeniorTeam />
      <Values />
      <Methodology />
      <Differentiators />
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
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#top" className="flex items-center">
          <SpacLogo variant="dark" className="h-14 md:h-16 w-auto" />
        </a>
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.22em] font-medium text-muted">
          <a href="#quem-somos" className="hover:text-foreground transition-colors">Sócios</a>
          <a href="#metodologia" className="hover:text-foreground transition-colors">Metodologia</a>
          <a href="#diferenciais" className="hover:text-foreground transition-colors">Diferenciais</a>
          <a href="#solucoes" className="hover:text-foreground transition-colors">Soluções</a>
          <a href="#case" className="hover:text-foreground transition-colors">Case</a>
        </div>
        <a href="#contato" className="px-5 py-2.5 bg-foreground text-background text-[11px] uppercase tracking-widest font-semibold hover:bg-accent-deep transition-colors">
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
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-deep mb-6 block">
          Consultoria em Gestão e Estratégia utilizando IA de forma eficiente
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance mb-10">
          Transformando <span className="italic text-accent-deep">Sonhos</span> em Resultados.
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl mb-12 leading-relaxed">
          Da formulação estratégica à execução — com tecnologia, IA aplicada,
          governança e quickwins que transformam empresas de médio e grande porte.
        </p>
        <div className="flex flex-wrap gap-6 items-center">
          <a href="#contato" className="px-8 py-4 bg-foreground text-background text-xs uppercase tracking-[0.22em] font-bold hover:bg-accent-deep transition-all">
            Agendar Conversa
          </a>
          <a href="#metodologia" className="text-xs uppercase tracking-[0.22em] font-semibold border-b border-foreground/30 pb-1 hover:border-accent-deep hover:text-accent-deep transition-all">
            Conhecer a Metodologia SPAC
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- PURPOSE ---------- */

function Purpose() {
  return (
    <section
      className="relative py-32 md:py-40 px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${purposeBg})` }}
    >
      <div className="absolute inset-0 bg-dark/80" />
      <div className="relative max-w-5xl mx-auto text-center text-background">
        <SpacLogo variant="light" className="h-16 md:h-20 w-auto mx-auto mb-10 opacity-95" />
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6 block">
          Propósito
        </span>
        <p className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] italic text-balance mb-14">
          “Democratizar a transformação para todos que querem fazer a diferença.”
        </p>
        <div className="w-16 h-px bg-accent/50 mx-auto mb-10" />
        <p className="font-serif text-2xl md:text-3xl italic text-white/85 leading-snug max-w-3xl mx-auto">
          Unimos <span className="text-accent">sonho</span> e visão de longo prazo com controle e gestão no curto prazo.
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
      { name: "Stanford", src: uniStanford },
      { name: "University of South Florida", src: uniSouthFlorida },
      { name: "ESADE", src: uniEsade },
      { name: "UFMG", src: uniUfmg },
      { name: "FDC", src: uniFdc },
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
      { name: "Harvard Business School", src: uniHarvard },
      { name: "UFMG", src: uniUfmg },
      { name: "FDC", src: uniFdc },
    ],
  },
];

function Founders() {
  return (
    <section id="quem-somos" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="max-w-2xl mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-deep mb-4 block">
          Quem somos
        </span>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight">
          Sócios <span className="italic">Fundadores</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        {founders.map((p) => (
          <article key={p.name}>
            <div className="mb-6 flex justify-center md:justify-start">
              <img
                src={p.photo}
                alt={p.name}
                width={600}
                height={480}
                loading="lazy"
                className="w-full max-w-sm h-auto object-contain"
              />
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent-deep mb-3">
              {p.role}
            </div>
            <h3 className="font-serif text-3xl md:text-4xl mb-5">{p.name}</h3>
            <p className="text-muted leading-relaxed mb-6">{p.intro}</p>
            <ul className="space-y-2.5 mb-8">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed">
                  <span className="text-accent-deep mt-2 size-1 rounded-full bg-accent-deep shrink-0"></span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted mb-4">
                Formação
              </div>
              <div className="flex flex-wrap gap-3 items-center">
                {p.schools.map((s) => (
                  <div
                    key={s.name}
                    className="h-11 px-3 py-1.5 bg-white rounded-sm border border-foreground/10 flex items-center"
                  >
                    <img
                      src={s.src}
                      alt={s.name}
                      className="h-full w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
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
      </div>
    </section>
  );
}

/* ---------- METHODOLOGY (chamativa: circular S.P.A.C. diagram) ---------- */

const spac = [
  {
    letter: "S",
    word: "Sonhar",
    label: "Visão Estratégica",
    desc: "Onde queremos chegar? Definimos o sonho de longo prazo — ambição, proposta de valor e o horizonte que orienta cada decisão.",
    angle: 225,
  },
  {
    letter: "P",
    word: "Planejar",
    label: "Objetivos Tangíveis",
    desc: "Como vamos alcançar? Traduzimos o sonho em projetos, metas metrificadas e uma matriz de priorização que cabe na sua realidade.",
    angle: 315,
  },
  {
    letter: "A",
    word: "Agir",
    label: "Execução do Plano",
    desc: "Como vamos operar? Colocamos a mão na massa junto do seu time — do C-Level ao operacional — com quickwins e IA aplicada.",
    angle: 45,
  },
  {
    letter: "C",
    word: "Controlar",
    label: "Rituais de Gestão",
    desc: "Alinhamento de rota. Indicadores, rituais e governança que mantêm o método vivo depois que a consultoria acaba.",
    angle: 135,
  },
];

function Methodology() {
  const [active, setActive] = useState(0);
  const current = spac[active];

  return (
    <section id="metodologia" className="relative py-32 px-6 bg-dark text-background overflow-hidden">
      {/* subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[900px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">
            Nosso jeito de fazer
          </span>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
            Metodologia <span className="italic text-accent">S.P.A.C.</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Um método próprio, testado em bilhões em ganhos de gestão. Quatro etapas
            que giram continuamente dentro da sua operação — sonho, plano, ação e controle.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
          {/* Circular diagram */}
          <div className="relative aspect-square max-w-[520px] w-full mx-auto">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-8 rounded-full border border-accent/20 animate-spin-slow" style={{ animationDuration: "60s" }} />
            <div className="absolute inset-16 rounded-full border border-white/5" />

            {/* Center brand */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex flex-col items-center">
                <div className="absolute size-40 rounded-full bg-accent/20 blur-2xl animate-pulse-glow" />
                <SpacLogo variant="light" className="relative w-32 md:w-40 h-auto" />
              </div>
            </div>

            {/* Orbiting nodes */}
            {spac.map((s, i) => {
              const rad = (s.angle * Math.PI) / 180;
              const r = 46; // percent from center
              const x = 50 + r * Math.cos(rad);
              const y = 50 + r * Math.sin(rad);
              const isActive = i === active;
              return (
                <button
                  key={s.letter}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div
                    className={`relative size-24 md:size-28 rounded-full flex flex-col items-center justify-center border transition-all duration-500 ${
                      isActive
                        ? "bg-accent text-dark border-accent scale-110 shadow-xl shadow-accent/30"
                        : "bg-dark/80 border-white/20 text-white hover:border-accent hover:scale-105"
                    }`}
                  >
                    <span className={`font-serif text-4xl md:text-5xl leading-none ${isActive ? "text-dark" : "text-accent"}`}>
                      {s.letter}
                    </span>
                    <span className={`font-mono text-[9px] uppercase tracking-widest mt-1 ${isActive ? "text-dark/80" : "text-white/60"}`}>
                      {s.word}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="min-h-[300px]">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">
              Etapa 0{active + 1} · {current.label}
            </div>
            <h3 className="font-serif text-5xl md:text-6xl mb-2">
              <span className="text-accent">{current.letter}</span>
              <span className="text-white/40">.</span>
            </h3>
            <div className="font-serif text-3xl italic mb-6">{current.word}</div>
            <p className="text-white/70 text-lg leading-relaxed mb-8">{current.desc}</p>
            <div className="flex gap-2">
              {spac.map((s, i) => (
                <button
                  key={s.letter}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`h-1 flex-1 transition-all ${
                    i === active ? "bg-accent" : "bg-white/15 hover:bg-white/30"
                  }`}
                  aria-label={`Ver etapa ${s.word}`}
                />
              ))}
            </div>
          </div>
        </div>
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
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-deep mb-4 block">
            O que fazemos
          </span>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
            Um portfólio completo de <span className="italic text-accent-deep">transformação</span>.
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
                <span className="font-mono text-xs text-accent-deep group-hover:text-accent">{item.n}</span>
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

/* ---------- SOLUTIONS ---------- */

const solutions = [
  { icon: Compass, t: "Estratégia e Planejamento", d: "Proposta de valor, posicionamento, ambição metrificada, análise interna e externa, matriz de priorização e execução dos projetos estratégicos." },
  { icon: TrendingUp, t: "Gestão Comercial", d: "Funil de vendas, carteira, força de vendas, portfólio, canais, rituais, políticas de pricing, pós-vendas e remuneração variável." },
  { icon: Workflow, t: "Gestão de Rotina e Processos", d: "Mapeamento, identificação de gargalos, planejamento de IA, implantação de padrões, treinamento e gatilhos de gestão." },
  { icon: BarChart3, t: "Indicadores e Metas", d: "Cadeia de valor, variáveis-chave, metas em lucratividade, rentabilidade e crescimento com desdobramento e gestão de desvios." },
  { icon: Wallet, t: "Capital Empregado", d: "Compras, estoque e recebimento — os 3 pilares da necessidade de capital de giro com metas, plano de ação e rituais." },
  { icon: Receipt, t: "Gestão de Despesas", d: "Estudo de viabilidade de IA, gestão orçamentária, estrutura de pacotes, metas e acompanhamento do plano de ação." },
  { icon: Sprout, t: "Growth", d: "Personas, ICP, jornada, canais, estratégias de aquisição, retenção e up-sell. Acompanhamento de LTV, CAC e novos clientes." },
  { icon: Globe, t: "Digital", d: "Estratégia de canais, jornadas digitais, pós-venda, marketing digital, esteira de testes, LTV/CAC e P&L do negócio digital." },
];

function Solutions() {
  return (
    <section id="solucoes" className="bg-white/50 border-y border-foreground/5 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-deep mb-4 block">
            Soluções
          </span>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Oito frentes, um único <span className="italic">método</span>.
          </h2>
          <p className="text-muted mt-6 text-lg leading-relaxed">
            Toda solução carrega três marcas registradas da SPAC:
            <span className="text-accent-deep"> tecnologia e IA</span>,
            <span className="text-accent-deep"> governança</span> e
            <span className="text-accent-deep"> quickwins</span>.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.t}
                className="group relative bg-background p-8 border border-foreground/10 hover:border-accent hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="mb-8 inline-flex items-center justify-center size-14 border border-accent-deep/30 bg-accent/10 text-accent-deep group-hover:bg-accent-deep group-hover:text-background transition-all">
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

const clients: { name: string; src: string }[] = [
  { name: "ABC", src: clAbc },
  { name: "Grupo Zelo", src: clZelo },
  { name: "Apoio Mineiro", src: clApoio },
  { name: "Supermercados Nagumo", src: clNagumo },
  { name: "Banana Brasil", src: clBanana },
  { name: "Angus Supernosso", src: clAngus },
  { name: "BORA", src: clBora },
  { name: "Grupo DEC Minas", src: clDecminas },
  { name: "Big Box", src: clBigbox },
  { name: "Supernosso", src: clSupernosso },
  { name: "Be Honest", src: clBehonest },
  { name: "Macré", src: clMacre },
  { name: "Orgânico do Chico", src: clOrganico },
  { name: "Terral", src: clTerral },
  { name: "Aeris", src: clAeris },
  { name: "Nyrstar", src: clNyrstar },
  { name: "Faculdade Milton Campos", src: clMilton },
  { name: "NetService", src: clNetservice },
  { name: "Raro's", src: clRaros },
  { name: "Fazenda Conforto", src: clFazenda },
  { name: "Hospital da Baleia", src: clBaleia },
  { name: "Supermercados REX", src: "" },
  { name: "Interweg Seguros", src: "" },
];

function ClientLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="shrink-0 w-44 md:w-56 h-24 md:h-28 mx-4 flex items-center justify-center bg-white border border-foreground/10">
      {src ? (
        <img
          src={src}
          alt={name}
          loading="lazy"
          className="max-h-16 md:max-h-20 max-w-[80%] w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        />
      ) : (
        <span className="font-serif text-lg md:text-xl text-foreground/60 hover:text-foreground transition-all text-center px-3">
          {name}
        </span>
      )}
    </div>
  );
}

function Clients() {
  const loop = [...clients, ...clients];
  return (
    <section className="py-24 border-b border-foreground/5 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex justify-between items-end gap-8 flex-wrap">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-deep mb-4 block">
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
            <ClientLogo key={`${c.name}-${i}`} name={c.name} src={c.src} />
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
    img: depoRodolfo,
  },
  {
    q: "Augusto é uma pessoa que sempre abraçou muito as parcerias de negócio, trazendo soluções e pensando em como ajudar o business. É um profissional extremamente capacitado e preparado!",
    n: "Karina Arcuri",
    r: "Diretora de E-commerce e CRM — AMBEV",
    img: depoKarina,
  },
  {
    q: "A Expand teve sua gestão transformada em apenas 6 meses de trabalho. Os resultados de crescimento de faturamento e lucro falam por si só, e a maturidade da equipe evoluiu muito.",
    n: "Felipe Lourenço",
    r: "Sócio Fundador — Expand Bebidas",
    img: depoFelipe,
  },
];

function Testimonials() {
  return (
    <section id="depoimentos" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="max-w-2xl mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-deep mb-4 block">
          Depoimentos
        </span>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight">
          Quem já viveu a <span className="italic">transformação</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-10 md:gap-12">
        {quotes.map((q) => (
          <article key={q.n} className="flex flex-col bg-white p-8 md:p-10 border border-foreground/10 shadow-sm">
            <div className="flex items-center gap-5 mb-6">
              <div className="size-20 rounded-full overflow-hidden ring-2 ring-accent shrink-0 bg-foreground/5">
                <img
                  src={q.img}
                  alt={q.n}
                  width={200}
                  height={200}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-serif text-xl leading-tight">{q.n}</div>
                <div className="text-[11px] text-muted uppercase tracking-widest mt-1 leading-snug">{q.r}</div>
              </div>
            </div>
            <blockquote className="font-serif text-lg italic leading-snug text-foreground/85">
              “{q.q}”
            </blockquote>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */

function CTASection() {
  return (
    <section id="contato" className="py-32 px-6 bg-accent/10 border-t border-foreground/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <SpacLogo variant="dark" className="h-14 md:h-16 w-auto mx-auto mb-8" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-deep mb-6 block">
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
            <button type="submit" className="w-full py-5 bg-foreground text-background text-xs uppercase tracking-[0.3em] font-bold mt-2 hover:bg-accent-deep transition-all">
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
    <footer className="py-20 px-6 border-t border-foreground/5 bg-dark text-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-sm">
          <SpacLogo variant="light" className="h-12 w-auto mb-6" />
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Transformando sonhos em resultados.
          </p>
          <p className="text-accent text-[11px] uppercase tracking-widest">
            Estratégia · Gestão · Inteligência Artificial
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16">
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest mb-6 text-accent">Contato</h5>
            <ul className="text-xs text-white/60 space-y-2">
              <li><a href="mailto:augusto@spacgestao.com" className="hover:text-accent">augusto@spacgestao.com</a></li>
              <li><a href="https://wa.me/5531995552638" className="hover:text-accent">+55 31 9 9555-2638</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest mb-6 text-accent">Navegar</h5>
            <ul className="text-xs text-white/60 space-y-2">
              <li><a href="#quem-somos" className="hover:text-accent">Sócios</a></li>
              <li><a href="#metodologia" className="hover:text-accent">Metodologia</a></li>
              <li><a href="#solucoes" className="hover:text-accent">Soluções</a></li>
              <li><a href="#case" className="hover:text-accent">Case Supernosso</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest mb-6 text-accent">Legal</h5>
            <ul className="text-xs text-white/60 space-y-2">
              <li>Privacidade</li>
              <li>Termos</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-white/40 uppercase tracking-[0.2em]">
        <span>© 2026 SPAC Gestão · Todos os direitos reservados</span>
        <span>Tecnologia · Governança · Quickwins</span>
      </div>
    </footer>
  );
}
