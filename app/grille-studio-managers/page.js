export default function GrilleStudioManagers() {
  return (
    <div className="page">
      <div className="chapter-label">Chapitre 05 &middot; Equipe &amp; Paie</div>
      <h1 className="chapter-title">
        Grille <em>studio managers</em>
      </h1>
      <p className="chapter-subtitle">
        Base CDI + variable hybride trim &amp; annuel. Profil retail premium (type Jordan). 1 par studio.
      </p>

      {/* BASE */}
      <div className="section">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="section-number">01</span>
            <span className="section-title">Structure de remuneration</span>
          </div>
          <span className="section-badge">1/studio</span>
        </div>
        <div className="section-body">
          <div className="formula" style={{ marginTop: 0 }}>
            Base <b>CDI 2 800&euro;</b> (+ ~260&euro; avantages) + <b>variable trim</b> (3 KPI &times; 500&euro;) + <b>bonus annuel uncapped</b> sous 2 gates qualite.
          </div>

          <p style={{ fontWeight: 600, color: 'var(--navy)', marginTop: '1.5rem', marginBottom: '0.75rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Variable trimestriel &middot; jusqu&apos;a 1 500&euro;/trim (3 KPI binaires)
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>KPI trimestriel</th>
                  <th>Condition</th>
                  <th style={{ textAlign: 'right' }}>Prime</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>CA studio</strong></td>
                  <td>&ge; 150K&euro;/trim ET prix moyen &ge; 95% target</td>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: 'var(--green)' }}>+500&euro;</td>
                </tr>
                <tr>
                  <td><strong>Conversion Decouverte &rarr; pack</strong></td>
                  <td>&ge; 55% (volume min 30 DC/trim)</td>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: 'var(--green)' }}>+500&euro;</td>
                </tr>
                <tr>
                  <td><strong>Google reviews</strong></td>
                  <td>+20 reviews/trim (note moy &ge; 4,7)</td>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: 'var(--green)' }}>+500&euro;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* SCENARIOS */}
      <div className="section">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="section-number">02</span>
            <span className="section-title">Bonus annuel CA studio (uncapped) &middot; 3 scenarios</span>
          </div>
          <span className="section-badge">35 &rarr; 56K&euro;/an</span>
        </div>
        <div className="section-body">
          <div className="cards">
            <div className="card">
              <div className="card-label">Floor &middot; An 1 demarrage</div>
              <div className="card-detail">Target rate &middot; 1/4 prime trim</div>
              <div className="card-value">35,1K&euro;<small>/an</small></div>
              <div className="table-wrap" style={{ marginTop: '1rem' }}>
                <table>
                  <tbody>
                    <tr><td>Base CDI &times; 12</td><td style={{ textAlign: 'right', fontWeight: 600 }}>33,6K&euro;</td></tr>
                    <tr><td>1 prime trim</td><td style={{ textAlign: 'right', fontWeight: 600 }}>1,5K&euro;</td></tr>
                    <tr><td>Bonus annuel</td><td style={{ textAlign: 'right', fontWeight: 600 }}>0&euro;</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="card-detail" style={{ marginTop: '0.75rem', fontStyle: 'italic' }}>
                Cout employeur ~52K&euro; charge
              </div>
            </div>
            <div className="card card-dark">
              <div className="card-label">Cible &middot; An 2 mature</div>
              <div className="card-detail">3/3 primes + bonus 7K (720K&euro; CA)</div>
              <div className="card-value">46,6K&euro;<small>/an</small></div>
              <div className="table-wrap" style={{ marginTop: '1rem' }}>
                <table>
                  <tbody>
                    <tr><td style={{ color: 'var(--text-on-dark)' }}>Base CDI &times; 12</td><td style={{ textAlign: 'right', fontWeight: 600, color: 'var(--white)' }}>33,6K&euro;</td></tr>
                    <tr><td style={{ color: 'var(--text-on-dark)' }}>3 primes &times; 4 trim</td><td style={{ textAlign: 'right', fontWeight: 600, color: 'var(--white)' }}>6K&euro;</td></tr>
                    <tr><td style={{ color: 'var(--text-on-dark)' }}>Bonus annuel</td><td style={{ textAlign: 'right', fontWeight: 600, color: 'var(--white)' }}>7K&euro;</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="card-detail" style={{ marginTop: '0.75rem', fontStyle: 'italic' }}>
                Cout employeur ~67K&euro; charge
              </div>
            </div>
            <div className="card card-highlight">
              <div className="card-label gold">Top &middot; An 3 outlier</div>
              <div className="card-detail">3/3 primes + bonus 16K (1M&euro; CA)</div>
              <div className="card-value">55,6K&euro;<small>/an</small></div>
              <div className="table-wrap" style={{ marginTop: '1rem' }}>
                <table>
                  <tbody>
                    <tr><td>Base CDI &times; 12</td><td style={{ textAlign: 'right', fontWeight: 600 }}>33,6K&euro;</td></tr>
                    <tr><td>3 primes &times; 4 trim</td><td style={{ textAlign: 'right', fontWeight: 600 }}>6K&euro;</td></tr>
                    <tr><td>Bonus annuel</td><td style={{ textAlign: 'right', fontWeight: 600 }}>16K&euro;</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="card-detail" style={{ marginTop: '0.75rem', fontStyle: 'italic' }}>
                Cout employeur ~78K&euro; charge
              </div>
            </div>
          </div>
          <div className="box-green" style={{ marginTop: '1.25rem' }}>
            Bonus annuel = <strong>3K&euro; floor</strong> des 600K&euro; CA, <strong>+1K&euro; par 30K&euro;</strong> de depassement (ROI &gt; 5&times; : 1K&euro; verse pour 30K&euro; de CA).
            <br/>2 <strong>gates absolus</strong> : si NPS &lt; 70 OU turnover flexologues &gt; 30%, le bonus annuel est annule.
            Un SM top gagne <strong>58% de plus</strong> qu&apos;un floor (35K &rarr; 56K).
          </div>
        </div>
      </div>

      {/* EVOLUTION */}
      <div className="section">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="section-number">03</span>
            <span className="section-title">Evolution carriere &middot; meritocratique, non automatique</span>
          </div>
        </div>
        <div className="section-body">
          <div className="cards">
            <div className="card">
              <div className="card-label">An 1-2</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)' }}>Studio Manager</div>
              <div className="card-value">2 800&euro;<small>/mois</small></div>
              <div className="card-detail">Maitrise son studio : hospitality + ops + equipe + ventes.</div>
            </div>
            <div className="card card-dark">
              <div className="card-label">An 2-3 &middot; +18%</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--white)' }}>Lead Manager</div>
              <div className="card-value">3 300&euro;<small>/mois</small></div>
              <div className="card-detail">Mentor des nouveaux SM + recrutement zone + lancements.</div>
            </div>
            <div className="card card-highlight">
              <div className="card-label gold">An 3+ &middot; +43%</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)' }}>Operations Manager</div>
              <div className="card-value">4 000&euro;+<small>/mois</small></div>
              <div className="card-detail">Gere 3-5 studios. N+1 des SM. Bonus % delta CA zone.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
