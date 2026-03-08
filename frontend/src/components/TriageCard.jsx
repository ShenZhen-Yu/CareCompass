export default function TriageCard({ triage }) {
  return (
    <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-lg shadow-slate-200/50 backdrop-blur">
      <h2 className="mb-4 text-xl font-semibold text-slate-900">AI Triage Summary</h2>

      <div className="mb-4">
        <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
          Urgency: {triage.urgency}
        </span>
      </div>

      {triage.emergency && (
        <div className="mb-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700">
          This may be urgent. Call 911 or go to the nearest emergency room immediately.
        </div>
      )}

      <p className="leading-7 text-slate-700">{triage.summary}</p>
    </div>
  );
}