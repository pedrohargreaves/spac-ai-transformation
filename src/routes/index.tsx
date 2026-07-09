import { createFileRoute } from "@tanstack/react-router";
import pillarsMarble from "@/assets/pillars-marble.jpg";
import insight1 from "@/assets/insight-1.jpg";
import insight2 from "@/assets/insight-2.jpg";
import insight3 from "@/assets/insight-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SPAC Gestão — Democratizar a transformação para quem quer fazer a diferença" },
      {
        name: "description",
        content:
          "Unimos sonho e visão de longo prazo com controle e gestão no curto prazo. Consultoria em Estratégia, Gestão Comercial, Digital, Growth, M&A, Processos e IA aplicada.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteNav />
      <Hero />
      <Purpose />
      <Team />
      <Values />
      <Methodology />
      <HowWeDo />
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
        <a href="#top" className="font-serif italic text-2xl tracking-tight">SPAC</a>
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.22em] font-medium text-muted">
          <a href="#quem-somos" className="hover:text-foreground transition-colors">Quem Somos</a>
          <a href="#metodologia" className="hover:text-foreground transition-colors">Metodologia</a>
          <a href="#solucoes" className="hover:text-foreground transition-colors">Soluções</a>
          <a href="#case" className="hover:text-foreground transition-colors">Case</a>
          <a href="#depoimentos" className="hover:text-foreground transition-colors">Depoimentos</a>
        </div>
        <a href="#contato" className="px-5 py-2.5 bg-foreground text-background text-[11px] uppercase tracking-widest font-semibold hover:bg-accent transition-colors">
          Fale com a SPAC
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header id="top" className="relative px-6 pt-24 pb-32 max-w-7xl mx-auto">
      <div className="max-w-5xl animate-fade-up">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6 block">
          Consultoria em Estratégia, Gestão e IA
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance mb-10">
          Unimos <span className="italic text-accent">sonho</span> e visão de longo prazo com controle e gestão no curto prazo.
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl mb-12 leading-relaxed">
          Da formulação estratégica à execução no chão da operação — com tecnologia, IA aplicada,
          governança e quickwins que transformam empresas de médio e grande porte.
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

