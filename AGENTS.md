# AGENTS.md — Claude Hub

Claude 操作手冊網站：每日 SOP、A／B 電腦接續、指令集、dotenvx 環境變數規範、技能與設定檔位置。

## 技術棧
- VitePress 1.6（靜態網站，Markdown 內容）
- 部署：Vercel 專案 `claude-hub`，正式網址 https://claude-hub-eta.vercel.app（push `main` 自動部署）

## 目錄
- `docs/` 所有頁面（Markdown）
- `docs/.vitepress/config.mts` 導覽列、側邊欄、搜尋設定
- `docs/.vitepress/theme/` 自訂樣式
- `docs/public/` 靜態資源

## 指令
- `npm.cmd install`
- `npm.cmd run dev` 本機預覽
- `npm.cmd run build` 建置（輸出 `docs/.vitepress/dist`）

## 規則
- **Always**：新增頁面時同步更新 `config.mts` 的 sidebar；內容以技能檔與 AI-PROFILE.md 為準，發現不一致記到 `docs/reference/known-issues.md`。
- **Ask**：把 repo 改為 private／public、調整網域。
- **Never**：repo 是 public —— 不放任何 key、token、私鑰、公鑰實際值、密碼、個資。
