import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-gradient-primary shadow-glow flex items-center justify-center font-display font-bold">
            B
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            Boost<span className="text-gradient">Followers</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <Link to="/services" className="hover:text-foreground transition">Services</Link>
          <Link to="/buy-instagram-followers" className="hover:text-foreground transition">Instagram</Link>
          <Link to="/buy-tiktok-followers" className="hover:text-foreground transition">TikTok</Link>
          <Link to="/buy-youtube-subscribers" className="hover:text-foreground transition">YouTube</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/auth"
            className="hidden sm:inline-flex items-center px-4 py-2 text-sm rounded-md text-foreground/90 hover:bg-secondary transition"
          >
            Se connecter
          </Link>
          <Link
            to="/auth"
            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90 transition"
          >
            Créer mon compte
          </Link>
        </div>
      </div>
    </header>
  );
}
