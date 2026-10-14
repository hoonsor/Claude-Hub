# Git 常用指令

平常由 `#開工`／`#更新`／`#收工` 自動處理。下面是手動查狀態或救急時用。

## 查狀態

```powershell
git status -sb                      # 目前分支與變更
git log --oneline -10               # 最近 10 筆提交
git fetch --all --prune; git status # 跟遠端比
git branch -a                       # 所有分支
git worktree list                   # 所有 worktree
git tag -l "pre-merge-*"            # 合併前的保險 tag
```

## 同步

```powershell
git pull --rebase                   # 拉遠端並把本機提交放在後面
git rebase --abort                  # rebase 衝突時放棄，回到原狀
git push                            # 推目前分支
git push -u origin <分支>           # 第一次推新分支
```

## 回滾（安全的）

```powershell
git revert <commit>                 # 產生一個反向提交（已推送也安全）
git reset --hard <snapshot-commit>  # 只用在「尚未推送」的提交
git reset --hard pre-merge-v1.2.3   # 合併失敗退回（尚未 push 時）
git checkout <commit> -- <檔案>     # 單一檔案還原到某版本
```

::: danger 禁止
`git push --force`、對已推送提交 `reset --hard`、`git clean -fdx`、任何改寫已推送歷史的操作。
:::

## Commit 訊息（Conventional Commits）

```text
feat: 新增匯出 Excel
fix: 修正日期格式
docs: 更新交接紀錄
chore(wip): snapshot before refactor
wip: 收工，欄寬調整寫到一半
```

## Worktree

```powershell
git worktree add ..\<專案>_worktrees\<分支> -b <分支>
git worktree remove ..\<專案>_worktrees\<分支>
```
