import type { Service } from "@/data/services";
import { Sparkles, Zap, Shield, MessageCircle, Star, Settings, Check } from "lucide-react";

type Props = { service: Service };

export function ServicePage({ service }: Props) {
  const { platform, metricEn, unitLabel, title, heroDescription, startPrice, faqs } = service;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="container mx-auto px-6 pt-20 pb-28 relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 backdrop-blur px-3 py-1 text-xs">
              <span className="size-1.5 rounded-full bg-success animate-pulse" />
              Service active 24/7
            </span>

            <h1 className="mt-6 font-display text-5xl md:text-6xl font-bold leading-[1.05] text-gradient">
              {title} <br /> to boost your credibility
            </h1>

            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl">
              {heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/auth"
                className="inline-flex items-center gap-2 rounded-xl bg-foreground text-background px-6 py-3.5 font-medium shadow-card hover:bg-foreground/90 transition"
              >
                Create my free account →
              </a>
              <a
                href="/auth"
                className="inline-flex items-center rounded-xl bg-secondary/70 backdrop-blur px-6 py-3.5 font-medium border border-border hover:bg-secondary transition"
              >
                Sign in
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { icon: Zap, label: "Delivery starts within minutes" },
                { icon: Shield, label: "Secure payments" },
                { icon: MessageCircle, label: "24/7 support" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2.5 rounded-xl bg-card/60 backdrop-blur border border-border px-4 py-2.5 text-sm"
                >
                  <span className="size-7 rounded-lg bg-secondary flex items-center justify-center">
                    <Icon className="size-4 text-accent" />
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="font-display text-3xl md:text-4xl font-bold max-w-2xl">
          Why choose BoostFollowers for your {platform} {metricEn}
        </h2>
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {[
            {
              icon: Star,
              title: "World's #1 platform",
              desc: `Since 2011, we've been the global reference in the industry. More than 50,000 customers trust us daily to grow their social media. Our experience and stability make all the difference when choosing a serious provider.`,
            },
            {
              icon: Zap,
              title: "Ultra fast start",
              desc: `Once your order is confirmed, delivery of your ${platform} ${unitLabel} starts within minutes. You see your numbers climb without waiting days. A steady, natural pace that strengthens your presence effortlessly.`,
            },
            {
              icon: Settings,
              title: "200+ growth services",
              desc: `${platform} is just the beginning. Our catalog covers TikTok, YouTube, Facebook, Twitter, Spotify and many other platforms. Centralize your entire growth strategy with one provider and save valuable time.`,
            },
            {
              icon: Sparkles,
              title: "Transparent pricing",
              desc: `Transparent prices, displayed before every order. No hidden fees, no surprises: you see the exact price for the chosen quantity before checkout. Starting at ${startPrice}.`,
            },
          ].map(({ icon: Icon, title: t, desc }) => (
            <div
              key={t}
              className="rounded-2xl border border-border bg-gradient-card backdrop-blur p-7 hover:border-primary/40 transition"
            >
              <div className="size-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <Icon className="size-5 text-primary-foreground" />
              </div>
              <h3 className="mt-5 font-display font-semibold text-lg">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STEPS */}
      <section className="border-y border-border bg-secondary/20">
        <div className="container mx-auto px-6 py-24">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center">
            How to buy {platform} {metricEn} in 3 steps
          </h2>
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {[
              {
                n: "1",
                title: "Create your account",
                desc: "Sign up for free in less than 30 seconds. No credit card required at signup, just an email and a password.",
              },
              {
                n: "2",
                title: "Top up your balance",
                desc: "Make a bank transfer or USDC crypto payment. Your balance is credited as soon as the payment is received and lets you order as many services as you want.",
              },
              {
                n: "3",
                title: "Place your order",
                desc: `Pick the ${platform} ${metricEn} service that fits you, paste your profile link, enter the quantity and confirm. Delivery starts within minutes.`,
              },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-card/60 backdrop-blur p-7">
                <div className="size-10 rounded-xl bg-gradient-primary text-primary-foreground font-display font-bold flex items-center justify-center shadow-glow">
                  {s.n}
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center gap-3">
            <a
              href="/auth"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary text-primary-foreground px-6 py-3.5 font-medium shadow-glow hover:opacity-90 transition"
            >
              Get started now →
            </a>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center">
          How much does buying {platform} {metricEn} cost
        </h2>
        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
          Our packages fit every budget, from beginner creators to agencies managing dozens of
          accounts. Discover a few sample prices and head to your client area to access the full
          catalog.
        </p>
        <div className="mt-14 grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {[
            { tier: "STARTER", qty: "100", price: "$0.50", popular: false },
            { tier: "POPULAR", qty: "500", price: "$2.50", popular: true },
            { tier: "PRO", qty: "1000", price: "$5.00", popular: false },
          ].map((p) => (
            <div
              key={p.tier}
              className={`relative rounded-2xl border bg-card/60 backdrop-blur p-7 transition ${
                p.popular ? "border-primary shadow-glow" : "border-border hover:border-primary/40"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1 shadow-glow">
                  MOST POPULAR
                </span>
              )}
              <p className="text-xs font-semibold tracking-widest text-muted-foreground">{p.tier}</p>
              <p className="mt-4 font-display text-5xl font-bold">{p.qty}</p>
              <p className="mt-2 text-sm text-muted-foreground">starting at {p.price}</p>
              <a
                href="/auth"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 font-medium transition ${
                  p.popular
                    ? "bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90"
                    : "bg-foreground text-background hover:bg-foreground/90"
                }`}
              >
                Order
              </a>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a href="/services" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
            See all pricing →
          </a>
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section className="container mx-auto px-6 py-20">
        <div className="rounded-3xl border border-border bg-gradient-card backdrop-blur p-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold">
            An experience built for creators
          </h2>
          <div className="mt-8 grid md:grid-cols-3 gap-5 text-sm">
            {[
              `High-quality ${unitLabel}, delivered at a natural pace`,
              "No password required, security guaranteed",
              "Refill guarantee in case of abnormal drop",
              "Clear dashboard to track your orders",
              "Human support available 7 days a week",
              "Volume discounts on large quantities",
            ].map((f) => (
              <div key={f} className="flex items-start gap-3">
                <span className="mt-0.5 size-5 rounded-md bg-success/15 text-success flex items-center justify-center flex-shrink-0">
                  <Check className="size-3.5" />
                </span>
                <span className="text-muted-foreground">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center">
          Frequently asked questions about buying {platform} {metricEn}
        </h2>
        <div className="mt-12 max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-border bg-card/60 backdrop-blur p-5 open:border-primary/40 transition"
            >
              <summary className="cursor-pointer flex items-center justify-between gap-4 font-medium list-none">
                <span>{f.q}</span>
                <span className="size-7 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground group-open:rotate-45 transition">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 md:p-14 shadow-glow">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
                Ready to boost your {platform}?
              </h2>
              <p className="mt-2 text-primary-foreground/85">
                Join thousands of creators who trust BoostFollowers.
              </p>
            </div>
            <a
              href="/auth"
              className="inline-flex items-center gap-2 rounded-xl bg-background text-foreground px-6 py-3.5 font-medium hover:bg-background/90 transition"
            >
              Order now →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
