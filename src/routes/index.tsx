import { createFileRoute } from "@tanstack/react-router";
import auraImg from "@/assets/portfolio-aura.jpg";
import urbanfitImg from "@/assets/portfolio-urbanfit.jpg";
import velvetImg from "@/assets/portfolio-velvet.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="bg-background text-foreground font-sans">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-mono text-sm tracking-tighter uppercase font-bold">Apex / Digital</a>
          <div className="hidden md:flex gap-8 text-[10px] font-mono uppercase tracking-widest text-muted">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#process" className="hover:text-foreground transition-colors">Process</a>
          </div>
          <a href="#cta" className="px-4 py-1.5 bg-foreground text-background text-[10px] font-mono uppercase tracking-widest font-bold hover:bg-accent hover:text-foreground transition-colors">
            Free Demo
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-24 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-accent text-xs mb-8 uppercase tracking-[0.3em] animate-reveal">[01] Entry Point</div>
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[0.9] tracking-tighter uppercase mb-12 animate-reveal [animation-delay:100ms]">
            We Build Websites <br />That Bring You Clients
          </h1>
          <p className="max-w-xl text-muted text-lg mb-12 animate-reveal [animation-delay:200ms]">
            Modern, high-converting websites for local businesses. Engineered for speed, built for luxury.
          </p>
          <div className="flex flex-wrap gap-4 animate-reveal [animation-delay:300ms]">
            <a href="#cta" className="px-8 py-4 bg-accent text-white font-mono text-xs uppercase tracking-widest font-bold hover:scale-[1.02] transition-transform">
              Get a Free Demo
            </a>
            <a href="#work" className="px-8 py-4 border border-border font-mono text-xs uppercase tracking-widest font-bold hover:bg-white/5 transition-colors">
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-24 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-[10px] text-muted uppercase tracking-[0.25em] mb-16">Trusted by local businesses</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Testimonial n="01" quote="The transformation in our lead volume was immediate. Apex understands the local market better than anyone." author="Marcus Chen / Aura Dental" />
            <Testimonial n="02" quote="Finally, an agency that delivers a premium experience start to finish. Our site is now our best salesperson." author="Sarah Williams / Velvet Salon" />
            <div className="border-l border-border pl-6">
              <span className="font-mono text-[10px] text-muted uppercase block mb-4">Metric / 2024</span>
              <p className="text-4xl font-extrabold tracking-tighter uppercase">340% Increase</p>
              <p className="text-muted mt-2">Average conversion lift for local service providers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 border-b border-border bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-muted text-[10px] mb-12 uppercase tracking-widest">[02] Capabilities</div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border border border-border">
            <Service mark="solid" title="Website Design" desc="Bespoke interfaces that command attention and drive action." />
            <Service mark="outline" title="Lead Generation" desc="Custom funnels designed specifically for service conversion." />
            <Service mark="muted" title="WhatsApp Sync" desc="Direct communication pipelines integrated into your workflow." />
            <Service mark="outline-muted" title="GMB Local SEO" desc="Dominating local searches so customers find you first." />
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
      <section id="process" className="py-24 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <div className="font-mono text-muted text-[10px] mb-8 uppercase tracking-widest">[04] Deployment</div>
            <h2 className="text-4xl font-extrabold uppercase tracking-tighter">Three steps to dominance</h2>
          </div>
          <div className="md:w-2/3 space-y-12">
            <Step n="01" title="We Understand Your Business" desc="We audit your current presence and map a conversion strategy tailored to your local niche." />
            <Step n="02" title="We Design Your Website" desc="Our team designs and builds your premium site in 3–5 days. No endless back-and-forth, just results." />
            <Step n="03" title="You Get More Leads" desc="Launch with built-in lead tracking, WhatsApp integration, and optimized local search presence." last />
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
            <a href="https://wa.me/919999999999" className="px-12 py-5 bg-foreground text-background font-mono text-xs uppercase tracking-widest font-bold hover:bg-accent hover:text-foreground transition-colors">
              Book a Call
            </a>
            <a href="#" className="px-12 py-5 border border-border font-mono text-xs uppercase tracking-widest font-bold hover:bg-white/5 transition-colors">
              Get Free Demo
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-border bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          <div className="col-span-1 md:col-span-2">
            <span className="font-mono text-sm tracking-tighter uppercase font-bold block mb-4">Apex / Digital</span>
            <p className="text-muted text-sm max-w-xs">Elevating local businesses through high-end web design and engineering.</p>
          </div>
          <div>
            <h6 className="font-mono text-[10px] text-foreground uppercase mb-6 tracking-widest">Contact</h6>
            <ul className="space-y-3 font-mono text-xs text-muted uppercase tracking-wider">
              <li><a href="https://wa.me/919999999999" className="hover:text-accent transition-colors">WhatsApp</a></li>
              <li><a href="mailto:hello@apex.digital" className="hover:text-accent transition-colors">Email</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-mono text-[10px] text-foreground uppercase mb-6 tracking-widest">Office</h6>
            <p className="font-mono text-xs text-muted uppercase tracking-wider">
              Jubilee Hills<br />Hyderabad, India
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between">
          <span className="font-mono text-[10px] text-muted uppercase tracking-widest">© 2026 Apex Digital</span>
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

function Service({ mark, title, desc }: { mark: "solid" | "outline" | "muted" | "outline-muted"; title: string; desc: string }) {
  const markClass = {
    solid: "bg-accent",
    outline: "border border-accent",
    muted: "bg-white/10",
    "outline-muted": "border border-white/10",
  }[mark];
  return (
    <div className="bg-background p-8">
      <div className={`size-8 mb-6 ${markClass}`} />
      <h3 className="font-mono text-xs uppercase font-bold mb-4 tracking-widest">{title}</h3>
      <p className="text-sm text-muted">{desc}</p>
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

function Step({ n, title, desc, last }: { n: string; title: string; desc: string; last?: boolean }) {
  return (
    <div className={`flex gap-8 ${last ? "" : "border-b border-border pb-8"}`}>
      <span className="font-mono text-4xl text-accent">{n}</span>
      <div>
        <h4 className="font-mono text-xs uppercase font-bold mb-2 tracking-widest">{title}</h4>
        <p className="text-muted">{desc}</p>
      </div>
    </div>
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
