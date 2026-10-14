# A／B 電腦接續

## 兩台電腦的定義

| 代號 | 位置 | 電腦名稱（`$env:COMPUTERNAME`） | 備註 |
|---|---|---|---|
| **A** | 家裡 | `DESKTOP-5DM4EDT` | |
| **B** | 學校 | `DESKTOP-B20CD0` | 工作用，可能有個資 |

`$env:HOONSOR_MACHINE` 有設定時以它為準（`sync-ai-profile.ps1 -Machine A|B` 會設定它）。

## 什麼東西靠什麼同步

| 東西 | 同步方式 | 你要做什麼 |
|---|---|---|
| 程式碼、文件、加密後的 `.env` | **GitHub** | `#收工` push、`#開工` pull |
| 進度、決定、下一步 | `PROJECT_STATUS.md` 的交接紀錄（隨 Git） | `#收工` 時寫好 |
| Claude 技能、外掛、Connector | **Claude 帳號**（登入同帳號就有） | 不用做 |
| Claude 對話紀錄 | 不會同步到另一台的 Code 分頁 | 重要內容寫進交接紀錄 |
| `~/.claude/CLAUDE.md` 等全域規則檔 | `sync-ai-profile.ps1`（每台各跑） | 改了 AI-PROFILE 後兩台都要跑 |
| `DOTENV_PRIVATE_KEY` | **不同步**，每台手動設一次 | 見 [新電腦首次設定](/sop/new-machine) |
| `node_modules`、`.venv` | 不同步 | `#開工` 依交接紀錄重裝 |
| `data/raw/` 等個資檔 | **不同步，也不該同步** | 在交接紀錄寫檔名與用途 |

## 標準接續流程

```text
A 電腦（家）                         B 電腦（學校）
────────────                         ─────────────
#收工
 ├ commit + push（wip 也推）
 ├ 寫交接紀錄
 └ main 網站自動部署
                     ── GitHub ──►
                                     #開工
                                      ├ fetch + pull --rebase
                                      ├ 讀交接紀錄 / 下一步
                                      └ 補裝套件、檢查環境變數名稱
                                     ……開發……
                                     #收工
                     ◄── GitHub ──
#開工
```

## 交接紀錄格式

寫在 `PROJECT_STATUS.md` 的「🔁 交接紀錄」，**最新在最上方**，保留最近 10 筆，更舊的移到 `docs/handoff-archive.md`。

```markdown
### 2026-10-13 17:40 ｜ B（學校）｜ v1.4.2 ｜ AI：Claude
- **完成**：匯出 Excel 功能、修正日期格式
- **決定＋原因**：改用 openpyxl 而非 xlwings —— 學校電腦沒裝 Excel 也要能跑
- **放棄的方案＋原因**：COM 自動化 —— 需要 Excel 常駐，B 電腦不穩定
- **未完成**：欄寬自動調整（在 `src/export.py` 的 TODO）
- **下一步**：1. 完成欄寬調整 2. 補 export 的單元測試
- **環境注意**：新增套件 openpyxl；新增環境變數名稱 `EXPORT_DIR`
- **本機才有、Git 沒同步的東西**：`data/raw/112學年度名冊.xlsx`（個資，不上傳）
```

::: tip 最重要的兩欄
「決定＋原因」與「放棄的方案＋原因」——這些在 Git 裡看不到，也是換電腦後最容易重踩的坑。
:::

## 常見狀況

| 狀況 | 處理 |
|---|---|
| 忘了在 A `#收工` 就到了 B | B 上**不要**開始改同一批檔案。可以先開新分支 `#分支` 做別的；回 A 後 `#收工`，再到 B `#開工` 合併。 |
| `#開工` 時 rebase 衝突 | Claude 會 `git rebase --abort` 並列出衝突檔，由你決定保留哪邊。 |
| B 上出現 `DECRYPTION_FAILED` | B 的 `DOTENV_PRIVATE_KEY` 沒設或沒生效 → 見 [疑難排解](/env/troubleshooting)。 |
| 想一次看所有專案同步狀態 | `#全更新`：遍歷 `D:\01-Project\*`，fetch 並輸出狀態表。 |
| 不在 Git 的專案要搬到另一台 | `#遷移` 打包成壓縮檔 → 另一台 `#接手`。 |
