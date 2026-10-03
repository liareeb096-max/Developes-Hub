import { Link } from "react-router-dom";
import { ArrowLeft, Copy, Check } from "lucide-react";
import { useState } from "react";
import AdSlot from "./AdSlot";

export function CopyButton({ value }) {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  return (
    <button
      className="btn-secondary"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          setFailed(false);
        } catch {
          setFailed(true);
        } finally {
          setTimeout(() => {
            setCopied(false);
            setFailed(false);
          }, 1400);
        }
      }}
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}{" "}
      {failed ? "Copy failed" : copied ? "Copied" : "Copy"}
    </button>
  );
}

export default function ToolShell({ tool, children, intro, rightAd = true }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
      <div className="mb-6 flex items-center gap-3 text-sm text-slate-500">
        <Link to="/" className="hover:text-white">
          <ArrowLeft size={15} />
        </Link>
        <span>/</span>
        <span>{tool.category}</span>
        <span>/</span>
        <span className="text-slate-300">{tool.name}</span>
      </div>
      <section className="mb-8">
        <div className="mb-3 inline-flex rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-200">
          {tool.category} utility
        </div>
        <h1 className="text-3xl font-black tracking-tight sm:text-5xl">
          {tool.name}
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-400">
          {intro || tool.description}
        </p>
      </section>
      
      {/* Top Banner Ad */}
      <AdSlot adKey="ccee1aa970c24fada2d7114684e1fd70" className="mb-8" size="leaderboard"/>
      
      <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
        {children}
        {rightAd && (
          <aside>
            <AdSlot size="rectangle" />
          </aside>
        )}
      </div>
      
      {/* Yeh raha tumhara Bottom Banner Ad */}
      <AdSlot size="leaderboard" className="mt-12 flex justify-center w-full" />
    </div>
  );
}

export function Panel({ children, className = "" }) {
  return <div className={`glass-panel ${className}`}>{children}</div>;
}