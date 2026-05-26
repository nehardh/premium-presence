import auraImg from "@/assets/portfolio-aura.jpg";
import urbanfitImg from "@/assets/portfolio-urbanfit.jpg";
import velvetImg from "@/assets/portfolio-velvet.jpg";

export default function App() {
  return (
    <div className="bg-background text-foreground font-sans">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-mono text-sm tracking-tighter uppercase font-bold">Aura Scale.</a>
          <div className="hidden md:flex gap-8 text-[10px] font-mono uppercase tracking-widest text-muted">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#process" className="hover:text-foreground transition-colors">Process</a>
          </div>
          <a href="#cta" className="px-4 py-1.5 bg-foreground text-background text-[10px] font-mono uppercase tracking-widest font-bold hover:bg-accent hover:text-foreground transition-colors">
            Book Now
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-36 pb-32 px-6 border-b border-white/[0.06] overflow-hidden">

        {/* BACKGROUND GRADIENT GLOW */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/10 blur-[120px] rounded-full pointer-events-none"></div>

        {/* GRID NOISE / TEXTURE (optional) */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* LABEL */}
          <div className="text-accent text-[11px] tracking-[0.35em] uppercase mb-10 animate-reveal">
            [01] Entry Point
          </div>

          {/* HEADLINE */}
          <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] font-extrabold leading-[0.88] tracking-[-0.03em] uppercase mb-10 animate-reveal [animation-delay:100ms]">
            We Build Websites <br />
            <span className="text-white/70">That Bring You Clients</span>
          </h1>

          {/* SUBTEXT */}
          <p className="max-w-xl text-white/60 text-[17px] leading-relaxed mb-14 animate-reveal [animation-delay:200ms]">
            Modern, high-converting websites for local businesses.
            Designed to look premium, built to generate leads.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-6 animate-reveal [animation-delay:300ms]">

            <a
              href="#cta"
              className="px-8 py-4 bg-white text-black text-[12px] tracking-[0.2em] uppercase font-semibold hover:opacity-90 transition"
            >
              Get a Free Demo
            </a>

            <a
              href="#work"
              className="group flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition"
            >
              View Our Work
              <span className="group-hover:translate-x-1 transition">→</span>
            </a>

          </div>

          {/* TRUST LINE */}
          <div className="mt-16 text-xs text-white/40 tracking-wide animate-reveal [animation-delay:400ms]">
            Built for clinics, salons, and service businesses across Telangana
          </div>

        </div>
      </section>

      {/* SOCIAL PROOF */}
      {/* <section className="py-24 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-[10px] text-muted uppercase tracking-[0.25em] mb-16">Trusted by local businesses</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Testimonial n="01" quote="The transformation in our lead volume was immediate. Apex understands the local market better than anyone." author="Mayur Rathod / Mayur Dental" />
            <Testimonial n="02" quote="Finally, an agency that delivers a premium experience start to finish. Our site is now our best salesperson." author="Sarath Chandra / Velvet Salon" />
            <div className="border-l border-border pl-6">
              <span className="font-mono text-[10px] text-muted uppercase block mb-4">Metric / 2024</span>
              <p className="text-4xl font-extrabold tracking-tighter uppercase">340% Increase</p>
              <p className="text-muted mt-2">Average conversion lift for local service providers.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* SERVICES */}
      <section id="services" className="py-32 px-6 border-b border-white/[0.06] bg-black">

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="mb-20">
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-6">
              [02] Capabilities
            </p>

            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl leading-tight">
              Built to elevate your brand and convert attention into clients
            </h2>
          </div>

          {/* SERVICES LIST */}
          <div className="divide-y divide-white/[0.06]">

            {/* ITEM */}
            <div className="group py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-medium tracking-tight group-hover:opacity-70 transition">
                  Website Design
                </h3>
                <p className="text-white/50 mt-2 max-w-md text-sm leading-relaxed">
                  Bespoke interfaces that command attention and drive action.
                </p>
              </div>
              <span className="text-white/30 text-sm group-hover:translate-x-2 transition">
                ↗
              </span>
            </div>

            {/* ITEM */}
            <div className="group py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-medium tracking-tight group-hover:opacity-70 transition">
                  Lead Generation
                </h3>
                <p className="text-white/50 mt-2 max-w-md text-sm leading-relaxed">
                  Custom funnels designed specifically for service conversion.
                </p>
              </div>
              <span className="text-white/30 text-sm group-hover:translate-x-2 transition">
                ↗
              </span>
            </div>

            {/* ITEM */}
            <div className="group py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-medium tracking-tight group-hover:opacity-70 transition">
                  WhatsApp Integration
                </h3>
                <p className="text-white/50 mt-2 max-w-md text-sm leading-relaxed">
                  Direct communication pipelines integrated into your workflow.
                </p>
              </div>
              <span className="text-white/30 text-sm group-hover:translate-x-2 transition">
                ↗
              </span>
            </div>

            {/* ITEM */}
            <div className="group py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-medium tracking-tight group-hover:opacity-70 transition">
                  Local SEO (GMB)
                </h3>
                <p className="text-white/50 mt-2 max-w-md text-sm leading-relaxed">
                  Dominating local searches so customers find you first.
                </p>
              </div>
              <span className="text-white/30 text-sm group-hover:translate-x-2 transition">
                ↗
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="work" className="py-24 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-muted text-[10px] mb-12 uppercase tracking-widest">[03] Selected Work</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Project n="01" name="Aura Dental" tag="Lead Gen Engine" img={auraImg} />
            <Project n="02" name="UrbanFit Gym" tag="Membership Conversion" img={urbanfitImg} />
            <Project n="03" name="Velvet Salon" tag="Booking System" img={velvetImg} />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="process" className="py-32 px-6 border-b border-white/[0.06] bg-black">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">

          {/* LEFT */}
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-6">
              [04] Process
            </p>

            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
              A simple process designed to deliver results
            </h2>
          </div>

          {/* RIGHT */}
          <div className="md:col-span-2 relative">

            {/* VERTICAL LINE */}
            <div className="absolute left-[6px] top-2 bottom-2 w-[1px] bg-white/[0.08]"></div>

            <div className="space-y-16">

              {/* STEP 1 */}
              <div className="relative pl-10 group">
                <div className="absolute left-0 top-1 w-3 h-3 bg-white rounded-full"></div>

                <p className="text-xs text-white/30 tracking-wide mb-2">01</p>

                <h3 className="text-xl md:text-2xl font-medium tracking-tight group-hover:opacity-70 transition">
                  We understand your business
                </h3>

                <p className="text-white/50 mt-3 max-w-md text-sm leading-relaxed">
                  We audit your current presence and define a strategy tailored to your local market and customer behavior.
                </p>
              </div>

              {/* STEP 2 */}
              <div className="relative pl-10 group">
                <div className="absolute left-0 top-1 w-3 h-3 bg-white/70 rounded-full"></div>

                <p className="text-xs text-white/30 tracking-wide mb-2">02</p>

                <h3 className="text-xl md:text-2xl font-medium tracking-tight group-hover:opacity-70 transition">
                  We design and build
                </h3>

                <p className="text-white/50 mt-3 max-w-md text-sm leading-relaxed">
                  Your website is designed and developed within days — fast, refined, and built to convert from day one.
                </p>
              </div>

              {/* STEP 3 */}
              <div className="relative pl-10 group">
                <div className="absolute left-0 top-1 w-3 h-3 bg-green-400 rounded-full"></div>

                <p className="text-xs text-white/30 tracking-wide mb-2">03</p>

                <h3 className="text-xl md:text-2xl font-medium tracking-tight group-hover:opacity-70 transition">
                  You start getting leads
                </h3>

                <p className="text-white/50 mt-3 max-w-md text-sm leading-relaxed">
                  Launch with integrated lead capture, WhatsApp flows, and optimized local visibility.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* VALUE PROPS */}
      <section className="py-24 px-6 border-b border-border bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          <ValueProp label="Speed" headline="3–5 Days" sub="Deployment window" />
          <ValueProp label="Standard" headline="Mobile-First" sub="Every screen optimized" />
          <ValueProp label="Conversion" headline="Lead-Driven" sub="Built to sell, not decorate" />
          <ValueProp label="Location" headline="Hyderabad" sub="Local dedicated support" />
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="cta" className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter mb-12">
            Let's build your online presence the <span className="text-accent italic">right way.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/919493300479" className="px-12 py-5 bg-foreground text-background font-mono text-xs uppercase tracking-widest font-bold hover:bg-accent hover:text-foreground transition-colors">
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-border bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          <div className="col-span-1 md:col-span-2">
            <span className="font-mono text-sm tracking-tighter uppercase font-bold block mb-4">Aura Scale.</span>
            <p className="text-muted text-sm max-w-xs">Elevating local businesses through high-end web design and engineering.</p>
          </div>
          <div>
            <h6 className="font-mono text-[10px] text-foreground uppercase mb-6 tracking-widest">Contact</h6>
            <ul className="space-y-3 font-mono text-xs text-muted uppercase tracking-wider">
              <li><a href="https://wa.me/919493300479" className="hover:text-accent transition-colors">WhatsApp</a></li>
              <li><a href="mailto:nehardh.m@gmail.com" className="hover:text-accent transition-colors">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between">
          <span className="font-mono text-[10px] text-muted uppercase tracking-widest">© 2026 Aura Scale.</span>
          <span className="font-mono text-[10px] text-muted uppercase tracking-widest">Built for Conversion</span>
        </div>
      </footer>
    </div>
  );
}

