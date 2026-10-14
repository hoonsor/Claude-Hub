# PowerShell 防呆

## Windows 黃金法則（AI-PROFILE §7）

1. 執行 Python 前先 `$env:PYTHONIOENCODING="utf-8"`，避免 CP950 編碼錯誤。
2. SPA 網頁先抓 `inner_text('body')` 解析，不要一開始就寫 CSS selector。
3. `ModuleNotFoundError` → `.venv\Scripts\pip.exe install <套件>`。
4. MCP 或 CLI 指令一律用絕對路徑。
5. **同一方法失敗 2 次就停下換方向。**

## 常見坑

| 問題 | 解法 |
|---|---|
| `&&` 無效（Windows PowerShell 5.1） | 改用 `;`，或 `A; if ($?) { B }` |
| `npm.ps1` 被執行原則擋下 | 改用 `npm.cmd`／`npx.cmd` |
| 指令「無法辨識」 | 用完整路徑，或重開終端機讓 PATH 生效 |
| 中文亂碼 | `chcp 65001`；寫檔用 UTF-8 無 BOM |
| 設了環境變數卻讀不到 | 重開終端機／VS Code／Claude Desktop；排程要登出或重開機 |
| OAuth 瀏覽器登入卡住 | 在自己的 PowerShell 視窗手動完成登入 |

## 常用

```powershell
$env:COMPUTERNAME                         # 確認是 A 還是 B
$env:HOONSOR_MACHINE                      # sync-ai-profile 設定的代號
[bool]$env:DOTENV_PRIVATE_KEY             # 只確認私鑰存在（不印值）
Get-ChildItem D:\01-Project -Directory    # 列出所有專案
```
