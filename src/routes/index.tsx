import { createFileRoute } from "@tanstack/react-router";
import pillarsMarble from "@/assets/pillars-marble.jpg";
import insight1 from "@/assets/insight-1.jpg";
import insight2 from "@/assets/insight-2.jpg";
import insight3 from "@/assets/insight-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SPAC Gestão — Consultoria Estratégica com IA para empresários" },
      {
        name: "description",
        content:
          "Estruture sua gestão de resultados com o rigor de uma consultoria global e o diferencial da inteligência artificial aplicada ao seu negócio.",
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
      <Credentials />
      <Pillars />
      <AISection />
      <Method />
      <Testimonial />
      <Insights />
      <CTASection />
      <SiteFooter />
    </div>
  );
}

function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/85 backdrop-blur-md border-b border-foreground/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#top" className="font-serif italic text-2xl tracking-tight">
          SPAC
        </a>
        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.22em] font-medium text-muted">
          <a href="#pilares" className="hover:text-foreground transition-colors">
            Pilares
          </a>
          <a href="#ia" className="hover:text-foreground transition-colors">
            IA & Dados
          </a>
          <a href="#metodo" className="hover:text-foreground transition-colors">
            Método
          </a>
          <a href="#insights" className="hover:text-foreground transition-colors">
            Insights
          </a>
        </div>
        <a
          href="#diagnostico"
          className="px-5 py-2.5 bg-foreground text-background text-[11px] uppercase tracking-widest font-semibold hover:bg-accent transition-colors"
        >
          Agendar Diagnóstico
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header id="top" className="relative px-6 pt-24 pb-32 max-w-7xl mx-auto">
      <div className="max-w-4xl animate-fade-up">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6 block">
          Consultoria Estratégica Premium
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance mb-10">
          A precisão da inteligência{" "}
          <span className="italic text-accent">potencializada</span> pela tecnologia.
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl mb-12 leading-relaxed">
          Transformamos a complexidade de operações de médio e grande porte em resultados
          exponenciais — combinando o rigor de uma consultoria global com IA proprietária
          aplicada ao seu negócio.
        </p>
        <div className="flex flex-wrap gap-6 items-center">
          <a
            href="#diagnostico"
            className="px-8 py-4 bg-foreground text-background text-xs uppercase tracking-[0.22em] font-bold hover:bg-accent transition-all"
          >
            Iniciar Diagnóstico
          </a>
          <div className="flex -space-x-3">
            <div className="size-10 rounded-full border-2 border-background bg-stone-300"></div>
            <div className="size-10 rounded-full border-2 border-background bg-stone-400"></div>
            <div className="size-10 rounded-full border-2 border-background bg-accent grid place-items-center text-[9px] font-bold text-background">
              +40
            </div>
          </div>
          <span className="text-[11px] text-muted tracking-wide">
            Empresários que faturam de R$ 5M a R$ 500M confiam na SPAC.
          </span>
        </div>
      </div>
    </header>
  );
}

const stats = [
  { value: "R$ 4.2B", label: "Capital sob Consultoria" },
  { value: "150+", label: "Projetos entregues" },
  { value: "12 Anos", label: "Atuação no mercado" },
  { value: "98%", label: "Taxa de retenção" },
];

