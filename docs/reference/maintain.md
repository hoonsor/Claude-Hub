# 本站維護方式

## 架構

- **VitePress** 靜態網站：每一頁就是 `docs/` 底下的一個 Markdown 檔，內建全文搜尋、暗色模式、程式碼一鍵複製。
- 原始碼：`D:\01-Project\35-個人網頁最終版` → GitHub [`hoonsor/Claude-Hub`](https://github.com/hoonsor/Claude-Hub)（**public**）。
- 部署：Vercel，push 到 `main` 後自動更新。

```text
docs/
├─ index.md               首頁
├─ guide/                 系統總覽、互動模式
├─ sop/                   每日、A/B、新電腦、新專案、交接、改設定
├─ commands/              # 指令、Claude Code、Git、dotenvx、PowerShell
├─ env/                   dotenvx 現況、新專案 SOP、疑難排解
├─ reference/             檔案位置、待整理事項、本頁
└─ .vitepress/config.mts  側邊欄與導覽列
```

## 怎麼更新

在本專案的 Code 分頁對 Claude 說，例如：

- 「#收工 的流程改了，更新 Claude Hub 的每日 SOP 頁」
- 「新增一個 # 指令 #備份，加到指令集」
- 「處理待整理事項第 2 項」

新增頁面時要同步把它加進 `docs/.vitepress/config.mts` 的 `sidebar`。

## 本機預覽

```powershell
npm.cmd install
npm.cmd run dev        # http://localhost:5173
npm.cmd run build      # 產生 docs/.vitepress/dist
```

## 內容規則

::: danger repo 是 public
- 不放任何 API key、token、私鑰、公鑰實際值、密碼。
- 不放個資或公務資料。
- 規則本身的單一真實來源是各技能檔與 AI-PROFILE.md；本站是「整理後的說明書」。技能改了要回來更新本站，兩邊不一致時以技能為準。
:::
