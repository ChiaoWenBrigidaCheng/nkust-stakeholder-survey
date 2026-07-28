# 管理階層問卷 Landing Page 使用說明

## 本版重點

本版為「單一 HTML 自含版」。

使用者提供的 PNG 已直接嵌入 HTML，因此：

- 不需要另外上傳 `management-banner-final.png`
- 不會誤讀 GitHub 中的舊版圖片
- 不會再有第二組 HTML QR Code 疊加
- QR Code 位置完全依照本次提供的 PNG
- 不需要 QR Code JavaScript 或外部 CDN

---

## 需要上傳的檔案

只需將以下檔案放在與問卷相同的資料夾：

- `management-landing.html`
- `management.html`

不需要另外上傳任何 Banner 圖片。

---

## 本次處理方式

### 1. 直接嵌入本次提供的 PNG

PNG 已轉為 Base64 並寫入 HTML 的 `<img>` 標籤。

因此 HTML 不會再讀取：

```text
management-banner-final.png
```

也不會因為 GitHub repository 留有舊圖片而顯示錯誤版本。

### 2. 不再建立 HTML QR Code

本版完全沒有以下內容：

- `.qr-cover`
- `.qr-card`
- `#qr-code`
- `qrcode.js`
- 動態 QR Code JavaScript

頁面只顯示 PNG 中原本的 QR Code。

### 3. 隱藏 PNG 內建的下方開始填答圖像

頁面顯示範圍裁切至白色資訊卡底部，因此 PNG 最下方內建的：

```text
管理階層問卷
開始填答
```

圖像不會顯示。

### 4. 保留下方可點擊按鈕

頁面底部保留真正可點擊的：

```text
開始填答
```

按鈕連到：

```text
management.html
```

---

## GitHub 上傳步驟

1. 將下載的 HTML 改名為：

```text
management-landing.html
```

2. 上傳並覆蓋 GitHub 中原本的 `management-landing.html`。

3. 確認同一資料夾內已有：

```text
management.html
```

4. 舊的 `management-banner-final.png` 可以保留，也可以刪除；本版 HTML 不會讀取它。

5. GitHub Desktop 的 Summary 可填：

```text
改用自含式管理階層 Landing Page
```

6. 點選：

```text
Commit to main
```

7. 再點選：

```text
Push origin
```

8. 等候 GitHub Pages 更新。

9. 使用無痕視窗或按 `Ctrl + F5` 強制重新載入，避免瀏覽器快取舊 HTML。

---

## 上線後檢查

請確認：

- 頁面只顯示一組 QR Code。
- QR Code 位於 PNG 原本的右側位置。
- 不再有第二個 QR Code 疊在左上方。
- 原始 NKUST Banner 與校園圖片完整保留。
- 圖片最下方內建按鈕不顯示。
- HTML 下方保留一個可點擊的「開始填答」按鈕。
- 點擊按鈕可進入 `management.html`。

---

## 快取問題

若 GitHub 已更新，但畫面仍顯示舊 QR Code，請使用：

```text
Ctrl + F5
```

或以無痕視窗重新開啟頁面。

這通常表示瀏覽器仍在使用舊版 HTML，而不是新版檔案有重疊問題。
