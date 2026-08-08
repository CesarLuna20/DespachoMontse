import { useEffect, useState, type FormEvent } from 'react';
import { ArrowDownRight, ArrowUpRight, Check, ChevronDown, Clock3, FileText, Gavel, Landmark, Menu, Phone, Scale, ShieldCheck, X } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import emblemReference from '@assets/image_1786079626761.png';

type Practice = {
  number: string;
  title: string;
  copy: string;
  icon: typeof Gavel;
};

const practices: Practice[] = [
  { number: '01', title: 'Derecho civil', copy: 'Solidez jurídica en contratos, bienes y acuerdos para proteger su patrimonio.', icon: Landmark },
  { number: '02', title: 'Infonavit', copy: 'Asesoría y regularización efectiva para proteger su crédito y patrimonio habitacional.', icon: Gavel },
  { number: '03', title: 'Derecho familiar', copy: 'Acompañamiento humano y contundencia legal en el resguardo de los intereses familiares..', icon: Scale },
  { number: '04', title: 'Prevención y cumplimiento', copy: 'Diagnóstico y blindaje normativo para evitar litigios antes de que ocurran.', icon: ShieldCheck },
];

const steps = [
  { no: '01', title: 'Escuchamos', copy: 'Antes de hablar de soluciones, entendemos el contexto completo: lo que pasó, lo que está en juego y lo que usted necesita proteger.' },
  { no: '02', title: 'Ordenamos', copy: 'Traducimos la complejidad en escenarios claros. Sin letra pequeña, sin promesas vacías: solo información que permite decidir.' },
  { no: '03', title: 'Actuamos', copy: 'Construimos y ejecutamos la estrategia con precisión, comunicación constante y la determinación que cada caso exige.' },
];

