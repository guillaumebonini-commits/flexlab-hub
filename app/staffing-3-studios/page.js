export default function Staffing() {
  return (
    <div style={{ width: '100%', minHeight: 'calc(100vh - 120px)' }}>
      <div className="page" style={{ paddingBottom: '1rem' }}>
        <div className="chapter-label">Operations &middot; Mai 2026</div>
        <h1 className="chapter-title">
          STA<span className="sl">F</span>FING <em>3 studios</em>
        </h1>
        <p className="chapter-subtitle">
          Arbitrage &amp; planification. Analyse des modeles organisationnels
          pour l&apos;ouverture de Monceau et Condorcet. Document original (slides).
        </p>
      </div>
      <iframe
        src="/docs/staffing-3-studios.html"
        style={{
          width: '100%',
          height: 'calc(100vh - 200px)',
          border: 'none',
          borderTop: '1px solid rgba(5,11,77,0.08)',
        }}
        title="Staffing 3 Studios"
      />
    </div>
  );
}
