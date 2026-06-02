export default function PlanOps() {
  return (
    <div style={{ width: '100%', minHeight: 'calc(100vh - 120px)' }}>
      <div className="page" style={{ paddingBottom: '1rem' }}>
        <div className="chapter-label">Operations &middot; Mai 2026</div>
        <h1 className="chapter-title">
          PLAN <span className="sl">O</span>PERATIONNEL <em>3 phases</em>
        </h1>
        <p className="chapter-subtitle">
          Septembre 2026 &ndash; Octobre 2027. Organisation, P&amp;L &amp; seuils.
          Qui couvre quoi, a quel cout. Document original.
        </p>
      </div>
      <iframe
        src="/docs/plan-operationnel-3-phases.html"
        style={{
          width: '100%',
          height: 'calc(100vh - 200px)',
          border: 'none',
          borderTop: '1px solid rgba(5,11,77,0.08)',
        }}
        title="Plan Operationnel 3 Phases"
      />
    </div>
  );
}
