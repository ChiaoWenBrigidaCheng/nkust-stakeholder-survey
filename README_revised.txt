NKUST 重大永續議題調查 Version 2

一、本版內容
1. 25項重大永續議題均提供中英文名稱。
2. 互動關係人問卷：蒐集各議題關注程度，用於重大性矩陣Y軸及不同互動關係人比較。
3. 管理階層問卷：蒐集各議題對校務營運影響程度，用於重大性矩陣X軸。
4. 管理階層新增TCFD/IFRS S2模組：轉型風險、實體風險、氣候機會；各項分別評估發生/實現可能性與影響/效益程度。
5. 已移除Top 3排序。
6. Google Sheet使用工作表：
   - 互動關係人問卷_V2
   - 管理階層問卷_V2
7. stakeholder.html 已加入問卷開放/關閉控制，可於截止後停止填答，未來亦可重新開放使用。

二、主要檔案
1. index.html
   - 作為入口頁面。
   - 可自由修改版面、Banner、按鈕及其他首頁內容。
   - 問卷是否開放不由 index.html 控制。

2. stakeholder.html
   - 互動關係人正式問卷頁面。
   - 包含題目、資料送出、版本識別、防重複填答及問卷開放/關閉控制。
   - 問卷截止時，應於此檔案關閉填答。

3. management.html
   - 管理階層問卷頁面。
   - 包含重大永續議題及TCFD/IFRS S2相關題項。

4. styles.css
   - 控制各問卷頁面之版型、字體、表格與行動裝置顯示。

5. Code.gs
   - Google Apps Script後端程式。
   - 負責將問卷資料寫入Google Sheet。

三、互動關係人問卷開放/關閉

stakeholder.html 內設有：

const SURVEY_OPEN = true;

設定方式：
- true：開放填答
- false：關閉填答

當設定為 false 時：
- 不顯示正式問卷題目。
- 不顯示送出按鈕。
- 使用者進入原網址時會看到「本次問卷已截止」訊息。
- index.html 不需要同步修改。

重新開放時，只需將：

const SURVEY_OPEN = false;

改回：

const SURVEY_OPEN = true;

即可重新顯示問卷。

四、年度續用設定

若下一年度繼續使用相同問卷架構，建議至少更新以下設定：

1. 問卷標題年度
例如：
115年國立高雄科技大學重大永續議題調查
改為：
116年國立高雄科技大學重大永續議題調查

2. 問卷版本
目前例如：
const SURVEY_VERSION = '115_materiality_v2_2026';

下一年度應更新為新的版本名稱，例如：
const SURVEY_VERSION = '116_materiality_v1_2027';

3. 防重複填答識別碼
每一年度必須使用不同的 submitKey，避免曾填過前一年度問卷的使用者被誤判為已完成本年度問卷。

例如：
const submitKey = 'NKUST_Stakeholder_Survey_115_Submitted';

下一年度改為：
const submitKey = 'NKUST_Stakeholder_Survey_116_Submitted';

五、上線步驟

A. GitHub
1. 修改前先備份目前 repository 或下載現行版本。
2. 依實際需要上傳並覆蓋：
   - index.html
   - stakeholder.html
   - management.html
   - styles.css
3. Commit changes。
4. 等候 GitHub Pages 更新。
5. 分別使用電腦與手機測試。
6. 測試入口頁按鈕、問卷顯示、送出及截止狀態。

B. Apps Script
1. 開啟 Apps Script。
2. 若後端程式有修改，再更新 Code.gs。
3. 儲存。
4. Deploy → Manage deployments → Edit → New version → Deploy。
5. 原則上沿用原本 Web App URL。
6. 若未修改 Apps Script，僅調整 stakeholder.html 的 SURVEY_OPEN，通常不需重新部署 Apps Script。

C. Google Sheet
1. 不必另建新的 Google Sheet 檔案，除非未來另有資料管理需求。
2. 目前資料寫入：
   - 互動關係人問卷_V2
   - 管理階層問卷_V2
3. 舊版工作表不會因新版問卷而自動覆蓋。
4. 每次正式重新開放問卷前，建議各測試送出一筆，確認資料完整寫入。
5. 測試完成後，再視需要刪除測試資料。

六、分析用途
1. 重大性矩陣：
   - Y軸＝互動關係人各議題平均關注程度
   - X軸＝管理階層各議題平均營運影響程度

2. 互動關係人差異：
   - 依互動關係人類別分組計算25項議題平均值。
   - 可比較不同互動關係人主要關注議題。

3. TCFD矩陣：
   - X軸＝影響或效益程度平均值
   - Y軸＝發生或實現可能性平均值

七、建議維護原則
1. index.html 作為入口網站，可依需求持續重新設計。
2. 問卷是否可填答，統一由 stakeholder.html 控制。
3. 不建議透過刪除問卷頁面的方式停止收件，以利未來續用。
4. 每一年度應保留獨立的版本名稱及 submitKey。
5. 正式修改前建議保留前一版檔案，以便還原。
