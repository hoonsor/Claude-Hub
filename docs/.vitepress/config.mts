import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-TW',
  title: 'Claude Hub',
  description: 'Claude 操作手冊：SOP、指令集、A/B 電腦交接、dotenvx 環境變數規範',
  cleanUrls: true,
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
  themeConfig: {
    nav: [
      { text: '每日 SOP', link: '/sop/daily' },
      { text: '指令集', link: '/commands/hash' },
      { text: '環境變數', link: '/env/dotenvx' },
      { text: '檔案位置', link: '/reference/files' },
    ],
    sidebar: [
      {
        text: '開始',
        items: [
          { text: '系統總覽', link: '/guide/overview' },
          { text: '與 Claude 互動的模式', link: '/guide/interaction' },
        ],
      },
      {
        text: 'SOP',
        items: [
          { text: '每日：開工 → 開發 → 收工', link: '/sop/daily' },
          { text: 'A／B 電腦接續', link: '/sop/two-machines' },
          { text: '新電腦首次設定', link: '/sop/new-machine' },
          { text: '開新專案', link: '/sop/new-project' },
          { text: '交給其他 AI／搬家', link: '/sop/handoff' },
          { text: '改設定或規則', link: '/sop/change-settings' },
        ],
      },
      {
        text: '指令集',
        items: [
          { text: '# 自訂指令', link: '/commands/hash' },
          { text: 'Claude Code 指令', link: '/commands/claude-code' },
          { text: 'Git 常用指令', link: '/commands/git' },
          { text: 'dotenvx 指令', link: '/commands/dotenvx' },
          { text: 'PowerShell 防呆', link: '/commands/powershell' },
        ],
      },
      {
        text: '環境變數（dotenvx）',
        items: [
          { text: '加密機制現況', link: '/env/dotenvx' },
          { text: '新專案設定 SOP', link: '/env/new-project-env' },
          { text: '疑難排解', link: '/env/troubleshooting' },
        ],
      },
      {
        text: '參考',
        items: [
          { text: '技能與重要檔案位置', link: '/reference/files' },
          { text: '待整理事項', link: '/reference/known-issues' },
          { text: '本站維護方式', link: '/reference/maintain' },
        ],
      },
    ],
    outline: { level: [2, 3], label: '本頁目錄' },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜尋', buttonAriaLabel: '搜尋' },
          modal: {
            noResultsText: '找不到結果',
            resetButtonTitle: '清除',
            footer: { selectText: '選擇', navigateText: '切換', closeText: '關閉' },
          },
        },
      },
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/hoonsor/Claude-Hub' }],
    editLink: {
      pattern: 'https://github.com/hoonsor/Claude-Hub/edit/main/docs/:path',
      text: '在 GitHub 編輯此頁',
    },
    lastUpdated: { text: '最後更新' },
    docFooter: { prev: '上一頁', next: '下一頁' },
    darkModeSwitchLabel: '外觀',
    sidebarMenuLabel: '選單',
    returnToTopLabel: '回到頂端',
    footer: { message: '規則的單一真實來源是各技能檔與 AI-PROFILE.md；本站是整理後的說明書。' },
  },
})
