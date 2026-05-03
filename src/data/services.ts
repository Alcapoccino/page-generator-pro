export type Service = {
  slug: string;
  platform: string;
  metric: string; // followers, likes, views, etc.
  metricFr: string;
  title: string;
  shortLabel: string;
  description: string;
  heroDescription: string;
  unitLabel: string; // "abonnés", "likes", "vues"
  startPrice: string;
  deliveryTime: string;
  faqs: { q: string; a: string }[];
};

const baseFaqs = (platform: string, metricFr: string, unitLabel: string): { q: string; a: string }[] => [
  {
    q: `Est-ce sûr d'acheter des ${metricFr} ${platform} ?`,
    a: `Oui. Nous utilisons des méthodes conformes aux conditions d'utilisation de ${platform} et ne demandons jamais votre mot de passe. Votre compte reste 100% sécurisé.`,
  },
  {
    q: `Combien de temps prend la livraison ?`,
    a: `La livraison démarre en quelques minutes après confirmation de la commande, à un rythme naturel pour préserver votre compte.`,
  },
  {
    q: `Quels moyens de paiement acceptez-vous ?`,
    a: `Nous acceptons les virements bancaires SEPA et les paiements crypto USDC. Tous les paiements sont sécurisés.`,
  },
  {
    q: `Les ${unitLabel} sont-ils permanents ?`,
    a: `Nos ${unitLabel} sont de haute qualité et stables. Nous proposons une garantie recharge en cas de baisse anormale.`,
  },
  {
    q: `Avez-vous besoin de mon mot de passe ?`,
    a: `Jamais. Nous avons uniquement besoin du lien public de votre profil ou publication ${platform}.`,
  },
  {
    q: `Puis-je commander plusieurs fois ?`,
    a: `Oui, vous pouvez recharger votre solde et passer autant de commandes que vous le souhaitez sur l'ensemble de notre catalogue.`,
  },
];

const def = (
  slug: string,
  platform: string,
  metric: string,
  metricFr: string,
  unitLabel: string,
  startPrice: string,
): Service => ({
  slug,
  platform,
  metric,
  metricFr,
  unitLabel,
  startPrice,
  deliveryTime: "Sous quelques minutes",
  shortLabel: `${metricFr.charAt(0).toUpperCase()}${metricFr.slice(1)} ${platform}`,
  title: `Acheter des ${metricFr} ${platform}`,
  description: `Boostez votre ${platform} avec des ${unitLabel} de qualité, livrés rapidement et en toute sécurité.`,
  heroDescription: `Boostez votre audience ${platform} instantanément. Profitez d'une expertise reconnue depuis 2011 pour faire grimper vos ${unitLabel} sans complication. Que vous soyez artiste indépendant ou influenceur, nos solutions de croissance garantissent des résultats visibles et rapides. Passez commande en 30 secondes et concentrez-vous sur votre passion : nous nous occupons de votre notoriété.`,
  faqs: baseFaqs(platform, metricFr, unitLabel),
});

export const services: Service[] = [
  def("buy-instagram-followers", "Instagram", "followers", "abonnés", "abonnés", "1,99 €"),
  def("buy-instagram-likes", "Instagram", "likes", "likes", "likes", "0,99 €"),
  def("buy-instagram-views", "Instagram", "views", "vues", "vues", "0,99 €"),
  def("buy-tiktok-followers", "TikTok", "followers", "abonnés", "abonnés", "1,99 €"),
  def("buy-tiktok-likes", "TikTok", "likes", "likes", "likes", "0,99 €"),
  def("buy-tiktok-views", "TikTok", "views", "vues", "vues", "0,49 €"),
  def("buy-facebook-followers", "Facebook", "followers", "abonnés", "abonnés", "2,49 €"),
  def("buy-facebook-likes", "Facebook", "likes", "likes", "likes", "1,49 €"),
  def("buy-twitter-followers", "Twitter", "followers", "abonnés", "abonnés", "2,99 €"),
  def("buy-x-followers", "X (Twitter)", "followers", "abonnés", "abonnés", "2,99 €"),
  def("buy-youtube-subscribers", "YouTube", "subscribers", "abonnés", "abonnés", "4,99 €"),
  def("buy-youtube-views", "YouTube", "views", "vues", "vues", "1,99 €"),
  def("buy-youtube-likes", "YouTube", "likes", "likes", "likes", "1,49 €"),
  def("buy-twitch-followers", "Twitch", "followers", "abonnés", "abonnés", "2,99 €"),
  def("buy-twitch-views", "Twitch", "views", "vues", "vues", "1,99 €"),
  def("buy-kick-followers", "Kick", "followers", "abonnés", "abonnés", "2,99 €"),
  def("buy-spotify-followers", "Spotify", "followers", "abonnés", "abonnés", "3,49 €"),
  def("buy-spotify-plays", "Spotify", "plays", "écoutes", "écoutes", "1,49 €"),
  def("buy-soundcloud-plays", "SoundCloud", "plays", "écoutes", "écoutes", "1,49 €"),
  def("buy-linkedin-connections", "LinkedIn", "connections", "connexions", "connexions", "4,99 €"),
  def("buy-google-reviews", "Google", "reviews", "avis", "avis", "9,99 €"),
  def("buy-trustpilot-reviews", "Trustpilot", "reviews", "avis", "avis", "9,99 €"),
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