function Testimonial({ n, quote, author }: { n: string; quote: string; author: string }) {
  return (
    <div className="border-l border-border pl-6">
      <span className="font-mono text-[10px] text-muted uppercase block mb-4">Client Review / {n}</span>
      <p className="italic text-lg mb-6 text-balance">"{quote}"</p>
      <p className="font-mono text-xs text-accent">{author}</p>
    </div>
  );
}

function Project({ n, name, tag, img }: { n: string; name: string; tag: string; img: string }) {
  return (
    <a href="#" className="group block">
      <div className="w-full aspect-[4/5] bg-neutral-900 border border-border mb-6 group-hover:border-accent transition-colors overflow-hidden">
        <img src={img} alt={`${name} website preview`} loading="lazy" width={800} height={1024} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
      </div>
      <h4 className="font-mono text-xs uppercase font-bold mb-1">Project {n} — {name}</h4>
      <p className="text-[10px] text-muted uppercase tracking-widest">{tag}</p>
    </a>
  );
}

function ValueProp({ label, headline, sub }: { label: string; headline: string; sub: string }) {
  return (
    <div>
      <h5 className="font-mono text-[10px] text-muted uppercase mb-4 tracking-widest">{label}</h5>
      <p className="text-2xl font-bold uppercase tracking-tighter">{headline}</p>
      <p className="text-[10px] text-muted uppercase mt-2">{sub}</p>
    </div>
  );
}
