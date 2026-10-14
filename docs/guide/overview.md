# 系統總覽

整套工作方式由「三層」組成。要改規則時，先判斷它屬於哪一層，只改那一層的那一份檔案（單一真實來源），其他地方引用它。

## 三層分工

| 層級 | 放什麼 | 放哪裡 | 怎麼生效 |
|---|---|---|---|
| **原則** | 身分、溝通風格、自主權與回滾、個資、SOP 優先 | `D:\01-Project\36-Claude使用流程改善\AI-PROFILE.md` | `#同步設定` 或 `sync-ai-profile.ps1` 推到各 AI 工具的全域規則檔 |
| **執行步驟（SOP）** | 會自動觸發的流程：#開工、#收工、dotenvx… | Claude 帳號層級的技能／外掛（名稱以 `hoonsor-` 開頭） | 帳號層級，兩台電腦登入同帳號就有 |
| **詳細參考** | 長篇說明、理由、範本、決定紀錄 | Claude Project 文件（`claude/*.md`）＋本站 | 技能裡寫「詳見某某文件」 |

```text
AI-PROFILE.md（原則，只改這份）
   │  sync-ai-profile.ps1 ／ #同步設定（每台電腦各跑一次）
   ├─► ~/.claude/CLAUDE.md          ─┐
   ├─► ~/.codex/AGENTS.md            │
   ├─► ~/.gemini/GEMINI.md           │
   └─► ~/.dsh/skills/hoonsor-profile │
                                     ▼
帳號技能 hoonsor-*（SOP） ───────► Claude 對話 ◄─── 專案內 AGENTS.md / PROJECT_STATUS.md
```

## 各 AI 工具分工

| 工具 | 比例 | 角色 |
|---|---|---|
| Claude（Code／Cowork／Chat） | 75% | 主力：規劃、開發、研究、審查 |
| Antigravity（Gemini） | 15% | 與 Google 整合，做輕量任務 |
| DeepSeek Harness | 10% | 低成本試水溫、跑平行版本 |
| 拉斐爾（Hermes on N100） | — | 24/7 背景自主學習 |

## 每個專案根目錄必備的檔案

| 檔案 | 用途 |
|---|---|
| `AGENTS.md` | 專案說明書，所有 AI 共用：技術棧、目錄、指令、Always／Ask／Never 規則 |
| `CLAUDE.md` | 只有一行 `@AGENTS.md`，讓 Claude 讀同一份 |
| `PROJECT_STATUS.md` | 版本歷程（SemVer）、任務清單、「➡️ 下一步」、「🔁 交接紀錄」 |
| `README.md` | 給人看的專案說明 |
| `.gitignore` | 至少含 `.venv/ node_modules/ _trash/ data/raw/ .env.keys *.local` |
| `.env`（加密）＋ `.env.example` | 環境變數；`.env` 是密文可 commit，`.env.example` 只列名稱 |

## 自主權與回滾（所有自動動作的前提）

| 動作 | 規則 | 回滾 |
|---|---|---|
| 改檔、跑測試、裝套件 | <span class="auto">自動</span> | Git |
| 改程式前 | 先 snapshot commit 或在 worktree 改 | `git reset` 回快照 |
| commit／push | <span class="auto">自動</span>，只推目前分支 | `git revert` |
| 合併進 main | 先打 tag `pre-merge-vX.Y.Z` | 回到 tag |
| 刪除檔案 | 移到 `_trash/YYYYMMDD/` | 搬回 |
| Vercel 部署 | <span class="auto">自動</span> | Instant Rollback |
| DB migration | 先備份 | 還原備份 |
| 寄信、發訊息、付款、系統設定、改 repo 為 public | <span class="ask">先問</span> | 無法回滾 |
| `--force` push、改寫歷史 | **禁止** | — |
