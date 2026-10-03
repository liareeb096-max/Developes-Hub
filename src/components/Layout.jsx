import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import { tools } from "../lib/site";
import AdSlot from "./AdSlot";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-ink text-slate-100">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 shadow-glow">
              <Code2 size={21} />
            </span>
            <span className="text-lg font-bold tracking-tight">
              DevUtility<span className="text-cyan-300">Hub</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <a className="nav-link" href="#tools">
              Tools
            </a>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/privacy">
              Privacy
            </NavLink>
          </nav>
          <button
            className="icon-btn md:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="border-t border-white/10 px-4 pb-4 md:hidden">
            <div className="grid gap-1 pt-3">
              {[...tools.slice(0, 5)].map((t) => (
                <NavLink
                  key={t.slug}
                  onClick={() => setOpen(false)}
                  className="nav-link"
                  to={`/tools/${t.slug}`}
                >
                  {t.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>
      <main>{children}</main>
      <footer className="border-t border-white/10 py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          
          {/* Footer Bottom Banner Ad (728x90) */}
          <AdSlot adKey="ccee1aa970c24fada2d7114684e1fd70" size="leaderboard" className="mb-10" />
          
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-3 flex items-center gap-2 font-bold">
                <Code2 size={18} /> DevUtilityHub
              </div>
              <p className="text-sm leading-6 text-slate-400">
                Fast browser-based developer tools. Your data stays in your
                browser for supported tools.
              </p>
            </div>
            <div>
              <h3 className="mb-3 font-semibold">Popular tools</h3>
              <div className="grid gap-2 text-sm text-slate-400">
                {tools.slice(0, 5).map((t) => (
                  <Link
                    className="hover:text-white"
                    key={t.slug}
                    to={`/tools/${t.slug}`}
                  >
                    {t.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 font-semibold">Company</h3>
              <div className="grid gap-2 text-sm text-slate-400">
                <Link to="/about">About</Link>
                <Link to="/privacy">Privacy</Link>
                <a href="mailto:hello@devutilityhub.com">Contact</a>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-500">
            © {new Date().getFullYear()} DevUtilityHub. Built for the web.
          </div>
        </div>
      </footer>
    </div>
  );
}