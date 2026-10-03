import { Routes, Route, useLocation, Navigate, Link } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import ToolCards from './components/ToolCards'
import ToolShell from './components/ToolShell'
import AdSlot from './components/AdSlot'
import { tools, SITE } from './lib/site'
import { setSEO } from './lib/seo'
import JsonFormatter from './components/tools/JsonFormatter'
import Base64Tool from './components/tools/Base64Tool'
import UrlTool from './components/tools/UrlTool'
import JwtTool from './components/tools/JwtTool'
import UuidTool from './components/tools/UuidTool'
import TimestampTool from './components/tools/TimestampTool'
import RegexTool from './components/tools/RegexTool'
import HashTool from './components/tools/HashTool'
import YamlJsonTool from './components/tools/YamlJsonTool'
import TextCounter from './components/tools/TextCounter'

const components={
  'json-formatter':JsonFormatter,'base64':Base64Tool,'url-encoder':UrlTool,'jwt-decoder':JwtTool,'uuid-generator':UuidTool,
  'timestamp':TimestampTool,'regex-tester':RegexTool,'hash-generator':HashTool,'yaml-json':YamlJsonTool,'text-counter':TextCounter
}
function SEOManager(){const {pathname}=useLocation();useEffect(()=>{if(pathname.startsWith('/tools/')){const slug=pathname.split('/').pop();const t=tools.find(x=>x.slug===slug);if(t)setSEO({title:t.name,description:t.description,path:pathname,keywords:t.keywords})}else if(pathname==='/about')setSEO({title:'About',description:'Learn about DevUtilityHub and its browser-first approach to developer utilities.',path:'/about'});else if(pathname==='/privacy')setSEO({title:'Privacy Policy',description:'Privacy information for DevUtilityHub browser-based developer tools.',path:'/privacy'});else setSEO({title:'Free Developer Tools Online',description:SITE.description,path:'/',keywords:tools.map(t=>t.keywords).join(',')})},[pathname]);return null}
function Home(){return <><section className="hero"><div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24"><div className="max-w-4xl"><div className="eyebrow">10 fast browser utilities · no account required</div><h1 className="mt-5 text-5xl font-black tracking-[-.04em] sm:text-7xl">Developer tools that<br/><span className="gradient-text">stay out of your way.</span></h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">Format JSON, decode Base64, inspect JWTs, generate UUIDs, test regex, hash text and more. Built for speed, privacy and everyday developer workflows.</p><div className="mt-8 flex flex-wrap gap-3"><a className="btn-primary" href="#tools">Explore tools</a><Link className="btn-secondary" to="/tools/json-formatter">Open JSON Formatter</Link></div></div><AdSlot size="leaderboard" className="mt-12"/></div></section><section id="tools" className="mx-auto max-w-7xl px-4 py-16 lg:px-8"><div className="mb-8 flex items-end justify-between gap-4"><div><div className="eyebrow">Toolbox</div><h2 className="mt-2 text-3xl font-bold">Popular developer utilities</h2><p className="mt-2 text-slate-400">Useful tools for web development, APIs, data and debugging.</p></div><span className="hidden text-sm text-slate-500 sm:block">Client-side first</span></div><ToolCards/></section><section className="mx-auto max-w-7xl px-4 pb-16 lg:px-8"><AdSlot size="rectangle" className="mx-auto"/></section></>}
function ToolPage({tool}){const C=components[tool.slug];return <ToolShell tool={tool} intro={`${tool.description} This free utility runs in your browser, so supported inputs are processed locally.`}><C/></ToolShell>}
function About(){return <StaticPage title="About DevUtilityHub"><p>DevUtilityHub is a browser-first collection of small developer utilities designed to solve common formatting, encoding, debugging and data-conversion tasks quickly.</p><h2>Built for practical workflows</h2><p>The tools are intentionally focused: paste data, run the operation, copy the result. No account is required for the utilities included in this version.</p><h2>Privacy by design</h2><p>Where a tool supports local processing, the input is handled in your browser instead of being uploaded to an application backend.</p></StaticPage>}
function Privacy(){return <StaticPage title="Privacy Policy"><p>DevUtilityHub does not require an account for its core tools. Tool inputs are processed locally where stated on the page. Advertising and analytics providers, if enabled by the site owner, may use cookies or similar technologies subject to their own policies and applicable consent requirements.</p><h2>Third-party advertising</h2><p>Advertisement placements are provided as empty placeholders in the source. Before enabling an advertising network, review its current publisher terms, privacy requirements and applicable consent rules.</p><h2>Contact</h2><p>For privacy questions, contact hello@devutilityhub.com.</p></StaticPage>}
function StaticPage({title,children}){return <div className="mx-auto max-w-4xl px-4 py-16 lg:px-8"><div className="eyebrow">DevUtilityHub</div><h1 className="mt-3 text-4xl font-black">{title}</h1><article className="prose-dark mt-8">{children}</article></div>}
function NotFound(){return <div className="mx-auto max-w-3xl px-4 py-24 text-center"><h1 className="text-5xl font-black">404</h1><p className="mt-3 text-slate-400">That page does not exist.</p><Link className="btn-primary mt-6 inline-flex" to="/">Back home</Link></div>}
export default function App(){return <><SEOManager/><Layout><Routes><Route path="/" element={<Home/>}/>{tools.map(t=><Route key={t.slug} path={`/tools/${t.slug}`} element={<ToolPage tool={t}/>}/>)}<Route path="/about" element={<About/>}/><Route path="/privacy" element={<Privacy/>}/><Route path="/404" element={<NotFound/>}/><Route path="*" element={<Navigate to="/404" replace/>}/></Routes></Layout></>}
