import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Waypoints from "./pages/Waypoints.jsx";
import Measurement from "./pages/Measurement.jsx";
import Reports from "./pages/Reports.jsx";
import Settings from "./pages/Settings.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur bg-slate-950/80 border-b border-white/10">
        <nav className="max-w-6xl mx-auto flex items-center gap-2 px-4 py-3 overflow-x-auto">
          <Link to="/" className="font-bold text-base mr-2 whitespace-nowrap">garmin-amin</Link>
          <div className="flex gap-1 ml-auto">
          <Link to="/" className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/10 hover:text-white transition">Home</Link>
          <Link to="/waypoints" className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/10 hover:text-white transition">Waypoints</Link>
          <Link to="/measurement" className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/10 hover:text-white transition">Measurement</Link>
          <Link to="/reports" className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/10 hover:text-white transition">Reports</Link>
          <Link to="/settings" className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/10 hover:text-white transition">Settings</Link>
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waypoints" element={<Waypoints />} />
        <Route path="/measurement" element={<Measurement />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
      <footer className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
        © 2026 garmin-amin
      </footer>
    </div>
  );
}
