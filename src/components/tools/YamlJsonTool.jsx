import { useState } from "react";
import * as yaml from 'js-yaml';
import { CopyButton, Panel } from "../ToolShell";
export default function YamlJsonTool() {
  const [input, setInput] = useState(
    "name: DevUtilityHub\nactive: true\ntags:\n  - tools\n  - developer",
  );
  const [out, setOut] = useState("");
  const [err, setErr] = useState("");
  function y2j() {
    try {
      setOut(JSON.stringify(yaml.load(input), null, 2));
      setErr("");
    } catch (e) {
      setErr(e.message);
    }
  }
  function j2y() {
    try {
      setOut(yaml.dump(JSON.parse(input), { noRefs: true }));
      setErr("");
    } catch (e) {
      setErr(e.message);
    }
  }
  return (
    <Panel>
      <div className="grid gap-5 lg:grid-cols-2">
        <div>
          <label className="label">Input</label>
          <textarea
            className="editor min-h-72"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            spellCheck="false"
          />
        </div>
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="label">Output</label>
            {out && <CopyButton value={out} />}
          </div>
          <textarea
            className="editor min-h-72"
            value={out}
            readOnly
            spellCheck="false"
          />
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <button className="btn-primary" onClick={y2j}>
          YAML → JSON
        </button>
        <button className="btn-secondary" onClick={j2y}>
          JSON → YAML
        </button>
      </div>
      {err && <p className="mt-3 text-sm text-rose-300">{err}</p>}
    </Panel>
  );
}
