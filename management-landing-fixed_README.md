# 管理階層問卷 Landing Page

## 必要檔案

請將下列三個檔案放在 GitHub Pages repository 的同一資料夾：

```text
management-landing.html
management-banner-management-final-v5.png
management.html
```

## 本次最終處理方式

1. QR Code 已直接寫入 PNG，不再由 HTML 疊加。
2. QR Code 編碼的正式網址為：

```text
https://chiaowenbrigidacheng.github.io/nkust-stakeholder-survey/management.html
```

3. HTML 不使用：
   - JavaScript
   - 動態 QR Code
   - 絕對定位
   - 覆蓋圖層
   - Base64 圖片
4. QR Code 會隨整張 PNG 等比例縮放，不會再偏移。
5. 整張 Banner 可點擊並進入 `management.html`。
6. 下方保留獨立的「開始填答」按鈕。

## GitHub 上傳步驟

1. 將下載的 HTML 改名為：

```text
management-landing.html
```

2. 上傳：

```text
management-banner-management-final-v5.png
```

3. 確認同一資料夾內已有：

```text
management.html
```

4. Commit 並 Push origin。
5. 等候 GitHub Pages 更新。
6. 使用無痕視窗或 `Ctrl + F5` 測試。

## 檔案路徑

HTML 目前指定：

```html
src="management-banner-management-final-v5.png"
```

若更改 PNG 檔名，必須同步修改 HTML 的 `src`。

## 測試項目

- Banner 正常顯示。
- QR Code 位於原本白色框內。
- QR Code 沒有重疊或偏移。
- 手機掃描後開啟：
  `https://chiaowenbrigidacheng.github.io/nkust-stakeholder-survey/management.html`
- 點擊整張 Banner 可進入 `management.html`。
- 點擊下方「開始填答」可進入 `management.html`。
