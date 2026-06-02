export default function Home() {
  const pages = [
    {
      href: '/grille-flexologues',
      label: 'Equipe & Paie',
      title: 'Grille Flexologues',
      desc: 'Paliers, commissions, bonus, primes mensuelles. 3 personas revenus.',
      status: 'Live',
    },
    {
      href: '/grille-studio-managers',
      label: 'Equipe & Paie',
      title: 'Grille Studio Managers',
      desc: 'CDI base + variable trimestriel + bonus annuel. 3 scenarios.',
      status: 'Live',
    },
    {
      href: '/services',
      label: 'Services',
      title: 'Services annexes sept 2026',
      desc: 'Individuel sans humain, avec humain, collectif. Arbitrages 02/06.',
      status: 'Live',
    },
    {
      href: '/staffing-3-studios',
      label: 'Operations',
      title: 'Staffing 3 Studios',
      desc: 'Arbitrage & planification. Modeles organisationnels Monceau + Condorcet.',
      status: 'Live',
    },
    {
      href: '/plan-operationnel',
      label: 'Operations',
      title: 'Plan Operationnel 3 Phases',
      desc: 'Sept 2026 - Oct 2027. Organisation, P&L & seuils par studio.',
      status: 'Live',
    },
  ];

  return (
    <div className="page">
      <div className="chapter-label">Hub Guillaume</div>
      <h1 className="chapter-title">
        D<span className="sl">O</span>CUMENTS INTERNES <em>Flexlab</em>
      </h1>
      <p className="chapter-subtitle">
        Centralisation des grilles, analyses et documents de travail.
        Complement au Vercel d&apos;Auguste.
      </p>

      <div className="cards">
        {pages.map((p) => (
          <a
            key={p.href}
            href={p.href}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="card">
              <div className="card-label">{p.label}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.35rem' }}>
                {p.title}
              </div>
              <div className="card-detail">{p.desc}</div>
              <div style={{ marginTop: '0.75rem' }}>
                <span className="pill">
                  <strong className="blue">{p.status}</strong>
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