function Purpose() {
  return (
    <section className="border-y border-foreground/5 bg-white/50 py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
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

const partners = [
  {
    name: "Vinícius Aroeira",
    intro:
      "Há mais de 15 anos liderando transformações em Finanças, Governança Corporativa, Tecnologia, E-commerce, CRM e Novos Negócios.",
    bullets: [
      "CFO e CTO em empresa de faturamento acima de R$ 4 Bi",
      "Líder de Consultoria em gestão e estratégia por mais de 7 anos",
      "Mais de R$ 1,2 Bi em ganhos de gestão implementados",
      "Criação de fundos e empresas de soluções financeiras",
      "Trabalhos desenvolvidos em 4 países: Brasil, EUA, México e Peru",
    ],
    schools: ["University of South Florida", "Stanford University", "ESADE", "UFMG", "FDC — Fundação Dom Cabral"],
  },
  {
    name: "Augusto Teixeira",
    intro:
      "Mais de 10 anos de experiência em Gestão Comercial, Gestão Orçamentária, Marketing, Digital, CRM, Estratégia de Vendas, Gestão de Processos e Inovação Empresarial.",
    bullets: [
      "Liderou projetos em fusões e aquisições e na criação de novas frentes de negócios",
      "Gestão Comercial em Distribuidora com faturamento superior a R$ 600 MM",
      "Estruturação de Financeira para Varejista",
      "Aquisição de 2 Startups: da estruturação à integração",
      "Parceria estratégica com Grupo Multinacional (negociação)",
      "+R$ 300 MM em ganhos de gestão",
    ],
    schools: ["Harvard Business School", "UFMG", "FDC — Fundação Dom Cabral"],
  },
];

function Team() {
  return (
    <section id="quem-somos" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="max-w-2xl mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">
          Quem somos
        </span>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight">
          Equipe <span className="italic">SPAC</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-px bg-foreground/10">
        {partners.map((p) => (
          <div key={p.name} className="bg-background p-10 md:p-12">
            <h3 className="font-serif text-3xl mb-4">{p.name}</h3>
            <p className="text-muted leading-relaxed mb-8">{p.intro}</p>
            <ul className="space-y-3 mb-10">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed">
                  <span className="text-accent mt-2 size-1 rounded-full bg-accent shrink-0"></span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted mb-3">
                Formação
              </div>
              <div className="flex flex-wrap gap-2">
                {p.schools.map((s) => (
                  <span key={s} className="text-[11px] border border-foreground/15 px-3 py-1.5 uppercase tracking-wide">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const values = [
  { t: "Foco total no cliente", d: "Sempre priorizamos as necessidades dos clientes, entregando valor com conhecimento profundo e soluções estratégicas de alto impacto." },
  { t: "Alta performance como padrão", d: "Buscamos excelência em tudo o que fazemos, garantindo resultados inegociáveis por meio do alinhamento entre teoria e prática." },
  { t: "Pensamento de longo prazo", d: "Atuamos com uma visão estratégica sustentável, combinando inovação e controle para crescimento exponencial com gestão eficaz." },
  { t: "Mentalidade empreendedora", d: "Agimos como donos, buscando oportunidades, assumindo riscos calculados e inovando constantemente para gerar impacto real." },
  { t: "Ambiente positivo e colaborativo", d: "Valorizamos o relacionamento, promovemos um ambiente de energia positiva e incentivamos o desenvolvimento contínuo de todos ao nosso redor." },
];

function Values() {
  return (
    <section className="bg-dark text-background py-32 px-6">
      <div className="max-w-7xl mx-auto">
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

const spac = [
  { letter: "S", word: "Sonhar", label: "Visão estratégica", desc: "Onde queremos chegar?" },
  { letter: "P", word: "Planejar", label: "Objetivos tangíveis", desc: "Como vamos alcançar?" },
  { letter: "A", word: "Agir", label: "Execução do plano", desc: "Como vamos operar?" },
  { letter: "C", word: "Controlar", label: "Rituais de gestão", desc: "Alinhamento de rota." },
];

function Methodology() {
  return (
    <section id="metodologia" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">
            Nosso jeito de fazer
          </span>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Metodologia <span className="italic">S.P.A.C.</span>
          </h2>
        </div>
        <p className="text-muted text-lg leading-relaxed md:pt-8">
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

const howRows = [
  ["Diagnóstico profundo do negócio", true, true, false],
  ["Metas ambiciosas com plano detalhado", true, false, false],
  ["Rituais de gestão semanais", true, false, false],
  ["Execução conjunta com a liderança", true, false, false],
  ["Uso de IA e tecnologia como alavanca", true, false, false],
  ["Quickwins nos primeiros 90 dias", true, false, false],
  ["Transferência de método para o time", true, false, false],
  ["Ganhos de gestão sustentáveis", true, true, false],
] as const;

function HowWeDo() {
  return (
    <section className="bg-white/50 border-y border-foreground/5 py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">
            Como fazemos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            SPAC vs. Melhoria Contínua vs. <span className="italic">Andar com a maré</span>
          </h2>
        </div>
        <div className="border-t border-foreground/10">
          <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] font-mono text-[10px] uppercase tracking-widest text-muted py-4 border-b border-foreground/10">
            <span>Prática</span>
            <span className="text-center text-accent">SPAC</span>
            <span className="text-center">Melhoria Contínua</span>
            <span className="text-center">Andar com a maré</span>
          </div>
          {howRows.map(([label, a, b, c]) => (
            <div key={label as string} className="grid grid-cols-[1.5fr_1fr_1fr_1fr] py-5 border-b border-foreground/10 items-center">
              <span className="text-sm">{label}</span>
              <span className="text-center">{a ? <Dot filled /> : <Dot />}</span>
              <span className="text-center">{b ? <Dot filled /> : <Dot />}</span>
              <span className="text-center">{c ? <Dot filled /> : <Dot />}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Dot({ filled = false }: { filled?: boolean }) {
  return (
    <span
      className={`inline-block size-2.5 rounded-full ${filled ? "bg-accent" : "bg-foreground/10"}`}
    />
  );
}

const whatWeDo = [
  "Identidade (Propósito, Missão, Valores)",
  "Estratégia (Formulação, Planejamento, Execução)",
  "Digital (E-commerce, Retail Media, CRM)",
  "Alinhamento e Desdobramento de Metas",
  "Growth",
  "Gestão Comercial",
  "Gestão Financeira e M&A",
  "Gestão de Gastos",
  "Gestão de Processos e Gerenciamento de Rotina",
];

function WhatWeDo() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">
            O que fazemos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-10">
            Um portfólio completo de <span className="italic">transformação</span>.
          </h2>
          <img
            src={pillarsMarble}
            alt="Detalhe arquitetônico em mármore"
            width={800}
            height={1000}
            loading="lazy"
            className="w-full aspect-[4/5] object-cover"
          />
        </div>
        <ul className="md:pt-24 divide-y divide-foreground/10 border-y border-foreground/10">
          {whatWeDo.map((item, i) => (
            <li key={item} className="py-6 flex items-baseline gap-6 group">
              <span className="font-mono text-xs text-accent w-8">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-serif text-xl md:text-2xl group-hover:translate-x-2 transition-transform">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const solutions = [
  {
    t: "Estratégia e Planejamento Estratégico",
    items: [
      "Formulação Estratégica: Proposta de Valor, Posicionamento e Ambição metrificada",
      "Análise Externa e Interna",
      "Matriz de Priorização",
      "Definição dos projetos estratégicos",
      "Execução do Planejamento Estratégico",
    ],
  },
  {
    t: "Gestão Comercial",
    items: [
      "Gestão de todo o Funil de Vendas",
      "Gestão da carteira de clientes",
      "Gestão da Força de Vendas",
      "Gestão de Portfólio de Produtos",
      "Definição da estratégia de canais",
      "Rotina Comercial e Rituais de Gestão",
      "Políticas Comercial e de Pricing",
      "Implantação do Pós Vendas",
      "Plano de Remuneração Variável",
    ],
  },
  {
    t: "Gestão de Rotina e Processos",
    items: [
      "Mapeamento dos processos",
      "Identificação das desconexões e gargalos",
      "Mapeamento das tarefas críticas",
      "Mapeamento e planejamento para implantação de IA",
      "Implementação dos Padrões",
      "Treinamento das equipes",
      "Definição dos Gatilhos",
    ],
  },
  {
    t: "Indicadores e Desdobramento de Metas",
    items: [
      "Mapeamento da Cadeia de Valor",
      "Identificação das Variáveis Chave",
      "Estruturação da Informação e acompanhamento",
      "Metas estratégicas em 3 alavancas: lucratividade, rentabilidade e crescimento",
      "Desdobramento entre áreas e indicadores meios",
      "Rituais de gestão e gestão de desvios",
    ],
  },
  {
    t: "Gestão do Capital Empregado",
    items: [
      "Mapeamento dos 3 Pilares da Necessidade de Capital de Giro (Compras, Estoque, Recebimento)",
      "Definição das metas de melhoria em cada pilar",
      "Plano de Ação por pilar",
      "Estrutura de Rituais de Gestão",
    ],
  },
  {
    t: "Gestão de Despesas",
    items: [
      "Mapeamento e estudo de Viabilidade de IA",
      "Organização da Gestão Orçamentária",
      "Estrutura de pacotes e entidades",
      "Definição das Metas",
      "Acompanhamento do Plano de Ação",
    ],
  },
  {
    t: "Growth",
    items: [
      "Vinculação à estratégia",
      "Definição das personas e Perfil do Cliente Ideal",
      "Jornada do cliente",
      "Canais de aquisição e cruzamento Cliente × Canal",
      "Estratégias de aquisição, retenção e Up sell",
      "Acompanhamento de LTV, CAC, Novos Clientes e Retenção",
    ],
  },
  {
    t: "Digital",
    items: [
      "Alinhamento da estratégia dos canais",
      "Mapeamento das oportunidades e jornadas digitais",
      "Implantação do processo de pós venda",
      "Esteira de testes",
      "Estratégia de Marketing Digital",
      "LTV / CAC",
      "Estruturação e Análise do P&L do negócio Digital",
      "Ações de alto impacto e fácil implementação",
      "Metas ambiciosas (moon shot)",
    ],
  },
];

function Solutions() {
  return (
    <section id="solucoes" className="bg-dark text-background py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">
            Soluções
          </span>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Oito frentes de trabalho, um único <span className="italic text-accent">método</span>.
          </h2>
          <p className="text-white/60 mt-6 text-lg leading-relaxed">
            Toda solução carrega três marcas registradas da SPAC:
            <span className="text-accent"> tecnologia e IA</span>,
            <span className="text-accent"> governança</span> e
            <span className="text-accent"> quickwins</span>.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-white/10">
          {solutions.map((s, i) => (
            <div key={s.t} className="bg-dark p-10">
              <div className="font-mono text-xs text-accent mb-4">
                {String(i + 1).padStart(2, "0")} / {String(solutions.length).padStart(2, "0")}
              </div>
              <h3 className="font-serif text-2xl md:text-3xl mb-6">{s.t}</h3>
              <ul className="space-y-2.5">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-3 text-sm text-white/70 leading-relaxed">
                    <span className="text-accent mt-2 size-1 rounded-full bg-accent shrink-0"></span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/10 flex gap-4 font-mono text-[9px] uppercase tracking-widest text-white/40">
                <span>Tecnologia / IA</span>
                <span>·</span>
                <span>Governança</span>
                <span>·</span>
                <span>Quickwins</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const clients = [
  "ABC", "CARBEL AUTO GROUP", "Grupo Zelo", "Piovetss", "Apoio Mineiro",
  "Supermercados Nagumo", "Banana Brasil", "Angus", "BORA",
  "Grupo Dec Minas Distribuição e Logística", "Big Box", "Supernosso",
  "Be Honest", "Macré", "Orgânico do Chico", "Terral",
];

function Clients() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="max-w-2xl mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">
          Onde fizemos
        </span>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight">
          Empresas que confiaram na <span className="italic">SPAC</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-foreground/10">
        {clients.map((c) => (
          <div
            key={c}
            className="border-r border-b border-foreground/10 p-8 min-h-[110px] flex items-center justify-center text-center font-serif text-lg md:text-xl hover:bg-foreground hover:text-background transition-colors"
          >
            {c}
          </div>
        ))}
      </div>
    </section>
  );
}

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

function CTASection() {
  return (
    <section id="contato" className="py-32 px-6 bg-accent/5 border-t border-foreground/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
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

function SiteFooter() {
  return (
    <footer className="py-20 px-6 border-t border-foreground/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-sm">
          <div className="font-serif italic text-3xl mb-4">SPAC</div>
          <p className="text-muted text-sm leading-relaxed mb-6">
            Democratizar a transformação para todos que querem fazer a diferença.
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
              <li><a href="#quem-somos" className="hover:text-accent">Quem Somos</a></li>
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
