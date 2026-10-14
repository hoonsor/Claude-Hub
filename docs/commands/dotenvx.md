# dotenvx 指令

所有指令在 `.env` 所在的專案資料夾執行。`--no-armor --no-native` 是本機 dotenvx 版本需要的旗標（批次加密腳本也是這樣用）。

## ✅ 可以用

| 目的 | 指令 | 誰執行 |
|---|---|---|
| 新增／修改**機密**變數 | `dotenvx set API_KEY "值" --no-armor --no-native` | **你自己**在終端機（值不經過對話） |
| 新增／修改**非機密**變數 | `dotenvx set PORT 8000 --plain --no-armor --no-native` | Claude 可以 |
| 用加密 .env 執行程式 | `dotenvx run -- python main.py` | 任何人 |
| 指定 .env 路徑執行 | `dotenvx run -f "D:\01-Project\XX\.env" -- <命令>` | 任何人 |
| 看有哪些變數名稱 | 直接打開 `.env`（只有密文） | 任何人 |
| 刪除變數 | 編輯 `.env` 刪掉那一行 | 任何人 |
| 查版本 | `dotenvx --version` | 任何人 |
| 找執行檔路徑（排程用） | `where.exe dotenvx` | 任何人 |

## ⛔ 不要用（會輸出明文或產生第二把金鑰）

| 指令 | 原因 |
|---|---|
| `dotenvx decrypt` | 把 .env 還原成明文 |
| `dotenvx get` | 印出明文值 |
| `dotenvx run -- set`／`env`／`printenv` | 印出所有環境變數明文 |
| 對**沒有** `DOTENV_PUBLIC_KEY` 行的 .env 執行 `encrypt` 或 `set` | 會產生新金鑰對與專案內 `.env.keys` |

## 批次加密腳本

`D:\01-Project\加密所有env.bat`：掃描所有子專案 `.env`，用共用金鑰加密、驗證解密結果一致、補 `.gitignore`、檢查 Git 歷史是否洩漏過明文、設定 `DOTENV_PRIVATE_KEY` 使用者環境變數。只在大量遷移時用，平常不需要。
