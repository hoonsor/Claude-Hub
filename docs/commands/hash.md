# # 自訂指令

在 Claude Code／Cowork 對話中直接輸入。忘記時輸入 `#指令` 會動態列出目前**實際安裝**的清單（以它為準）。

## 專案工作流（hoonsor-workflow）

| 指令 | 用途 | 何時用 |
|---|---|---|
| `#開工` | fetch／pull、讀 AGENTS.md 與交接紀錄、檢查環境、回報下一步 | 每次開始工作 |
| `#更新` | 敏感資料掃描 → 更新 PROJECT_STATUS → commit → push | 一個段落完成 |
| `#收工` | #更新 ＋ 交接紀錄 ＋ worktree 備份 ＋ main 自動部署 | 結束、換電腦前 |
| `#合併` | 開發分支併回 main（先打 pre-merge tag） | 功能完成 |
| `#分支` | clone 並切分支，或 git worktree 開隔離資料夾 | 平行開發 |
| `#架構` | 掃描專案產生 AGENTS.md ＋ CLAUDE.md | 舊專案補說明書 |
| `#初始化` | 建 Git／GitHub private repo 並首推，網站接 Vercel | 新專案 |
| `新專案初始化` | 只問用途與是否部署，其餘用預設後執行 #初始化 | 新專案（關鍵字觸發） |
| `#全更新` | 遍歷 `D:\01-Project\*` fetch 並輸出同步狀態表 | 換電腦後巡一遍 |
| `#同步設定` | 把 AI-PROFILE.md 同步到本機各 AI 工具的全域規則檔 | 改完 AI-PROFILE 後，兩台各一次 |

## 搬遷與交接

| 指令 | 用途 |
|---|---|
| `#分支接手` | 建交接分支＋worktree＋交接文件，交給另一個 AI |
| `#分支比較` | 評比不同 AI 接手的分支，產出合併建議 |
| `#遷移` | 打包專案＋HANDOFF.md 成壓縮檔 |
| `#接手` | 解壓 #遷移 的壓縮檔並安裝環境 |

## 文件、狀態、知識

| 指令 | 用途 | 技能 |
|---|---|---|
| `#狀態` | 建立／更新 PROJECT_STATUS.md，或跨專案總覽 | hoonsor-project-status |
| `#PRD` | 訪談後把構想寫成需求文件 | hoonsor-prd-architect |
| `#SOP` | 建立或更新 SOP（技能） | hoonsor-sop |
| `#學習` | 把這次的錯誤記入錯誤知識庫 | hoonsor-error-prevention |
| `#喜好` | 查看或記錄個人偏好 | hoonsor-preferences |
| `#APP` `#補文件` | Android APP 開發流程、補交接文件 | hoonsor-android-app |
| `#指令` | 列出所有 # 指令 | hoonsor-command-list |

## 自動觸發（不用打 #）

這些技能會在對話內容符合時自動載入：

| 技能 | 觸發情境 |
|---|---|
| `dotenvx-secrets` | 碰到 .env、環境變數、API key、新專案、啟動腳本、排程 |
| `hoonsor-safe-worktree` | 改既有專案原始碼前 |
| `hoonsor-error-prevention` | 高風險操作前、指令出錯、同法失敗兩次 |
| `hoonsor-frontend-standards` | React／Next.js／Tailwind／UI |
| `hoonsor-backend-standards` | FastAPI／Node／PostgreSQL／Prisma |
| `hoonsor-quality-standards` | 寫測試、TDD、資安檢查 |
| `hoonsor-readme-writer` | 推 GitHub 前、寫 README |
| `hoonsor-toolchain-setup` | 設定 GitHub CLI、Firebase、NotebookLM、Obsidian、MCP |
| `hoonsor-xmind` | 要 .xmind 心智圖 |
