import type { Service } from "@/data/services";
import { Sparkles, Zap, Shield, MessageCircle, Star, Settings, Check } from "lucide-react";

type Props = { service: Service };

export function ServicePage({ service }: Props) {
  const { platform, metricFr, unitLabel, title, heroDescription, startPrice, faqs } = service;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="container mx-auto px-6 pt-20 pb-28 relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 backdrop-blur px-3 py-1 text-xs">
              <span className="size-1.5 rounded-full bg-success animate-pulse" />
              Service actif 24h/24
            </span>

            <h1 className="mt-6 font-display text-5xl md:text-6xl font-bold leading-[1.05] text-gradient">
              {title} <br /> pour booster votre crédibilité
            </h1>

            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl">
              {heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/auth"
                className="inline-flex items-center gap-2 rounded-xl bg-foreground text-background px-6 py-3.5 font-medium shadow-card hover:bg-foreground/90 transition"
              >
                Créer mon compte gratuit →
              </a>
              <a
                href="/auth"
                className="inline-flex items-center rounded-xl bg-secondary/70 backdrop-blur px-6 py-3.5 font-medium border border-border hover:bg-secondary transition"
              >
                Se connecter
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { icon: Zap, label: "Livraison démarrée en quelques minutes" },
                { icon: Shield, label: "Paiements sécurisés" },
                { icon: MessageCircle, label: "Support 24/7" },
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
          Pourquoi choisir BoostFollowers pour vos {metricFr} {platform}
        </h2>
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {[
            {
              icon: Star,
              title: "Plateforme n°1 au monde",
              desc: `Depuis 2011, nous sommes la référence mondiale du secteur. Plus de 50 000 clients nous font confiance pour développer leurs réseaux sociaux au quotidien. Notre expérience et notre stabilité font la différence quand il s'agit de choisir un prestataire sérieux.`,
            },
            {
              icon: Zap,
              title: "Démarrage ultra rapide",
              desc: `Une fois votre commande validée, la livraison de vos ${unitLabel} ${platform} démarre en quelques minutes. Vous voyez votre compteur grimper sans attendre des jours. Un rythme régulier, naturel, qui renforce votre présence sans effort de votre côté.`,
            },
            {
              icon: Settings,
              title: "Plus de 200 services de croissance",
              desc: `${platform} n'est qu'un début. Notre catalogue couvre TikTok, YouTube, Facebook, Twitter, Spotify et bien d'autres plateformes. Vous centralisez toute votre stratégie de croissance chez un seul prestataire et gagnez un temps précieux.`,
            },
            {
              icon: Sparkles,
              title: "Tarifs transparents",
              desc: `Des tarifs transparents, affichés avant chaque commande. Pas de frais cachés, pas de surprises : vous voyez le tarif exact pour la quantité choisie avant de valider. À partir de ${startPrice}.`,
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
            Comment acheter des {metricFr} {platform} en 3 étapes
          </h2>
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {[
              {
                n: "1",
                title: "Créez votre compte",
                desc: "Inscrivez-vous gratuitement en moins de 30 secondes. Aucune carte bancaire demandée à l'inscription, juste un email et un mot de passe.",
              },
              {
                n: "2",
                title: "Alimentez votre solde",
                desc: "Effectuez un virement bancaire ou un paiement crypto USDC. Votre solde est crédité dès réception du paiement et vous permet de commander autant de services que vous le souhaitez.",
              },
              {
                n: "3",
                title: "Passez commande",
                desc: `Choisissez le service ${platform} ${metricFr} qui vous convient, collez votre lien de profil, indiquez la quantité et validez. La livraison démarre en quelques minutes.`,
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
              Commencer maintenant →
            </a>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center">
          Combien coûte l'achat de {metricFr} {platform}
        </h2>
        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
          Nos forfaits s'adaptent à tous les budgets, du créateur qui débute à l'agence qui gère
          des dizaines de comptes. Découvrez quelques exemples de tarifs et rendez-vous dans votre
          espace client pour accéder au catalogue complet.
        </p>
        <div className="mt-14 grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {[
            { tier: "STARTER", qty: "100", price: "0,50 $", popular: false },
            { tier: "POPULAIRE", qty: "500", price: "2,50 $", popular: true },
            { tier: "PRO", qty: "1000", price: "5,00 $", popular: false },
          ].map((p) => (
            <div
              key={p.tier}
              className={`relative rounded-2xl border bg-card/60 backdrop-blur p-7 transition ${
                p.popular ? "border-primary shadow-glow" : "border-border hover:border-primary/40"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1 shadow-glow">
                  LE PLUS POPULAIRE
                </span>
              )}
              <p className="text-xs font-semibold tracking-widest text-muted-foreground">{p.tier}</p>
              <p className="mt-4 font-display text-5xl font-bold">{p.qty}</p>
              <p className="mt-2 text-sm text-muted-foreground">à partir de {p.price}</p>
              <a
                href="/auth"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 font-medium transition ${
                  p.popular
                    ? "bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90"
                    : "bg-foreground text-background hover:bg-foreground/90"
                }`}
              >
                Commander
              </a>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a href="/services" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
            Voir tous les tarifs →
          </a>
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section className="container mx-auto px-6 py-20">
        <div className="rounded-3xl border border-border bg-gradient-card backdrop-blur p-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold">
            Une expérience pensée pour les créateurs
          </h2>
          <div className="mt-8 grid md:grid-cols-3 gap-5 text-sm">
            {[
              `${unitLabel.charAt(0).toUpperCase()}${unitLabel.slice(1)} de qualité, livrés à un rythme naturel`,
              "Aucun mot de passe demandé, sécurité garantie",
              "Garantie recharge en cas de baisse anormale",
              "Tableau de bord clair pour suivre vos commandes",
              "Support humain disponible 7j/7",
              "Tarifs dégressifs sur les grandes quantités",
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
          Questions fréquentes sur l'achat de {metricFr} {platform}
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
                Prêt à booster votre {platform} ?
              </h2>
              <p className="mt-2 text-primary-foreground/85">
                Rejoignez des milliers de créateurs qui font confiance à BoostFollowers.
              </p>
            </div>
            <a
              href="/auth"
              className="inline-flex items-center gap-2 rounded-xl bg-background text-foreground px-6 py-3.5 font-medium hover:bg-background/90 transition"
            >
              Commander maintenant →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
