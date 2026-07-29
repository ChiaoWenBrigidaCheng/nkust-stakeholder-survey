# 管理階層問卷 Landing Page－QR Code 位置修正版

## 修正內容

本版不再以完整白色卡片覆蓋 Banner 右側區域，而是只覆蓋原 PNG 中 QR Code 的方形範圍。

因此：

- QR Code 會對準既有白色方框。
- 下方綠色「掃描 QR Code／填寫問卷」區塊保留原 PNG。
- 「管理階層問卷」及 `management.html` 標示保留原 PNG。
- 不會再發生整張 QR 卡片向左、向上或超出外框。
- QR Code 仍會自動連結同一資料夾內的 `management.html`。

## 必要檔案

```text
management-landing.html
management-banner-management.png
management.html
```

## 上傳方式

1. 將 `management-landing-position-fixed.html` 改名為 `management-landing.html`。
2. 覆蓋 GitHub repository 中原本的 Landing Page。
3. 確認 `management-banner-management.png` 與 `management.html` 位於同一資料夾。
4. Commit 並 Push。
5. 等候 GitHub Pages 更新後，以 `Ctrl + F5` 或無痕視窗重新測試。

## 測試提醒

QR Code 必須在 GitHub Pages 正式網址上測試。若直接以 `file:///` 開啟本機 HTML，QR Code 會指向本機檔案路徑，手機無法使用。
