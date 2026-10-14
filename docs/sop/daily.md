# 每日 SOP：開工 → 開發 → 收工

```text
#開工 ──► 開發（可多次 #更新）──► #收工 ──► （換電腦）──► #開工 …
```

## 1. #開工

**時機**：每次坐到電腦前、開一個新對話時。

| 步驟 | 內容 | |
|---|---|---|
| 1 | 確認目前是哪台電腦（`$env:COMPUTERNAME`：`DESKTOP-5DM4EDT`＝A，`DESKTOP-B20CD0`＝B） | <span class="auto">自動</span> |
| 2 | 資料夾是空的 → 依 GitHub 網址 clone（多分支時選最近 commit 的） | <span class="auto">自動</span> |
| 3 | `git fetch --all --prune` → 落後就 `git pull --rebase`；有未提交變更先 snapshot commit | <span class="auto">自動</span> |
| 4 | 衝突 → `git rebase --abort` 回原狀並停下 | <span class="ask">問你</span> |
| 5 | 讀 `AGENTS.md`、`PROJECT_STATUS.md` 最新交接紀錄與「下一步」 | <span class="auto">自動</span> |
| 6 | 交接紀錄提到的新套件 → 安裝；新環境變數 → 只檢查名稱是否存在 | <span class="auto">自動</span> |

**你會看到的回報**：

```text
📍 上次：2026-10-13 在 B — 完成匯出 Excel
⚠️ 注意：新增環境變數 EXPORT_DIR
➡️ 下一步：1. 欄寬自動調整 2. 補單元測試
🔄 同步：已拉取 3 個新提交
```

## 2. 開發中

- 改程式前 Claude 會先 snapshot commit（`chore(wip): snapshot before …`），或依 `hoonsor-safe-worktree` 在 worktree 沙盒改。
- 一個段落完成就 **`#更新`**：
  1. 掃描 diff 是否有敏感資料（命中就停）
  2. 更新 `PROJECT_STATUS.md`（勾選完成項、版本歷程加一列）
  3. 只 stage 相關檔案（不 `git add .`）→ Conventional Commits → SemVer 遞增 → commit → push

## 3. #收工

**時機**：今天結束，或**準備換到另一台電腦之前**。

1. 執行 `#更新` 全部步驟——**沒做完也要 commit + push**（`wip:`）。
2. 在 `PROJECT_STATUS.md` 的「🔁 交接紀錄」**最上方**新增一筆（格式見 [A／B 電腦接續](/sop/two-machines#交接紀錄格式)）。
3. 技術棧、目錄、規則有變 → 更新 `AGENTS.md`。
4. 其他 worktree 有未提交變更 → 一併 snapshot commit。
5. 網站專案且在 `main` → 自動 `npx vercel --prod`，回報新網址與前一版網址。
6. 剛 `#合併` 完 → 清理已合併的分支與 worktree。

## 檢查清單（收工前自己看一眼）

- [ ] Claude 回報「已 push」
- [ ] 交接紀錄有寫「決定＋原因」「放棄的方案」
- [ ] 新增的環境變數**名稱**寫進交接紀錄與 `.env.example`
- [ ] 本機才有的資料檔（例如 `data/raw/*.xlsx`）寫進交接紀錄
- [ ] 沒有 `.env.keys` 出現在專案資料夾