function Credentials() {
  return (
    <section className="border-y border-foreground/5 bg-white/50">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-foreground/5">
        {stats.map((s) => (
          <div key={s.label} className="p-10 md:p-12 text-center">
            <div className="font-serif text-4xl md:text-5xl mb-2">{s.value}</div>
            <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const pillars = [
  {
    n: "01",
    title: "Estratégia Corporativa",
    desc: "Redesenho de modelo de negócio para escalabilidade e liderança setorial, com clareza sobre onde a empresa realmente ganha dinheiro.",
  },
  {
    n: "02",
    title: "IA & Engenharia de Dados",
    desc: "Modelos preditivos, automação inteligente e agentes proprietários integrados ao core do negócio para antecipar mercado e otimizar margem.",
  },
  {
    n: "03",
    title: "Gestão de Resultados",
    desc: "Rituais executivos, indicadores e disciplina gerencial que traduzem estratégia em execução impecável no C-Level.",
  },
  {
    n: "04",
    title: "Transformação",
    desc: "Mudança cultural e capacitação da liderança para operar com fluência na era da inteligência artificial.",
  },
];

function Pillars() {
  return (
    <section id="pilares" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">
            O que fazemos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mb-10 leading-tight">
            Pilares de <span className="italic">Transformação</span>
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
        <div className="space-y-14 md:pt-24">
          {pillars.map((p) => (
            <div key={p.n} className="group border-b border-foreground/5 pb-14 last:border-0">
              <span className="font-mono text-xs text-accent mb-4 block">{p.n} /</span>
              <h3 className="text-2xl md:text-3xl font-serif mb-4 group-hover:translate-x-2 transition-transform duration-500">
                {p.title}
              </h3>
              <p className="text-muted leading-relaxed max-w-lg">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AISection() {
  return (
    <section id="ia" className="bg-dark text-background py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <div className="grid grid-cols-12 h-full w-full divide-x divide-white/30">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i}></div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <div className="inline-block px-3 py-1 border border-accent/40 rounded-full font-mono text-[9px] uppercase tracking-widest text-accent mb-8">
              Data-Driven Intelligence
            </div>
            <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
              Decisões baseadas em{" "}
              <span className="italic text-accent">algoritmos</span>, não em intuições.
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-lg leading-relaxed">
              Usamos IA generativa, análise preditiva e agentes autônomos para mapear
              ineficiências invisíveis, prever cenários e liberar tempo executivo — sem
              perder o rigor consultivo que o seu conselho exige.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="border-l-2 border-accent pl-6">
                <div className="text-3xl font-mono mb-1">-22%</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">
                  Custo Operacional
                </div>
              </div>
              <div className="border-l-2 border-accent pl-6">
                <div className="text-3xl font-mono mb-1">+14%</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">
                  Margem EBITDA
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="bg-white/[0.04] border border-white/10 p-8 aspect-video backdrop-blur-sm">
              <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                <span className="font-mono text-[10px] text-accent uppercase tracking-widest">
                  SPAC Neural Core · v2.4
                </span>
                <div className="size-2 rounded-full bg-accent animate-pulse"></div>
              </div>
              <div className="space-y-5">
                {[
                  ["Margem por unidade", "78%"],
                  ["Ineficiências mapeadas", "52%"],
                  ["Cenários simulados", "91%"],
                  ["Custos ocultos detectados", "64%"],
                ].map(([label, pct]) => (
                  <div key={label}>
                    <div className="flex justify-between text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">
                      <span>{label}</span>
                      <span>{pct}</span>
                    </div>
                    <div className="h-[3px] w-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-accent"
                        style={{ width: pct as string }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 font-mono text-[9px] text-white/30 grid grid-cols-3">
                <span>SCANNING_ASSETS…</span>
                <span className="text-center">MODEL_READY</span>
                <span className="text-right">0.0042s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    n: "I",
    title: "Diagnóstico",
    desc: "Mergulho estruturado nos números, processos e cultura para revelar as principais distorções e alavancas de valor.",
  },
  {
    n: "II",
    title: "Arquitetura",
    desc: "Desenho da lógica financeira, do modelo de gestão e da camada de IA que sustentarão a próxima curva de crescimento.",
  },
  {
    n: "III",
    title: "Implementação",
    desc: "Execução conjunta com a liderança, com rituais, indicadores e sistemas rodando dentro da sua operação.",
  },
  {
    n: "IV",
    title: "Autonomia",
    desc: "Capacitação do time e transferência de método para que a empresa opere com o padrão SPAC de forma perene.",
  },
];

function Method() {
  return (
    <section id="metodo" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="max-w-2xl mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">
          Como trabalhamos
        </span>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight">
          Um método construído em salas de conselho{" "}
          <span className="italic">e em operações bilionárias.</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10">
        {steps.map((s) => (
          <div
            key={s.n}
            className="bg-background p-10 hover:bg-white/70 transition-colors"
          >
            <div className="font-serif italic text-5xl text-accent mb-8">{s.n}</div>
            <h3 className="text-xl font-serif mb-3">{s.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="py-24 px-6 bg-white/50 border-y border-foreground/5">
      <div className="max-w-4xl mx-auto text-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-8 block">
          Palavra de quem lidera
        </span>
        <blockquote className="font-serif text-3xl md:text-4xl italic leading-tight text-balance mb-10">
          “A SPAC não apenas apontou o caminho — construiu com a nossa equipe as
          ferramentas e o método que hoje sustentam a nossa liderança de mercado.”
        </blockquote>
        <div className="text-sm font-semibold">Ricardo Almeida</div>
        <div className="text-xs text-muted uppercase tracking-widest mt-1">
          CEO · Grupo Horizonte
        </div>
      </div>
    </section>
  );
}

const insights = [
  {
    tag: "Estratégia / 2026",
    title: "A nova era da eficiência operacional no Brasil pós-digital.",
    img: insight1,
  },
  {
    tag: "IA / 2026",
    title: "Como modelos LLM proprietários protegem o IP das grandes firmas.",
    img: insight2,
  },
  {
    tag: "Gestão / 2026",
    title: "Liderança executiva em tempos de incerteza algorítmica.",
    img: insight3,
  },
];

function Insights() {
  return (
    <section id="insights" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <h2 className="font-serif text-4xl md:text-5xl">Insights</h2>
        <a
          href="#"
          className="text-xs uppercase tracking-widest border-b border-foreground/20 pb-1 hover:border-foreground transition-all"
        >
          Ver todas as teses
        </a>
      </div>
      <div className="grid md:grid-cols-3 gap-10 md:gap-12">
        {insights.map((post) => (
          <article key={post.title} className="group cursor-pointer">
            <div className="overflow-hidden mb-6">
              <img
                src={post.img}
                alt={post.title}
                width={800}
                height={533}
                loading="lazy"
                className="w-full aspect-[3/2] object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
              />
            </div>
            <span className="font-mono text-[9px] text-accent uppercase tracking-widest">
              {post.tag}
            </span>
            <h3 className="text-xl font-serif mt-3 leading-snug group-hover:text-accent transition-colors">
              {post.title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section
      id="diagnostico"
      className="py-32 px-6 bg-accent/5 border-t border-foreground/5"
    >
      <div className="max-w-3xl mx-auto text-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6 block">
          Diagnóstico estratégico
        </span>
        <h2 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">
          Pronto para o próximo{" "}
          <span className="italic">salto operacional?</span>
        </h2>
        <p className="text-muted mb-12 max-w-xl mx-auto">
          Receba um plano preliminar com as principais distorções financeiras e alavancas
          de rentabilidade da sua empresa antes de qualquer compromisso.
        </p>
        <form
          className="bg-white p-8 md:p-12 shadow-2xl shadow-black/5 ring-1 ring-black/5 text-left grid gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              required
              placeholder="Nome completo"
              className="border-b border-foreground/15 py-3 text-sm focus:border-accent outline-hidden bg-transparent"
            />
            <input
              type="email"
              required
              placeholder="E-mail corporativo"
              className="border-b border-foreground/15 py-3 text-sm focus:border-accent outline-hidden bg-transparent"
            />
          </div>
          <input
            type="text"
            placeholder="Empresa e cargo"
            className="border-b border-foreground/15 py-3 text-sm focus:border-accent outline-hidden bg-transparent"
          />
          <input
            type="text"
            placeholder="Faturamento anual aproximado"
            className="border-b border-foreground/15 py-3 text-sm focus:border-accent outline-hidden bg-transparent"
          />
          <button
            type="submit"
            className="w-full py-5 bg-foreground text-background text-xs uppercase tracking-[0.3em] font-bold mt-4 hover:bg-accent transition-all"
          >
            Solicitar Diagnóstico Estratégico
          </button>
        </form>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="py-20 px-6 border-t border-foreground/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <div className="font-serif italic text-3xl mb-4">SPAC</div>
          <p className="text-muted text-[11px] uppercase tracking-widest max-w-xs">
            Estratégia · Gestão · Inteligência
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16">
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest mb-6">
              Escritórios
            </h5>
            <ul className="text-xs text-muted space-y-2">
              <li>São Paulo — Faria Lima</li>
              <li>Rio de Janeiro — Centro</li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest mb-6">
              Social
            </h5>
            <ul className="text-xs text-muted space-y-2">
              <li>
                <a href="#" className="hover:text-accent">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent">
                  Insights
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest mb-6">
              Legal
            </h5>
            <ul className="text-xs text-muted space-y-2">
              <li>Privacidade</li>
              <li>Termos</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-muted uppercase tracking-[0.2em]">
        <span>© 2026 SPAC Gestão · Todos os direitos reservados</span>
        <span>Powered by Proprietary Intelligence</span>
      </div>
    </footer>
  );
}
