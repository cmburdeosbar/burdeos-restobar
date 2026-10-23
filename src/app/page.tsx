
export default function Home() {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/burderianos",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.3H7.5v3.1h2.8v8h3.2Z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/burdeos_santiago",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@burdeos_santiago",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19.6 7.1a6.5 6.5 0 0 1-4-1.4v8.1a6.2 6.2 0 1 1-5.4-6.1v3.4a2.9 2.9 0 1 0 2.1 2.8V2h3.3c.3 2.1 1.8 3.7 4 4v1.1Z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <div className="flex min-h-screen flex-col items-center justify-center px-4 py-8 text-center">

        {/* Logo de Burdeos con resplandor rosado */}
        <img
          src="/Logo-Burdeos-1.png"
          alt="Burdeos Restobar"
          className="mb-5 h-auto w-full max-w-3xl object-contain"
          style={{
            filter:
              "drop-shadow(0 0 8px #ff4d7d) drop-shadow(0 0 20px #ff4d7d)",
          }}
        />

        {/* Redes sociales: iconos más grandes */}
        <nav
          aria-label="Redes sociales de Burdeos"
          className="mb-8 flex items-center justify-center gap-10"
        >
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              title={social.name}
              className="h-10 w-10 transition-transform duration-200 hover:scale-110"
              style={{
                color: "#ff4d7d",
                filter: "drop-shadow(0 0 7px #ff4d7d)",
              }}
            >
              {social.icon}
            </a>
          ))}
        </nav>

        {/* Contacto por WhatsApp */}
        <a
          href="https://wa.me/56993127854"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 font-bold tracking-wider transition-transform duration-200 hover:scale-105"
          style={{
            fontFamily: "var(--font-barlow)",
            background: "#ff4d7d",
            color: "#000",
            boxShadow: "0 0 20px #ff4d7d",
          }}
        >
          COMUNÍCATE CON NOSOTROS
        </a>

        {/* Dirección al final */}
        <p
          className="mt-8 text-sm tracking-widest"
          style={{
            fontFamily: "var(--font-poppins)",
            color: "#a78bff",
          }}
        >
          ALAMEDA 2555 · SANTIAGO
        </p>

      </div>
    </main>
  );
}
