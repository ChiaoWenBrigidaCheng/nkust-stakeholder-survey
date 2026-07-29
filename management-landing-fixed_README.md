# 管理階層問卷 Landing Page 使用說明

## 必要檔案

請將下列三個檔案放在 GitHub Pages repository 的同一資料夾：

```text
management-landing.html
management-banner-management.png
management.html
```

## 本版 QR Code 的運作方式

本版不再使用 PNG 圖片內原本無法掃描的 QR Code。

HTML 會在網頁開啟時，自動取得與 Landing Page 同一資料夾內的：

```text
management.html
```

完整網址，再產生真正可掃描的 QR Code。

例如 Landing Page 位於：

```text
https://帳號.github.io/專案名稱/management-landing.html
```

QR Code 會自動連到：

```text
https://帳號.github.io/專案名稱/management.html
```

因此不需要手動寫入 GitHub Pages 的完整網址。

## QR Code 的其他功能

- QR Code 可直接用手機掃描。
- QR Code 整張卡片本身也可以點擊。
- 下方「開始填答」按鈕同樣連到 `management.html`。
- 若 QR Code 程式庫暫時無法載入，使用者仍可點擊 QR Code 卡片或下方按鈕進入問卷。

## GitHub 上傳步驟

1. 將下載的 HTML 命名為：

```text
management-landing.html
```

2. 上傳：

```text
management-banner-management.png
```

3. 確認同一資料夾內已有：

```text
management.html
```

4. 在 GitHub Desktop 的 Summary 可填：

```text
修正管理階層問卷 QR Code 連結
```

5. 點選 `Commit to main`。
6. 點選 `Push origin`。
7. 等候 GitHub Pages 更新。
8. 使用 `Ctrl + F5` 或無痕視窗重新載入頁面。

## 測試方式

1. 先以電腦開啟正式 GitHub Pages Landing Page。
2. 使用手機相機掃描 QR Code。
3. 確認網址結尾為：

```text
/management.html
```

4. 確認可正常進入管理階層問卷。
5. 再測試點擊下方「開始填答」按鈕。

## 注意事項

請勿直接在電腦中以：

```text
file:///...
```

方式開啟 Landing Page 後測試 QR Code。

因為此時產生的 QR Code 會是電腦本機檔案路徑，手機無法開啟。必須在 GitHub Pages 正式網址上測試。

本版使用的 QR Code 程式庫：

```text
https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js
```
