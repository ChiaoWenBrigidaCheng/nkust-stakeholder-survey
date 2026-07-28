# 管理階層問卷 Landing Page

## 必要檔案

請將以下三個檔案放在 GitHub Pages repository 的同一資料夾：

```text
management-landing.html
management-banner-management-final-v2.png
management.html
```

## 本版修正

1. 正確 QR Code 已直接放入 PNG 圖檔。
2. 原本重疊的 QR Code 已從 PNG 清除。
3. PNG 最下方內建的開始填答圖像已直接裁掉。
4. HTML 不使用 Base64 圖片。
5. HTML 不使用動態 QR Code。
6. HTML 不使用絕對定位或覆蓋區塊。
7. 頁面最下方保留一個可點擊的「開始填答」按鈕。
8. 按鈕連結至 `management.html`。

## GitHub 上傳

1. 將 `management-landing-fixed.html` 改名為：

```text
management-landing.html
```

2. 上傳：

```text
management-banner-management-final-v2.png
```

3. 確認同一資料夾已有：

```text
management.html
```

4. Commit 後 Push origin。
5. 等候 GitHub Pages 更新。
6. 使用 `Ctrl + F5` 或無痕視窗重新載入。

## 檢查項目

- HTML 可正常開啟。
- Banner 圖片正常顯示。
- 右側只出現一組 QR Code。
- QR Code 沒有重疊或偏移。
- Banner 下方沒有重複的開始填答圖像。
- 最下方按鈕可進入 `management.html`。

## 圖片檔名

HTML 目前指定：

```html
src="management-banner-management-final-v2.png"
```

若更改圖片檔名，必須同步修改 HTML 的 `src`。
