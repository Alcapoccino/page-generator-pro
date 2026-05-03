import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Tous nos services et tarifs — BoostFollowers" },
      {
        name: "description",
        content:
          "Découvrez tous nos services de croissance sociale et leurs tarifs : Instagram, TikTok, YouTube, Spotify et plus.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  const grouped = services.reduce<Record<string, typeof services>>((acc, s) => {
    (acc[s.platform] ??= []).push(s);
    return acc;
  }, {});

  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="container mx-auto px-6 pt-20 pb-16 relative">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-gradient max-w-3xl">
            Tous nos services et tarifs
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            22 services de croissance sociale, transparents et accessibles. Choisissez votre
            plateforme et lancez-vous.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 space-y-14">
        {Object.entries(grouped).map(([platform, items]) => (
          <div key={platform}>
            <h2 className="font-display text-2xl font-bold mb-5">{platform}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((s) => (
                <a
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="rounded-2xl border border-border bg-gradient-card backdrop-blur p-6 hover:border-primary/50 hover:shadow-glow transition group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display font-semibold">{s.shortLabel}</h3>
                    <span className="text-xs px-2 py-1 rounded-md bg-secondary text-accent">
                      dès {s.startPrice}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                  <div className="mt-4 text-sm text-accent group-hover:translate-x-1 transition">
                    Voir le service →
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}

        <div className="flex justify-center pt-6">
          <a
            href="/auth"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary text-primary-foreground px-6 py-3.5 font-medium shadow-glow hover:opacity-90 transition"
          >
            Commencer maintenant →
          </a>
        </div>
      </section>
    </>
  );
}
