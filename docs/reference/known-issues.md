# 待整理事項

建站時（2026-10-14，A 電腦）比對各設定檔發現的不一致。每一項都標了建議做法；決定後跟 Claude 說「處理待整理事項第 N 項」，處理完把該列移到最下方「已處理」。

| # | 問題 | 影響 | 建議做法 |
|---|---|---|---|
| 1 | A 的 `~/.claude/CLAUDE.md` 只有 dotenvx 那一段（291 bytes），**沒有 AI-PROFILE 內容**；Codex 的 `AGENTS.md` 有同步成功 | Claude Code 在 A 上沒讀到溝通風格、回滾、個資等規則 | 執行 `sync-ai-profile.ps1 -DryRun` 確認後正式同步，並把 dotenvx 那段併進 `ai-profile/extras/claude-header.md`，避免下次同步把它覆蓋掉 |
| 2 | A 沒有安裝 GitHub CLI（`gh` 無法辨識） | `#初始化` 的 `gh repo create`、`setup-hoonsor-signing.ps1` 無法執行 | `winget install GitHub.cli` → `gh auth login --web --git-protocol https`；B 也要檢查 |
| 3 | `hoonsor-command-list` 的基準清單是舊版：寫「#更新 確認後才推」「#架構 產生 ANTIGRAVITY.md」「所有 commit、push 會等使用者確認」 | 與 `hoonsor-workflow` v1.1 的「全自動可回滾」矛盾，`#指令` 的說明會誤導 | 更新基準清單，並補上 `#SOP`、`#同步設定`、`#分支接手`、`#分支比較`、`#APP` |
| 4 | `加密所有env.bat` 結尾提示「程式啟動方式改成 `dotenvx run -- …`」 | 與 `dotenvx-secrets` 的「優先在程式碼內解密」不同 | 把提示改成「依 dotenvx-secrets 技能修改載入方式」 |
| 5 | `dotenvx-secrets` 有兩份：帳號技能與 `~/.claude/skills/` 本機副本，description 已不同 | 之後改其中一份容易忘記另一份 | 只保留帳號技能（兩台電腦都有），本機副本移到 `_trash/` |
| 6 | 部署到 Vercel 時如何解密 `.env` 沒有規範 | 網站專案上線時可能讀到密文 | 決定方案（Vercel 設 `DOTENV_PRIVATE_KEY` 或直接設明文變數）後寫進 `dotenvx-secrets` |
| 7 | AI-PROFILE §8「SOP 總目錄」沒有列 `dotenvx-secrets`、`#指令`、本站 | 查 SOP 時會漏 | 補進總目錄，並註明本站網址 |
| 8 | B 電腦設定 `DOTENV_PRIVATE_KEY` 的步驟沒有寫在任何技能 | 新電腦設定時容易漏 | 寫進 `hoonsor-toolchain-setup` 的「異機還原」，或引用本站 [新電腦首次設定](/sop/new-machine) |

## 已處理

（尚無）
