# 改設定或規則

先判斷要改的是哪一層，只改那一份。

| 想改的東西 | 改哪裡 | 怎麼請 Claude 做 | 改完要做 |
|---|---|---|---|
| 溝通風格、自主權、個資、技術預設 | `D:\01-Project\36-Claude使用流程改善\AI-PROFILE.md` | 「把 AI-PROFILE 的 ___ 改成 ___，版本 +0.0.1」 | 兩台電腦各跑 `#同步設定`；§3、§4 有變要更新 Claude App 的個人偏好（貼 `ai-profile/claude-preferences.txt`） |
| #開工／#收工 等流程 | 外掛 `hoonsor-antigravity` 的 `hoonsor-workflow` | 「修改 hoonsor-workflow：___」→ Claude 產生新版 `.plugin` | 在對話中安裝新版外掛；舊版 `.plugin` 留在 `36-Claude使用流程改善\ai-profile\` |
| dotenvx 規範 | 帳號技能 `dotenvx-secrets` | 「更新 dotenvx-secrets 技能：___」 | 本機 `~/.claude/skills/dotenvx-secrets` 也要同步 |
| 新增一個重複性流程 | 新技能（`hoonsor-` 開頭） | `#SOP` | 把它加進 AI-PROFILE §8 的 SOP 總目錄，並更新本站 |
| 單一專案的規則 | 專案內 `AGENTS.md` | 「在 AGENTS.md 的 Never 加上 ___」 | `#更新` |
| Claude Code 權限、hook、模型 | `~/.claude/settings.json`（全域）或專案 `.claude/settings.json` | 「設定 ___」（會用 update-config 技能） | 重開 Claude Code |
| 本站內容 | 本 repo 的 `docs/**/*.md` | 「更新 Claude Hub 的 ___ 頁」 | push 後 Vercel 自動部署 |

## SOP 的最低要求（AI-PROFILE §8）

每份 SOP 至少包含：用途與觸發時機、前置確認、步驟（標出要你確認的步驟）、檢查清單、完成定義、常見坑、產出檔案位置、版本與變更紀錄。

**判斷要不要建 SOP**：同類任務預期做 2 次以上、或超過 5 步、或出錯代價高 → 建。
