# AGENTS.md — NeXifyAI

Projekt-Context-File für Hermes Agent. Wird bei jedem Session-Start geladen.

## ⚠️ SKILL-QUELLEN-REGEL (P0 — VOR ALLEM ANDEREN)

**EINZIGE GÜLTIGE SKILL-QUELLE:** `http://localhost:3100` (Paperclip/Factory)

1. **KEIN Skill darf aus einer anderen Quelle geladen werden.**
2. **Alle neuen Skills MÜSSEN über die Factory (Paperclip, Port 3100) installiert werden.**
3. **Lokale Skill-Verzeichnisse sind NUR Cache — Quelle der Wahrheit ist IMMER die Factory.**
4. **Bei jedem Start: Factory-Sync prüfen, Abweichungen melden.**
5. **Hermes Tap:** `davila7/claude-code-templates`

### 🔒 Force-Load Skills (bei JEDEM Start):
1. `using-superpowers` — Skill-Disziplin (davila7)
2. `factory-skill-source` — Factory-Enforcement
3. `deepcode-director` — Meta-Agent Orchestrator
4. `nexifyai-memory-load` — Memory-Load-Protokoll

## Architektur (4-Komponenten-Modell)

| Komp. | Typ | Port |
|---|---|---|
| Paperclip | Control Plane | 3100 |
| Hermes Agent | Runtime + Gateway | 8787 |
| 9Router | LLM-Router (701/77) | 20128 |
| Oracle | Strategie-Agent (proprietär) | — |

Zusatz: agentmemory (3113), LightRAG (9621), Spaether (8900)

## GDOK: GDOK-NXAI-MASTER-2026-001 v1.5

5 Pflicht-Queries: Systemzustand, Queen-Mode Aufträge, Architektur, Verbindungs-Matrix, Annahmen Kap. 08

## URLs

| Service | URL | Port |
|---|---|---|
| Factory (Paperclip) | `http://localhost:3100` | 3100 |
| Admin Portal | `admin.nexifyai.cloud` | 8787 |
| 9Router | `localhost:20128` | 20128 |
| LightRAG | `localhost:9621` | 9621 |
| agentmemory | `localhost:3113` | 3113 |

## Ausführung: using-superpowers → Director → Delegation → Prüfung → CEO

## Verworfen (E0): n8n, LibreChat, OpenClaw, OpenHands, Neon, OpenRouter-Direkt
