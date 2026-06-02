export default function Services() {
  return (
    <div className="page">
      <div className="chapter-label">Chapitre 03 &middot; Services</div>
      <h1 className="chapter-title">
        S<span className="sl">E</span>RVICES <em>sept 2026</em>
      </h1>
      <p className="chapter-subtitle">
        Arbitrages du 02/06/2026. Objectif : augmenter panier moyen et recurrence
        sans dependre uniquement du stretching assiste. Pricing cible 30-45&euro; pour services sans humain.
      </p>

      {/* INDIVIDUEL SANS HUMAIN */}
      <div className="section">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="section-number">01</span>
            <span className="section-title">Individuel sans humain</span>
          </div>
          <span className="section-badge">Valide</span>
        </div>
        <div className="section-body">
          <div className="cards">
            <div className="card">
              <div className="card-label neuro">Valide</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.25rem' }}>
                Pressotherapie full body
              </div>
              <div className="card-detail">
                Therabody &middot; compression &middot; 25 min<br/>
                Deja en place a Aboukir. Marge 95%.
              </div>
              <div style={{ marginTop: '0.75rem' }}>
                <span className="pill"><strong>~29&euro;</strong>/seance</span>
              </div>
            </div>
            <div className="card">
              <div className="card-label neuro">Valide</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.25rem' }}>
                Red light therapy visage
              </div>
              <div className="card-detail">
                Panneau LED au-dessus de la table (pas masque).<br/>
                20 min, integre au flow stretching assiste. Client reste habille.
              </div>
              <div style={{ marginTop: '0.75rem' }}>
                <span className="pill"><strong>~25&euro;</strong>/seance</span>
                <span className="pill">Invest <strong className="blue">~950&euro;</strong>/panneau</span>
              </div>
            </div>
            <div className="card" style={{ borderColor: 'var(--sky)', borderStyle: 'dashed' }}>
              <div className="card-label">En discussion</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.25rem' }}>
                Shiftwave
              </div>
              <div className="card-detail">
                Fauteuil vibrations &middot; reset systeme nerveux &middot; 20 min.<br/>
                <span style={{ color: 'var(--lumiere)' }}>Cher (~9 100&euro;)</span> et pas convaincu sur l&apos;addiction/recurrence.
                A tester avant decision.
              </div>
              <div style={{ marginTop: '0.75rem' }}>
                <span className="pill"><strong className="blue">~35&euro;</strong>/seance</span>
              </div>
            </div>
            <div className="card" style={{ borderColor: 'var(--sky)', borderStyle: 'dashed' }}>
              <div className="card-label">A explorer</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.25rem' }}>
                Dry floating / Dry cryo
              </div>
              <div className="card-detail">
                Principe valide (relaxation, pas besoin de se deshabiller).<br/>
                Format a definir : Zero Body (Lyfe Nordic) ou dry cryo localisee.
                Capex eleve, a budgeter.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INDIVIDUEL AVEC HUMAIN */}
      <div className="section">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="section-number">02</span>
            <span className="section-title">Individuel avec humain</span>
          </div>
          <span className="section-badge">A discuter</span>
        </div>
        <div className="section-body">
          <div className="cards" style={{ gridTemplateColumns: '1fr' }}>
            <div className="card" style={{ borderColor: 'var(--sky)', borderStyle: 'dashed' }}>
              <div className="card-label">A valider</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.25rem' }}>
                Massage visage (Kobido)
              </div>
              <div className="card-detail">
                Fin de seance, par le flexologue. Plutot clientele feminine.<br/>
                Necessite formation supplementaire. Pas de capex, juste du temps humain.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COLLECTIF */}
      <div className="section">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="section-number">03</span>
            <span className="section-title">Collectif</span>
          </div>
          <span className="section-badge">Nouveau</span>
        </div>
        <div className="section-body">
          <div className="cards">
            <div className="card">
              <div className="card-label neuro">Valide</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.25rem' }}>
                Breathwork
              </div>
              <div className="card-detail">
                Cours collectif sur tables existantes. Coach externe.<br/>
                6 personnes, ~30&euro;/pers. Pas de capex, marge quasi totale.<br/>
                Cortisol, HRV, recuperation : 100% dans le positionnement Flexlab.<br/>
                Inspi : Remedy Place (NYC), Breathe in Paris.
              </div>
              <div className="box-green" style={{ marginTop: '0.75rem' }}>
                Vecteur de recurrence : le client vient pour son stretching assiste + reste pour le breathwork du vendredi.
                Ramene des amis, decouvre le studio, cree une communaute.
              </div>
            </div>
            <div className="card" style={{ borderColor: 'var(--sky)', borderStyle: 'dashed' }}>
              <div className="card-label">A explorer</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.25rem' }}>
                StretchFit collectif
              </div>
              <div className="card-detail">
                Stretching assiste en groupe avec machine individuelle par participant.<br/>
                Format vu chez Stretch d&apos; (NYC). A adapter a nos salles.<br/>
                Contrainte : les machines actuelles ne se plient pas, espace requis.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STRATEGIE */}
      <div className="section">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="section-number">04</span>
            <span className="section-title">Strategie par studio</span>
          </div>
        </div>
        <div className="section-body">
          <div className="box-info">
            <strong>Idee cle :</strong> services differents par studio pour creer du flux entre eux.
            Ex : infrarouge a Condorcet, cryo a Monceau.
            Les clients se deplacent naturellement entre les studios.
          </div>
          <div className="cards" style={{ marginTop: '1.25rem' }}>
            <div className="card-dark card" style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--blue) 100%)' }}>
              <div className="card-label">Principe</div>
              <div className="card-detail">
                Le client ne doit <strong style={{ color: 'var(--white)' }}>pas pouvoir reproduire ca chez lui</strong>.
                Masque LED a 50&euro; sur Amazon &ne; panneau pro au-dessus de la table.
                C&apos;est ca qui justifie le prix premium.
              </div>
            </div>
            <div className="card-dark card" style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--blue) 100%)' }}>
              <div className="card-label">Pricing</div>
              <div className="card-detail">
                Services sans humain : <strong style={{ color: 'var(--white)' }}>30-45&euro;</strong> la seance.
                C&apos;est le prix que tout le monde a en tete a Paris pour un service non-humain.
                One-to-one (stretching assiste) : on reste sur les tarifs actuels.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
