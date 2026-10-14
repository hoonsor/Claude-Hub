# 新專案環境變數設定 SOP

> 最省事的方式：在 Code 分頁說「這個專案需要 `OPENAI_API_KEY`，幫我設定環境變數」。Claude 會依 `dotenvx-secrets` 技能做完步驟 1、2、4、5、6，只把步驟 3 的機密值留給你自己輸入。

## 步驟

### 1. 建立 `.env`（第一行是共用公鑰）

```powershell
cd D:\01-Project\<專案>
$pub = (Get-Content "$env:USERPROFILE\.dotenvx\public.key" -Raw).Trim()
[IO.File]::WriteAllText("$PWD\.env", "DOTENV_PUBLIC_KEY=`"$pub`"`n`n", (New-Object Text.UTF8Encoding $false))
```

- 必須是 **UTF-8 無 BOM**。
- **一定要先有這一行再 `set`**，否則 dotenvx 會產生新的金鑰對。

### 2. `.gitignore` 加入 `.env.keys`

```powershell
Add-Content .gitignore ".env.keys"
```

### 3. 寫入變數

```powershell
# 機密（API key、token、密碼）—— 你自己在終端機執行，值不要貼進對話
dotenvx set OPENAI_API_KEY "sk-..." --no-armor --no-native

# 非機密（PORT、DEBUG、網址）—— Claude 可以代勞
dotenvx set PORT 8000 --plain --no-armor --no-native
```

### 4. 建立 `.env.example`（只列名稱）

```ini
OPENAI_API_KEY=
PORT=
```

### 5. 讓程式讀得到

::: code-group

```python [Python]
# requirements.txt：python-dotenvx（移除 python-dotenv）
# 進入點最上方
from pathlib import Path
from dotenvx import load_dotenv

load_dotenv(Path(__file__).resolve().parent / ".env", override=True)

import os
api_key = os.getenv("OPENAI_API_KEY")
```

```js [Node (CJS)]
// npm i @dotenvx/dotenvx（移除 dotenv）
const path = require('path')
require('@dotenvx/dotenvx').config({ path: path.join(__dirname, '.env'), overload: true })
```

```js [Node (ESM)]
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import dotenvx from '@dotenvx/dotenvx'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenvx.config({ path: path.join(__dirname, '.env'), overload: true })
```

```json [Next.js / Vite / Nuxt]
{
  "scripts": {
    "dev": "dotenvx run -- next dev",
    "build": "dotenvx run -- next build",
    "start": "dotenvx run -- next start"
  }
}
```

```bat [.bat 啟動檔]
@echo off
cd /d "%~dp0"
dotenvx run -- .venv\Scripts\python.exe main.py
```

:::

**為什麼一定要這樣寫：**

| 規定 | 原因 |
|---|---|
| Python 要傳**明確路徑** | python-dotenvx 只從「目前工作目錄」往上找；排程或捷徑啟動時工作目錄常常不是專案資料夾 |
| `override=True`／`overload: true` | VS Code／Antigravity 的 Python 擴充套件會先把 `.env` 的**密文**塞進環境變數，不覆寫會拿到密文 |
| 框架用 `dotenvx run --` | 框架自己讀 `.env` 只會讀到密文 |
| 刪掉 `.vscode/launch.json` 的 `"envFile"` | 它只會讀到密文 |

### 6. 驗證（不印出值）

```powershell
.venv\Scripts\python.exe -c "import os; from dotenvx import load_dotenv; load_dotenv('.env', override=True); v=os.getenv('OPENAI_API_KEY'); print(bool(v), not str(v).startswith('encrypted:'))"
```

兩個都是 `True` 才算成功。

### 7. 部署到 Vercel 時（建議，尚未寫進技能）

Vercel 上沒有 `DOTENV_PRIVATE_KEY`，目前 `dotenvx-secrets` 技能也沒有規範這一段。兩種做法擇一，決定後請 Claude 寫回技能：

- 在 Vercel 專案的 Environment Variables 設定 `DOTENV_PRIVATE_KEY`（標為 Sensitive），build 指令用 `dotenvx run --`。
- 或直接在 Vercel 後台設定各個變數的明文值（由你自己在後台輸入）。

## 工作排程器

只有「改不了程式碼」時才需要改：

| 欄位 | 內容 |
|---|---|
| 程式 | dotenvx.exe 完整路徑（`where.exe dotenvx`） |
| 引數 | `run -f "<專案路徑>\.env" -- "<python.exe 完整路徑>" main.py` |
| 起始位置 | 專案資料夾 |

## 完成定義

- [ ] `.env` 第一行是共用公鑰、所有機密值都是 `encrypted:` 開頭
- [ ] 專案內沒有 `.env.keys`；`.gitignore` 有 `.env.keys`
- [ ] `.env.example` 已更新
- [ ] 程式用 dotenvx 載入（明確路徑＋override）
- [ ] 驗證指令兩個 `True`
- [ ] 新變數**名稱**寫進 `PROJECT_STATUS.md` 交接紀錄（另一台電腦才知道）
