import { useState } from "react";
import SearchForm from "./components/SearchForm";
import TriageCard from "./components/TriageCard";
import ResultsList from "./components/ResultsList";
import MapView from "./components/MapView";

export default function App() {
  const [results, setResults] = useState([]);
  const [triage, setTriage] = useState({
    urgency: "low",
    emergency: false,
    summary: "Describe your need and we’ll help find support in Merced.",
  });

  const handleSearch = async ({ needText, location, lowCostOnly, openNowOnly }) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          need_text: needText,
          location,
          low_cost_only: lowCostOnly,
          open_now_only: openNowOnly,
        }),
      });

      const data = await response.json();

      setTriage(data.triage);
      setResults(data.results);
    } catch (error) {
      console.error("Error calling backend:", error);
      setTriage({
        urgency: "low",
        emergency: false,
        summary: "Something went wrong while contacting the backend.",
      });
      setResults([]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-50">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <header className="mb-10">
          <div className="inline-flex items-center rounded-full bg-white/80 px-4 py-2 shadow-sm ring-1 ring-slate-200 backdrop-blur">
            <span className="mr-2 text-lg">🩺</span>
            <span className="text-sm font-medium text-slate-700">Merced Resource Finder</span>
          </div>

          <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900">
            CareCompass
          </h1>

          <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-600">
            Find nearby health and support resources in Merced with AI-powered guidance.
          </p>
        </header>

        <div className="mb-6 grid gap-6 md:grid-cols-2">
          <SearchForm onSearch={handleSearch} />
          <TriageCard triage={triage} />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <ResultsList results={results} />
          <MapView results={results} />
        </div>
      </div>
    </div>
  );
}