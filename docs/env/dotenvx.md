# 加密機制現況

所有專案的 `.env` 都用 **dotenvx** 加密，**全部共用同一組金鑰**。

## 運作方式

```text
          公鑰（只能加密）                         私鑰（只能解密）
   %USERPROFILE%\.dotenvx\public.key        Windows 使用者環境變數 DOTENV_PRIVATE_KEY
                │                                         │
                ▼                                         ▼
  .env 第一行 DOTENV_PUBLIC_KEY="…"        程式啟動時 dotenvx 在記憶體中解密
  變數值 API_KEY="encrypted:…"     ──►     os.getenv("API_KEY") 拿到明文
                │
                └─► 可以 commit 到 GitHub（只有密文）
```

## 檔案與位置

| 東西 | 位置 | 可以讀？ | 可以 commit？ |
|---|---|---|---|
| 加密後的 `.env` | 每個專案根目錄 | ✅ 只有變數名稱與密文 | ✅ |
| `.env.example` | 每個專案根目錄 | ✅ 只列名稱，值留空 | ✅ |
| 公鑰 | `%USERPROFILE%\.dotenvx\public.key` | ✅ | — |
| 私鑰檔 | `%USERPROFILE%\.dotenvx\.env.keys`（A 電腦） | ⛔ **禁止讀取** | ⛔ |
| 私鑰（執行用） | Windows 使用者環境變數 `DOTENV_PRIVATE_KEY` | ⛔ **禁止顯示** | ⛔ |
| 私鑰備份 | 你的密碼管理器 | 只有你 | ⛔ |
| 批次加密腳本 | `D:\01-Project\加密所有env.bat` | ✅ | — |
| 規範（技能） | `~/.claude/skills/dotenvx-secrets/SKILL.md` 與帳號技能 | ✅ | — |

## 一個加密 `.env` 長這樣

```ini
DOTENV_PUBLIC_KEY="（66 位十六進位公鑰，全部專案相同）"

# 機密
OPENAI_API_KEY="encrypted:BD9p…"
# 非機密（--plain）
PORT="8000"
```

## 安全規則（不可違反）

1. 不讀取、不顯示 `.env.keys` 與 `DOTENV_PRIVATE_KEY`，也不寫進任何檔案、log、對話。
2. 不執行會輸出明文的指令（`decrypt`、`get`、`run -- env`…），不印出整個 `os.environ`／`process.env`。
3. 不建立明文 `.env`、不還原成明文、不刪改 `DOTENV_PUBLIC_KEY` 那一行。
4. 不對沒有 `DOTENV_PUBLIC_KEY` 行的 `.env` 執行 `encrypt`／`set`（會產生第二把金鑰）。
5. 專案資料夾內不得出現 `.env.keys`；發現就停下來告知，不刪也不用。
6. 每個 Git 專案的 `.gitignore` 必須含 `.env.keys`。

## 程式怎麼讀（摘要）

原則：**優先在程式碼內解密**，這樣 .bat、捷徑、工作排程器、VS Code 偵錯都不用改。

| 類型 | 做法 |
|---|---|
| Python | `python-dotenvx` 取代 `python-dotenv`；`load_dotenv(明確路徑, override=True)` |
| Node（自己載入） | `@dotenvx/dotenvx` 取代 `dotenv`；`config({ path, overload: true })` |
| Next.js／Vite／Nuxt | package.json scripts 前面加 `dotenvx run --` |
| 改不了程式 | 啟動指令改成 `dotenvx run -f "<路徑>\.env" -- <原命令>` |

完整步驟見 [新專案設定 SOP](/env/new-project-env)。

## 兩台電腦

公鑰相同、私鑰相同。B 電腦只需要把私鑰設成使用者環境變數（[新電腦首次設定](/sop/new-machine#設定-dotenv-private-key-自己在-powershell-執行)），所有專案的 `.env` 就都能解密。
