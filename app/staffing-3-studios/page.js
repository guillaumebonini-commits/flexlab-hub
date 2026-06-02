export default function Staffing() {
  return (
    <div className="page">
      {/* CHAPTER HEADER */}
      <div className="chapter-label">Operations &middot; Mai 2026</div>
      <h1 className="chapter-title">
        STA<span className="sl">F</span>FING <em>3 studios</em>
      </h1>
      <p className="chapter-subtitle">
        Analyse des mod&egrave;les organisationnels pour l&apos;ouverture de Monceau
        et Condorcet en septembre 2026. Co&ucirc;ts, planning, risques.
      </p>

      {/* ============================================ */}
      {/* SECTION 1 : CONTRAINTES DE BASE */}
      {/* ============================================ */}
      <div className="section">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="section-number">01</span>
            <span className="section-title">Contraintes de base</span>
          </div>
          <span className="section-badge">7j/7</span>
        </div>
        <div className="section-body">
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            Ce que chaque studio doit garantir, 7 jours sur 7.
          </p>

          <div className="cards" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '2rem' }}>
            <div className="card card-dark" style={{ textAlign: 'center' }}>
              <div className="card-label">Par semaine</div>
              <div className="card-value">84h</div>
              <div className="card-detail">8h-20h, 7j/7</div>
            </div>
            <div className="card card-dark" style={{ textAlign: 'center' }}>
              <div className="card-label">SM Lead (CDI)</div>
              <div className="card-value">39h</div>
              <div className="card-detail">5 jours dont 1 WE</div>
            </div>
            <div className="card card-dark" style={{ textAlign: 'center' }}>
              <div className="card-label">Alternant</div>
              <div className="card-value">22h</div>
              <div className="card-detail">3 jours / semaine</div>
            </div>
            <div className="card card-dark" style={{ textAlign: 'center' }}>
              <div className="card-label">Restant</div>
              <div className="card-value">~23h</div>
              <div className="card-detail">Flexos / r&eacute;f&eacute;rent</div>
            </div>
          </div>

          <div className="cards" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="card">
              <div className="card-label">Peaks ventes (data Bsport oct25-mai26)</div>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.75rem', fontSize: '0.85rem', lineHeight: '1.8' }}>
                <li style={{ paddingLeft: '1rem', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--blue)' }}>&bull;</span><strong>Golden window 11h-17h</strong> : 72% du CA packs</li>
                <li style={{ paddingLeft: '1rem', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--blue)' }}>&bull;</span><strong>Samedi 12h-13h</strong> : pic absolu conversion (14 ventes)</li>
                <li style={{ paddingLeft: '1rem', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--blue)' }}>&bull;</span><strong>Samedi</strong> : jour #1 (61 ventes, 22K)</li>
                <li style={{ paddingLeft: '1rem', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--blue)' }}>&bull;</span><strong>Lundi + Dimanche</strong> : jours #2 (47 ventes chacun)</li>
                <li style={{ paddingLeft: '1rem', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--blue)' }}>&bull;</span><strong>Jeudi = jour creux</strong> (34 ventes) &rarr; SM off</li>
              </ul>
            </div>
            <div className="card" style={{ borderLeft: '4px solid var(--membership)' }}>
              <div className="card-label membership">R&egrave;gles non n&eacute;gociables</div>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.75rem', fontSize: '0.85rem', lineHeight: '1.8' }}>
                <li style={{ paddingLeft: '1rem', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--membership)' }}>&bull;</span>Toujours <strong>1 personne de confiance</strong> pr&eacute;sente (SM, alternant, ou flexo avec avenant)</li>
                <li style={{ paddingLeft: '1rem', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--membership)' }}>&bull;</span>Flexos de confiance avec <strong>avenant missions &eacute;largies</strong> peuvent g&eacute;rer le studio en autonomie</li>
                <li style={{ paddingLeft: '1rem', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--membership)' }}>&bull;</span>Flexos standards : <strong>jamais seuls</strong> au studio</li>
                <li style={{ paddingLeft: '1rem', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--membership)' }}>&bull;</span>CC Sport IDCC 2511 : repos 35h cons&eacute;cutives/semaine</li>
                <li style={{ paddingLeft: '1rem', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--membership)' }}>&bull;</span>Alternants : <strong>semaine uniquement</strong> (jamais WE), ma&icirc;tre de stage = SM Lead</li>
                <li style={{ paddingLeft: '1rem', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--membership)' }}>&bull;</span>Flexos = <strong>prestataires</strong>, pas de r&ocirc;le manag&eacute;rial</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* SECTION 2 : MODELE 1 RECOMMANDE */}
      {/* ============================================ */}
      <div className="section">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="section-number">02</span>
            <span className="section-title">Mod&egrave;le 1 : SM Lead + Alternant + Flexo</span>
          </div>
          <span className="section-badge" style={{ background: 'rgba(26,137,112,0.3)' }}>RECOMMAND&Eacute;</span>
        </div>
        <div className="section-body">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', maxWidth: '500px' }}>
              Meilleur compromis co&ucirc;t / couverture / scalabilit&eacute;.
              SM autonomes + flexo de confiance avec avenant.
            </p>
            <div style={{ textAlign: 'right' }}>
              <div className="card-value" style={{ color: 'var(--neuro)' }}>5 095&euro;</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>/studio/mois (fixe)</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--navy)', marginTop: '0.25rem' }}>15 286 &euro;/mois total</div>
            </div>
          </div>

          {/* Org chart */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
            {[
              { name: 'Aboukir', sm: 'Jaafar (SM)', smColor: 'var(--blue)' },
              { name: 'Monceau', sm: 'Jordan (SM)', smColor: 'var(--neuro)' },
              { name: 'Condorcet', sm: 'SM3 (CDI)', smColor: 'var(--blue)' },
            ].map((studio) => (
              <div key={studio.name} className="card card-dark" style={{ flex: 1, maxWidth: '260px', textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>{studio.name}</div>
                <div className="pills" style={{ justifyContent: 'center', flexDirection: 'column', gap: '0.35rem' }}>
                  <span className="pill" style={{ background: 'rgba(15,111,255,0.2)', border: 'none', color: 'var(--sky)', justifyContent: 'center', fontSize: '0.75rem' }}>{studio.sm}</span>
                  <span className="pill" style={{ background: 'rgba(201,169,97,0.2)', border: 'none', color: '#f5c563', justifyContent: 'center', fontSize: '0.75rem' }}>Alternant</span>
                  <span className="pill" style={{ background: 'rgba(26,137,112,0.2)', border: 'none', color: '#6ddb9e', justifyContent: 'center', fontSize: '0.75rem' }}>Flexo avenant &#10003;</span>
                </div>
              </div>
            ))}
          </div>

          {/* Costs + planning grid */}
          <div className="cards" style={{ gridTemplateColumns: '1fr 1fr', marginBottom: '1.5rem' }}>
            <div>
              <div className="card-label">Co&ucirc;ts mensuels</div>
              <div className="table-wrap" style={{ marginTop: '0.5rem' }}>
                <table>
                  <thead>
                    <tr><th>Poste</th><th>D&eacute;tail</th><th>/studio</th><th>x3 studios</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Jaafar CDI 39h</td><td>3 300 &euro; brut (4 356 charg&eacute;)</td><td>4 356 &euro;</td><td>4 356 &euro;</td></tr>
                    <tr><td>SM Lead CDI 39h</td><td>34K fix (2 833 brut, 3 740 charg&eacute;) x 2</td><td>3 740 &euro;</td><td>7 480 &euro;</td></tr>
                    <tr><td>Alternants</td><td>1 000 &euro; x 3</td><td>1 000 &euro;</td><td>3 000 &euro;</td></tr>
                    <tr><td>Prime flexo</td><td>150 &euro; x 3</td><td>150 &euro;</td><td>450 &euro;</td></tr>
                    <tr><td><strong>Total fixe</strong></td><td></td><td><strong>~5 095 &euro;</strong></td><td><strong>15 286 &euro;</strong></td></tr>
                    <tr style={{ opacity: 0.6 }}><td>+ Variable SM (si 100%)</td><td>10K/an = 833 &euro;/mois x 3</td><td>+833 &euro;</td><td>+2 500 &euro;</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <div className="card-label">Couverture hebdo type</div>
              <div style={{ display: 'grid', gridTemplateColumns: '60px repeat(7, 1fr)', gap: '2px', fontSize: '0.7rem', marginTop: '0.5rem' }}>
                {/* Header row */}
                <div style={{ background: 'var(--navy)', color: 'var(--white)', padding: '4px 3px', textAlign: 'center', fontWeight: 600, borderRadius: '4px' }}></div>
                {['L', 'M', 'Me', 'J', 'V', 'S', 'D'].map(d => (
                  <div key={d} style={{ background: 'var(--navy)', color: 'var(--white)', padding: '4px 3px', textAlign: 'center', fontWeight: 600, borderRadius: '4px' }}>{d}</div>
                ))}
                {/* 8-12h */}
                <div style={{ background: 'var(--navy)', color: 'var(--white)', padding: '4px 3px', textAlign: 'center', fontWeight: 600, borderRadius: '4px' }}>8-12h</div>
                {['Alt', 'Alt', 'Alt', 'Flexo', 'Alt', 'SM', 'Flexo'].map((v, i) => (
                  <div key={`8-${i}`} style={{ background: v === 'Alt' ? 'rgba(201,169,97,0.15)' : v === 'SM' ? 'rgba(15,111,255,0.15)' : 'rgba(26,137,112,0.15)', color: v === 'Alt' ? 'var(--membership)' : v === 'SM' ? 'var(--blue)' : 'var(--neuro)', padding: '4px 3px', textAlign: 'center', fontWeight: 500, borderRadius: '4px' }}>{v}</div>
                ))}
                {/* 12-14h */}
                <div style={{ background: 'var(--navy)', color: 'var(--white)', padding: '4px 3px', textAlign: 'center', fontWeight: 600, borderRadius: '4px' }}>12-14h</div>
                {['SM', 'SM', 'Alt', 'Flexo', 'SM', 'SM', 'Flexo'].map((v, i) => (
                  <div key={`12-${i}`} style={{ background: v === 'Alt' ? 'rgba(201,169,97,0.15)' : v === 'SM' ? 'rgba(15,111,255,0.15)' : 'rgba(26,137,112,0.15)', color: v === 'Alt' ? 'var(--membership)' : v === 'SM' ? 'var(--blue)' : 'var(--neuro)', padding: '4px 3px', textAlign: 'center', fontWeight: 500, borderRadius: '4px' }}>{v}</div>
                ))}
                {/* 14-17h */}
                <div style={{ background: 'var(--navy)', color: 'var(--white)', padding: '4px 3px', textAlign: 'center', fontWeight: 600, borderRadius: '4px' }}>14-17h</div>
                {['SM', 'SM', 'SM', 'Flexo', 'SM', 'SM', 'Flexo'].map((v, i) => (
                  <div key={`14-${i}`} style={{ background: v === 'SM' ? 'rgba(15,111,255,0.15)' : 'rgba(26,137,112,0.15)', color: v === 'SM' ? 'var(--blue)' : 'var(--neuro)', padding: '4px 3px', textAlign: 'center', fontWeight: 500, borderRadius: '4px' }}>{v}</div>
                ))}
                {/* 17-20h */}
                <div style={{ background: 'var(--navy)', color: 'var(--white)', padding: '4px 3px', textAlign: 'center', fontWeight: 600, borderRadius: '4px' }}>17-20h</div>
                {['SM', 'SM', 'SM', 'Flexo', 'SM', 'Flexo', 'Flexo'].map((v, i) => (
                  <div key={`17-${i}`} style={{ background: v === 'SM' ? 'rgba(15,111,255,0.15)' : 'rgba(26,137,112,0.15)', color: v === 'SM' ? 'var(--blue)' : 'var(--neuro)', padding: '4px 3px', textAlign: 'center', fontWeight: 500, borderRadius: '4px' }}>{v}</div>
                ))}
              </div>
              <p style={{ fontSize: '0.7rem', color: 'var(--muted)', marginTop: '0.5rem' }}>
                SM off J+D (J=creux ventes) &bull; SM couvre 11h-20h + Sam complet (pic conversion 12h-13h) &bull; Alt ~22h (3j semaine)
              </p>
            </div>
          </div>

          {/* Avantages / Cadrage */}
          <div className="cards" style={{ gridTemplateColumns: '1fr 1fr', marginBottom: '1.5rem' }}>
            <div className="box-green">
              <strong style={{ color: 'var(--neuro)' }}>Avantages</strong>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem', fontSize: '0.85rem', lineHeight: '1.8' }}>
                <li>&bull; Co&ucirc;t quasi identique au BP</li>
                <li>&bull; <strong>0h sans supervision</strong> : flexo avenant = autonome</li>
                <li>&bull; Flexo = vivier SM futurs</li>
                <li>&bull; Avenant missions &eacute;largies en cours (Bruzzo)</li>
                <li>&bull; S&eacute;lection sur confiance : on choisit qui a l&apos;avenant</li>
              </ul>
            </div>
            <div className="box-info">
              <strong style={{ color: 'var(--blue)' }}>Cadrage avenant</strong>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem', fontSize: '0.85rem', lineHeight: '1.8' }}>
                <li>&bull; Avenant = missions &eacute;largies (ouverture, fermeture, caisse, accueil)</li>
                <li>&bull; Le flexo <strong>choisit ses cr&eacute;neaux</strong> (pas de planning impos&eacute;)</li>
                <li>&bull; Tarif horaire major&eacute; (15 &euro;/h) + prime 150 &euro;/mois</li>
                <li>&bull; Jamais &laquo;&nbsp;responsable&nbsp;&raquo; ou &laquo;&nbsp;salari&eacute;&nbsp;&raquo;</li>
              </ul>
            </div>
          </div>

          {/* Coverage bar */}
          <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--muted)', marginBottom: '0.25rem' }}>COUVERTURE 84h/sem</div>
          <div style={{ display: 'flex', fontSize: '0.7rem', fontWeight: 600, marginBottom: '0.15rem' }}>
            <div style={{ width: '46%', color: 'var(--blue)' }}>SM 39h (46%)</div>
            <div style={{ width: '26%', color: 'var(--membership)' }}>Alt 22h (26%)</div>
            <div style={{ width: '28%', color: 'var(--neuro)' }}>Flexo 23h (28%)</div>
          </div>
          <div style={{ display: 'flex', height: '12px', borderRadius: '6px', overflow: 'hidden' }}>
            <div style={{ width: '46%', background: 'linear-gradient(90deg, var(--navy), var(--blue))' }}></div>
            <div style={{ width: '26%', background: 'linear-gradient(90deg, #c9a961, #dbb96e)' }}></div>
            <div style={{ width: '28%', background: 'linear-gradient(90deg, var(--neuro), #27ae60)' }}></div>
          </div>
          <div style={{ textAlign: 'right', fontSize: '0.8rem', fontWeight: 700, color: 'var(--neuro)', marginTop: '0.25rem' }}>100% supervis&eacute;</div>
        </div>
      </div>

      {/* ============================================ */}
      {/* SECTION 3 : MODELE 2 */}
      {/* ============================================ */}
      <div className="section">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="section-number">03</span>
            <span className="section-title">Mod&egrave;le 2 : Jaafar itin&eacute;rant + SM par site + Flexos</span>
          </div>
          <span className="section-badge" style={{ background: 'rgba(201,169,97,0.3)' }}>ALTERNATIVE</span>
        </div>
        <div className="section-body">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
              Jaafar supervise les 3 studios, pas d&apos;alternant.
            </p>
            <div style={{ textAlign: 'right' }}>
              <div className="card-value" style={{ color: 'var(--membership)' }}>5 342&euro;</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>/studio/mois (fixe)</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--navy)', marginTop: '0.25rem' }}>16 026 &euro;/mois total</div>
            </div>
          </div>

          {/* Org chart with supervisor */}
          <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
            <div className="card card-dark" style={{ display: 'inline-block', padding: '0.5rem 1.5rem', fontSize: '0.8rem', fontWeight: 700 }}>
              Jaafar itin&eacute;rant (39h)
            </div>
          </div>
          <div style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>&darr; &darr; &darr;</div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
            {[
              { name: 'Aboukir', detail: '1j/sem', sm: 'Jordan (SM)' },
              { name: 'Monceau', detail: '2j/sem', sm: 'SM2 (CDI)' },
              { name: 'Condorcet', detail: '2j/sem', sm: 'SM3 (CDI)' },
            ].map((studio) => (
              <div key={studio.name} className="card" style={{ flex: 1, maxWidth: '240px', textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem' }}>{studio.name} <span style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>({studio.detail})</span></div>
                <div className="pills" style={{ justifyContent: 'center', flexDirection: 'column', gap: '0.3rem' }}>
                  <span className="pill" style={{ justifyContent: 'center', fontSize: '0.75rem' }}><strong className="blue">{studio.sm}</strong></span>
                  <span className="pill" style={{ justifyContent: 'center', fontSize: '0.75rem' }}><strong>Flexo avenant</strong></span>
                </div>
              </div>
            ))}
          </div>

          {/* Costs + planning */}
          <div className="cards" style={{ gridTemplateColumns: '1fr 1fr', marginBottom: '1.5rem' }}>
            <div>
              <div className="card-label">Co&ucirc;ts mensuels</div>
              <div className="table-wrap" style={{ marginTop: '0.5rem' }}>
                <table>
                  <thead>
                    <tr><th>Poste</th><th>D&eacute;tail</th><th>/studio</th><th>x3 studios</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Jaafar CDI 39h</td><td>3 300 &euro; brut (4 356 charg&eacute;)</td><td>1 452 &euro;</td><td>4 356 &euro;</td></tr>
                    <tr><td>SM Lead CDI 39h</td><td>34K fix (2 833 brut, 3 740 charg&eacute;) x 3</td><td>3 740 &euro;</td><td>11 220 &euro;</td></tr>
                    <tr><td>Prime flexo</td><td>150 &euro; x 3</td><td>150 &euro;</td><td>450 &euro;</td></tr>
                    <tr><td><strong>Total fixe</strong></td><td></td><td><strong>~5 342 &euro;</strong></td><td><strong>16 026 &euro;</strong></td></tr>
                    <tr style={{ opacity: 0.6 }}><td>+ Variable SM (si 100%)</td><td>10K/an = 833 &euro;/mois x 3</td><td>+833 &euro;</td><td>+2 500 &euro;</td></tr>
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '0.5rem' }}>
                Surco&ucirc;t vs Mod&egrave;le 1 : <strong style={{ color: 'var(--lumiere)' }}>+740 &euro;/mois</strong> (Jaafar = overhead)
              </p>
            </div>
            <div>
              <div className="card-label">Couverture hebdo par studio</div>
              <div style={{ display: 'grid', gridTemplateColumns: '60px repeat(7, 1fr)', gap: '2px', fontSize: '0.7rem', marginTop: '0.5rem' }}>
                <div style={{ background: 'var(--navy)', color: 'var(--white)', padding: '4px 3px', textAlign: 'center', fontWeight: 600, borderRadius: '4px' }}></div>
                {['L', 'M', 'Me', 'J', 'V', 'S', 'D'].map(d => (
                  <div key={d} style={{ background: 'var(--navy)', color: 'var(--white)', padding: '4px 3px', textAlign: 'center', fontWeight: 600, borderRadius: '4px' }}>{d}</div>
                ))}
                <div style={{ background: 'var(--navy)', color: 'var(--white)', padding: '4px 3px', textAlign: 'center', fontWeight: 600, borderRadius: '4px' }}>8-12h</div>
                {['Flexo', 'Flexo', 'Flexo', 'Flexo', 'Flexo', 'SM', 'Flexo'].map((v, i) => (
                  <div key={`m2-8-${i}`} style={{ background: v === 'SM' ? 'rgba(15,111,255,0.15)' : 'rgba(26,137,112,0.15)', color: v === 'SM' ? 'var(--blue)' : 'var(--neuro)', padding: '4px 3px', textAlign: 'center', fontWeight: 500, borderRadius: '4px' }}>{v}</div>
                ))}
                <div style={{ background: 'var(--navy)', color: 'var(--white)', padding: '4px 3px', textAlign: 'center', fontWeight: 600, borderRadius: '4px' }}>12-14h</div>
                {['SM', 'SM', 'SM', 'Flexo', 'SM', 'SM', 'Flexo'].map((v, i) => (
                  <div key={`m2-12-${i}`} style={{ background: v === 'SM' ? 'rgba(15,111,255,0.15)' : 'rgba(26,137,112,0.15)', color: v === 'SM' ? 'var(--blue)' : 'var(--neuro)', padding: '4px 3px', textAlign: 'center', fontWeight: 500, borderRadius: '4px' }}>{v}</div>
                ))}
                <div style={{ background: 'var(--navy)', color: 'var(--white)', padding: '4px 3px', textAlign: 'center', fontWeight: 600, borderRadius: '4px' }}>14-17h</div>
                {['SM', 'SM', 'SM', 'Flexo', 'SM', 'SM', 'Flexo'].map((v, i) => (
                  <div key={`m2-14-${i}`} style={{ background: v === 'SM' ? 'rgba(15,111,255,0.15)' : 'rgba(26,137,112,0.15)', color: v === 'SM' ? 'var(--blue)' : 'var(--neuro)', padding: '4px 3px', textAlign: 'center', fontWeight: 500, borderRadius: '4px' }}>{v}</div>
                ))}
                <div style={{ background: 'var(--navy)', color: 'var(--white)', padding: '4px 3px', textAlign: 'center', fontWeight: 600, borderRadius: '4px' }}>17-20h</div>
                {['SM', 'SM', 'SM', 'Flexo', 'SM', 'Flexo', 'Flexo'].map((v, i) => (
                  <div key={`m2-17-${i}`} style={{ background: v === 'SM' ? 'rgba(15,111,255,0.15)' : 'rgba(26,137,112,0.15)', color: v === 'SM' ? 'var(--blue)' : 'var(--neuro)', padding: '4px 3px', textAlign: 'center', fontWeight: 500, borderRadius: '4px' }}>{v}</div>
                ))}
              </div>
              <p style={{ fontSize: '0.7rem', color: 'var(--muted)', marginTop: '0.5rem' }}>
                SM off J+D (J=creux) &bull; SM couvre golden window 11h-20h + Sam complet &bull; Flexo=matins+J+D &bull; Jaafar supervision
              </p>
            </div>
          </div>

          {/* Avantages / Risques */}
          <div className="cards" style={{ gridTemplateColumns: '1fr 1fr', marginBottom: '1.5rem' }}>
            <div className="box-green">
              <strong style={{ color: 'var(--neuro)' }}>Avantages</strong>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem', fontSize: '0.85rem', lineHeight: '1.8' }}>
                <li>&bull; Jaafar forme et contr&ocirc;le les 3 sites</li>
                <li>&bull; Pas d&apos;alternant &agrave; recruter</li>
                <li>&bull; Transition vers Ops Director naturelle</li>
              </ul>
            </div>
            <div className="box-red">
              <strong style={{ color: 'var(--lumiere)' }}>Risques</strong>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem', fontSize: '0.85rem', lineHeight: '1.8' }}>
                <li>&bull; Jaafar = overhead (1-2j/site, ne connait pas les clients)</li>
                <li>&bull; ~45h de flexo avenant par studio</li>
                <li>&bull; SM doit &ecirc;tre autonome d&egrave;s J1</li>
                <li>&bull; Pas de vivier alternant pour futurs SM</li>
              </ul>
            </div>
          </div>

          {/* Coverage bar */}
          <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--muted)', marginBottom: '0.25rem' }}>COUVERTURE 84h/sem <span style={{ opacity: 0.6 }}>(Jaafar en supervision, non compt&eacute;)</span></div>
          <div style={{ display: 'flex', fontSize: '0.7rem', fontWeight: 600, marginBottom: '0.15rem' }}>
            <div style={{ width: '46%', color: 'var(--blue)' }}>SM 39h (46%)</div>
            <div style={{ width: '54%', color: 'var(--neuro)' }}>Flexo 45h (54%)</div>
          </div>
          <div style={{ display: 'flex', height: '12px', borderRadius: '6px', overflow: 'hidden' }}>
            <div style={{ width: '46%', background: 'linear-gradient(90deg, var(--navy), var(--blue))' }}></div>
            <div style={{ width: '54%', background: 'linear-gradient(90deg, var(--neuro), #27ae60)' }}></div>
          </div>
          <div style={{ textAlign: 'right', fontSize: '0.8rem', fontWeight: 700, color: 'var(--membership)', marginTop: '0.25rem' }}>100% supervis&eacute; (flexo avenant)</div>
        </div>
      </div>

      {/* ============================================ */}
      {/* SECTION 4 : MODELE 3 (ECARTE) */}
      {/* ============================================ */}
      <div className="section">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="section-number">04</span>
            <span className="section-title">Mod&egrave;le 3 : Jaafar itin&eacute;rant + SM + Alternant</span>
          </div>
          <span className="section-badge" style={{ background: 'rgba(192,72,72,0.3)' }}>&Eacute;CART&Eacute;</span>
        </div>
        <div className="section-body">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
              2j Monceau, 2j Condorcet, 1j Aboukir.
            </p>
            <div style={{ textAlign: 'right' }}>
              <div className="card-value" style={{ color: 'var(--lumiere)' }}>6 192&euro;</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>/studio/mois (fixe)</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--navy)', marginTop: '0.25rem' }}>18 576 &euro;/mois total</div>
            </div>
          </div>

          {/* Org chart */}
          <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
            <div className="card card-dark" style={{ display: 'inline-block', padding: '0.5rem 1.5rem', fontSize: '0.8rem', fontWeight: 700 }}>
              Jaafar itin&eacute;rant (39h)
            </div>
          </div>
          <div style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>&darr; &darr; &darr;</div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1.5rem', opacity: 0.7 }}>
            {[
              { name: 'Aboukir', detail: '1j/sem' },
              { name: 'Monceau', detail: '2j/sem' },
              { name: 'Condorcet', detail: '2j/sem' },
            ].map((studio) => (
              <div key={studio.name} className="card" style={{ flex: 1, maxWidth: '220px', textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem' }}>{studio.name} <span style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>({studio.detail})</span></div>
                <div className="pills" style={{ justifyContent: 'center', flexDirection: 'column', gap: '0.3rem' }}>
                  <span className="pill" style={{ justifyContent: 'center', fontSize: '0.75rem' }}><strong className="blue">SM Lead (CDI)</strong></span>
                  <span className="pill" style={{ justifyContent: 'center', fontSize: '0.75rem' }}>Alternant</span>
                  <span className="pill" style={{ justifyContent: 'center', fontSize: '0.75rem' }}><strong>Flexos</strong></span>
                </div>
              </div>
            ))}
          </div>

          <div className="cards" style={{ gridTemplateColumns: '1fr 1fr' }}>
            {/* Costs + why discarded */}
            <div>
              <div className="card-label lumiere">Co&ucirc;ts mensuels</div>
              <div className="table-wrap" style={{ marginTop: '0.5rem' }}>
                <table>
                  <thead>
                    <tr><th>Poste</th><th>D&eacute;tail</th><th>/studio</th><th>x3 studios</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Jaafar CDI 39h</td><td>3 300 &euro; brut (4 356 charg&eacute;)</td><td>1 452 &euro;</td><td>4 356 &euro;</td></tr>
                    <tr><td>SM Lead CDI 39h</td><td>34K fix (2 833 brut, 3 740 charg&eacute;) x 3</td><td>3 740 &euro;</td><td>11 220 &euro;</td></tr>
                    <tr><td>Alternants</td><td>1 000 &euro; x 3</td><td>1 000 &euro;</td><td>3 000 &euro;</td></tr>
                    <tr><td><strong>Total fixe</strong></td><td></td><td><strong>~6 192 &euro;</strong></td><td><strong>18 576 &euro;</strong></td></tr>
                  </tbody>
                </table>
              </div>
              <div className="box-red" style={{ marginTop: '1rem' }}>
                <strong style={{ color: 'var(--lumiere)' }}>Pourquoi &eacute;cart&eacute;</strong>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem', fontSize: '0.85rem', lineHeight: '1.8' }}>
                  <li>&bull; +3 246 &euro;/mois vs Mod&egrave;le 1 pour un r&ocirc;le de supervision</li>
                  <li>&bull; &Agrave; 2j/semaine, Jaafar <strong>ne connait pas les clients</strong></li>
                  <li>&bull; SM Lead doivent &ecirc;tre autonomes d&egrave;s J1</li>
                  <li>&bull; Le plus cher des 3 mod&egrave;les</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="card" style={{ marginBottom: '1rem' }}>
                <div className="card-label">Ce que font les r&eacute;seaux</div>
                <div className="table-wrap" style={{ marginTop: '0.5rem' }}>
                  <table>
                    <thead>
                      <tr><th>Taille</th><th>Mod&egrave;le</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>2-5 sites</td><td>1 SM autonome/site + fondateur supervise</td></tr>
                      <tr><td>5-15 sites</td><td>Area Manager (4-6 studios), r&ocirc;le si&egrave;ge</td></tr>
                      <tr><td>15+ sites</td><td>Regional Director + Area Managers</td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="box-info" style={{ marginTop: '0.75rem' }}>
                  <strong>Avec 3 studios, Flexlab est dans le cas 1.</strong> Le r&ocirc;le d&apos;Area Manager n&apos;a de sens qu&apos;&agrave; partir de 5-6 studios.
                </div>
              </div>
              <div className="box-green">
                <strong style={{ color: 'var(--neuro)' }}>Quand ce mod&egrave;le aura du sens</strong>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem', fontSize: '0.85rem', lineHeight: '1.8' }}>
                  <li>&bull; <strong>Phase 2</strong> : 3 studios &agrave; 35K+/mois chacun</li>
                  <li>&bull; SM Leads rod&eacute;s et autonomes depuis 6+ mois</li>
                  <li>&bull; Jaafar passe Ops Director (4 300 &euro;)</li>
                  <li>&bull; Probablement <strong>H1 2027</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* SECTION 5 : COMPARATIF */}
      {/* ============================================ */}
      <div className="section">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="section-number">05</span>
            <span className="section-title">Comparatif des 3 mod&egrave;les</span>
          </div>
          <span className="section-badge">Vue consolid&eacute;e</span>
        </div>
        <div className="section-body">
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th style={{ background: 'var(--neuro)', color: 'var(--white)' }}>Mod&egrave;le 1 &#10003; (SM + Alt + Flexo avenant)</th>
                  <th>Mod&egrave;le 2 (Jaafar itin. + SM + Flexos)</th>
                  <th style={{ opacity: 0.6 }}>Mod&egrave;le 3 (Jaafar itin. + SM + Alt)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Co&ucirc;t / mois (3 studios)</strong></td>
                  <td style={{ background: 'rgba(26,137,112,0.06)' }}><strong>~15 300 &euro;</strong></td>
                  <td>~16 000 &euro;</td>
                  <td style={{ opacity: 0.6 }}>~18 600 &euro;</td>
                </tr>
                <tr>
                  <td><strong>Co&ucirc;t / an (fixe)</strong></td>
                  <td style={{ background: 'rgba(26,137,112,0.06)' }}><strong>183 400 &euro;</strong></td>
                  <td>192 300 &euro;</td>
                  <td style={{ opacity: 0.6 }}>222 900 &euro;</td>
                </tr>
                <tr>
                  <td><strong>Couverture supervis&eacute;e</strong></td>
                  <td style={{ background: 'rgba(26,137,112,0.06)' }}><strong>100%</strong></td>
                  <td>100% (flexo avenant)</td>
                  <td style={{ opacity: 0.6 }}>Variable</td>
                </tr>
                <tr>
                  <td><strong>Flexo avenant / semaine</strong></td>
                  <td style={{ background: 'rgba(26,137,112,0.06)' }}><strong>~23h</strong></td>
                  <td>~45h</td>
                  <td style={{ opacity: 0.6 }}>46-54h</td>
                </tr>
                <tr>
                  <td><strong>R&eacute;silience (cong&eacute;s)</strong></td>
                  <td style={{ background: 'rgba(26,137,112,0.06)' }}>Moyenne</td>
                  <td>Moyenne</td>
                  <td style={{ opacity: 0.6 }}>Fragile</td>
                </tr>
                <tr>
                  <td><strong>Jaafar</strong></td>
                  <td style={{ background: 'rgba(26,137,112,0.06)' }}>SM Aboukir CDI (terrain)</td>
                  <td>Itin&eacute;rant / superviseur</td>
                  <td style={{ opacity: 0.6 }}>Itin&eacute;rant / superviseur</td>
                </tr>
                <tr>
                  <td><strong>Impact runway</strong></td>
                  <td style={{ background: 'rgba(26,137,112,0.06)' }}><strong>-0.3 mois</strong></td>
                  <td>-0.7 mois</td>
                  <td style={{ opacity: 0.6 }}>-2 mois</td>
                </tr>
                <tr>
                  <td><strong>Verdict</strong></td>
                  <td style={{ background: 'rgba(26,137,112,0.06)' }}><span className="pill" style={{ background: 'rgba(26,137,112,0.15)', borderColor: 'var(--neuro)' }}><strong>RECOMMAND&Eacute;</strong></span></td>
                  <td><span className="pill" style={{ background: 'rgba(201,169,97,0.15)', borderColor: 'var(--membership)' }}><strong className="membership">ALTERNATIVE</strong></span></td>
                  <td style={{ opacity: 0.6 }}><span className="pill" style={{ background: 'rgba(192,72,72,0.15)', borderColor: 'var(--lumiere)' }}><strong className="lumiere">&Eacute;CART&Eacute;</strong></span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="box-info" style={{ marginTop: '1.5rem' }}>
            <strong>*Risque juridique Mod&egrave;le 1</strong> : le flexo r&eacute;f&eacute;rent reste micro-entrepreneur. Ses missions &eacute;largies (ouverture, caisse) sont encadr&eacute;es par l&apos;avenant flexologue &eacute;largi en cours de r&eacute;daction par Bruzzo. Cl&eacute; : il choisit ses cr&eacute;neaux librement (pas de planning impos&eacute;).
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* SECTION 6 : TIMELINE DES PHASES */}
      {/* ============================================ */}
      <div className="section">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="section-number">06</span>
            <span className="section-title">Timeline des phases</span>
          </div>
          <span className="section-badge">Phases 0 &rarr; 2</span>
        </div>
        <div className="section-body">
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            De la situation actuelle au r&eacute;gime de croisi&egrave;re.
          </p>

          <div className="cards" style={{ gridTemplateColumns: '1fr 1fr' }}>
            {/* Timeline left */}
            <div>
              {/* Phase 0 */}
              <div className="card" style={{ marginBottom: '1rem', borderLeft: '4px solid var(--neuro)' }}>
                <div className="card-label neuro">Maintenant, ao&ucirc;t 2026</div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>Phase 0 : Int&eacute;gration</div>
                <div style={{ fontSize: '0.85rem', lineHeight: 1.7 }}>
                  <strong>1 studio (Aboukir)</strong><br />
                  Jaafar SM CDI (4 356 &euro; charg&eacute;)<br />
                  Jordan freelance WE + cong&eacute;s (130 &euro;/j)<br />
                  Othman marketing (750 &euro;)<br />
                  <strong>Total : ~5 000 &euro;/mois</strong>
                </div>
              </div>

              {/* Phase 1 */}
              <div className="card" style={{ marginBottom: '1rem', borderLeft: '4px solid var(--blue)' }}>
                <div className="card-label">Septembre 2026</div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>Phase 1 : Ouverture 3 studios</div>
                <div style={{ fontSize: '0.85rem', lineHeight: 1.7 }}>
                  <strong>3 studios (Aboukir + Monceau + Condorcet)</strong><br />
                  3 SM Lead (Jaafar, Jordan CDI, SM3 CDI)<br />
                  3 alternants (1 000 &euro; chacun)<br />
                  3 flexos r&eacute;f&eacute;rents (prime 150 &euro;)<br />
                  <strong>Total &eacute;quipe : ~15 300 &euro;/mois</strong>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="card" style={{ borderLeft: '4px solid var(--membership)' }}>
                <div className="card-label membership">H1 2027 (CA 35K+/studio x 2 mois)</div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>Phase 2 : Croisi&egrave;re</div>
                <div style={{ fontSize: '0.85rem', lineHeight: 1.7 }}>
                  <strong>3 studios matures</strong><br />
                  Jaafar &rarr; Ops Director 4 300 &euro; (d&eacute;tach&eacute;)<br />
                  Jordan &rarr; Head CX 4 300 &euro; (d&eacute;tach&eacute;)<br />
                  3 SM Lead (ex-alternants promus CDI)<br />
                  3 nouveaux alternants<br />
                  <strong>Total &eacute;quipe : ~23 300 &euro;/mois</strong>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div>
              {/* Cost evolution */}
              <div className="card" style={{ marginBottom: '1rem' }}>
                <div className="card-label">&Eacute;volution co&ucirc;t &eacute;quipe</div>
                <div style={{ marginTop: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                    <span>Phase 0 (maintenant)</span><span style={{ fontWeight: 600 }}>~5 000 &euro;</span>
                  </div>
                  <div style={{ height: '10px', background: 'var(--beige)', borderRadius: '5px', overflow: 'hidden' }}>
                    <div style={{ width: '22%', height: '100%', background: 'linear-gradient(90deg, var(--navy), var(--blue))', borderRadius: '5px' }}></div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', margin: '0.75rem 0 0.25rem' }}>
                    <span>Phase 1 (sept 2026)</span><span style={{ fontWeight: 600 }}>~15 300 &euro;</span>
                  </div>
                  <div style={{ height: '10px', background: 'var(--beige)', borderRadius: '5px', overflow: 'hidden' }}>
                    <div style={{ width: '66%', height: '100%', background: 'linear-gradient(90deg, var(--neuro), #27ae60)', borderRadius: '5px' }}></div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', margin: '0.75rem 0 0.25rem' }}>
                    <span>Phase 2 (H1 2027)</span><span style={{ fontWeight: 600 }}>~23 300 &euro;</span>
                  </div>
                  <div style={{ height: '10px', background: 'var(--beige)', borderRadius: '5px', overflow: 'hidden' }}>
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, #c9a961, #dbb96e)', borderRadius: '5px' }}></div>
                  </div>
                </div>
              </div>

              {/* Triggers */}
              <div className="box-green" style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--neuro)' }}>Triggers de passage Phase 1 &rarr; 2</strong>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem', fontSize: '0.85rem', lineHeight: '1.8' }}>
                  <li>&bull; CA &ge; 35K/mois sur 2 studios pendant 2 mois cons&eacute;cutifs</li>
                  <li>&bull; SM Lead autonomes (6+ mois en poste)</li>
                  <li>&bull; Au moins 1 alternant pr&ecirc;t &agrave; passer SM</li>
                  <li>&bull; EBITDA positif consolid&eacute; 3 studios</li>
                </ul>
              </div>

              {/* Role Jaafar */}
              <div className="card">
                <div className="card-label">R&ocirc;le Jaafar par phase</div>
                <div className="table-wrap" style={{ marginTop: '0.5rem' }}>
                  <table>
                    <thead>
                      <tr><th>Phase</th><th>R&ocirc;le</th><th>R&eacute;mun.</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>0</td><td>SM Aboukir (terrain 5j)</td><td>4 356 &euro;</td></tr>
                      <tr><td>1</td><td>SM Aboukir + formateur</td><td>4 356 &euro;</td></tr>
                      <tr><td>2</td><td>Ops Director (d&eacute;tach&eacute;)</td><td>4 300 &euro;</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* SECTION 7 : PLANNING DETAILLE MODELE 1 */}
      {/* ============================================ */}
      <div className="section">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="section-number">07</span>
            <span className="section-title">Mod&egrave;le 1 : planning d&eacute;taill&eacute; par studio</span>
          </div>
          <span className="section-badge">Phase 1</span>
        </div>
        <div className="section-body">
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            Exemple de semaine type, 3 studios en Phase 1.
          </p>

          <div className="cards" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: '1.5rem' }}>
            {/* Aboukir */}
            <div className="card">
              <div className="card-label">Aboukir</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '0.75rem' }}>SM Lead : Jaafar CDI (3 300 brut / 4 356 charg&eacute;)</div>
              <div className="table-wrap">
                <table style={{ fontSize: '0.75rem' }}>
                  <thead>
                    <tr><th></th><th>L</th><th>M</th><th>Me</th><th>J</th><th>V</th><th>S</th><th>D</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>8-12</strong></td><td style={{ color: 'var(--membership)' }}>A</td><td style={{ color: 'var(--membership)' }}>A</td><td style={{ color: 'var(--membership)' }}>A</td><td style={{ color: 'var(--neuro)' }}>F</td><td style={{ color: 'var(--membership)' }}>A</td><td style={{ color: 'var(--blue)' }}>J</td><td style={{ color: 'var(--neuro)' }}>F</td></tr>
                    <tr><td><strong>12-14</strong></td><td style={{ color: 'var(--blue)' }}>J</td><td style={{ color: 'var(--blue)' }}>J</td><td style={{ color: 'var(--membership)' }}>A</td><td style={{ color: 'var(--neuro)' }}>F</td><td style={{ color: 'var(--blue)' }}>J</td><td style={{ color: 'var(--blue)' }}>J</td><td style={{ color: 'var(--neuro)' }}>F</td></tr>
                    <tr><td><strong>14-17</strong></td><td style={{ color: 'var(--blue)' }}>J</td><td style={{ color: 'var(--blue)' }}>J</td><td style={{ color: 'var(--blue)' }}>J</td><td style={{ color: 'var(--neuro)' }}>F</td><td style={{ color: 'var(--blue)' }}>J</td><td style={{ color: 'var(--blue)' }}>J</td><td style={{ color: 'var(--neuro)' }}>F</td></tr>
                    <tr><td><strong>17-20</strong></td><td style={{ color: 'var(--blue)' }}>J</td><td style={{ color: 'var(--blue)' }}>J</td><td style={{ color: 'var(--blue)' }}>J</td><td style={{ color: 'var(--neuro)' }}>F</td><td style={{ color: 'var(--blue)' }}>J</td><td style={{ color: 'var(--neuro)' }}>F</td><td style={{ color: 'var(--neuro)' }}>F</td></tr>
                  </tbody>
                </table>
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--muted)', marginTop: '0.5rem' }}>J=Jaafar &bull; A=Alt &bull; F=Flexo</div>
              <div style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Off J+D &bull; Golden window 11-17h = <strong>39h</strong></div>
            </div>

            {/* Monceau */}
            <div className="card">
              <div className="card-label neuro">Monceau</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '0.75rem' }}>SM Lead : Jordan CDI (34K fix + 10K var)</div>
              <div className="table-wrap">
                <table style={{ fontSize: '0.75rem' }}>
                  <thead>
                    <tr><th></th><th>L</th><th>M</th><th>Me</th><th>J</th><th>V</th><th>S</th><th>D</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>8-12</strong></td><td style={{ color: 'var(--membership)' }}>A</td><td style={{ color: 'var(--membership)' }}>A</td><td style={{ color: 'var(--membership)' }}>A</td><td style={{ color: 'var(--neuro)' }}>F</td><td style={{ color: 'var(--membership)' }}>A</td><td style={{ color: 'var(--blue)' }}>JO</td><td style={{ color: 'var(--neuro)' }}>F</td></tr>
                    <tr><td><strong>12-14</strong></td><td style={{ color: 'var(--blue)' }}>JO</td><td style={{ color: 'var(--blue)' }}>JO</td><td style={{ color: 'var(--membership)' }}>A</td><td style={{ color: 'var(--neuro)' }}>F</td><td style={{ color: 'var(--blue)' }}>JO</td><td style={{ color: 'var(--blue)' }}>JO</td><td style={{ color: 'var(--neuro)' }}>F</td></tr>
                    <tr><td><strong>14-17</strong></td><td style={{ color: 'var(--blue)' }}>JO</td><td style={{ color: 'var(--blue)' }}>JO</td><td style={{ color: 'var(--blue)' }}>JO</td><td style={{ color: 'var(--neuro)' }}>F</td><td style={{ color: 'var(--blue)' }}>JO</td><td style={{ color: 'var(--blue)' }}>JO</td><td style={{ color: 'var(--neuro)' }}>F</td></tr>
                    <tr><td><strong>17-20</strong></td><td style={{ color: 'var(--blue)' }}>JO</td><td style={{ color: 'var(--blue)' }}>JO</td><td style={{ color: 'var(--blue)' }}>JO</td><td style={{ color: 'var(--neuro)' }}>F</td><td style={{ color: 'var(--blue)' }}>JO</td><td style={{ color: 'var(--neuro)' }}>F</td><td style={{ color: 'var(--neuro)' }}>F</td></tr>
                  </tbody>
                </table>
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--muted)', marginTop: '0.5rem' }}>JO=Jordan &bull; A=Alt &bull; F=Flexo</div>
              <div style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Off J+D &bull; Golden window 11-17h = <strong>39h</strong></div>
            </div>

            {/* Condorcet */}
            <div className="card">
              <div className="card-label drainage">Condorcet</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '0.75rem' }}>SM Lead : SM3 CDI (34K fix + 10K var)</div>
              <div className="table-wrap">
                <table style={{ fontSize: '0.75rem' }}>
                  <thead>
                    <tr><th></th><th>L</th><th>M</th><th>Me</th><th>J</th><th>V</th><th>S</th><th>D</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>8-12</strong></td><td style={{ color: 'var(--membership)' }}>A</td><td style={{ color: 'var(--membership)' }}>A</td><td style={{ color: 'var(--membership)' }}>A</td><td style={{ color: 'var(--neuro)' }}>F</td><td style={{ color: 'var(--membership)' }}>A</td><td style={{ color: 'var(--blue)' }}>SM</td><td style={{ color: 'var(--neuro)' }}>F</td></tr>
                    <tr><td><strong>12-14</strong></td><td style={{ color: 'var(--blue)' }}>SM</td><td style={{ color: 'var(--blue)' }}>SM</td><td style={{ color: 'var(--membership)' }}>A</td><td style={{ color: 'var(--neuro)' }}>F</td><td style={{ color: 'var(--blue)' }}>SM</td><td style={{ color: 'var(--blue)' }}>SM</td><td style={{ color: 'var(--neuro)' }}>F</td></tr>
                    <tr><td><strong>14-17</strong></td><td style={{ color: 'var(--blue)' }}>SM</td><td style={{ color: 'var(--blue)' }}>SM</td><td style={{ color: 'var(--blue)' }}>SM</td><td style={{ color: 'var(--neuro)' }}>F</td><td style={{ color: 'var(--blue)' }}>SM</td><td style={{ color: 'var(--blue)' }}>SM</td><td style={{ color: 'var(--neuro)' }}>F</td></tr>
                    <tr><td><strong>17-20</strong></td><td style={{ color: 'var(--blue)' }}>SM</td><td style={{ color: 'var(--blue)' }}>SM</td><td style={{ color: 'var(--blue)' }}>SM</td><td style={{ color: 'var(--neuro)' }}>F</td><td style={{ color: 'var(--blue)' }}>SM</td><td style={{ color: 'var(--neuro)' }}>F</td><td style={{ color: 'var(--neuro)' }}>F</td></tr>
                  </tbody>
                </table>
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--muted)', marginTop: '0.5rem' }}>SM=SM3 &bull; A=Alt &bull; F=Flexo</div>
              <div style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Off J+D &bull; Golden window 11-17h = <strong>39h</strong></div>
            </div>
          </div>

          {/* Lecture du planning */}
          <div className="card" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <div className="card-label">Lecture du planning</div>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem', fontSize: '0.85rem', lineHeight: '1.8' }}>
                <li>&bull; SM off <strong>Jeudi</strong> (jour creux ventes) + <strong>Dimanche</strong></li>
                <li>&bull; SM couvre la <strong>golden window 11h-17h</strong> (72% du CA packs) + soirs L,M,Me,V</li>
                <li>&bull; <strong>Samedi = journ&eacute;e compl&egrave;te SM</strong> (pic conversion 12h-13h, 61 ventes/8 mois)</li>
                <li>&bull; Alternant couvre les <strong>matins semaine</strong> (3 jours, jamais WE)</li>
                <li>&bull; Flexo avenant couvre <strong>jeudi complet + S soir + dimanche</strong></li>
                <li>&bull; R&eacute;sultat : <strong>aucun cr&eacute;neau sans personne de confiance</strong></li>
              </ul>
            </div>
            <div style={{ textAlign: 'center', padding: '1.5rem 2rem', background: 'rgba(26,137,112,0.08)', borderRadius: 'var(--radius)' }}>
              <div className="card-value" style={{ color: 'var(--neuro)', fontSize: '2.5rem' }}>0h</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>sans supervision</div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* SECTION 8 : PACKAGE SALARIAL */}
      {/* ============================================ */}
      <div className="section">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="section-number">08</span>
            <span className="section-title">Package salarial et &eacute;volution de carri&egrave;re</span>
          </div>
          <span className="section-badge">Progressivit&eacute;</span>
        </div>
        <div className="section-body">
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            Progressivit&eacute; des r&ocirc;les chez Flexlab.
          </p>

          <div className="cards" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: '1.5rem' }}>
            {/* Niveau 1 : SM */}
            <div className="card card-highlight">
              <div style={{ textAlign: 'center' }}>
                <div className="card-label">Niveau 1</div>
                <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>Studio Manager</div>
                <div className="card-value" style={{ fontSize: '1.75rem' }}>34K + 10K</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>fixe + variable / an</div>
              </div>
              <div style={{ marginTop: '0.75rem', fontSize: '0.8rem' }}>
                <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--muted)', letterSpacing: '1px', marginBottom: '0.25rem' }}>Co&ucirc;t employeur</div>
                <div>Brut charg&eacute; : <strong>3 740 &euro;/mois</strong></div>
                <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--muted)', letterSpacing: '1px', margin: '0.5rem 0 0.25rem' }}>Ce que touche le SM</div>
                <div>Net av. imp&ocirc;t (fixe) : <strong>~2 210 &euro;/mois</strong></div>
                <div style={{ color: 'var(--neuro)' }}>Net av. imp&ocirc;t (fixe+var max) : <strong>~2 860 &euro;/mois</strong></div>
              </div>
              <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--line)', fontSize: '0.7rem', color: 'var(--muted)' }}>
                <strong>Agent de ma&icirc;trise G3-G4</strong> &bull; 1 studio &bull; terrain et client &bull; CA et upsell &bull; gestion flexos
              </div>
            </div>

            {/* Niveau 2 : RM */}
            <div className="card" style={{ borderLeft: '4px solid var(--neuro)' }}>
              <div style={{ textAlign: 'center' }}>
                <div className="card-label neuro">Niveau 2</div>
                <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>Regional Manager</div>
                <div className="card-value" style={{ fontSize: '1.75rem', color: 'var(--neuro)' }}>40K + 20K</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>fixe + variable / an</div>
              </div>
              <div style={{ marginTop: '0.75rem', fontSize: '0.8rem' }}>
                <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--muted)', letterSpacing: '1px', marginBottom: '0.25rem' }}>Co&ucirc;t employeur</div>
                <div>Brut charg&eacute; : <strong>4 400 &euro;/mois</strong></div>
                <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--muted)', letterSpacing: '1px', margin: '0.5rem 0 0.25rem' }}>Ce que touche le RM</div>
                <div>Net av. imp&ocirc;t (fixe) : <strong>~2 600 &euro;/mois</strong></div>
                <div style={{ color: 'var(--neuro)' }}>Net av. imp&ocirc;t (fixe+var max) : <strong>~3 900 &euro;/mois</strong></div>
              </div>
              <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--line)', fontSize: '0.7rem', color: 'var(--muted)' }}>
                <strong>Cadre Groupe 5</strong> &bull; 2-3 studios &bull; formation SM &bull; audits qualit&eacute; &bull; recrutement &bull; P&amp;L multi-sites
              </div>
            </div>

            {/* Niveau 3 : TBD */}
            <div className="card" style={{ opacity: 0.6, border: '1px dashed var(--line-strong)' }}>
              <div style={{ textAlign: 'center' }}>
                <div className="card-label muted">Niveau 3</div>
                <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>To be defined</div>
                <div className="card-value" style={{ fontSize: '1.75rem', color: 'var(--membership)' }}>TBD</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>5+ studios, Horizon 2028</div>
              </div>
              <div style={{ marginTop: '0.75rem', fontSize: '0.8rem' }}>
                <div>R&ocirc;le, package et p&eacute;rim&egrave;tre &agrave; d&eacute;finir selon la taille du r&eacute;seau et la structure de l&apos;&eacute;quipe.</div>
                <div style={{ marginTop: '0.5rem' }}>Pistes : Head of Operations, VP Ops, COO adjoint.</div>
              </div>
              <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px dashed var(--line)', fontSize: '0.7rem', color: 'var(--muted)' }}>
                <strong>Cadre Groupe 6+</strong> &bull; r&eacute;seau complet &bull; strat&eacute;gie &bull; BSPCE potentiel
              </div>
            </div>
          </div>

          <p style={{ textAlign: 'center', fontSize: '0.7rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
            SM &rarr; RM : 12-18 mois, 2 studios &agrave; 35K+ CA, SM autonomes form&eacute;s &nbsp;|&nbsp; RM &rarr; N3 : &agrave; d&eacute;finir selon scaling
          </p>

          <div className="cards" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="card">
              <div className="card-label">Structure du variable SM (10K/an)</div>
              <div className="table-wrap" style={{ marginTop: '0.5rem' }}>
                <table>
                  <thead>
                    <tr><th>Composante</th><th>Poids</th><th>Montant max</th><th>Paliers</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>CA studio</td><td>50%</td><td>5 000 &euro;/an</td><td>80% objectif = 50%, 100% = 100%, 120% = 120%</td></tr>
                    <tr><td>Taux UTR</td><td>25%</td><td>2 500 &euro;/an</td><td>&lt;85% = 0, 85-90% = 50%, 90%+ = 100%</td></tr>
                    <tr><td>NPS / satisfaction</td><td>15%</td><td>1 500 &euro;/an</td><td>NPS &lt;50 = 0, 50-70 = 50%, 70+ = 100%</td></tr>
                    <tr><td>Objectifs qualitatifs</td><td>10%</td><td>1 000 &euro;/an</td><td>Formation &eacute;quipe, process, z&eacute;ro incident</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card">
              <div className="card-label">Modalit&eacute;s de versement</div>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem', fontSize: '0.85rem', lineHeight: '1.8' }}>
                <li>&bull; <strong>Fr&eacute;quence : trimestrielle</strong> (T1 = oct-d&eacute;c, T2 = jan-mars, etc.)</li>
                <li>&bull; Calcul sur les 3 mois &eacute;coul&eacute;s, vers&eacute; le mois suivant</li>
                <li>&bull; Objectif CA fix&eacute; par trimestre par Auguste + Guillaume</li>
                <li>&bull; UTR et NPS mesur&eacute;s via Fresha (ou Bsport avant)</li>
                <li>&bull; Pas de variable pendant la <strong>p&eacute;riode d&apos;essai</strong> (3 mois)</li>
                <li>&bull; Prorata si arriv&eacute;e en cours de trimestre</li>
              </ul>
              <div className="box-info" style={{ marginTop: '0.75rem' }}>
                <strong>Exemple</strong> : SM atteint 95% CA + 88% UTR + NPS 65 + quali OK = ~80% du variable = <strong>~2 000 &euro; sur le trimestre</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* SECTION 9 : DECISIONS A PRENDRE */}
      {/* ============================================ */}
      <div className="section">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="section-number">09</span>
            <span className="section-title">D&eacute;cisions &agrave; prendre</span>
          </div>
          <span className="section-badge">3 arbitrages</span>
        </div>
        <div className="section-body">
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            3 arbitrages Auguste + Guillaume.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px' }}>
            {/* Decision 1 */}
            <div className="card card-highlight">
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div className="card-value" style={{ fontSize: '1.5rem', minWidth: '40px' }}>01</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>Valider le Mod&egrave;le 1 pour septembre</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '0.75rem' }}>
                    SM Lead (34K+10K var) + Alternant + Flexo avenant par studio. Co&ucirc;t fixe ~15 300 &euro;/mois pour 3 studios + variable trimestriel li&eacute; &agrave; la performance.
                  </p>
                  <div className="pills">
                    <span className="pill" style={{ background: 'rgba(26,137,112,0.12)', borderColor: 'var(--neuro)' }}><strong>RECOMMAND&Eacute;</strong></span>
                    <span className="pill" style={{ background: 'rgba(15,111,255,0.1)', borderColor: 'var(--blue)' }}><strong className="blue">IMPACT BP : MINIMAL</strong></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decision 2 */}
            <div className="card card-highlight">
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div className="card-value" style={{ fontSize: '1.5rem', minWidth: '40px' }}>02</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>Finaliser l&apos;avenant missions &eacute;largies</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '0.75rem' }}>
                    Avenant confirm&eacute; : flexos de confiance avec missions &eacute;largies (ouverture, fermeture, caisse, gestion studio en autonomie). Prime 150 &euro;/mois + tarif 15 &euro;/h. Le flexo reste libre de ses cr&eacute;neaux. Bruzzo finalise la r&eacute;daction de l&apos;avenant type.
                  </p>
                  <div className="pills">
                    <span className="pill" style={{ background: 'rgba(26,137,112,0.12)', borderColor: 'var(--neuro)' }}><strong>DECISION PRISE</strong></span>
                    <span className="pill" style={{ background: 'rgba(201,169,97,0.12)', borderColor: 'var(--membership)' }}><strong className="membership">AVENANT BRUZZO EN COURS</strong></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decision 3 */}
            <div className="card card-highlight">
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div className="card-value" style={{ fontSize: '1.5rem', minWidth: '40px' }}>03</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>Identifier les flexos r&eacute;f&eacute;rents cibles</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '0.75rem' }}>
                    Jaafar propose 1-2 noms par studio parmi les flexos actuels les plus fiables (Thomas ?). Crit&egrave;re : confiance, fiabilit&eacute;, capacit&eacute; &agrave; g&eacute;rer le studio seul. Formation progressive juin-ao&ucirc;t. Titre : &laquo;&nbsp;flexologue missions &eacute;largies&nbsp;&raquo;.
                  </p>
                  <div className="pills">
                    <span className="pill" style={{ background: 'rgba(15,111,255,0.1)', borderColor: 'var(--blue)' }}><strong className="blue">ACTION JAAFAR</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="formula" style={{ marginTop: '1.5rem', maxWidth: '800px' }}>
            <b>Prochaine &eacute;tape</b> : meeting Auguste + Guillaume pour arbitrer. Puis briefing Jaafar sur le mod&egrave;le retenu et identification des flexos r&eacute;f&eacute;rents.
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* SECTION 10 : FICHE JAAFAR */}
      {/* ============================================ */}
      <div className="section">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="section-number">10</span>
            <span className="section-title">Fiche poste : Jaafar, SM Lead Aboukir</span>
          </div>
          <span className="section-badge">CDI 39h</span>
        </div>
        <div className="section-body">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
              &Eacute;quipe fondatrice &bull; CDI 39h &bull; Prise de poste imm&eacute;diate
            </p>
            <div style={{ textAlign: 'right' }}>
              <div className="card-value" style={{ fontSize: '1.75rem' }}>39.6K + var</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>3 300 &euro; brut/mois + variable</div>
            </div>
          </div>

          <div className="cards" style={{ gridTemplateColumns: '1fr 1fr', marginBottom: '1.5rem' }}>
            <div>
              <div className="card" style={{ marginBottom: '1rem', borderLeft: '4px solid var(--blue)' }}>
                <div className="card-label">Titre et positionnement</div>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem', fontSize: '0.85rem', lineHeight: '1.8' }}>
                  <li>&bull; <strong>Titre officiel</strong> : Studio Manager Lead, Aboukir</li>
                  <li>&bull; <strong>Statut</strong> : CDI 39h, CC Sport IDCC 2511, <strong>Agent de ma&icirc;trise Groupe 4</strong></li>
                  <li>&bull; <strong>&Eacute;quipe fondatrice</strong> : pr&eacute;sent depuis le lancement</li>
                  <li>&bull; <strong>Reporte &agrave;</strong> : Auguste (CEO) et Guillaume (CFO/COO)</li>
                  <li>&bull; <strong>BSPCE</strong> : &agrave; discuter post-seed (~0.75%)</li>
                </ul>
              </div>
              <div className="card">
                <div className="card-label">Package</div>
                <div className="table-wrap" style={{ marginTop: '0.5rem' }}>
                  <table>
                    <thead>
                      <tr><th>Composante</th><th>Montant</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>Fixe annuel</td><td><strong>39 600 &euro;</strong> (3 300 brut/mois)</td></tr>
                      <tr><td>Variable annuel</td><td>Jusqu&apos;&agrave; <strong>10 000 &euro;</strong> (trimestriel)</td></tr>
                      <tr><td>Avantages</td><td>Mutuelle, pr&eacute;voyance, transport (121 &euro;/mois)</td></tr>
                      <tr><td>BSPCE</td><td>~0.75% (post-seed)</td></tr>
                      <tr><td><strong>Package total</strong></td><td><strong>~50K &euro;/an</strong></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div>
              <div className="box-green" style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--neuro)' }}>Missions imm&eacute;diates (juin-ao&ucirc;t 2026)</strong>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem', fontSize: '0.85rem', lineHeight: '1.8' }}>
                  <li>&bull; <strong>G&eacute;rer Aboukir</strong> au quotidien : planning, clients, &eacute;quipe flexos</li>
                  <li>&bull; <strong>Former Jordan</strong> : process studio, outils (Bsport/Fresha), standards qualit&eacute;</li>
                  <li>&bull; <strong>Recruter les alternants</strong> avec Auguste/Guillaume (3 pour septembre)</li>
                  <li>&bull; <strong>Identifier 1-2 flexos r&eacute;f&eacute;rents</strong> pour les missions &eacute;largies (avenant)</li>
                  <li>&bull; <strong>Documenter les process</strong> : ouverture/fermeture, caisse, accueil, protocoles</li>
                  <li>&bull; <strong>Transition Bsport &rarr; Fresha</strong> : pr&eacute;parer la migration (aout)</li>
                </ul>
              </div>
              <div className="card" style={{ borderLeft: '4px solid var(--membership)' }}>
                <div className="card-label membership">Missions Phase 1 (sept 2026+)</div>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem', fontSize: '0.85rem', lineHeight: '1.8' }}>
                  <li>&bull; <strong>SM Lead Aboukir</strong> : responsable P&amp;L, CA, UTR, NPS du studio</li>
                  <li>&bull; <strong>R&eacute;f&eacute;rent formation</strong> : onboarding des SM Monceau/Condorcet</li>
                  <li>&bull; <strong>Standards qualit&eacute;</strong> : audits crois&eacute;s entre studios (1x/mois)</li>
                  <li>&bull; <strong>Pilotage flexos</strong> : planning Aboukir, suivi heures, prime r&eacute;f&eacute;rent</li>
                  <li>&bull; <strong>Reporting</strong> : dashboard hebdo &agrave; la direction</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="cards" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="card">
              <div className="card-label">Objectifs Q4 2026 (oct-d&eacute;c)</div>
              <div className="table-wrap" style={{ marginTop: '0.5rem' }}>
                <table>
                  <thead>
                    <tr><th>KPI</th><th>Objectif</th><th>Poids variable</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>CA Aboukir</td><td>&ge; 40K &euro;/mois</td><td>50%</td></tr>
                    <tr><td>UTR</td><td>&ge; 90%</td><td>25%</td></tr>
                    <tr><td>NPS</td><td>&ge; 70</td><td>15%</td></tr>
                    <tr><td>Process et formation</td><td>SM2/SM3 autonomes, 0 incident</td><td>10%</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card">
              <div className="card-label">&Eacute;volution pr&eacute;vue</div>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem', fontSize: '0.85rem', lineHeight: '1.8' }}>
                <li>&bull; <strong>Phase 2 (H1 2027)</strong> : &eacute;volution vers <strong>Ops Director</strong></li>
                <li>&bull; Passage <strong>Cadre Groupe 5</strong>, d&eacute;tach&eacute; du terrain</li>
                <li>&bull; Package cible : <strong>40K fix + 20K variable</strong></li>
                <li>&bull; Condition : 3 studios &agrave; 35K+ CA/mois pendant 2 mois</li>
                <li>&bull; Possibilit&eacute; <strong>Head of Operations</strong> &agrave; 5+ studios</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* SECTION 11 : FICHE JORDAN */}
      {/* ============================================ */}
      <div className="section">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="section-number">11</span>
            <span className="section-title">Jordan Tison, SM Monceau</span>
          </div>
          <span className="section-badge">Onboarding</span>
        </div>
        <div className="section-body">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
              Freelance Phase 0 (130 &euro;/j) &rarr; CDI Phase 1 (sept 2026)
            </p>
            <div style={{ textAlign: 'right' }}>
              <div className="card-value" style={{ fontSize: '1.75rem', color: 'var(--neuro)' }}>34K + 10K</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>CDI &agrave; partir de septembre</div>
            </div>
          </div>

          <div className="cards" style={{ gridTemplateColumns: '1fr 1fr', marginBottom: '1.5rem' }}>
            <div>
              <div className="card" style={{ marginBottom: '1rem', borderLeft: '4px solid var(--blue)' }}>
                <div className="card-label">Profil et contexte</div>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem', fontSize: '0.85rem', lineHeight: '1.8' }}>
                  <li>&bull; <strong>Background</strong> : retail, exp&eacute;rience client, formation, luxe</li>
                  <li>&bull; <strong>Structure</strong> : JT SAS (SASU, SIRET 879 201 184 00014)</li>
                  <li>&bull; <strong>Phase 0</strong> : freelance 130 &euro;/jour, ~10j/mois</li>
                  <li>&bull; <strong>Phase 1</strong> : CDI 34K fix + 10K var, <strong>Agent de ma&icirc;trise Groupe 3</strong></li>
                  <li>&bull; <strong>Studio</strong> : Monceau (ouverture septembre 2026)</li>
                  <li>&bull; <strong>Reporte &agrave;</strong> : Auguste et Guillaume, form&eacute; par Jaafar</li>
                </ul>
              </div>
              <div className="card">
                <div className="card-label">Package Phase 0 &rarr; Phase 1</div>
                <div className="table-wrap" style={{ marginTop: '0.5rem' }}>
                  <table>
                    <thead>
                      <tr><th></th><th>Phase 0 (jun-ao&ucirc;t)</th><th>Phase 1 (sept+)</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>Statut</td><td>Freelance</td><td><strong>CDI 39h</strong></td></tr>
                      <tr><td>R&eacute;mun&eacute;ration</td><td>130 &euro;/jour</td><td><strong>2 833 &euro; brut</strong></td></tr>
                      <tr><td>Variable</td><td>-</td><td><strong>10K/an</strong> (trim.)</td></tr>
                      <tr><td>Avantages</td><td>-</td><td>Mutuelle, transport (121 &euro;)</td></tr>
                      <tr><td>Co&ucirc;t Flexlab</td><td>~1 300 &euro;/mois</td><td><strong>3 740 &euro;/mois</strong></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div>
              <div className="card" style={{ marginBottom: '1rem', borderLeft: '4px solid var(--membership)' }}>
                <div className="card-label membership">Plan d&apos;onboarding Phase 0</div>
                <div className="table-wrap" style={{ marginTop: '0.5rem' }}>
                  <table>
                    <thead>
                      <tr><th>P&eacute;riode</th><th>Mission</th><th>Objectif</th></tr>
                    </thead>
                    <tbody>
                      <tr><td><strong>0A</strong> (d&eacute;but juin)</td><td>Remplacement Jaafar (cong&eacute;s 2 sem)</td><td>Autonomie basique studio</td></tr>
                      <tr><td><strong>0B</strong> (mi-juin, juil)</td><td>WE + jours off Jaafar</td><td>Ma&icirc;triser accueil, caisse, Bsport</td></tr>
                      <tr><td><strong>0C</strong> (ao&ucirc;t)</td><td>Pr&eacute;p ouverture Monceau</td><td>Process, am&eacute;nagement, recrutement flexos</td></tr>
                    </tbody>
                  </table>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.5rem' }}>Budget Phase 0 : ~3 900 &euro; (130 &euro;/j x ~30j)</div>
              </div>
              <div className="box-green">
                <strong style={{ color: 'var(--neuro)' }}>Ce qu&apos;on attend de Jordan</strong>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem', fontSize: '0.85rem', lineHeight: '1.8' }}>
                  <li>&bull; <strong>Absorber les process</strong> Aboukir pendant la Phase 0 (Jaafar = formateur)</li>
                  <li>&bull; <strong>G&eacute;rer Monceau en autonomie</strong> d&egrave;s le jour 1 (septembre)</li>
                  <li>&bull; <strong>Cr&eacute;er la culture client</strong> du studio : accueil, upsell, fid&eacute;lisation</li>
                  <li>&bull; <strong>Piloter son &eacute;quipe</strong> : 1 alternant + flexos + flexo r&eacute;f&eacute;rent</li>
                  <li>&bull; <strong>&Ecirc;tre pr&eacute;sent sur les peaks</strong> : golden window 11h-17h, samedi complet</li>
                  <li>&bull; <strong>Atteindre 25K CA/mois</strong> &agrave; M+3, 35K &agrave; M+6 (ramp-up Monceau)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="cards" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="card">
              <div className="card-label">Objectifs Q4 2026 (premiers 3 mois CDI)</div>
              <div className="table-wrap" style={{ marginTop: '0.5rem' }}>
                <table>
                  <thead>
                    <tr><th>KPI</th><th>Objectif</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>CA Monceau</td><td>&ge; 20K M1, 25K M2, 30K M3</td></tr>
                    <tr><td>UTR</td><td>&ge; 80% (ramp-up)</td></tr>
                    <tr><td>NPS</td><td>&ge; 60 (nouveau studio)</td></tr>
                    <tr><td>Acquisition</td><td>50+ nouveaux clients en 3 mois</td></tr>
                  </tbody>
                </table>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.5rem' }}>Variable vers&eacute; &agrave; partir de T2 (pas pendant la p&eacute;riode d&apos;essai de 3 mois)</div>
            </div>
            <div className="card">
              <div className="card-label">Parcours chez Flexlab</div>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem', fontSize: '0.85rem', lineHeight: '1.8' }}>
                <li>&bull; <strong>Juin-ao&ucirc;t 2026</strong> : freelance, formation terrain avec Jaafar</li>
                <li>&bull; <strong>Sept 2026</strong> : CDI, SM Monceau, p&eacute;riode d&apos;essai 3 mois</li>
                <li>&bull; <strong>D&eacute;c 2026</strong> : confirmation CDI, premiers objectifs variable</li>
                <li>&bull; <strong>H1 2027</strong> : si Monceau &agrave; 35K+ &rarr; &eacute;volution possible vers Head of CX</li>
                <li>&bull; <strong>Package cible Phase 2</strong> : 40K fix + 20K var (Regional Manager)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">Flexlab &bull; Confidentiel &bull; Mai 2026</div>
    </div>
  );
}
