---
layout: home

hero:
  name: Claude Hub
  text: 倬的 Claude 操作手冊
  tagline: 忘記步驟時來這裡查：每日 SOP、指令集、A／B 電腦接續、dotenvx 加密規範、設定檔位置。
  actions:
    - theme: brand
      text: 今天要開工 →
      link: /sop/daily
    - theme: alt
      text: 查指令
      link: /commands/hash
    - theme: alt
      text: 開新專案
      link: /sop/new-project

features:
  - icon: 🌅
    title: 每日 SOP
    details: "#開工 → 開發 → #更新 → #收工。換電腦前一定要 #收工。"
    link: /sop/daily
  - icon: 🔁
    title: A（家）↔ B（學校）接續
    details: 靠 GitHub + PROJECT_STATUS.md 的交接紀錄，另一台電腦 #開工 就能接著做。
    link: /sop/two-machines
  - icon: ⌨️
    title: 指令集
    details: "# 自訂指令、Claude Code 斜線指令、Git、dotenvx、PowerShell 防呆一次列齊。"
    link: /commands/hash
  - icon: 🔐
    title: .env 加密（dotenvx）
    details: 全部專案共用一組金鑰；.env 只放密文、可以 commit；私鑰只在 Windows 環境變數。
    link: /env/dotenvx
  - icon: 🆕
    title: 新專案環境變數 SOP
    details: 建 .env、寫入第一行公鑰、加變數、改程式讀取方式、驗證，一步一步照做。
    link: /env/new-project-env
  - icon: 🗂️
    title: 技能與設定檔位置
    details: 每個技能、腳本、全域設定檔放在哪裡，要改什麼就直接叫 Claude 改哪一份。
    link: /reference/files
---

## 30 秒速查

| 我想要… | 在 Claude Code 輸入 | 說明 |
|---|---|---|
| 開始今天的工作 | `#開工` | 拉取遠端、讀交接紀錄、回報下一步 |
| 存一下進度 | `#更新` | 掃描敏感資料 → commit → push |
| 今天結束／要換電腦 | `#收工` | 同 #更新，另寫交接紀錄、main 自動部署 |
| 建新專案 | `新專案初始化` | 建 Git、GitHub（private）、AGENTS.md 等 |
| 加一個 API key | 請自己在終端機執行 `dotenvx set KEY "值" --no-armor --no-native` | 機密值不要經過對話 |
| 忘記有哪些指令 | `#指令` | 動態列出目前已安裝的 # 指令 |

::: warning 三條鐵則
1. **換電腦前必須 `#收工`**：沒做完也要 commit + push（標 `wip:`），否則另一台拿不到。
2. **不讀、不顯示、不 commit 解密後的值與 `DOTENV_PRIVATE_KEY`**；專案資料夾內不得出現 `.env.keys`。
3. **禁止 `git push --force`、改寫已推送歷史**：所有自動動作都必須能回滾。
:::
