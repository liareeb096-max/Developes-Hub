import * as Icons from 'lucide-react'
export function ToolIcon({ name, size=22 }) { const Icon=Icons[name] || Icons.Wrench; return <Icon size={size} strokeWidth={1.8}/> }
