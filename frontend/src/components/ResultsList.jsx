export default function ResultsList({ results }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-semibold">Recommended Locations</h2>

      {results.length === 0 ? (
        <p className="text-slate-500">No matching locations found.</p>
      ) : (
        <div className="space-y-4">
          {results.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-2 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                  <p className="text-sm font-medium text-sky-600">{item.category}</p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    item.openNow
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {item.openNow ? "Open now" : "Check hours"}
                </span>
              </div>

              <p className="text-sm text-slate-700">{item.address}</p>
              <p className="text-sm text-slate-700">{item.phone}</p>
              <a
                href={item.website}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-blue-600 underline"
              >
                Visit website
              </a>

              <div className="mt-4 rounded-2xl bg-sky-50 p-3 text-sm text-slate-700">
                <span className="font-semibold text-slate-900">Why this matches:</span> {item.reason}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}