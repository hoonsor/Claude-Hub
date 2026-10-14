# 開新專案

## 快速版

1. 建資料夾 `D:\01-Project\<下一個編號>-<中文名稱>`。
2. Claude Desktop → Code 分頁 → 工作目錄選這個資料夾。
3. 構想還模糊 → 先 `#PRD`（訪談後產出需求文件）。
4. 輸入 **`新專案初始化`**，回答兩個問題：用途（一句話）、要不要部署。
5. 需要 API key → 走 [新專案環境變數 SOP](/env/new-project-env)。
6. 開始開發；結束 `#收工`。

## #初始化 做了什麼

| 步驟 | 內容 |
|---|---|
| 偵測 | 已有 Git + remote → 只補缺口（網站就部署）；有 Git 無 remote → 建 GitHub repo；沒有 Git → 完整流程 |
| 命名 | repo 名＝資料夾名去掉編號、轉英文 kebab-case（無法英文化會問你） |
| `.gitignore` | `.venv/ node_modules/ _trash/ data/raw/ .env.keys *.local` |
| 文件 | `AGENTS.md`、`CLAUDE.md`（`@AGENTS.md`）、`PROJECT_STATUS.md`（含 🔁 交接紀錄）、`README.md` |
| Git | `git init` → `git branch -M main` → commit → `gh repo create --private --source . --push` |
| 部署 | 網站專案 → Vercel 部署並 `vercel git connect`，回報 Production 網址 |

::: tip 預設是 private
改成 public 屬於「無法回滾」的動作，Claude 會先問。
:::

## 技術預設（AI-PROFILE §6）

- 前後端分離，先寫 API 契約（OpenAPI 或 `contract.json`）
- 前端：React 19 + TypeScript + Tailwind + Zustand
- 後端：FastAPI 或 Node（TypeScript／Bun）；Pydantic／Zod 驗證
- 資料庫：PostgreSQL + Prisma，或 Supabase
- SemVer `vX.Y.Z`、Conventional Commits
- UI：不用原色、要有暗黑模式、現代字體、不留占位圖
- 功能完整：有新增就有編輯刪除、資料多要分頁、Mock data 至少 20 筆

## 既有專案補文件

已經開發一陣子、但沒有 `AGENTS.md` 的專案：輸入 `#架構`，Claude 會掃描目錄與技術棧產生 `AGENTS.md` 與 `CLAUDE.md`，舊的 `ANTIGRAVITY.md` 併入後移到 `_trash/`。
