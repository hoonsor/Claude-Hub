# 新電腦首次設定

適用：B 電腦第一次設定、重灌、換新電腦。做完一次之後，日常只需要 `#開工`／`#收工`。

## 檢查清單

| # | 項目 | 指令／做法 | 驗證 |
|---|---|---|---|
| 1 | Git | `winget install Git.Git` | `git --version` |
| 2 | Git 身分 | `git config --global user.name "hoonsor"`、`git config --global user.email "<信箱>"` | `git config --global -l` |
| 3 | GitHub CLI | `winget install GitHub.cli` → `gh auth login --web --git-protocol https` | `gh auth status` |
| 4 | Node.js | `winget install OpenJS.NodeJS.LTS` | `node -v` |
| 5 | Python（需要時） | `winget install Python.Python.3.12`；專案一律用 `.venv` | `py -V` |
| 6 | dotenvx | `winget install dotenvx` | `dotenvx --version` |
| 7 | 公鑰檔 | 建立 `%USERPROFILE%\.dotenvx\public.key`，內容與 A 相同（公鑰，可複製） | 檔案存在 |
| 8 | **私鑰** | 從密碼管理器取出，**自己**執行下方指令設定 | 見下方 |
| 9 | Vercel CLI（網站專案） | `npm.cmd i -g vercel` → `vercel login` | `vercel whoami` |
| 10 | Claude Desktop | 安裝後登入同一個帳號 → 技能、外掛、Connector 自動出現 | Code 分頁輸入 `#指令` |
| 11 | 專案資料夾 | 建立 `D:\01-Project`，路徑與 A 一致 | — |
| 12 | 全域規則檔 | 取得 `36-Claude使用流程改善` 專案後執行 `.\sync-ai-profile.ps1 -Machine B` | `$env:HOONSOR_MACHINE` 為 `B` |
| 13 | 新電腦名稱 | 若不是表上的兩台，請 Claude 把電腦名稱加進 `hoonsor-workflow` 的對照表 | — |

## 設定 DOTENV_PRIVATE_KEY（自己在 PowerShell 執行）

::: danger 不要把私鑰貼進任何對話
私鑰只存在：密碼管理器、A 的 `%USERPROFILE%\.dotenvx\.env.keys`、每台電腦的 Windows 使用者環境變數。
:::

```powershell
$k = Read-Host '貼上 DOTENV_PRIVATE_KEY' -AsSecureString
[Environment]::SetEnvironmentVariable('DOTENV_PRIVATE_KEY', [Runtime.InteropServices.Marshal]::PtrToStringBSTR([Runtime.InteropServices.Marshal]::SecureStringToBSTR($k)), 'User')
```

設定後：**關掉所有終端機、VS Code、Claude Desktop 再重開**；工作排程器的任務要登出或重開機一次。

驗證（不會印出值）：

```powershell
[bool][Environment]::GetEnvironmentVariable('DOTENV_PRIVATE_KEY','User')
```

## 取得專案

```powershell
cd D:\01-Project
git clone https://github.com/hoonsor/<repo>.git "<編號>-<名稱>"
```

或在 Code 分頁把空資料夾設為工作目錄，輸入 `#開工` 並貼上 GitHub 網址。
