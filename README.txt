NKUST 重大永續議題調查 Version 2

本版內容
1. 25項重大永續議題均新增英文名稱。
2. 互動關係人問卷：保留各議題關注程度，用於重大性矩陣Y軸及不同互動關係人比較。
3. 管理階層問卷：保留各議題對校務營運影響程度，用於重大性矩陣X軸。
4. 管理階層新增TCFD／IFRS S2模組：轉型風險、實體風險、氣候機會；每項評估發生／實現可能性與影響／效益程度。
5. 已移除Top 3排序。
6. Google Sheet使用新的工作表：互動關係人問卷_V2、管理階層問卷_V2。

上線步驟
A. GitHub
1. 備份目前repository。
2. 上傳並覆蓋 stakeholder.html、management.html、styles.css。
3. Commit changes。
4. 等候GitHub Pages更新後，用電腦及手機測試。

B. Apps Script
1. 開啟Apps Script。
2. 將Code.gs全部替換為本壓縮檔的Code.gs。
3. 儲存。
4. Deploy → Manage deployments → Edit → New version → Deploy。
5. 沿用原本Web App URL。

C. Google Sheet
1. 不必建立新的Google Sheet檔案。
2. 程式會自動建立「互動關係人問卷_V2」及「管理階層問卷_V2」。
3. 舊版工作表不會被覆蓋。
4. 各測試送出一筆，確認資料完整寫入。

分析用途
- 重大性矩陣：Y軸＝互動關係人各議題平均關注程度；X軸＝管理階層各議題平均營運影響程度。
- 互動關係人差異：依互動關係人類別分組計算25項議題平均值。
- TCFD矩陣：X軸＝影響或效益程度平均值；Y軸＝發生或實現可能性平均值。
