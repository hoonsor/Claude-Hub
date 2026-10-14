# 疑難排解

| 症狀 | 原因 | 解法 |
|---|---|---|
| 程式拿到 `encrypted:…` 開頭的值 | 沒有解密 | 確認已改用 `python-dotenvx`／`@dotenvx/dotenvx`；有 `override=True`；框架專案 scripts 有 `dotenvx run --` |
| `DECRYPTION_FAILED` | `DOTENV_PRIVATE_KEY` 沒生效 | 重開終端機、VS Code、Claude Desktop；排程要登出或重開機；B 電腦確認有設定 |
| 程式讀不到任何變數 | 工作目錄不是專案資料夾 | `load_dotenv()` 傳明確路徑 |
| 專案裡冒出 `.env.keys` | 對沒有公鑰行的 `.env` 執行了 `set`／`encrypt`，產生第二把金鑰 | **停下來**，不要刪也不要用，告訴 Claude 處理（需要把變數改用共用金鑰重加密） |
| VS Code 偵錯拿到密文 | `launch.json` 有 `"envFile"` | 刪掉該設定 |
| `dotenvx` 無法辨識 | 沒裝或 PATH 未生效 | `winget install dotenvx` 後重開終端機 |
| 某個 `.env` 曾經以明文被 commit | Git 歷史仍有明文 | 到各服務後台**撤銷並重新產生** API key（改寫歷史是禁止的） |
| 專案在 OneDrive 等雲端資料夾 | 雲端「版本記錄」保留舊明文 | 到雲端網頁版清除舊版本 |

## 驗證時的原則

- 只印 `bool(os.getenv("X"))`，或確認值不是 `encrypted:` 開頭。
- **永遠不要**為了確認而印出值。
