// ponytail: local adapter-utils version missing ConfigFieldSchema/AdapterConfigSchema exports.
// Paperclip's internal version has them. Upgrade path: bump @paperclipai/adapter-utils dep when published.

interface ConfigFieldSchema {
  key: string;
  label: string;
  type: "text" | "select" | "toggle" | "number" | "textarea" | "combobox";
  options?: { label: string; value: string }[];
  default?: unknown;
  hint?: string;
  required?: boolean;
  group?: string;
  meta?: Record<string, unknown>;
}

interface AdapterConfigSchema {
  fields: ConfigFieldSchema[];
}

export function getConfigSchema(): AdapterConfigSchema {
  return {
    fields: [
      { key: "model", label: "Model", type: "text", default: "nexifyai-combo-llm", hint: "Model name for `hermes chat -m`", group: "LLM" },
      { key: "provider", label: "Provider", type: "text", default: "custom", hint: "Provider for `hermes chat --provider`", group: "LLM" },
      { key: "timeoutSec", label: "Timeout (s)", type: "number", default: 300, hint: "Max execution time", group: "Execution" },
      { key: "graceSec", label: "Grace (s)", type: "number", default: 30, hint: "Grace period before SIGKILL", group: "Execution" },
      { key: "maxTurns", label: "Max turns", type: "number", hint: "Max agent turns (empty = unlimited)", group: "Execution" },
      { key: "persistSession", label: "Persist session", type: "toggle", default: true, hint: "Resume via --resume", group: "Execution" },
      { key: "cwd", label: "Working directory", type: "text", default: ".", hint: "Run directory", group: "Advanced" },
      { key: "extraArgs", label: "Extra CLI args", type: "textarea", hint: "One per line", group: "Advanced" },
    ],
  };
}