function Monogram({ light = false, small = false }: { light?: boolean; small?: boolean }) {
  return (
    <div className={`relative ${small ? 'h-10 w-10' : 'h-24 w-24'} ${light ? 'text-[#e6e0d2]' : 'text-[#1e2435]'}`} aria-label="M&A Abogados">
      <svg viewBox="0 0 100 100" className="h-full w-full" role="img" aria-label="Emblema M&A">
        <path d="M10 79V18h12l28 39L78 18h12v61M16 79h18M66 79h18M19 84h25M56 84h25" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="square" />
        <path d="M50 18v44M50 31 36 79M50 31l14 48M34 50c11 3 21 3 32 0M29 48l8 1-5 12c-2 4-8 4-10 0l-5-12 12-1ZM71 48l8 1-5 12c-2 4-8 4-10 0l-5-12 12-1Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
      {!small && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 font-mono text-[7px] tracking-[.28em] whitespace-nowrap">M&A</span>}
    </div>
  );
}

function IntroScreen({ onSkip, fast = false }: { onSkip: () => void; fast?: boolean }) {
  return (
    <div className={`intro-screen ${fast ? 'submit-intro' : ''} fixed inset-0 z-[100] flex min-h-[100dvh] items-center justify-center bg-[#171c2b] text-[#e6e0d2]`} aria-label="Presentación de M&A Abogados">
      <button onClick={onSkip} data-testid="button-skip-intro" className="focus-ring absolute right-6 top-6 flex items-center gap-3 mono text-[10px] text-[#b8b9b2] transition-colors hover:text-[#e4bf6a]">
        Omitir <ArrowUpRight size={14} />
      </button>
      <div className="intro-mark flex flex-col items-center">
        <svg viewBox="0 0 300 230" className="h-[210px] w-[270px] max-w-[70vw]" aria-hidden="true">
          <path className="intro-trace" d="M20 180V20h34l96 118L246 20h34v160M38 180h46M216 180h46M42 198h58M200 198h58" fill="none" stroke="#e4bf6a" strokeWidth="5" strokeLinecap="square" />
          <path className="intro-trace-delay" d="M150 20v116M150 54 103 180M150 54l47 126M96 101c36 8 72 8 108 0M77 96l26 3-15 39c-5 12-23 12-28 0L45 99l32-3ZM223 96l26 3-15 39c-5 12-23 12-28 0l-15-39 32-3Z" fill="none" stroke="#e6e0d2" strokeWidth="3.5" strokeLinejoin="round" />
        </svg>
        <div className="intro-wordmark mt-5 text-center">
          <p className="display text-3xl tracking-[.12em]">M&A ABOGADOS</p>
          <p className="mono mt-2 text-[10px] text-[#b8b9b2]">Consorcio jurídico</p>
        </div>
      </div>
      <div className="mono absolute bottom-8 left-6 text-[9px] text-[#747a86]">Claridad que protege</div>
    </div>
  );
}

function App() {
  const [intro, setIntro] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitIntro, setSubmitIntro] = useState(false);
  const [openPractice, setOpenPractice] = useState<string | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) setIntro(false);
    const timer = window.setTimeout(() => setIntro(false), 3910);
    return () => window.clearTimeout(timer);
  }, []);

  const closeMenu = () => setMobileMenu(false);
  const completeSubmission = () => {
    setSubmitIntro(false);
    setSent(true);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    setSent(false);
    setSubmitIntro(true);
    window.setTimeout(completeSubmission, 3100);
  };

  return (
    <div className="site-noise overflow-x-hidden bg-[#f1eee6] text-[#1e2435]">
      {submitIntro ? <IntroScreen fast onSkip={completeSubmission} /> : intro && <IntroScreen onSkip={() => setIntro(false)} />}
      <header className="absolute left-0 right-0 top-0 z-40">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 lg:px-10">
          <a href="#inicio" onClick={closeMenu} className="focus-ring flex items-center gap-3" data-testid="link-brand">
            <Monogram small light={false} />
            <span className="hidden border-l border-[#c9c3b5] pl-3 text-[11px] font-semibold leading-tight tracking-[.08em] sm:block">M&A<br /><span className="font-normal tracking-[.18em] text-[#646879]">ABOGADOS</span></span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
            <a href="#firma" className="nav-link focus-ring text-[12px] font-medium text-[#45495b]" data-testid="link-firma">La firma</a>
            <a href="#practicas" className="nav-link focus-ring text-[12px] font-medium text-[#45495b]" data-testid="link-practicas">Áreas de práctica</a>
            <a href="#metodo" className="nav-link focus-ring text-[12px] font-medium text-[#45495b]" data-testid="link-metodo">Nuestro método</a>
            <a href="#contacto" className="focus-ring ml-2 flex items-center gap-2 border border-[#1e2435] px-4 py-2.5 text-[11px] font-semibold tracking-[.04em] transition-colors hover:bg-[#1e2435] hover:text-[#f1eee6]" data-testid="link-contacto-nav">Hablemos <ArrowUpRight size={14} /></a>
          </nav>
          <button onClick={() => setMobileMenu(!mobileMenu)} className="focus-ring flex h-10 w-10 items-center justify-center border border-[#c9c3b5] md:hidden" aria-label={mobileMenu ? 'Cerrar menú' : 'Abrir menú'} data-testid="button-mobile-menu">
            {mobileMenu ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        {mobileMenu && (
          <nav className="absolute left-4 right-4 top-[72px] flex flex-col gap-1 border border-[#c9c3b5] bg-[#f1eee6] p-3 shadow-[0_14px_35px_rgba(30,36,53,.12)] md:hidden" aria-label="Navegación móvil">
            {[['#firma', 'La firma'], ['#practicas', 'Áreas de práctica'], ['#metodo', 'Nuestro método'], ['#contacto', 'Hablemos']].map(([href, label]) => <a key={href} href={href} onClick={closeMenu} className="focus-ring flex items-center justify-between border-b border-[#d9d4c9] px-3 py-4 text-sm last:border-0" data-testid={`link-mobile-${label.toLowerCase().replaceAll(' ', '-')}`}>{label}<ArrowUpRight size={15} /></a>)}
          </nav>
        )}
      </header>

      <iframe name="formsubmit-iframe" title="Confirmación de envío" className="hidden" aria-hidden="true" />
      <main>
        <section id="inicio" className="relative flex min-h-[760px] items-end overflow-hidden bg-[#e8e5dc] pb-16 pt-32 md:min-h-[850px] md:pb-24">
          <div className="absolute right-[-10%] top-0 h-[115%] w-[70%] bg-[#d9d6cf] [clip-path:polygon(40%_0,100%_0,100%_100%,0_100%)] md:w-[56%]" />
          <div className="absolute right-[13%] top-[20%] hidden h-[440px] w-[1px] bg-[#c2bdaa] md:block" />
          <div className="absolute right-[16%] top-[42%] hidden h-[1px] w-[260px] bg-[#c2bdaa] md:block" />
          <div className="hero-content relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-10">
            <div className="grid items-end gap-12 md:grid-cols-[1.1fr_.9fr]">
              <div>
                <p className="eyebrow mb-7">M&A abogados </p>
                <h1 className="display max-w-[790px] text-[clamp(3.8rem,9.5vw,8.5rem)] leading-[.88] tracking-[-.055em] text-[#1e2435]">La ley,<br /><em className="text-[#9a702b]">en claro.</em></h1>
                <p className="mt-9 max-w-[430px] text-[15px] leading-[1.75] text-[#545765]">Defendemos lo que importa con rigor, criterio y una forma de acompañar que se siente humana.</p>
                <div className="mt-10 flex flex-wrap items-center gap-5">
                  <a href="#contacto" className="focus-ring inline-flex items-center gap-3 bg-[#1e2435] px-5 py-3.5 text-[11px] font-semibold tracking-[.04em] text-[#f1eee6] transition-colors hover:bg-[#9a702b]" data-testid="link-hero-contacto">Cuéntenos su caso <ArrowUpRight size={15} /></a>
                  <a href="#firma" className="focus-ring inline-flex items-center gap-2 text-[11px] font-semibold text-[#45495b]" data-testid="link-hero-firma">Conózcanos <ArrowDownRight size={16} className="text-[#9a702b]" /></a>
                </div>
              </div>
              <div className="hidden justify-end pb-5 md:flex">
                <div className="max-w-[215px] border-l border-[#a9a698] pl-5">
                  <Monogram />
                  <p className="mt-5 text-[11px] leading-[1.6] text-[#666a74]">Un consorcio jurídico para decisiones que merecen hacerse bien.</p>
                </div>
              </div>
            </div>
            <div className="mt-20 flex items-center gap-4 text-[#747783]">
              <span className="mono text-[9px]">Deslice para explorar</span><span className="h-px w-14 bg-[#b7b3a9]" /><ChevronDown size={14} />
            </div>
          </div>
        </section>

        <section id="firma" className="bg-[#f1eee6] px-6 py-24 md:py-36 lg:px-10">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-14 md:grid-cols-[.75fr_1.25fr] md:gap-24">
              <div>
                <p className="eyebrow">La firma</p>
                <p className="display mt-8 max-w-[290px] text-3xl leading-[1.12] md:text-4xl">La tranquilidad también se <em>defiende.</em></p>
              </div>
              <div>
                <div className="section-rule mb-8" />
                <p className="max-w-[670px] text-[clamp(1.4rem,2.8vw,2.3rem)] leading-[1.3] tracking-[-.025em] text-[#303548]">No creemos en respuestas automáticas. Creemos en mirar cada asunto de frente, encontrar el hilo y convertir la incertidumbre en un camino posible.</p>
                <div className="mt-12 grid gap-8 border-t border-[#d1ccc0] pt-7 sm:grid-cols-3">
                  <div><p className="display text-4xl text-[#9a702b]"></p><p className="mono mt-2 text-[9px] text-[#6f7078]"></p></div>
                  <div><p className="display text-4xl text-[#9a702b]">1:1</p><p className="mono mt-2 text-[9px] text-[#6f7078]">trato en cada caso</p></div>
                  <div><p className="display text-4xl text-[#9a702b]"></p><p className="mono mt-2 text-[9px] text-[#6f7078]"></p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="practicas" className="bg-[#1e2435] px-6 py-24 text-[#f1eee6] md:py-32 lg:px-10">
          <div className="mx-auto max-w-[1280px]">
            <div className="flex flex-col justify-between gap-7 border-b border-[#444958] pb-9 md:flex-row md:items-end">
              <div><p className="eyebrow">Áreas de práctica</p><h2 className="display mt-5 max-w-[610px] text-5xl leading-[.98] tracking-[-.04em] md:text-7xl">La precisión no<br /><em>es opcional.</em></h2></div>
              <p className="max-w-[240px] text-[13px] leading-[1.65] text-[#a9acb2]">Una mirada integral para proteger sus intereses hoy y abrir posibilidades mañana.</p>
            </div>
            <div className="mt-10 grid gap-3 md:grid-cols-2">
              {practices.map(({ number, title, copy, icon: Icon }) => {
                const isOpen = openPractice === number;
                return (
                  <button key={number} onClick={() => setOpenPractice(isOpen ? null : number)} className="practice-card focus-ring group relative min-h-[230px] border border-[#444958] p-6 text-left md:p-8" data-testid={`button-practice-${number}`}>
                    <div className="flex items-start justify-between"><span className="card-number mono text-[10px] text-[#858b97]">{number}</span><Icon size={23} strokeWidth={1.2} className="text-[#e4bf6a]" /></div>
                    <div className="mt-16 flex items-end justify-between gap-5"><div><h3 className="display text-2xl md:text-3xl">{title}</h3><p className={`card-copy mt-3 max-w-[320px] text-[13px] leading-[1.55] text-[#a9acb2] transition-all ${isOpen ? 'block' : 'hidden md:block'}`}>{copy}</p></div><ArrowUpRight size={19} className="gold-arrow shrink-0 text-[#e4bf6a]" /></div>
                  </button>
                );
              })}
            </div>
            <div className="mt-12 flex items-center gap-4"><FileText size={18} className="text-[#e4bf6a]" /><p className="text-[12px] text-[#a9acb2]">¿No encuentra su situación? <a href="#contacto" className="focus-ring ml-1 border-b border-[#e4bf6a] pb-1 text-[#e4bf6a]" data-testid="link-practice-contacto">Descríbala y la revisamos.</a></p></div>
          </div>
        </section>

        <section id="metodo" className="bg-[#d8d4ca] px-6 py-24 md:py-32 lg:px-10">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr] md:gap-24">
              <div><p className="eyebrow">Nuestro método</p><h2 className="display mt-7 text-5xl leading-[.98] tracking-[-.04em] md:text-7xl">Menos ruido.<br /><em>Más rumbo.</em></h2><p className="mt-8 max-w-[270px] text-[13px] leading-[1.7] text-[#5d6069]">El buen derecho no debería agregar incertidumbre. Debería quitarla.</p></div>
              <div className="border-t border-[#b7b1a5]">
                {steps.map((step) => <div key={step.no} className="grid gap-4 border-b border-[#b7b1a5] py-7 sm:grid-cols-[60px_160px_1fr] sm:gap-7"><span className="mono pt-1 text-[10px] text-[#9a702b]">{step.no}</span><h3 className="display text-2xl text-[#303548]">{step.title}</h3><p className="max-w-[370px] text-[13px] leading-[1.65] text-[#61636b]">{step.copy}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#9a702b] px-6 py-20 text-[#f6f1e8] md:py-28 lg:px-10">
          <div className="absolute right-[-30px] top-[-80px] opacity-[.13]"><Monogram light /></div>
          <div className="relative mx-auto max-w-[1280px]"><p className="eyebrow !text-[#f4d88d]">Una relación de confianza</p><blockquote className="display mt-7 max-w-[920px] text-[clamp(2rem,5vw,4.6rem)] leading-[1.02] tracking-[-.04em]">“Cuando todo parece urgente, tener a alguien que piensa con claridad cambia el resultado.”</blockquote><p className="mono mt-8 text-[9px] text-[#f4d88d]">— La forma M&A de hacer equipo</p></div>
        </section>

        <section id="contacto" className="bg-[#f1eee6] px-6 py-24 md:py-36 lg:px-10">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-16 md:grid-cols-[.8fr_1.2fr] md:gap-24">
              <div><p className="eyebrow">Contacto</p><h2 className="display mt-7 text-5xl leading-[.98] tracking-[-.04em] md:text-7xl">Hablemos<br /><em>con calma.</em></h2><p className="mt-8 max-w-[270px] text-[13px] leading-[1.7] text-[#60636c]">La primera conversación es para entender. Cuéntenos lo esencial y le responderemos en un plazo de 24 horas hábiles.</p><div className="mt-9 space-y-4 text-[12px] text-[#4f5360]"><a href="mailto:hola@mayabogados.com" className="focus-ring flex items-center gap-3 hover:text-[#9a702b]" data-testid="link-email"><span className="grid h-7 w-7 place-items-center border border-[#c9c3b5]"><ArrowUpRight size={13} /></span>hola@mayabogados.com</a><a href="tel:+525555017428" className="focus-ring flex items-center gap-3 hover:text-[#9a702b]" data-testid="link-phone"><span className="grid h-7 w-7 place-items-center border border-[#c9c3b5]"><Phone size={13} /></span>+52 55 5501 7428</a><a href="https://wa.me/525555017428?text=Hola%20M%26A%20Abogados%2C%20me%20gustar%C3%ADa%20recibir%20orientaci%C3%B3n." target="_blank" rel="noreferrer" className="focus-ring flex items-center gap-3 hover:text-[#9a702b]" data-testid="link-whatsapp"><span className="grid h-7 w-7 place-items-center border border-[#c9c3b5]"><FaWhatsapp size={14} /></span>WhatsApp</a><a href="https://www.instagram.com/ma.abogados/" target="_blank" rel="noreferrer" className="focus-ring flex items-center gap-3 hover:text-[#9a702b]" data-testid="link-instagram"><span className="grid h-7 w-7 place-items-center border border-[#c9c3b5]"><FaInstagram size={14} /></span>@ma.abogados</a></div></div>
              <div className="border-t border-[#cbc6b9] pt-7">
                {sent ? <div className="flex min-h-[360px] flex-col items-start justify-center"><div className="grid h-12 w-12 place-items-center bg-[#1e2435] text-[#e4bf6a]"><Check size={22} /></div><h3 className="display mt-7 text-4xl">Tu situación se ha enviado correctamente.</h3><p className="mt-3 max-w-[390px] text-[14px] leading-[1.6] text-[#61636b]">Te contactaremos a la brevedad.</p><button onClick={() => setSent(false)} className="focus-ring mt-8 border-b border-[#9a702b] pb-1 text-[11px] font-semibold text-[#9a702b]" data-testid="button-send-another">Enviar otro mensaje</button></div> : <form action="https://formsubmit.co/splash.vuelve@gmail.com" method="POST" target="formsubmit-iframe" onSubmit={handleSubmit} className="space-y-7" data-testid="form-contacto"><input type="hidden" name="_subject" value="Nueva consulta desde M&A Abogados" /><input type="hidden" name="_captcha" value="false" /><input type="hidden" name="_template" value="table" /><div className="grid gap-7 sm:grid-cols-2"><label className="block"><span className="mono text-[9px] text-[#737580]">Su nombre</span><input required name="name" placeholder="Nombre completo" className="focus-ring mt-3 w-full border-0 border-b border-[#bdb8ac] bg-transparent px-0 pb-3 text-[14px] placeholder:text-[#98999c] focus:border-[#9a702b] focus:outline-none" data-testid="input-name" /></label><label className="block"><span className="mono text-[9px] text-[#737580]">Su teléfono</span><input required type="tel" name="phone" placeholder="+52 55 5501 7428" inputMode="tel" className="focus-ring mt-3 w-full border-0 border-b border-[#bdb8ac] bg-transparent px-0 pb-3 text-[14px] placeholder:text-[#98999c] focus:border-[#9a702b] focus:outline-none" data-testid="input-phone" /></label></div><label className="block"><span className="mono text-[9px] text-[#737580]">¿En qué podemos ayudarle?</span><textarea required name="message" rows={4} placeholder="Cuéntenos brevemente su situación..." className="focus-ring mt-3 w-full resize-none border-0 border-b border-[#bdb8ac] bg-transparent px-0 pb-3 text-[14px] placeholder:text-[#98999c] focus:border-[#9a702b] focus:outline-none" data-testid="input-message" /></label><div className="flex flex-col justify-between gap-5 pt-2 sm:flex-row sm:items-center"><p className="flex items-center gap-2 text-[11px] text-[#71737c]"><Clock3 size={14} className="text-[#9a702b]" /> Respuesta en 24 horas hábiles</p><button type="submit" className="focus-ring flex items-center justify-center gap-3 bg-[#1e2435] px-6 py-4 text-[11px] font-semibold text-[#f1eee6] transition-colors hover:bg-[#9a702b]" data-testid="button-submit-contact">Enviar consulta <ArrowUpRight size={15} /></button></div></form>}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#171c2b] px-6 pb-8 pt-14 text-[#e6e0d2] lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-8 border-b border-[#3c4250] py-10 md:grid-cols-[.65fr_1.35fr] md:items-center">
            <div>
              <p className="eyebrow !text-[#e4bf6a]">Dónde encontrarnos</p>
              <a href="https://www.google.com/maps/search/?api=1&query=19.985538%2C-102.284119" target="_blank" rel="noreferrer" className="focus-ring mt-4 block max-w-[330px] text-[13px] leading-[1.7] text-[#e6e0d2] transition-colors hover:text-[#e4bf6a]" data-testid="link-address">
                C. Hidalgo Sur 145-int 11<br />
                Centro, 59600 Zamora de Hidalgo, Michoacán
              </a>
              
            </div>
            <div className="overflow-hidden border border-[#3c4250] bg-[#252b3b]">
              <iframe
                title="Ubicación de M&A Abogados en Zamora de Hidalgo"
                src="https://www.google.com/maps?q=19.985538%2C-102.284119&z=17&output=embed"
                className="h-[230px] w-full grayscale-[.35] contrast-[.9] md:h-[250px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                data-testid="map-location"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-12 border-b border-[#3c4250] py-14 md:flex-row md:items-end">
            <div><Monogram light /><p className="mt-7 max-w-[250px] text-[12px] leading-[1.65] text-[#9ea2ab]">Claridad legal para decisiones que importan.</p></div>
            <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-[12px] text-[#b6b8bd]"><a href="#firma" className="focus-ring hover:text-[#e4bf6a]" data-testid="link-footer-firma">La firma</a><a href="#practicas" className="focus-ring hover:text-[#e4bf6a]" data-testid="link-footer-practicas">Áreas de práctica</a><a href="#metodo" className="focus-ring hover:text-[#e4bf6a]" data-testid="link-footer-metodo">Nuestro método</a><a href="#contacto" className="focus-ring hover:text-[#e4bf6a]" data-testid="link-footer-contacto">Contacto</a></div>
          </div>
          <div className="flex flex-col justify-between gap-4 pt-6 text-[10px] text-[#747987] sm:flex-row"><p>© {new Date().getFullYear()} M&A Abogados · Consorcio Jurídico</p><p className="mono text-[8px]">Hecho con rigor</p></div>
          <img src={emblemReference} alt="" className="sr-only" aria-hidden="true" />
        </div>
      </footer>
    </div>
  );
}

export default App;