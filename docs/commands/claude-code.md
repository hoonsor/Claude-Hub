# Claude Code 指令

## 對話中的斜線指令

| 指令 | 用途 |
|---|---|
| `/clear` | 清空對話，開新的上下文（換任務時用，省 token） |
| `/compact` | 壓縮目前對話成摘要，繼續工作 |
| `/model` | 切換模型（Desktop 可直接在 UI 選） |
| `/fast` | 切換快速模式 |
| `/init` | 產生專案的 CLAUDE.md（我們改用 `#架構`，它會產生 AGENTS.md） |
| `/code-review` | 審查目前的 diff（可加 `low`～`max`、`ultra`） |
| `/security-review` | 安全審查 |
| `/simplify` | 只做品質整理（重用、簡化），不找 bug |
| `/loop 5m <指令>` | 每 5 分鐘重複執行 |
| `/schedule` | 建立排程的雲端代理 |
| `/<技能名>` | 直接叫用技能，例如 `/dotenvx-secrets` |

只能在終端機 `claude` 用的互動式指令（Desktop 的 Code 分頁沒有）：`/config`、`/permissions`、`/mcp`、`/hooks`、`/doctor`。

## 終端機啟動

```powershell
claude                    # 在目前資料夾開新對話
claude -c                 # 接續這個資料夾最近一次對話
claude -r                 # 從清單選要恢復的對話
claude -p "問題"          # 一次性問答，不進互動模式
claude update             # 更新
```

## 快捷鍵（終端機版）

| 按鍵 | 作用 |
|---|---|
| `Esc` | 中斷 Claude 目前的動作 |
| `Esc` `Esc` | 回到前一則訊息重新編輯 |
| `Shift+Tab` | 切換權限模式（一般／自動接受編輯／計畫模式） |
| `Ctrl+R` | 搜尋歷史 |
| `!` 開頭 | 直接執行 shell 指令，例如 `!git status` |
| `@` 開頭 | 引用檔案，例如 `@AGENTS.md` |

## 記憶與設定檔

| 檔案 | 範圍 |
|---|---|
| `~/.claude/CLAUDE.md` | 全域規則（由 sync-ai-profile.ps1 產生，不要直接改） |
| `<專案>/CLAUDE.md` | 專案規則（只寫 `@AGENTS.md`） |
| `~/.claude/settings.json` | 全域設定：模型、hook（完成時跳 Windows 通知）、外掛 |
| `<專案>/.claude/settings.json` | 專案設定：權限白名單等 |
| `~/.claude/projects/<專案路徑>/memory/` | Claude 自動記憶 |
