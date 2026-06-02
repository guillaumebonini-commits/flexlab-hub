export default function PlanOps() {
  return (
    <div className="page">
      {/* HEADER */}
      <div className="chapter-label">Operations &middot; Mai 2026</div>
      <h1 className="chapter-title">
        PLAN <span className="sl">O</span>PERATI<span className="sl">O</span>NNEL <em>3 phases</em>
      </h1>
      <p className="chapter-subtitle">
        Septembre 2026 &ndash; Octobre 2027 &bull; Organisation, P&amp;L &amp; seuils.
        Chaque studio ouvre 7j/7, amplitude <strong>8h-20h soit 84h/semaine</strong> a couvrir.
        Ce document detaille qui couvre quoi, a quel cout, et combien d&rsquo;heures restent en gestion autonome par les flexologues.
      </p>

      {/* ============================================================ */}
      {/* PHASE 0 */}
      {/* ============================================================ */}
      <div className="section">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="section-number">0</span>
            <div>
              <div className="section-title">Phase 0 : Integration &amp; Preparation</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--mist)', marginTop: '0.15rem' }}>
                Juin &ndash; Aout 2026 &bull; Jordan integre l&rsquo;equipe en freelance, travaux en cours
              </div>
            </div>
          </div>
          <span className="section-badge">3 mois</span>
        </div>
        <div className="section-body">
          <p style={{ fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            <strong>Objectif :</strong> Jordan decouvre le metier a Aboukir en freelance au jour (130&nbsp;&euro;/jour).
            3 sous-phases selon la presence de Jaafar. Travaux Monceau et Condorcet en parallele.
          </p>

          {/* SUB-PHASE 0A */}
          <div className="card card-dark" style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--membership)' }}>0A</span>
              <span style={{ fontWeight: 700, color: 'var(--membership)' }}>Debut juin (2 semaines)</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--sky)' }}>&bull; Jordan remplace Jaafar (conges)</span>
            </div>
            <div className="cards" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div>
                <div className="card-label" style={{ color: 'var(--sky)' }}>ABOUKIR</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--white)' }}>Jordan seul</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--mist)' }}>~10 jours &bull; 130&nbsp;&euro;/j = <strong>1&nbsp;300&nbsp;&euro;</strong></div>
                <div style={{ fontSize: '0.75rem', color: 'var(--sky)', marginTop: '0.25rem' }}>Bapteme du feu. Gere Aboukir sans Jaafar.</div>
              </div>
              <div>
                <div className="card-label" style={{ color: 'var(--sky)' }}>JAAFAR</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--white)' }}>En conges</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--sky)', marginTop: '0.25rem' }}>Flexologues en backup pour les extremites de journee.</div>
              </div>
            </div>
          </div>

          {/* SUB-PHASE 0B */}
          <div className="card card-dark" style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--membership)' }}>0B</span>
              <span style={{ fontWeight: 700, color: 'var(--membership)' }}>Mi-juin a fin juillet</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--sky)' }}>&bull; Jaafar de retour, Jordan en support WE</span>
            </div>
            <div className="cards" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div>
                <div className="card-label" style={{ color: 'var(--sky)' }}>ABOUKIR</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--white)' }}>Jaafar 5j (lun-ven)</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--mist)' }}>3&nbsp;500&nbsp;&euro;/mois &bull; 50h/sem</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--white)', marginTop: '0.5rem' }}>Jordan 2j (sam-dim)</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--mist)' }}>~8.5j/mois &bull; 130&nbsp;&euro;/j = <strong>~1&nbsp;105&nbsp;&euro;/mois</strong></div>
                <div style={{ fontSize: '0.75rem', color: 'var(--sky)', marginTop: '0.25rem' }}>+ jours ponctuels quand Jaafar prend des jours off en juillet</div>
              </div>
              <div>
                <div className="card-label" style={{ color: 'var(--sky)' }}>COUVERTURE</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--mist)', lineHeight: 1.6 }}>
                  Jaafar : 50h/sem (lun-ven)<br />
                  Jordan : 24h/sem (sam-dim)<br />
                  Flexo seuls : ~10h/sem (extremites)
                </div>
                <div className="card-label" style={{ color: 'var(--sky)', marginTop: '0.75rem' }}>COUT STUDIO</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--white)' }}>~4&nbsp;605&nbsp;&euro;/mois</div>
              </div>
            </div>
          </div>

          {/* SUB-PHASE 0C */}
          <div className="card card-dark" style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--membership)' }}>0C</span>
              <span style={{ fontWeight: 700, color: 'var(--membership)' }}>Aout</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--sky)' }}>&bull; Fermeture ~2 semaines, preparation ouverture Monceau</span>
            </div>
            <div className="cards" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div>
                <div className="card-label" style={{ color: 'var(--sky)' }}>ABOUKIR</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--white)' }}>Ferme ~2 semaines</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--mist)' }}>Jaafar : 3&nbsp;500&nbsp;&euro; (forfait maintenu)</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--mist)' }}>Jordan : ~4-6j &bull; 130&nbsp;&euro;/j = <strong>~650&nbsp;&euro;</strong></div>
                <div style={{ fontSize: '0.75rem', color: 'var(--sky)', marginTop: '0.25rem' }}>Jours restants = prep ouverture Monceau (visites chantier, process, etc.)</div>
              </div>
              <div>
                <div className="card-label" style={{ color: 'var(--sky)' }}>EN PARALLELE</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--mist)', lineHeight: 1.6 }}>
                  &bull; Travaux Monceau en cours<br />
                  &bull; Travaux Condorcet demarrent<br />
                  &bull; Recrutement SM Senior Condorcet<br />
                  &bull; Recrutement alternants (x3)
                </div>
                <div className="card-label" style={{ color: 'var(--sky)', marginTop: '0.75rem' }}>COUT STUDIO</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--white)' }}>~4&nbsp;150&nbsp;&euro;</div>
              </div>
            </div>
          </div>

          {/* Budget recap Phase 0 */}
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>
            Recap cout Jordan Phase 0
          </h3>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th style={{ width: '40%' }}>Sous-phase</th>
                  <th style={{ textAlign: 'center', width: '20%' }}>Jours</th>
                  <th style={{ textAlign: 'center', width: '20%' }}>TJM</th>
                  <th style={{ textAlign: 'center', width: '20%' }}>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0A : Remplacement Jaafar</td>
                  <td style={{ textAlign: 'center' }}>10j</td>
                  <td style={{ textAlign: 'center' }}>135&nbsp;&euro;</td>
                  <td style={{ textAlign: 'center', fontWeight: 600 }}>1&nbsp;300&nbsp;&euro;</td>
                </tr>
                <tr>
                  <td>0B : WE + jours off Jaafar (~6 sem)</td>
                  <td style={{ textAlign: 'center' }}>~15j</td>
                  <td style={{ textAlign: 'center' }}>135&nbsp;&euro;</td>
                  <td style={{ textAlign: 'center', fontWeight: 600 }}>~1&nbsp;950&nbsp;&euro;</td>
                </tr>
                <tr>
                  <td>0C : Aout (fermeture + prep)</td>
                  <td style={{ textAlign: 'center' }}>~5j</td>
                  <td style={{ textAlign: 'center' }}>135&nbsp;&euro;</td>
                  <td style={{ textAlign: 'center', fontWeight: 600 }}>~650&nbsp;&euro;</td>
                </tr>
                <tr style={{ background: '#f0fff4' }}>
                  <td style={{ fontWeight: 700, color: 'var(--neuro)' }}>TOTAL PHASE 0 (3 mois)</td>
                  <td style={{ textAlign: 'center', fontWeight: 700, color: 'var(--navy)' }}>~30j</td>
                  <td style={{ textAlign: 'center' }}>135&nbsp;&euro;</td>
                  <td style={{ textAlign: 'center', fontWeight: 700, color: 'var(--navy)' }}>~3&nbsp;900&nbsp;&euro;</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Monceau + Condorcet travaux */}
          <div className="cards" style={{ gridTemplateColumns: '1fr 1fr', margin: '1.5rem 0' }}>
            <div className="card" style={{ borderStyle: 'dashed' }}>
              <div className="card-label" style={{ color: 'var(--blue)' }}>MONCEAU</div>
              <div className="card-detail">Travaux des juillet &bull; Ouverture sept.</div>
            </div>
            <div className="card" style={{ borderStyle: 'dashed' }}>
              <div className="card-label" style={{ color: 'var(--drainage)' }}>CONDORCET</div>
              <div className="card-detail">Travaux des sept. &bull; Ouverture nov.</div>
            </div>
          </div>

          {/* P&L Phase 0 */}
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: 'var(--navy)', marginBottom: '0.25rem' }}>
            P&amp;L mensuel Phase 0
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '0.75rem' }}>Aboukir seul</p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th style={{ width: '60%' }}></th>
                  <th style={{ textAlign: 'center', width: '40%', color: 'var(--sky)' }}>Mensuel</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: 'var(--beige)' }}>
                  <td style={{ fontWeight: 700, color: 'var(--navy)' }}>CA TTC (Aboukir)</td>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: 'var(--navy)' }}>42&nbsp;500</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--muted)' }}>CA HT</td>
                  <td style={{ textAlign: 'right', color: 'var(--muted)' }}>35&nbsp;417</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--lumiere)' }}>COGS Flexologues (35,3%)</td>
                  <td style={{ textAlign: 'right', color: 'var(--lumiere)' }}>-12&nbsp;502</td>
                </tr>
                <tr style={{ background: '#f0fff4' }}>
                  <td style={{ fontWeight: 700, color: 'var(--neuro)' }}>Marge Brute (64,7%)</td>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: 'var(--neuro)' }}>22&nbsp;915</td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ fontWeight: 700, color: 'var(--navy)' }}>Charges Studio</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: '2rem' }}>Loyer Aboukir</td>
                  <td style={{ textAlign: 'right' }}>-4&nbsp;500</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: '2rem' }}>Jaafar</td>
                  <td style={{ textAlign: 'right' }}>-3&nbsp;500</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: '2rem' }}>Jordan (freelance 130&nbsp;&euro;/j, ~10j/mois moy.)</td>
                  <td style={{ textAlign: 'right' }}>-1&nbsp;300</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: '2rem' }}>Marketing studio</td>
                  <td style={{ textAlign: 'right' }}>-2&nbsp;500</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: '2rem' }}>Overhead studio</td>
                  <td style={{ textAlign: 'right' }}>-1&nbsp;500</td>
                </tr>
                <tr style={{ background: 'var(--beige)' }}>
                  <td style={{ fontWeight: 600, color: 'var(--muted)' }}>Total Studio</td>
                  <td style={{ textAlign: 'right', fontWeight: 600, color: 'var(--muted)' }}>-10&nbsp;300</td>
                </tr>
                <tr style={{ background: 'var(--veil)' }}>
                  <td style={{ fontWeight: 700, color: 'var(--navy)' }}>Resultat Net Studio</td>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: 'var(--neuro)' }}>+12&nbsp;615</td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ fontWeight: 700, color: 'var(--navy)' }}>Charges HQ</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: '2rem' }}>Othman (Meta Ads)</td>
                  <td style={{ textAlign: 'right' }}>-750</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: '2rem' }}>Overhead HQ</td>
                  <td style={{ textAlign: 'right' }}>-2&nbsp;000</td>
                </tr>
                <tr style={{ background: 'var(--beige)' }}>
                  <td style={{ fontWeight: 600, color: 'var(--muted)' }}>Total HQ</td>
                  <td style={{ textAlign: 'right', fontWeight: 600, color: 'var(--muted)' }}>-2&nbsp;750</td>
                </tr>
              </tbody>
              <tfoot>
                <tr style={{ background: 'var(--navy)' }}>
                  <td style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.95rem' }}>Resultat Net Total</td>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: '#27ae60', fontSize: '0.95rem' }}>+9&nbsp;865</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="box-green" style={{ marginTop: '1rem' }}>
            <strong>Studio rentable a +12&nbsp;615/mois.</strong> Le HQ coute 4&nbsp;750. Resultat net : +9&nbsp;865. Jordan freelance au jour (130 EUR/j), flexible selon besoins.
          </div>

          <div className="box-red">
            <strong style={{ color: 'var(--lumiere)' }}>A faire pendant cette phase</strong><br />
            &bull; Jordan apprend les process, l&rsquo;accueil client, le suivi des flexologues<br />
            &bull; Recruter le SM Senior Condorcet et l&rsquo;integrer a Aboukir en aout<br />
            &bull; Recruter les 3 alternants (demarrage septembre)<br />
            &bull; Piloter les travaux Monceau + Condorcet
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* PHASE 1 */}
      {/* ============================================================ */}
      <div className="section">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="section-number">1</span>
            <div>
              <div className="section-title">Phase 1 : Ouverture</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--mist)', marginTop: '0.15rem' }}>
                Septembre &ndash; Decembre 2026 &bull; Tout le monde terrain
              </div>
            </div>
          </div>
          <span className="section-badge">4 mois</span>
        </div>
        <div className="section-body">
          <p style={{ fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            <strong>Objectif :</strong> Les 3 studios ouvrent. Jaafar, Jordan et le SM Senior prennent chacun un studio. Les alternants sont en support.
          </p>

          {/* ABOUKIR Phase 1 */}
          <StudioBlock
            name="ABOUKIR"
            subtitle="Studio mature"
            color="#F4A623"
            textOnColor="#050B4D"
            lead={{ name: 'Jaafar', role: 'SM + Ops global (recrutement flexologues, planning)', salary: '3 500 \u20AC/mois', contract: 'Freelance', hours: '39h', hoursLabel: '/semaine studio' }}
            support={{ name: 'Alternant', role: 'Accueil, admin, couvre WE + jours off Jaafar', salary: '1 000 \u20AC/mois', contract: 'Alternant (ecole 1j/sem)', hours: '22h', hoursLabel: '/semaine' }}
            coverage={[
              { label: 'Jaafar 39h', width: '46%', bg: '#F4A623', textColor: '#050B4D' },
              { label: 'Alternant 22h', width: '26%', bg: '#E0E0E0', textColor: '#666' },
              { label: '23h', width: '28%', bg: '#FFE0E0', textColor: '#c0392b' },
            ]}
            footer="Cout studio : 4 500 \u20AC/mois. Flexo seuls : extremites de journee + 1j WE"
          />

          {/* MONCEAU Phase 1 */}
          <StudioBlock
            name="MONCEAU"
            subtitle="Ouverture septembre"
            color="#0F6FFF"
            textOnColor="#fff"
            subtitleColor="#CCEBFF"
            lead={{ name: 'Jordan', role: 'SM full time + Experience Client', salary: '3 650 \u20AC/mois', contract: 'CDI \u2022 ~2 157 \u20AC net av. impot', hours: '39h', hoursLabel: '/semaine studio' }}
            support={{ name: 'Alternant', role: 'Accueil, admin, WE', salary: '1 000 \u20AC/mois', contract: 'Alternant', hours: '22h', hoursLabel: '/semaine' }}
            coverage={[
              { label: 'Jordan 39h', width: '46%', bg: '#0F6FFF', textColor: '#fff' },
              { label: 'Alternant 22h', width: '26%', bg: '#E0E0E0', textColor: '#666' },
              { label: '23h', width: '28%', bg: '#FFE0E0', textColor: '#c0392b' },
            ]}
            footer="Cout studio : 4 650 \u20AC/mois. Jordan 3 650 + Alternant 1 000, flexo seuls = extremites de journee"
          />

          {/* CONDORCET Phase 1 */}
          <StudioBlock
            name="CONDORCET"
            subtitle="Ouverture septembre"
            color="#8E24AA"
            textOnColor="#fff"
            subtitleColor="#E1BEE7"
            lead={{ name: 'SM Senior', role: 'SM full time, autonome', salary: '3 650 \u20AC/mois', contract: 'CDI \u2022 ~2 157 \u20AC net av. impot', hours: '39h', hoursLabel: '/semaine studio' }}
            support={{ name: 'Alternant', role: 'Accueil, admin, WE', salary: '1 000 \u20AC/mois', contract: 'Alternant', hours: '22h', hoursLabel: '/semaine' }}
            coverage={[
              { label: 'SM Senior 39h', width: '46%', bg: '#8E24AA', textColor: '#fff' },
              { label: 'Alternant 22h', width: '26%', bg: '#E0E0E0', textColor: '#666' },
              { label: '23h', width: '28%', bg: '#FFE0E0', textColor: '#c0392b' },
            ]}
            footer="Cout studio : 4 650 \u20AC/mois. Meme logique que Monceau"
          />

          {/* SEMAINE TYPE */}
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: 'var(--navy)', marginTop: '2rem', marginBottom: '0.25rem' }}>
            Semaine type par studio
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '1rem' }}>
            Amplitude 8h-20h, 7j/7 = 84h/semaine a couvrir
          </p>

          {/* Roles table */}
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>Repartition des roles</p>
          <div className="table-wrap" style={{ marginBottom: '1rem' }}>
            <table>
              <thead>
                <tr>
                  <th style={{ width: '28%' }}>Role</th>
                  <th style={{ textAlign: 'center', width: '14%' }}>Heures</th>
                  <th style={{ textAlign: 'center', width: '14%' }}>Jours</th>
                  <th style={{ textAlign: 'center', width: '14%' }}>Repos</th>
                  <th style={{ width: '30%' }}>Missions back-office</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span style={{ color: 'var(--blue)', fontWeight: 700 }}>&#9632;</span> SM Lead (CDI)</td>
                  <td style={{ textAlign: 'center', fontWeight: 600 }}>39h</td>
                  <td style={{ textAlign: 'center' }}>Mer &rarr; Dim</td>
                  <td style={{ textAlign: 'center' }}>Lun + Mar</td>
                  <td style={{ color: 'var(--muted)' }}>Planning, KPIs, caisse, gestion stocks, recrutement flexo</td>
                </tr>
                <tr>
                  <td><span style={{ color: '#F4A623', fontWeight: 700 }}>&#9632;</span> Alternant</td>
                  <td style={{ textAlign: 'center', fontWeight: 600 }}>22h</td>
                  <td style={{ textAlign: 'center' }}>Mar &rarr; Ven + Dim</td>
                  <td style={{ textAlign: 'center' }}>Lun (ecole) + Sam</td>
                  <td style={{ color: 'var(--muted)' }}>Accueil, prise de RDV, entretien, reseaux sociaux</td>
                </tr>
                <tr>
                  <td><span style={{ color: 'var(--lumiere)', fontWeight: 700 }}>&#9632;</span> Flexo elargi (15&euro;/h)</td>
                  <td style={{ textAlign: 'center', fontWeight: 600 }}>~23h</td>
                  <td style={{ textAlign: 'center' }}>7j/7</td>
                  <td style={{ textAlign: 'center' }}>Rotation</td>
                  <td style={{ color: 'var(--muted)' }}>Ouverture/fermeture, accueil entre seances, menage rapide</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Weekly schedule */}
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>Planning hebdomadaire</p>
          <div className="table-wrap" style={{ marginBottom: '0.75rem' }}>
            <table style={{ fontSize: '0.75rem' }}>
              <thead>
                <tr>
                  <th style={{ width: '13%' }}>Creneau</th>
                  <th style={{ textAlign: 'center' }}>Lun</th>
                  <th style={{ textAlign: 'center' }}>Mar</th>
                  <th style={{ textAlign: 'center' }}>Mer</th>
                  <th style={{ textAlign: 'center' }}>Jeu</th>
                  <th style={{ textAlign: 'center' }}>Ven</th>
                  <th style={{ textAlign: 'center' }}>Sam</th>
                  <th style={{ textAlign: 'center' }}>Dim</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 600 }}>8h - 9h30</td>
                  <ScheduleCell type="flexo" />
                  <ScheduleCell type="flexo" />
                  <ScheduleCell type="flexo" />
                  <ScheduleCell type="flexo" />
                  <ScheduleCell type="flexo" />
                  <ScheduleCell type="flexo" />
                  <ScheduleCell type="alt" />
                </tr>
                <tr>
                  <td style={{ fontWeight: 600 }}>9h30 - 16h</td>
                  <ScheduleCell type="flexo" />
                  <ScheduleCell type="alt" />
                  <ScheduleCell type="sm" />
                  <ScheduleCell type="sm" />
                  <ScheduleCell type="sm" />
                  <ScheduleCell type="sm" />
                  <ScheduleCell type="sm" />
                </tr>
                <tr>
                  <td style={{ fontWeight: 600 }}>16h - 18h30</td>
                  <ScheduleCell type="flexo" />
                  <ScheduleCell type="alt" />
                  <ScheduleCell type="both" />
                  <ScheduleCell type="both" />
                  <ScheduleCell type="both" />
                  <ScheduleCell type="sm" />
                  <ScheduleCell type="sm" />
                </tr>
                <tr>
                  <td style={{ fontWeight: 600 }}>18h30 - 20h</td>
                  <ScheduleCell type="flexo" />
                  <ScheduleCell type="flexo" />
                  <ScheduleCell type="alt" />
                  <ScheduleCell type="alt" />
                  <ScheduleCell type="alt" />
                  <ScheduleCell type="flexo" />
                  <ScheduleCell type="flexo" />
                </tr>
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="pills" style={{ marginBottom: '1rem' }}>
            <span className="pill"><span style={{ color: 'var(--blue)', fontWeight: 700 }}>&#9632;</span> SM : Mer-Sam 9h30-18h30 + Dim 9h30-17h30 (1h pause/j) = <strong className="blue">39h</strong></span>
            <span className="pill"><span style={{ color: '#F4A623', fontWeight: 700 }}>&#9632;</span> Alt : Mar 9h30-18h30 + Mer-Ven 16h-20h + Dim 8h-10h = <strong className="membership">22h</strong></span>
            <span className="pill"><span style={{ color: 'var(--lumiere)', fontWeight: 700 }}>&#9632;</span> Flexo : lundi complet + ouvertures + soirs = <strong className="lumiere">~23h</strong> (15&euro;/h)</span>
          </div>

          <div className="box-green">
            <strong style={{ color: 'var(--neuro)' }}>Conformite legale :</strong> SM = CDI 39h sur 5 jours, 2 jours repos consecutifs (Lun-Mar). Present Sam + Dim (jours forts). Alternant = 22h sur 5 jours, ecole le lundi, repos samedi. 11h minimum entre deux postes respectees. Chevauchement SM/Alt mer-ven = passation, formation terrain. Lundi = flexologues elargis seuls (jour creux).
          </div>

          {/* P&L Phase 1 */}
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: 'var(--navy)', marginTop: '2rem', marginBottom: '0.75rem' }}>
            P&amp;L mensuel Phase 1
          </h3>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th style={{ width: '46%' }}></th>
                  <th style={{ textAlign: 'center', width: '27%', color: 'var(--sky)' }}>Cible (40K/studio)</th>
                  <th style={{ textAlign: 'center', width: '27%', color: 'var(--sky)' }}>Plancher</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: 'var(--beige)' }}>
                  <td style={{ fontWeight: 700, color: 'var(--navy)' }}>CA TTC (3 studios)</td>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: 'var(--navy)' }}>120&nbsp;000</td>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: 'var(--navy)' }}>74&nbsp;770</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--muted)' }}>CA HT</td>
                  <td style={{ textAlign: 'right', color: 'var(--muted)' }}>100&nbsp;000</td>
                  <td style={{ textAlign: 'right', color: 'var(--muted)' }}>62&nbsp;308</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--lumiere)' }}>COGS Flexologues (35,3%)</td>
                  <td style={{ textAlign: 'right', color: 'var(--lumiere)' }}>-35&nbsp;300</td>
                  <td style={{ textAlign: 'right', color: 'var(--lumiere)' }}>-21&nbsp;995</td>
                </tr>
                <tr style={{ background: '#f0fff4' }}>
                  <td style={{ fontWeight: 700, color: 'var(--neuro)' }}>Marge Brute (64,7%)</td>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: 'var(--neuro)' }}>64&nbsp;700</td>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: 'var(--neuro)' }}>40&nbsp;313</td>
                </tr>
                <tr>
                  <td colSpan={3} style={{ fontWeight: 700, color: 'var(--navy)' }}>Charges Studio</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: '2rem' }}>Loyers 3 studios</td>
                  <td style={{ textAlign: 'right' }}>-13&nbsp;063</td>
                  <td style={{ textAlign: 'right' }}>-13&nbsp;063</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: '2rem' }}>Equipe (Jaf + Jordan + SM + 3 alt.)</td>
                  <td style={{ textAlign: 'right' }}>-15&nbsp;250</td>
                  <td style={{ textAlign: 'right' }}>-15&nbsp;250</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: '2rem' }}>Marketing studio (1,5K x 3)</td>
                  <td style={{ textAlign: 'right' }}>-4&nbsp;500</td>
                  <td style={{ textAlign: 'right' }}>-4&nbsp;500</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: '2rem' }}>Overhead studio (1,5K x 3)</td>
                  <td style={{ textAlign: 'right' }}>-4&nbsp;500</td>
                  <td style={{ textAlign: 'right' }}>-4&nbsp;500</td>
                </tr>
                <tr style={{ background: 'var(--beige)' }}>
                  <td style={{ fontWeight: 600, color: 'var(--muted)' }}>Total Studio</td>
                  <td colSpan={2} style={{ textAlign: 'right', fontWeight: 600, color: 'var(--muted)' }}>-34&nbsp;563</td>
                </tr>
                <tr style={{ background: 'var(--veil)' }}>
                  <td style={{ fontWeight: 700, color: 'var(--navy)' }}>Resultat Net Studio</td>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: 'var(--neuro)' }}>+30&nbsp;137</td>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: 'var(--neuro)' }}>+6&nbsp;299</td>
                </tr>
                <tr>
                  <td colSpan={3} style={{ fontWeight: 700, color: 'var(--navy)' }}>Charges HQ</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: '2rem' }}>Othman (Meta Ads)</td>
                  <td style={{ textAlign: 'right' }}>-750</td>
                  <td style={{ textAlign: 'right' }}>-750</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: '2rem' }}>Overhead HQ</td>
                  <td style={{ textAlign: 'right' }}>-4&nbsp;000</td>
                  <td style={{ textAlign: 'right' }}>-4&nbsp;000</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: '2rem' }}>Interets dette (differe)</td>
                  <td style={{ textAlign: 'right' }}>-1&nbsp;000</td>
                  <td style={{ textAlign: 'right' }}>-1&nbsp;000</td>
                </tr>
                <tr style={{ background: 'var(--beige)' }}>
                  <td style={{ fontWeight: 600, color: 'var(--muted)' }}>Total HQ</td>
                  <td colSpan={2} style={{ textAlign: 'right', fontWeight: 600, color: 'var(--muted)' }}>-5&nbsp;750</td>
                </tr>
              </tbody>
              <tfoot>
                <tr style={{ background: 'var(--navy)' }}>
                  <td style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.95rem' }}>Resultat Net Total</td>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: '#27ae60', fontSize: '0.95rem' }}>+24&nbsp;387</td>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: '#F4A623', fontSize: '0.95rem' }}>&asymp; 0</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="box-green" style={{ marginTop: '1rem' }}>
            <strong style={{ color: 'var(--neuro)' }}>CA plancher break-even : </strong>
            <span style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic', fontSize: '1.5rem', fontWeight: 600, color: 'var(--navy)' }}>75K</span>
            <span style={{ fontSize: '0.9rem', color: 'var(--navy)', fontWeight: 600 }}> TTC/mois</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}> soit 27K/studio</span>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* PHASE 2 */}
      {/* ============================================================ */}
      <div className="section">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="section-number">2</span>
            <div>
              <div className="section-title">Phase 2 : Croisiere</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--mist)', marginTop: '0.15rem' }}>
                Juillet 2027+ &bull; Jaafar et Jordan detaches du terrain
              </div>
            </div>
          </div>
          <span className="section-badge">Croisiere</span>
        </div>
        <div className="section-body">

          {/* Ops Central */}
          <div className="card card-dark" style={{ marginBottom: '1.5rem' }}>
            <div className="card-label" style={{ color: 'var(--sky)' }}>OPS CENTRAL (DETACHES DU TERRAIN)</div>
            <div className="cards" style={{ gridTemplateColumns: '1fr 1fr', marginTop: '0.75rem' }}>
              <div style={{ background: '#1a2266', borderRadius: '6px', padding: '0.75rem 1rem' }}>
                <div style={{ color: '#F4A623', fontWeight: 600, fontSize: '0.9rem' }}>Jaafar &bull; Ops Director</div>
                <div style={{ color: 'var(--sky)', fontSize: '0.8rem' }}>4&nbsp;300&nbsp;&euro; &bull; Perf CA, recrutement, planning</div>
                <div style={{ color: 'var(--muted)', fontSize: '0.75rem' }}>~3&nbsp;354&nbsp;&euro; net av. impot (freelance)</div>
              </div>
              <div style={{ background: '#1a2266', borderRadius: '6px', padding: '0.75rem 1rem' }}>
                <div style={{ color: 'var(--blue)', fontWeight: 600, fontSize: '0.9rem' }}>Jordan &bull; Head of CX</div>
                <div style={{ color: 'var(--sky)', fontSize: '0.8rem' }}>4&nbsp;300&nbsp;&euro; &bull; Standards, formation, qualite</div>
                <div style={{ color: 'var(--muted)', fontSize: '0.75rem' }}>~2&nbsp;541&nbsp;&euro; net av. impot (CDI)</div>
              </div>
            </div>
          </div>

          {/* ABOUKIR Phase 2 */}
          <StudioBlock
            name="ABOUKIR"
            subtitle="SM Lead, autonome"
            color="#F4A623"
            textOnColor="#050B4D"
            lead={{ name: 'SM Lead', role: 'Forme par Jaafar, autonome', salary: '3 650 \u20AC/mois', contract: 'CDI \u2022 ~2 157 \u20AC net av. impot', hours: '39h', hoursLabel: '/semaine' }}
            support={{ name: 'Nouvel alternant', role: '', salary: '1 000 \u20AC/mois', contract: '', hours: '22h', hoursLabel: '' }}
            coverage={[
              { label: 'SM Junior 39h', width: '46%', bg: '#F4A623', textColor: '#050B4D' },
              { label: 'Alternant 22h', width: '33%', bg: '#E0E0E0', textColor: '#666' },
              { label: '23h', width: '28%', bg: '#FFE0E0', textColor: '#c0392b' },
            ]}
            footer="Cout studio : 3 000 \u20AC/mois"
          />

          {/* MONCEAU Phase 2 */}
          <StudioBlock
            name="MONCEAU"
            subtitle="SM Lead, Jordan supervise a distance"
            color="#0F6FFF"
            textOnColor="#fff"
            subtitleColor="#CCEBFF"
            lead={{ name: 'SM Lead', role: 'Forme par Jordan, autonome', salary: '3 650 \u20AC/mois', contract: 'CDI \u2022 ~2 157 \u20AC net av. impot', hours: '39h', hoursLabel: '' }}
            support={{ name: 'Nouvel alternant', role: '', salary: '1 000 \u20AC/mois', contract: '', hours: '22h', hoursLabel: '' }}
            coverage={[
              { label: 'SM Junior 39h', width: '46%', bg: '#0F6FFF', textColor: '#fff' },
              { label: 'Alternant 22h', width: '33%', bg: '#E0E0E0', textColor: '#666' },
              { label: '23h', width: '28%', bg: '#FFE0E0', textColor: '#c0392b' },
            ]}
            footer="Cout studio : 4 650 \u20AC/mois"
          />

          {/* CONDORCET Phase 2 */}
          <StudioBlock
            name="CONDORCET"
            subtitle="SM Senior toujours en place"
            color="#8E24AA"
            textOnColor="#fff"
            subtitleColor="#E1BEE7"
            lead={{ name: 'SM Senior', role: 'Inchange, full terrain', salary: '3 650 \u20AC/mois', contract: 'CDI \u2022 ~2 157 \u20AC net av. impot', hours: '39h', hoursLabel: '' }}
            support={{ name: 'Alternant', role: 'Inchange', salary: '1 000 \u20AC/mois', contract: '', hours: '22h', hoursLabel: '' }}
            coverage={[
              { label: 'SM Senior 39h', width: '46%', bg: '#8E24AA', textColor: '#fff' },
              { label: 'Alternant 22h', width: '33%', bg: '#E0E0E0', textColor: '#666' },
              { label: '23h', width: '28%', bg: '#FFE0E0', textColor: '#c0392b' },
            ]}
            footer="Cout studio : 4 650 \u20AC/mois"
          />

          {/* P&L Phase 2 */}
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: 'var(--navy)', marginTop: '2rem', marginBottom: '0.75rem' }}>
            P&amp;L mensuel Phase 2
          </h3>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th style={{ width: '40%' }}></th>
                  <th style={{ textAlign: 'center', width: '20%', color: 'var(--sky)' }}>Cible<br />40K/studio</th>
                  <th style={{ textAlign: 'center', width: '20%', color: 'var(--sky)' }}>Ambitieux<br />50K/studio</th>
                  <th style={{ textAlign: 'center', width: '20%', color: 'var(--sky)' }}>Plancher</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: 'var(--beige)' }}>
                  <td style={{ fontWeight: 700, color: 'var(--navy)' }}>CA TTC</td>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: 'var(--navy)' }}>120&nbsp;000</td>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: 'var(--navy)' }}>150&nbsp;000</td>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: 'var(--navy)' }}>93&nbsp;047</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--muted)' }}>CA HT</td>
                  <td style={{ textAlign: 'right', color: 'var(--muted)' }}>100&nbsp;000</td>
                  <td style={{ textAlign: 'right', color: 'var(--muted)' }}>125&nbsp;000</td>
                  <td style={{ textAlign: 'right', color: 'var(--muted)' }}>77&nbsp;539</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--lumiere)' }}>COGS Flexologues (35,3%)</td>
                  <td style={{ textAlign: 'right', color: 'var(--lumiere)' }}>-35&nbsp;300</td>
                  <td style={{ textAlign: 'right', color: 'var(--lumiere)' }}>-44&nbsp;125</td>
                  <td style={{ textAlign: 'right', color: 'var(--lumiere)' }}>-27&nbsp;205</td>
                </tr>
                <tr style={{ background: '#f0fff4' }}>
                  <td style={{ fontWeight: 700, color: 'var(--neuro)' }}>Marge Brute (64,7%)</td>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: 'var(--neuro)' }}>64&nbsp;700</td>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: 'var(--neuro)' }}>80&nbsp;875</td>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: 'var(--neuro)' }}>50&nbsp;167</td>
                </tr>
                <tr>
                  <td colSpan={4} style={{ fontWeight: 700, color: 'var(--navy)' }}>Charges Studio</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: '2rem' }}>Loyers 3 studios</td>
                  <td style={{ textAlign: 'right' }}>-13&nbsp;063</td>
                  <td style={{ textAlign: 'right' }}>-13&nbsp;063</td>
                  <td style={{ textAlign: 'right' }}>-13&nbsp;063</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: '2rem' }}>Equipe studio (SM Jr x2 + SM Sr + 3 alt.)</td>
                  <td style={{ textAlign: 'right' }}>-12&nbsp;050</td>
                  <td style={{ textAlign: 'right' }}>-12&nbsp;050</td>
                  <td style={{ textAlign: 'right' }}>-12&nbsp;050</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: '2rem' }}>Marketing studio (1,5K x 3)</td>
                  <td style={{ textAlign: 'right' }}>-4&nbsp;500</td>
                  <td style={{ textAlign: 'right' }}>-4&nbsp;500</td>
                  <td style={{ textAlign: 'right' }}>-4&nbsp;500</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: '2rem' }}>Overhead studio (1,5K x 3)</td>
                  <td style={{ textAlign: 'right' }}>-4&nbsp;500</td>
                  <td style={{ textAlign: 'right' }}>-4&nbsp;500</td>
                  <td style={{ textAlign: 'right' }}>-4&nbsp;500</td>
                </tr>
                <tr style={{ background: 'var(--beige)' }}>
                  <td style={{ fontWeight: 600, color: 'var(--muted)' }}>Total Studio</td>
                  <td colSpan={3} style={{ textAlign: 'right', fontWeight: 600, color: 'var(--muted)' }}>-36&nbsp;013</td>
                </tr>
                <tr style={{ background: 'var(--veil)' }}>
                  <td style={{ fontWeight: 700, color: 'var(--navy)' }}>Resultat Net Studio</td>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: 'var(--neuro)' }}>+32&nbsp;637</td>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: 'var(--neuro)' }}>+48&nbsp;812</td>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: 'var(--neuro)' }}>+17&nbsp;650</td>
                </tr>
                <tr>
                  <td colSpan={4} style={{ fontWeight: 700, color: 'var(--navy)' }}>Charges HQ</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: '2rem' }}>Jaafar (Ops Director)</td>
                  <td style={{ textAlign: 'right' }}>-4&nbsp;000</td>
                  <td style={{ textAlign: 'right' }}>-3&nbsp;500</td>
                  <td style={{ textAlign: 'right' }}>-3&nbsp;500</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: '2rem' }}>Jordan (Head of CX)</td>
                  <td style={{ textAlign: 'right' }}>-3&nbsp;350</td>
                  <td style={{ textAlign: 'right' }}>-2&nbsp;500</td>
                  <td style={{ textAlign: 'right' }}>-2&nbsp;500</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: '2rem' }}>Othman (Meta Ads)</td>
                  <td style={{ textAlign: 'right' }}>-750</td>
                  <td style={{ textAlign: 'right' }}>-750</td>
                  <td style={{ textAlign: 'right' }}>-750</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: '2rem' }}>Overhead HQ</td>
                  <td style={{ textAlign: 'right' }}>-4&nbsp;000</td>
                  <td style={{ textAlign: 'right' }}>-4&nbsp;000</td>
                  <td style={{ textAlign: 'right' }}>-4&nbsp;000</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: '2rem' }}>Remboursement dette</td>
                  <td style={{ textAlign: 'right' }}>-6&nbsp;000</td>
                  <td style={{ textAlign: 'right' }}>-6&nbsp;000</td>
                  <td style={{ textAlign: 'right' }}>-6&nbsp;000</td>
                </tr>
                <tr style={{ background: 'var(--beige)' }}>
                  <td style={{ fontWeight: 600, color: 'var(--muted)' }}>Total HQ</td>
                  <td colSpan={3} style={{ textAlign: 'right', fontWeight: 600, color: 'var(--muted)' }}>-18&nbsp;100</td>
                </tr>
              </tbody>
              <tfoot>
                <tr style={{ background: 'var(--navy)' }}>
                  <td style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.95rem' }}>Resultat Net Total</td>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: '#27ae60', fontSize: '0.95rem' }}>+14&nbsp;537</td>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: '#27ae60', fontSize: '0.95rem' }}>+30&nbsp;712</td>
                  <td style={{ textAlign: 'right', fontWeight: 700, color: '#F4A623', fontSize: '0.95rem' }}>&asymp; 0</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="box-green" style={{ marginTop: '1rem' }}>
            <strong style={{ color: 'var(--neuro)' }}>CA plancher break-even : </strong>
            <span style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic', fontSize: '1.5rem', fontWeight: 600, color: 'var(--navy)' }}>93K</span>
            <span style={{ fontSize: '0.9rem', color: 'var(--navy)', fontWeight: 600 }}> TTC/mois</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}> soit 33K/studio</span>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* SYNTHESE & DECLENCHEURS */}
      {/* ============================================================ */}
      <div className="section">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="section-number">&Sigma;</span>
            <div className="section-title">Synthese &amp; Declencheurs</div>
          </div>
        </div>
        <div className="section-body">
          <div className="table-wrap" style={{ marginBottom: '1.5rem' }}>
            <table>
              <thead>
                <tr>
                  <th style={{ width: '22%' }}></th>
                  <th style={{ textAlign: 'center', width: '19%' }}>Phase 0</th>
                  <th style={{ textAlign: 'center', width: '26%' }}>Phase 1</th>
                  <th style={{ textAlign: 'center', width: '26%' }}>Phase 2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ color: 'var(--muted)' }}>Periode</td>
                  <td style={{ textAlign: 'center' }}>Jun - Aou 26</td>
                  <td style={{ textAlign: 'center' }}>Sep 26+</td>
                  <td style={{ textAlign: 'center' }}>35K+/studio x 2 mois</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--muted)' }}>Studios ouverts</td>
                  <td style={{ textAlign: 'center' }}>1</td>
                  <td style={{ textAlign: 'center' }}>3</td>
                  <td style={{ textAlign: 'center' }}>3</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--muted)' }}>Jaafar + Jordan</td>
                  <td style={{ textAlign: 'center' }}>Formation</td>
                  <td style={{ textAlign: 'center' }}>Terrain</td>
                  <td style={{ textAlign: 'center' }}>Detaches</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--muted)' }}>Personnes en studio</td>
                  <td style={{ textAlign: 'center' }}>2</td>
                  <td style={{ textAlign: 'center' }}>6</td>
                  <td style={{ textAlign: 'center' }}>8</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--muted)' }}>Charges fixes/mois</td>
                  <td style={{ textAlign: 'center', fontWeight: 700, color: 'var(--navy)' }}>18&nbsp;750&nbsp;&euro;</td>
                  <td style={{ textAlign: 'center', fontWeight: 700, color: 'var(--navy)' }}>40&nbsp;313&nbsp;&euro;</td>
                  <td style={{ textAlign: 'center', fontWeight: 700, color: 'var(--navy)' }}>50&nbsp;167&nbsp;&euro;</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--muted)' }}>Resultat net</td>
                  <td style={{ textAlign: 'center', fontWeight: 700, color: 'var(--neuro)' }}>+4&nbsp;165</td>
                  <td style={{ textAlign: 'center', fontWeight: 700, color: 'var(--neuro)' }}>+20&nbsp;837*</td>
                  <td style={{ textAlign: 'center', fontWeight: 700, color: 'var(--neuro)' }}>+14&nbsp;537*</td>
                </tr>
                <tr>
                  <td colSpan={4} style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>* a CA cible 120K TTC (40K/studio)</td>
                </tr>
                <tr style={{ background: '#f0fff4' }}>
                  <td style={{ fontWeight: 700, color: 'var(--neuro)' }}>CA plancher TTC</td>
                  <td style={{ textAlign: 'center', fontWeight: 700, color: 'var(--navy)', fontSize: '0.95rem' }}>40K</td>
                  <td style={{ textAlign: 'center', fontWeight: 700, color: 'var(--navy)', fontSize: '0.95rem' }}>75K</td>
                  <td style={{ textAlign: 'center', fontWeight: 700, color: 'var(--navy)', fontSize: '0.95rem' }}>92K</td>
                </tr>
                <tr style={{ background: '#f0fff4' }}>
                  <td style={{ color: 'var(--muted)' }}>Par studio</td>
                  <td style={{ textAlign: 'center', fontWeight: 600, color: 'var(--navy)' }}>40K</td>
                  <td style={{ textAlign: 'center', fontWeight: 600, color: 'var(--navy)' }}>25K</td>
                  <td style={{ textAlign: 'center', fontWeight: 600, color: 'var(--navy)' }}>33K</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Transition rules */}
          <div className="card" style={{ marginBottom: '0.5rem' }}>
            <div style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '0.25rem' }}>Phase 0 &rarr; Phase 1</div>
            <div style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
              <strong>Travaux termines, studios prets.</strong> Jordan, SM Senior et alternants sont formes et operationnels.
            </div>
          </div>
          <div className="card" style={{ marginBottom: '0.5rem' }}>
            <div style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '0.25rem' }}>Phase 1 &rarr; Phase 2</div>
            <div style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
              Les <strong>3 studios font 35K+ TTC/mois pendant 2 mois consecutifs</strong>. Les alternants sont prets a etre promus. Jaafar et Jordan se detachent.
            </div>
          </div>
          <div className="box-red">
            <strong style={{ color: 'var(--lumiere)' }}>Regle de securite</strong><br />
            Ne jamais passer a la phase suivante si un studio est en dessous de 35K TTC/mois. Le terrain d&rsquo;abord, le transverse quand les chiffres sont la.
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* TIMELINE EQUIPE */}
      {/* ============================================================ */}
      <div className="section">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="section-number">&rarr;</span>
            <div>
              <div className="section-title">Timeline Equipe</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--mist)', marginTop: '0.15rem' }}>
                Evolution des roles et salaires &bull; Juin 2026 &rarr; 2027+
              </div>
            </div>
          </div>
        </div>
        <div className="section-body">

          {/* Phase headers */}
          <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr 30px 1.5fr 30px 2fr', alignItems: 'end', marginBottom: '0.5rem', fontSize: '0.7rem', color: 'var(--muted)' }}>
            <div></div>
            <div style={{ textAlign: 'center', borderBottom: '1px solid var(--line-soft)', paddingBottom: '4px' }}>
              <div style={{ fontSize: '0.65rem' }}>Jun-Aou 26</div>
              <div style={{ fontWeight: 600 }}>Phase 0</div>
            </div>
            <div></div>
            <div style={{ textAlign: 'center', borderBottom: '1px solid var(--line-soft)', paddingBottom: '4px' }}>
              <div style={{ fontSize: '0.65rem' }}>Sep-Dec 26</div>
              <div style={{ fontWeight: 600 }}>Phase 1</div>
            </div>
            <div></div>
            <div style={{ textAlign: 'center', borderBottom: '1px solid var(--line-soft)', paddingBottom: '4px' }}>
              <div style={{ fontSize: '0.65rem' }}>2027+</div>
              <div style={{ fontWeight: 600 }}>Phase 2</div>
            </div>
          </div>

          {/* JAAFAR timeline */}
          <TimelineRow
            name="Jaafar"
            contract="Freelance"
            phases={[
              { bg: '#F4A623', textColor: '#050B4D', salary: '3 500 \u20AC', role: 'SM Aboukir', detail: '+ pilotage travaux' },
              { bg: '#F4A623', textColor: '#050B4D', salary: '3 500 \u20AC', role: 'SM Aboukir (39h)', detail: '+ ops global + recrutement flexo' },
              { bg: 'linear-gradient(135deg,#F4A623,#FF8F00)', textColor: '#050B4D', salary: '4 300 \u20AC', salaryDelta: '+800', role: 'Ops Director', detail: 'Perf CA, planning, recrutement, fournisseurs' },
            ]}
          />

          {/* JORDAN timeline */}
          <TimelineRow
            name="Jordan"
            contract="Freelance"
            phases={[
              { bg: '#BBDEFB', textColor: '#050B4D', salary: '130 \u20AC/j', role: 'Integration freelance', detail: '~10j/mois = ~1 300/mois' },
              { bg: '#0F6FFF', textColor: '#fff', salary: '3 650 \u20AC', salaryDetail: '(CDI 3 250 + 400 var)', role: 'SM Monceau (39h)', detail: '+ experience client' },
              { bg: 'linear-gradient(135deg,#0F6FFF,#0D47A1)', textColor: '#fff', salary: '4 300 \u20AC', salaryDelta: '+650', role: 'Head of CX / Formation', detail: 'Standards, formation, qualite, onboarding' },
            ]}
          />

          {/* SM SENIOR timeline */}
          <TimelineRow
            name="SM Senior"
            contract="CDI Condorcet"
            phases={[
              { bg: '#f0f0f0', textColor: '#999', salary: '', role: 'Recrutement', detail: 'en cours', dashed: true },
              { bg: '#8E24AA', textColor: '#fff', salary: '3 650 \u20AC', salaryDetail: '(charge)', role: 'SM Condorcet (39h)', detail: 'CDI \u2022 ~2 157 net av. impot' },
              { bg: '#8E24AA', textColor: '#fff', salary: '3 650 \u20AC', role: 'SM Condorcet (39h)', detail: 'CDI \u2022 ~2 157 net av. impot' },
            ]}
          />

          {/* ALTERNANTS timeline */}
          <TimelineRow
            name="Alternants"
            contract="Studios"
            phases={[
              { bg: '#f0f0f0', textColor: '#999', salary: '', role: 'Pas encore', detail: '', dashed: true },
              { bg: '#E0E0E0', textColor: '#050B4D', salary: '3 x 1 000 \u20AC', role: '1 par studio (22h, ecole 1j/sem)', detail: 'Accueil, admin, WE' },
              { bg: 'linear-gradient(135deg,#E0E0E0,#BDBDBD)', textColor: '#050B4D', salary: '', role: '2 promus SM Jr (2 000 \u20AC)', detail: 'Abk + Mon (39h), remplacent Jaf + Jordan. 3 nouveaux alt. (1 000 \u20AC), support 22h, 1 par studio' },
            ]}
          />

          {/* OTHMAN timeline */}
          <TimelineRow
            name="Othman"
            contract="Freelance"
            phases={[
              { bg: 'var(--beige)', textColor: '#050B4D', salary: '750 \u20AC', role: 'Meta Ads', detail: '', border: true },
              { bg: 'var(--beige)', textColor: '#050B4D', salary: '750 \u20AC', role: 'Meta Ads 3 studios', detail: '', border: true },
              { bg: 'var(--beige)', textColor: '#050B4D', salary: '750 \u20AC', role: 'Meta Ads', detail: '', border: true },
            ]}
            arrow="="
          />

          {/* Total bar */}
          <div className="formula" style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: '100px 1fr 30px 1.5fr 30px 2fr', alignItems: 'center' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--sky)' }}>TOTAL EQUIPE</div>
            <div style={{ textAlign: 'center' }}>
              <b style={{ fontSize: '1.1rem' }}>5&nbsp;550&nbsp;&euro;</b><br />
              <span style={{ fontSize: '0.65rem' }}>3 pers.</span>
            </div>
            <div style={{ textAlign: 'center' }}>&rarr;</div>
            <div style={{ textAlign: 'center' }}>
              <b style={{ fontSize: '1.1rem' }}>14&nbsp;550&nbsp;&euro;</b><br />
              <span style={{ fontSize: '0.65rem' }}>6 pers. + 3 alt.</span>
            </div>
            <div style={{ textAlign: 'center' }}>&rarr;</div>
            <div style={{ textAlign: 'center' }}>
              <b style={{ fontSize: '1.1rem' }}>23&nbsp;300&nbsp;&euro;</b><br />
              <span style={{ fontSize: '0.65rem' }}>4 pers. + 2 promus + 3 alt.</span>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="footer">
        Flexlab &bull; Plan Operationnel 3 Phases &bull; Mai 2026<br />
        Document confidentiel
      </div>
    </div>
  );
}

