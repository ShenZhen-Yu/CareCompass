import { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [needText, setNeedText] = useState("");
  const [location, setLocation] = useState("Merced, CA");
  const [lowCostOnly, setLowCostOnly] = useState(true);
  const [openNowOnly, setOpenNowOnly] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSearch({
      needText,
      location,
      lowCostOnly,
      openNowOnly
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-white/60 bg-white/80 p-6 shadow-lg shadow-slate-200/50 backdrop-blur">
      <div>
        <label className="mb-2 block font-medium">What kind of help do you need?</label>
        <textarea
          value={needText}
          onChange={(e) => setNeedText(e.target.value)}
          placeholder="Example: I need low-cost mental health counseling near me"
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
          rows={5}
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">Location</label>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
        />
      </div>

      <div className="flex flex-wrap gap-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={lowCostOnly}
            onChange={(e) => setLowCostOnly(e.target.checked)}
          />
          Low-cost preferred
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={openNowOnly}
            onChange={(e) => setOpenNowOnly(e.target.checked)}
          />
          Open now
        </label>
      </div>

      <button
        type="submit"
        className="rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-md transition hover:scale-[1.02] hover:shadow-lg active:scale-[0.99]"
      >
        Find Help
      </button>
    </form>
  );
}