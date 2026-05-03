import { createFileRoute, notFound } from "@tanstack/react-router";
import { services } from "@/data/services";
import { isLocale } from "@/i18n/config";
import { buildPath } from "@/i18n/slugs";
import { t as getT } from "@/i18n/translations";
import { Zap, Shield, MessageCircle, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/$locale/")({
  loader: ({ params }) => {
    if (!isLocale(params.locale)) throw notFound();
    return { locale: params.locale };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    const t = getT(loaderData.locale);
    return {
      meta: [
        { title: t.meta.title("Instagram", t.metric.followers) },
        { name: "description", content: t.meta.description("Instagram", t.metric.followers) },
      ],
    };
  },
  component: LocaleHome,
  errorComponent: ({ error }) => <div className="container mx-auto py-20">{error.message}</div>,
  notFoundComponent: () => <div className="container mx-auto py-20 text-center">404</div>,
});

function LocaleHome() {
  const { locale } = Route.useLoaderData();
  const t = getT(locale);
  const grouped = services.reduce<Record<string, typeof services>>((acc, s) => {
    (acc[s.platform] ??= []).push(s);
    return acc;
  }, {});

  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="container mx-auto px-6 pt-24 pb-32 relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 backdrop-blur px-3 py-1 text-xs">
              <span className="size-1.5 rounded-full bg-success animate-pulse" />
              {t.hero.badge}
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.02] text-gradient">
              BoostFollowers
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              {t.hero.description("Instagram / TikTok / YouTube", t.metric.followers)}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/auth" className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary text-primary-foreground px-6 py-3.5 font-medium shadow-glow hover:opacity-90 transition">
                {t.hero.ctaSignup} <ArrowRight className="size-4" />
              </a>
              <a href={`/${locale}#services`} className="inline-flex items-center rounded-xl bg-secondary/70 backdrop-blur px-6 py-3.5 font-medium border border-border hover:bg-secondary transition">
                {t.pricing.seeAll}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { icon: Zap, label: t.hero.fastDelivery },
                { icon: Shield, label: t.hero.securePayments },
                { icon: MessageCircle, label: t.hero.support247 },
                { icon: Sparkles, label: "200+" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="inline-flex items-center gap-2.5 rounded-xl bg-card/60 backdrop-blur border border-border px-4 py-2.5 text-sm">
                  <Icon className="size-4 text-accent" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(grouped).map(([platform, items]) => (
            <div key={platform} className="rounded-2xl border border-border bg-gradient-card backdrop-blur p-6 hover:border-primary/40 transition">
              <h3 className="font-display font-semibold text-lg">{platform}</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {items.map((s) => {
                  const metricLabel = t.metric[s.metric as keyof typeof t.metric] ?? s.metric;
                  return (
                    <li key={s.slug}>
                      <a href={buildPath(locale, s)} className="flex items-center justify-between text-muted-foreground hover:text-foreground transition">
                        <span>{s.platform} {metricLabel}</span>
                        <span className="text-xs text-accent">{t.pricing.startingAt} {s.startPrice}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
