import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { tools } from '../lib/site'
import { ToolIcon } from './Icons'
export default function ToolCards({limit}){const list=limit?tools.slice(0,limit):tools;return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{list.map(t=><Link key={t.slug} to={`/tools/${t.slug}`} className="tool-card"><div className="mb-5 flex items-center justify-between"><span className="icon-tile"><ToolIcon name={t.icon}/></span><ArrowUpRight size={18} className="text-slate-600 transition group-hover:text-white"/></div><div className="mb-2 text-xs uppercase tracking-widest text-violet-300">{t.category}</div><h3 className="text-lg font-semibold">{t.name}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{t.description}</p></Link>)}</div>}
