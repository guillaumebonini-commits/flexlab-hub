export default function GrilleFlexologues() {
  return (
    <div className="page">
      <div className="chapter-label">Chapitre 05 &middot; Equipe &amp; Paie</div>
      <h1 className="chapter-title">
        GRIL<span className="sl">L</span>E <em>flexologues</em>
      </h1>
      <p className="chapter-subtitle">
        Tarif indexe au volume cumule de stretchs. Grilles publiques, meritocratiques.
        Deux filieres : flexologues freelance (operation) et studio managers CDI (gestion).
      </p>

      {/* PALIERS */}
      <div className="section">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="section-number">01</span>
            <span className="section-title">Trois paliers &middot; tarif / seance 50&apos;</span>
          </div>
          <span className="section-badge">Freelance</span>
        </div>
        <div className="section-body">
          <div className="cards">
            <div className="card">
              <div className="card-label muted">Palier 1 &middot; Demarrage</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, marginBottom: '0.25rem' }}>Fondation</div>
              <div className="card-value">20&euro;<small>/50&apos;</small></div>
              <div className="card-sub">24&euro;/h propre</div>
              <div className="card-detail">
                0 &rarr; 499 stretchs cumules<br/>
                25&apos; 10&euro; &middot; 50&apos; 20&euro; &middot; 80&apos; 32&euro;
              </div>
            </div>
            <div className="card">
              <div className="card-label">Palier 2 &middot; +10%</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, marginBottom: '0.25rem' }}>Confirme</div>
              <div className="card-value">22&euro;<small>/50&apos;</small></div>
              <div className="card-sub">26,4&euro;/h propre</div>
              <div className="card-detail">
                500 &rarr; 999 stretchs cumules<br/>
                25&apos; 11&euro; &middot; 50&apos; 22&euro; &middot; 80&apos; 35&euro;
              </div>
            </div>
            <div className="card card-highlight">
              <div className="card-label">Palier 3 &middot; +20%</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, marginBottom: '0.25rem' }}>Referent</div>
              <div className="card-value">24&euro;<small>/50&apos;</small></div>
              <div className="card-sub">28,8&euro;/h propre</div>
              <div className="card-detail">
                1 000+ stretchs cumules<br/>
                25&apos; 12&euro; &middot; 50&apos; 24&euro; &middot; 80&apos; 38&euro;<br/>
                <em style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic' }}>Reserve a ~5-10% de l&apos;effectif</em>
              </div>
            </div>
          </div>
          <div className="box-green" style={{ marginTop: '1.25rem' }}>
            Source : BSport &laquo;&nbsp;Remuneration rendez-vous&nbsp;&raquo;.
            Au 1er juin 2026 : <strong>Confirme</strong> = Thomas, Dylan, Francis.
            Les autres en Fondation. Referent pas avant Q4.
          </div>
        </div>
      </div>

      {/* LEVIERS VARIABLES */}
      <div className="section">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="section-number">02</span>
            <span className="section-title">Leviers variables &middot; ils gagnent plus en faisant tourner le studio</span>
          </div>
        </div>
        <div className="section-body">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Commission unique 5% sur tout
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1rem' }}>
            Simplification validee : 5% sur premier pack client, 5% sur add-on standalone, 10% bonus combo Fresha.
          </p>
          <div className="pills">
            <span className="pill">Bonus combo Fresha (stretch + presso/LED/shaker) &rarr; <strong className="blue">10%</strong> du tarif add-on</span>
            <span className="pill">Commission 1er pack client &rarr; <strong className="blue">5%</strong> &middot; ex. pack 440&euro; &rarr; +22&euro;</span>
            <span className="pill">Commission add-on standalone post-seance &rarr; <strong className="blue">5%</strong> &middot; ex. presso 25&euro; &rarr; +1,25&euro;</span>
          </div>

          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--navy)', marginTop: '1.5rem', marginBottom: '0.5rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Bonus jours travailles (un seul des trois)
          </p>
          <div className="pills">
            <span className="pill">8+ jours <strong>+30&euro;</strong> &middot; presence reguliere</span>
            <span className="pill">14+ jours <strong>+80&euro;</strong> &middot; presence soutenue</span>
            <span className="pill">20+ jours <strong>+150&euro;</strong> &middot; presence max (Thomas/Dylan/Valentin)</span>
          </div>

          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--navy)', marginTop: '1.5rem', marginBottom: '0.5rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Primes mensuelles cumulables
          </p>
          <div className="pills">
            <span className="pill">50 stretchs/mois <strong>+60&euro;</strong></span>
            <span className="pill">75 stretchs/mois <strong>+100&euro;</strong></span>
            <span className="pill">Most stretchs du mois <strong>+75&euro;</strong></span>
            <span className="pill">Most reviews du mois <strong>+50&euro;</strong></span>
            <span className="pill">par 5+ Google reviews <strong>+10&euro;</strong></span>
            <span className="pill">Anniversaire 12 mois <strong>+100&euro;</strong></span>
            <span className="pill">Parrainage coach (reste 3 mois+) <strong>+100&euro;</strong></span>
            <span className="pill">Backup last minute <strong>+20%</strong></span>
          </div>

          <div className="formula">
            <b>Paie mensuelle</b> = stretchs &times; tarif palier + 10% combos + 5% packs (1er client) + 5% add-ons standalone + bonus jours + primes + heures creuses (12&euro;/h)
          </div>
        </div>
      </div>

      {/* PERSONAS */}
      <div className="section">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="section-number">03</span>
            <span className="section-title">Ce que ca donne reellement &middot; 3 personas (revenu mensuel brut)</span>
          </div>
        </div>
        <div className="section-body">
          <div className="cards">
            <div className="card">
              <div className="card-label muted">Junior &middot; 2 j/sem &middot; Fondation</div>
              <div className="card-detail">25 seances/mois</div>
              <div className="card-value">593&euro;<small>/mois</small></div>
              <div className="table-wrap" style={{ marginTop: '1rem' }}>
                <table>
                  <tbody>
                    <tr><td>25 seances &times; 20&euro;</td><td style={{ textAlign: 'right', fontWeight: 600 }}>500&euro;</td></tr>
                    <tr><td>5 combos</td><td style={{ textAlign: 'right', fontWeight: 600 }}>8&euro;</td></tr>
                    <tr><td>2 packs &times; 22&euro;</td><td style={{ textAlign: 'right', fontWeight: 600 }}>44&euro;</td></tr>
                    <tr><td>Bonus 8 jours</td><td style={{ textAlign: 'right', fontWeight: 600 }}>30&euro;</td></tr>
                    <tr><td>Prime 1 review</td><td style={{ textAlign: 'right', fontWeight: 600 }}>10&euro;</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card card-dark">
              <div className="card-label">Confirme &middot; 4 j/sem</div>
              <div className="card-detail">60 seances/mois</div>
              <div className="card-value">1 549&euro;<small>/mois</small></div>
              <div className="table-wrap" style={{ marginTop: '1rem' }}>
                <table>
                  <tbody>
                    <tr><td style={{ color: 'var(--mist)' }}>60 seances &times; 22&euro;</td><td style={{ textAlign: 'right', fontWeight: 600, color: 'var(--white)' }}>1 320&euro;</td></tr>
                    <tr><td style={{ color: 'var(--mist)' }}>12 combos</td><td style={{ textAlign: 'right', fontWeight: 600, color: 'var(--white)' }}>18&euro;</td></tr>
                    <tr><td style={{ color: 'var(--mist)' }}>3 packs &times; 22&euro;</td><td style={{ textAlign: 'right', fontWeight: 600, color: 'var(--white)' }}>66&euro;</td></tr>
                    <tr><td style={{ color: 'var(--mist)' }}>Bonus 14 jours</td><td style={{ textAlign: 'right', fontWeight: 600, color: 'var(--white)' }}>80&euro;</td></tr>
                    <tr><td style={{ color: 'var(--mist)' }}>Prime 50 stretchs</td><td style={{ textAlign: 'right', fontWeight: 600, color: 'var(--white)' }}>60&euro;</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card card-highlight">
              <div className="card-label">Top perf &middot; 5 j/sem &middot; Referent</div>
              <div className="card-detail">95 seances/mois</div>
              <div className="card-value">2 521&euro;<small>/mois</small></div>
              <div className="table-wrap" style={{ marginTop: '1rem' }}>
                <table>
                  <tbody>
                    <tr><td>95 seances &times; 24&euro;</td><td style={{ textAlign: 'right', fontWeight: 600 }}>2 280&euro;</td></tr>
                    <tr><td>22 combos</td><td style={{ textAlign: 'right', fontWeight: 600 }}>40&euro;</td></tr>
                    <tr><td>5 packs &times; 24&euro;</td><td style={{ textAlign: 'right', fontWeight: 600 }}>120&euro;</td></tr>
                    <tr><td>Bonus 20 jours</td><td style={{ textAlign: 'right', fontWeight: 600 }}>150&euro;</td></tr>
                    <tr><td>Primes (50+75+most+reviews)</td><td style={{ textAlign: 'right', fontWeight: 600 }}>235&euro;</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="box-green" style={{ marginTop: '1.25rem' }}>
            Top perf = <strong>4,2&times; un junior</strong> (~30K&euro;/an, &gt; benchmark fitness 22-25K&euro;).
            Au scale : question ouverte du passage CDI (risque de requalif freelance).
          </div>
        </div>
      </div>
    </div>
  );
}
