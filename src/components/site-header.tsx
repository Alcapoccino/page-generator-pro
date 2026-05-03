export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-gradient-primary shadow-glow flex items-center justify-center font-display font-bold">
            B
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            Boost<span className="text-gradient">Followers</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="/services" className="hover:text-foreground transition">Services</a>
          <a href="/buy-instagram-followers" className="hover:text-foreground transition">Instagram</a>
          <a href="/buy-tiktok-followers" className="hover:text-foreground transition">TikTok</a>
          <a href="/buy-youtube-subscribers" className="hover:text-foreground transition">YouTube</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="/auth"
            className="hidden sm:inline-flex items-center px-4 py-2 text-sm rounded-md text-foreground/90 hover:bg-secondary transition"
          >
            Se connecter
          </a>
          <a
            href="/auth"
            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90 transition"
          >
            Créer mon compte
          </a>
        </div>
      </div>
    </header>
  );
}
