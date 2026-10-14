# 交給其他 AI／搬家

| 情境 | 指令 | 結果 |
|---|---|---|
| 同一專案、換另一台電腦繼續 | `#收工` → `#開工` | 見 [A／B 電腦接續](/sop/two-machines) |
| 交給另一個 AI（Codex、Antigravity、DeepSeek Harness…）接手 | `#分支接手` | 建立交接分支＋獨立 worktree 資料夾，複製未提交變更與重要被忽略檔，寫交接文件與功能矩陣 |
| 比較不同 AI 做出的分支 | `#分支比較` | 腳本收集客觀數據 → 抽查程式碼 → 評分報告與合併建議 |
| 沒有 Git 的專案搬到另一台 | `#遷移` | 彙整對話與進度成 `HANDOFF.md`，連同程式打包成壓縮檔 |
| 在新電腦還原 `#遷移` 的壓縮檔 | `#接手` | 解壓、讀 `HANDOFF.md`、安裝環境 |
| 開發分支併回 main | `#合併` | 先打 tag `pre-merge-v…`，`--no-ff` 合併，跑測試，失敗自動退回 |
| 開隔離分支 | `#分支` | clone 並切分支，或 `git worktree add` 開隔離資料夾 |

## #分支接手 的原則

- 主幹（原資料夾、原分支）**完全不被修改**。唯一例外：原專案 `.handoffs/` 留一份交接文件備份（已用 `.git/info/exclude` 排除）。
- 不複製套件環境（`node_modules`、`.venv`），接手方自己裝。

## #合併 的保險

```text
git checkout main → git pull --rebase
git tag pre-merge-v<版本> → git push origin <tag>
git merge --no-ff <分支>       # 衝突 → merge --abort 並停下
跑測試                         # 失敗 → git reset --hard pre-merge-…（尚未 push，安全）
git push → 網站自動部署
```
