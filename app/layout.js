import './globals.css';

export const metadata = {
  title: 'Flexlab Hub - Guillaume',
  description: 'Documents internes Flexlab',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <nav className="nav">
          <div className="nav-inner">
            <a href="/" className="nav-logo">
              Flexlab<span>hub Guillaume</span>
            </a>
            <ul className="nav-links">
              <li><a href="/">Accueil</a></li>
              <li><a href="/grille-flexologues">Flexologues</a></li>
              <li><a href="/grille-studio-managers">Studio Managers</a></li>
              <li><a href="/services">Services</a></li>
            </ul>
          </div>
        </nav>
        {children}
        <footer className="footer">
          Flexlab Hub &middot; document interne, Guillaume Bonini &middot; Confidentiel
        </footer>
      </body>
    </html>
  );
}
