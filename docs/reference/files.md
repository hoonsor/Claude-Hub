# 技能與重要檔案位置

要調整任何設定時，把「檔案」那一欄告訴 Claude 即可，例如：「修改 `hoonsor-workflow` 的 #收工，加上 ___」。

## 原則層（AI-PROFILE）

| 檔案 | 位置 | 用途 |
|---|---|---|
| **AI-PROFILE.md** | `D:\01-Project\36-Claude使用流程改善\AI-PROFILE.md` | 所有 AI 的規則總檔（單一真實來源），目前 v0.4.0 |
| sync-ai-profile.ps1 | 同上資料夾 | 把總檔同步到各工具；`-Machine A|B`、`-DryRun`、`-Restore <時間戳>` |
| 同步模板 | `…\36-Claude使用流程改善\ai-profile\extras\`（`claude-header.md` 等 4 個） | 各工具規則檔的開頭／結尾 |
| Claude App 個人偏好 | `…\ai-profile\claude-preferences.txt` | 貼到 Claude App「設定 → 個人偏好」 |
| 外掛安裝檔 | `…\ai-profile\hoonsor-antigravity-v1.2.0.plugin`（及舊版） | 重裝或回退外掛用 |
| 同步備份 | `…\36-Claude使用流程改善\backups\<時間戳>-<A|B>\` | sync 前自動備份 |
| setup-hoonsor-signing.ps1 | `…\36-Claude使用流程改善\` | Android APP 共用簽章金鑰與 GitHub Secrets |

## 全域規則檔（由同步腳本產生，不要直接改）

| 工具 | 路徑 |
|---|---|
| Claude Code | `%USERPROFILE%\.claude\CLAUDE.md` |
| Codex | `%USERPROFILE%\.codex\AGENTS.md` |
| Antigravity | `%USERPROFILE%\.gemini\GEMINI.md` |
| DeepSeek Harness | `%USERPROFILE%\.dsh\skills\hoonsor-profile\SKILL.md` |

## Claude 設定

| 檔案 | 位置 | 內容 |
|---|---|---|
| settings.json | `%USERPROFILE%\.claude\settings.json` | 預設模型 opus、effort medium、Stop hook（完成時跳 Windows 通知「任務已完成！」）、document-skills 外掛 |
| 已安裝外掛清單 | `%USERPROFILE%\.claude\plugins\installed_plugins.json` | 本機 Claude Code 外掛 |
| 自動記憶 | `%USERPROFILE%\.claude\projects\<專案>\memory\` | Claude 對每個專案的記憶 |
| 本機技能 | `%USERPROFILE%\.claude\skills\<技能>\SKILL.md` | 只在這台電腦的 Claude Code 生效 |

## 技能（SOP）

### 外掛 `hoonsor-antigravity`（v1.2.0，帳號層級，13 個技能）

| 技能 | 用途 / 指令 |
|---|---|
| `hoonsor-workflow` | #開工 #收工 #更新 #合併 #架構 #分支 #初始化 #全更新 #同步設定；A/B 電腦對照表；交接紀錄模板 `references/handoff-template.md` |
| `hoonsor-sop` | #SOP：建立或更新 SOP |
| `hoonsor-preferences` | #喜好；`references/PREFERENCES.md` |
| `hoonsor-project-status` | #狀態；PROJECT_STATUS.md |
| `hoonsor-error-prevention` | #學習；`references/error-lessons.md`、`quick-fixes.md`、`token-waste-patterns.md` |
| `hoonsor-safe-worktree` | 改原始碼前的 worktree 沙盒 |
| `hoonsor-prd-architect` | #PRD |
| `hoonsor-readme-writer` | README 模板 `references/readme-template.md` |
| `hoonsor-frontend-standards` / `-backend-standards` / `-quality-standards` | 前端、後端、測試與資安規範 |
| `hoonsor-toolchain-setup` | GitHub CLI、Firebase、NotebookLM、Obsidian、MCP、異機還原 |
| `hoonsor-xmind` | .xmind 心智圖 |

本機快取位置（唯讀參考，改了不會生效）：`%APPDATA%\Claude\local-agent-mode-sessions\…\rpm\plugin_…\skills\`

### 帳號技能（claude.ai 個人技能）

| 技能 | 用途 |
|---|---|
| `dotenvx-secrets` | .env 加密規範（另有本機副本 `~/.claude/skills/dotenvx-secrets/`） |
| `hoonsor-branch-handoff` / `hoonsor-branch-compare` | #分支接手、#分支比較（另有本機副本於 `~/.claude/skills/`） |
| `hoonsor-migrate` / `hoonsor-takeover` | #遷移、#接手 |
| `hoonsor-command-list` | #指令 |
| `hoonsor-android-app` | #APP、#補文件；詳見 Project 文件 `ANDROID-APP-WORKFLOW.md`、`APP-REGISTRY.md` |

## Connector（claude.ai）

目前已連接：Claude Docs、Gmail、Google Calendar、Google Drive、Vercel、Supabase、scheduled-tasks、visualize。**GitHub 沒有 Connector**，Git 操作走本機 `git`（認證由 Git Credential Manager 處理）。

::: tip Vercel Connector 的坑
呼叫 Vercel Connector 的工具時**不要帶 `teamId`**（`team_FhyeReXMTNCeyU6qkghsNatY`／`hoonsors-projects`），帶了會回 403；不帶就會自動用你的帳號範圍，能正常讀取專案與部署。需要建立專案等一定要帶 teamId 的操作，改用本機 Vercel CLI（`vercel.cmd`，已登入）。
:::

## 專案與腳本

| 東西 | 位置 |
|---|---|
| 所有專案 | `D:\01-Project\<編號>-<名稱>`（A、B 路徑一致） |
| 批次加密 | `D:\01-Project\加密所有env.bat` |
| dotenvx 掃描報告 | `D:\01-Project\dotenvx_scan_report.json`、`schtasks_report.txt` |
| 本站原始碼 | `D:\01-Project\35-個人網頁最終版` → GitHub `hoonsor/Claude-Hub` |
| Antigravity 設定備份 | GitHub `hoonsor/Antigravity-Setting-and-Skills` |