/* ============================================================ */
/* COMPONENTS */
/* ============================================================ */

function StudioBlock({ name, subtitle, color, textOnColor, subtitleColor, lead, support, coverage, footer }) {
  return (
    <div style={{ border: `2px solid ${color}`, borderRadius: 'var(--radius)', overflow: 'hidden', marginBottom: '1rem' }}>
      {/* Header */}
      <div style={{ background: color, padding: '0.6rem 1rem', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: textOnColor }}>{name}</span>
        <span style={{ fontSize: '0.75rem', color: subtitleColor || textOnColor, opacity: subtitleColor ? 1 : 0.7 }}>{subtitle}</span>
      </div>
      {/* Body */}
      <div style={{ padding: '0.75rem 1rem' }}>
        {/* Lead */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <div style={{ width: 4, minHeight: 50, background: color, borderRadius: 4, flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Lead</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--navy)' }}>{lead.name}</span>
                {lead.role && <span style={{ fontSize: '0.8rem', color: 'var(--muted)', marginLeft: '0.5rem' }}>{lead.role}</span>}
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--blue)', fontWeight: 600 }}>{lead.salary}</span>
                  {lead.contract && <span style={{ fontSize: '0.75rem', color: 'var(--muted)', marginLeft: '0.5rem' }}>&bull; {lead.contract}</span>}
                </div>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)' }}>{lead.hours}</div>
                {lead.hoursLabel && <div style={{ fontSize: '0.6rem', color: 'var(--muted)' }}>{lead.hoursLabel}</div>}
              </div>
            </div>
          </div>
        </div>
        {/* Support */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem', borderTop: '1px solid var(--line-soft)', paddingTop: '0.75rem' }}>
          <div style={{ width: 4, minHeight: 40, background: '#CCC', borderRadius: 4, flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Support</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--navy)' }}>{support.name}</span>
                {support.role && <span style={{ fontSize: '0.8rem', color: 'var(--muted)', marginLeft: '0.5rem' }}>{support.role}</span>}
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--blue)', fontWeight: 600 }}>{support.salary}</span>
                  {support.contract && <span style={{ fontSize: '0.75rem', color: 'var(--muted)', marginLeft: '0.5rem' }}>&bull; {support.contract}</span>}
                </div>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)' }}>{support.hours}</div>
                {support.hoursLabel && <div style={{ fontSize: '0.6rem', color: 'var(--muted)' }}>{support.hoursLabel}</div>}
              </div>
            </div>
          </div>
        </div>
        {/* Coverage bar */}
        <div style={{ fontSize: '0.7rem', color: 'var(--muted)', marginBottom: '4px' }}>Couverture hebdo (84h)</div>
        <div style={{ display: 'flex', borderRadius: 6, overflow: 'hidden', height: 24 }}>
          {coverage.map((c, i) => (
            <div key={i} style={{ width: c.width, background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '0.6rem', fontWeight: 700, color: c.textColor }}>{c.label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <div style={{ background: 'var(--beige)', padding: '0.5rem 1rem', borderTop: '1px solid var(--line-soft)', fontSize: '0.8rem' }}>
        <span style={{ fontWeight: 600, color: 'var(--navy)' }}>{footer}</span>
      </div>
    </div>
  );
}

function ScheduleCell({ type }) {
  const styles = {
    flexo: { background: '#FFEBEE', color: 'var(--lumiere)', label: 'Flexo' },
    alt: { background: '#FFF8E1', color: '#F4A623', label: 'Alt', fontWeight: 600 },
    sm: { background: '#E3F2FD', color: 'var(--blue)', label: 'SM', fontWeight: 600 },
    both: { background: '#EDE7F6', color: 'var(--drainage)', label: 'SM + Alt', fontSize: '0.65rem' },
  };
  const s = styles[type];
  return (
    <td style={{ textAlign: 'center', background: s.background, color: s.color, fontWeight: s.fontWeight || 400, fontSize: s.fontSize || 'inherit' }}>
      {s.label}
    </td>
  );
}

function TimelineRow({ name, contract, phases, arrow = '\u2192' }) {
  const cells = [];
  phases.forEach((p, i) => {
    if (i > 0) {
      cells.push(
        <div key={`a${i}`} style={{ textAlign: 'center', color: '#ccc', alignSelf: 'center', fontSize: '0.9rem' }}>{arrow}</div>
      );
    }
    cells.push(
      <div key={`p${i}`} style={{
        background: p.bg,
        borderRadius: 'var(--radius-sm)',
        padding: '0.5rem 0.65rem',
        border: p.dashed ? '1px dashed #ccc' : p.border ? '1px solid var(--line)' : 'none',
      }}>
        {p.salary && (
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: p.textColor }}>
            {p.salary}
            {p.salaryDelta && <span style={{ fontSize: '0.65rem', opacity: 0.7, marginLeft: '0.25rem' }}>({p.salaryDelta})</span>}
            {p.salaryDetail && <span style={{ fontSize: '0.65rem', color: p.textColor, opacity: 0.7, marginLeft: '0.25rem' }}>{p.salaryDetail}</span>}
          </div>
        )}
        <div style={{ fontSize: '0.7rem', color: p.textColor, fontWeight: 400 }}>{p.role}</div>
        {p.detail && <div style={{ fontSize: '0.6rem', color: p.textColor, opacity: 0.7 }}>{p.detail}</div>}
      </div>
    );
  });
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr 30px 1.5fr 30px 2fr', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
      <div style={{ paddingTop: '0.4rem' }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--navy)' }}>{name}</div>
        <div style={{ fontSize: '0.6rem', color: 'var(--muted)' }}>{contract}</div>
      </div>
      {cells}
    </div>
  );
}
