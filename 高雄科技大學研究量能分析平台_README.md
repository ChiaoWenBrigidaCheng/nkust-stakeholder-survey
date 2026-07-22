# 高雄科技大學研究量能分析平台 v5

## 專案說明
本平台以單一 HTML 檔呈現高雄科技大學與標竿學校的研究量能資料，涵蓋 General 總體分析、THE 學科分析、QS 學科分析、SDGs 分析與指標說明。資料期間為 2018-2025 年，並參考 `114 產學研究量能研析 20260112.pdf` 的簡報分析架構，朝向未來可由網站直接產製簡報內容。網站發布後會優先讀取同目錄的 Excel 檔案；若 Excel 讀取失敗，才使用 `index.html` 內建的備份資料。

## 主要檔案
- `index.html`：唯一保留的主要互動式網頁與 GitHub Pages 發布檔；會透過 SheetJS 自動讀取同目錄 Excel。
- `高雄科技大學研究量能分析平台_v5_README.md`：專案說明與修改紀錄。
- `00 Raw data/`：新版主要資料來源資料夾；網站會優先讀取此資料夾中的正式資料檔。
- `研究量能統計 2018-2025.xlsx`：General/THE/QS 整理後資料來源；若未放入 `00 Raw data/`，網站會 fallback 讀取 repo 根目錄同名檔。
- `00 Raw data/THE/`、`00 Raw data/QS/`：THE/QS 學科分析 SciVal raw data 資料夾；網站會依固定檔名清單讀取各學科 raw Excel，並轉成圖表所需格式。
- `00 Raw data/SDG/`：SDGs 分析資料夾，包含六校與 Taiwan 全國基準的 `Publications by SDG` 檔案，以及多校 `Summary_SDG.xlsx`。
- `00 Raw data/Collaboration/`：合作分析資料夾，放置六校國際合著與產學合著 SciVal detailed Summary 匯出檔；北科大檔名目前使用 `NTUT北科`。
- `114 產學研究量能研析 20260112.pdf`：目前網站分析架構的參考簡報。
- `教1-2.專任教師數-以「校」統計.xlsx`：教研人數資料來源。

## 維護規範
- 每次更新網站功能、版面、資料來源或發布內容時，必須同步更新本 README 的相關說明與「修改紀錄」。

## 目前版面結構
### General 總體分析
- 頁首副標年份會依 General 資料中的最小與最大數字年度自動更新；例如資料改為 2019–2026 後，副標會自動顯示 2019–2026。
- 頁首保留「主要學校」與「年度」篩選。
- General 年度預設為目前資料中的最新數字年度，新增年度資料後會自動以最大年度作為預設；若資料中包含 `2018-2025` 這類整合期間，會保留在 General 年度篩選中。
- `主要學校年度摘要` 移至 General 的第一個區塊，桌面版摘要卡以一行五項指標呈現；每張摘要卡下方皆附該校同指標年度趨勢 sparkline，並會依目前選取年度截斷至該年，便於快速判讀長期方向。
- `趨勢指標` 選單移至 `當年度六校比較` 卡片內，並納入各項論文數、FWCI 與影響力指標；該卡片標題會依頁首年度篩選顯示為 `當年度六校比較（年度）`。
- 原本 General 最上方的 8 個 KPI 指標卡已移除，避免與年度摘要重複。
- 下方保留研究產出與研究影響力泡泡圖、當年度六校比較、六校年度趨勢、合作分析摘要、六校研究量能資料表；研究產出 × 研究影響力獨立為滿版一列，當年度六校比較與六校年度趨勢置於同一列。研究產出 × 研究影響力會加入白色半透明 x/y 參考線，標籤只顯示參考對象與數值，不額外標示 X/Y；參考線優先讀取 General 中 `Taiwan` / `台灣總體` / `台灣` 等台灣總體列，若該年度沒有台灣總體資料，則以六校有效資料平均作為參考。六校年度趨勢只使用數字年度作為 x 軸，不納入 `2018-2025` 整合期間，並會依選定指標與目前可見系列的資料範圍動態調整 y 軸、將目前篩選學校以較粗且發光的線條呈現，並加入六校平均值白色虛線；圖例中的目前篩選學校會加白色外框，六校平均圖例則使用透明填色，避免呈現成實心色塊。六校年度趨勢改用明確的「篩選資料」篩選器，不再依賴使用者自行發現圖例可點擊。篩選器可勾選六校與六校平均，並提供「全部顯示／全部隱藏」操作，方便只比較兩校或三校。當年度六校比較與研究產出泡泡圖也會用外框、點位或線寬凸顯目前篩選學校，便於一眼辨識焦點。六校研究量能資料表另有年度篩選器，與頁首年度篩選同步連動。合作分析摘要位於六校年度趨勢之後，可切換國際合著與產學合著。資料表包含國際合著、產學合著、高被引論文與高品質期刊論文相關影響力欄位。
- 合作分析摘要維持三類 Top 5 摘要型桑基圖：左側為目前篩選情境，流向中間 `Subject Area`、`Keyphrases`、`Collaboration Source` 三類，再流向右側各類 Top 5 項目；合作來源不納入 Author。由於三類指標單位不同，桑基圖採各類內相對寬度呈現，原始數值口徑可由節點、流帶或分類區塊進入 drill-down；另在桑基圖上方加入「查看 Subject Area／Keyphrases／Collaboration Source 明細」捷徑按鈕，避免 SVG 點擊命中不明顯。進入後原圖退場，整個桑基圖區塊切換為深入資料視圖，以資料卡呈現明細。Subject Area 使用橘色、Keyphrases 使用綠色、Collaboration Source 使用紅色；點擊 `Subject Area` 類別會顯示全部 subject area 清單，點擊個別 subject area 會顯示 Output 與 FWCI。桑基圖標題支援 hover 說明，補充指標與計算方式。合作 KPI 會跟隨 General 上方 `主要學校`、`年度` 與合作類型同步重畫；單一年份 KPI 優先使用 General 年度資料，Top 5 明細則使用目前 Collaboration detailed Summary 檔案內容。
- 合作分析摘要的四張 KPI 卡在桌面與平板均固定為兩欄兩列：Scholarly Output、FWCI 為第一列；Citation Count、Citations per Publication 為第二列。手機版則改為單欄，避免文字與數值擁擠。

### THE / QS 學科分析
- 保留主要學校、年度、學科領域與趨勢指標篩選。
- THE/QS 頁面的 `主要學校`、`年度`、`學科領域` 會顯示在頁面最上方同一列；`趨勢指標` 保留於 KPI 後、圖表前。
- THE/QS 趨勢圖與當年度比較圖會將目前篩選學校加粗或加上醒目外框，讓使用者可直接從圖表辨識目前焦點學校。
- THE/QS 的 `年度` 篩選與年度趨勢圖只顯示單一年份資料，會排除 `2018-2025` 這類整合期間選項。
- THE/QS 會優先讀取 `00 Raw data/THE/` 與 `00 Raw data/QS/` 中的 SciVal raw Excel，從檔名取得學科領域，並從 `Metric Name` 轉出 Scopus 發表數、FWCI、國際合著與產學合著相關指標；若 raw 資料夾讀不到，才使用 `研究量能統計 2018-2025.xlsx` 內的 THE/QS sheets。
- THE/QS 學校清單改為依各自資料集動態產生；QS 目前只保留 Excel QS 工作表中校名包含「科大」的 6 校資料。
- 手機版會將上述三個主篩選器改為單欄排列，避免固定三欄在窄螢幕產生水平溢位。


### SDGs 分析
- 依 PDF 第 3、4 章架構新增 `SDGs 分析` 分頁，使用 `SDG/` 資料夾內的六校與 Taiwan 全國基準 Publications by SDG 檔案，以及 `Summary_SDG.xlsx`。
- 頁面最上方提供 SDG 學校與 SDG 年度篩選；SDG項目下拉選單位於 SDGs KPI 後、重點卡片前方，列出所有 SDG 項目，預設為 SDG 1。
- 圖表包含 SDGs 整體 KPI、篩選年度校際 SDGs 發表、SDG 發表數排序、SDGs 發表數 × FWCI 影響力定位泡泡圖、目標學校最有潛力的 SDG 與 SDGs 指標資料表；`篩選年度校際 SDGs 發表` 僅比較六校，不納入 Taiwan；SDGs KPI 顯示 Scholarly Output、FWCI、Top 10% Cited、Top 10% Journals、International Collaboration 與 Citations per Publication；`SDGs目標分布`、`SDGs 重點期刊`、雷達圖、Top Keyphrases 與合作/來源摘要已移除。
- 目前多校資料包含 `Summary_SDG.xlsx` 與各校/Taiwan Publications by SDG；`目標學校最有潛力的 SDG` 直接使用 Publications by SDG 的 Scholarly Output、FWCI 與 Citation Count 計算綜合分數。Top Keyphrases 與合作/來源摘要需至 SciVal 手動取得，暫不放入 SDGs 分頁畫面。

## Excel 更新方式
- GitHub Pages 發布後，網站會自動讀取固定檔名的 Excel。新版資料統一優先放在 `00 Raw data/`。
- General/THE/QS 整理後資料建議放在 `00 Raw data/研究量能統計 2018-2025.xlsx`；若此檔不存在，網站會 fallback 讀取 repo 根目錄 `研究量能統計 2018-2025.xlsx`。
- THE/QS raw data 可分別放在 `00 Raw data/THE/`、`00 Raw data/QS/`；目前網站使用固定檔名清單讀取，若未來新增或更名學科檔案，需同步更新 `index.html` 的 `THE_RAW_FILES` / `QS_RAW_FILES`。
- SDGs 資料放在 `00 Raw data/SDG/` 子資料夾：`Summary_SDG.xlsx` 與六校/Taiwan Publications by SDG 檔案。高科大檔名為 `Publications_by_SDG_-_National_Kaohsiung_University_of_Science_and_Technology.xlsx`，Taiwan 檔名為 `Publications_by_SDG_-_Taiwan.xlsx`；Taiwan 不需另外上傳單獨的 SciVal Summary 匯出檔。
- 日後更新資料時，只要在 GitHub 上傳同名新版 Excel 覆蓋舊檔，網站重新整理後會自動讀取新版資料；`Last updated` 會依瀏覽器取得的 Excel/HTML 最後修改時間更新。
- 合作分析資料需放在 `00 Raw data/Collaboration/` 子資料夾並維持目前固定檔名；網站會讀取六校國際合著與產學合著 detailed Summary 的 Summary metrics、Keyphrase analysis 與 Top 5 合作/來源工作表。北科大可讀取 `Summary+for+NTUT北科_...` 檔名。
- `研究量能統計 2018-2025.xlsx` 需維持目前工作表名稱與欄位順序：`General`、`THE`、`QS`。
- SDGs 相關 Excel 需維持 SciVal 匯出格式與目前工作表名稱；目前網站以 `Summary_SDG.xlsx` 與各校/Taiwan Publications by SDG 更新 KPI、年度校際比較、SDG 目標分布與資料表。Top Keyphrases 與合作/來源摘要需至 SciVal 手動取得，暫不作為網站自動更新內容。
- `00 Raw data/General 2018-2025.xlsx`、`00 Raw data/FWCI_標竿學校國際合著_產學合著_高品質_高被引.xlsx` 可作為整理來源保存；目前 General 分頁仍以整理後的 `研究量能統計 2018-2025.xlsx` 為正式讀取檔，THE/QS 分頁則可直接讀取 raw folder。
- 若 Excel 暫時讀不到，網站會使用內建備份資料，避免頁面空白。
## 指標與缺值說明
- `缺值不視為 0` 的意思是：若某年度或某指標沒有資料，系統會顯示為缺值，不會把它當成 0 參與前後年度比較，以避免造成誤判。
- 目前畫面文字已調整為：`缺值會顯示為「目前缺值」，不會當作 0 計算`。
- 指標說明除了保留在 `指標說明` 分頁，也會自動套用到 KPI 標籤、摘要卡標籤與資料表欄位；滑鼠移到可辨識的指標文字上方時會顯示對應說明。

## 視覺調整
- 背景已改為深色研究漂浮字樣風格，文字改為全英文並自導覽按鈕下方開始散落，中央閱讀區保留更寬的乾淨走廊；研究治理、資料、專利、永續與 AI 相關字詞主要配置於左右側邊與外圍，並以中央遮罩降低穿越主要面板後方的文字干擾。背景字樣具備慢速漂浮、滑鼠視差、近距離跟隨、頁面捲動視差，游標碰觸文字時才會高亮；點到背景文字時可拖曳移動，僅避開按鈕、篩選器、表格、圖表與明細面板等真正互動元件。文字透明度已提高，且位置已縮回瀏覽器可視範圍內，讓背景在不干擾閱讀的前提下保有動態感。
- Last updated 標籤改為較小字級，並放在各面板或指標卡底部。
- 前景介面已從大面積白色面板調整為深色玻璃科技風格，包含導覽列、篩選器、KPI、圖表面板、資料表與摘要卡，並同步調整圖表座標/圖例色彩以維持可讀性。
- 主標題已移除陰影與 3D 疊影，改為乾淨清晰且更粗重有力的純文字標題。

## 修改紀錄
- 2026-07-22：移除 Collaboration Source 展開畫面中無實際內容支撐的「明細資料」預設字樣。當資料列僅為說明文字、未提供第二層欄位時，不再自動顯示「明細資料」，避免使用者誤以為仍有可繼續展開的資料；Institution、Country / Region、Author 與 Source 的既有內容維持不變。
- 2026-07-22：補充 Collaboration Source 展開內容的資料範圍說明。新增註記指出頁面係依目前篩選條件與 SciVal 匯出資料整理，各分類依 Total 排序；實際顯示項目依匯出資料內容而定，並不代表所有合作對象，同時標示資料來源為 Elsevier SciVal Collaboration Module。
- 2026-07-22：調整桑基圖配色為較沉穩的學術風格。Subject Area 改為深藍色、Keyphrases 改為深紅色、Collaboration Source 改為土黃色。同時降低流帶透明度、移除高彩度光暈與 screen 混色，並淡化節點描邊，使整體配色更融合、不刺眼。
- 2026-07-22：修正上一版未完全套用的主標題與背景樣式。主標題直接指定為實心白色超粗體，使用較接近排名網站的字型比例，並移除所有文字陰影、漸層裁切與濾鏡。頁面背景改為單一深藍色 #0B1825，同時移除 body 與 body:before 的 radial-gradient、linear-gradient 及網格漸層。
- 2026-07-22：改善合作研究結構資訊架構。移除合作類型篩選器旁原本顯示的「學校／合作類型／期間」資訊標籤，僅在桑基圖標題上方保留目前合作類型（國際合著或產學合著）供辨識。Collaboration Source 點擊後不再將 Institution、Country/Region、Author 與 Source 混合排序，改為四個獨立分類區塊，各分類內再依 Total 由高至低排序。
- 2026-07-22：調整首頁主標題與手機版操作。首頁主標題改為實心白色粗體字，取消漸層文字效果，並保留既有深色背景色系。手機版再次強制取消大型操作按鈕的 fixed/sticky 定位，按鈕改為跟隨內容正常捲動，避免遮擋畫面。
- 2026-07-22：精簡首頁左右兩側背景文字。背景關鍵字由原本約 40 個以上縮減為 14 個核心詞彙，並放大主要文字、增加留白與降低整體視覺密度。保留 Research、Impact、Citations、Analytics、Scopus、FWCI、Collaboration、Publications、Innovation、Benchmarking、Research Excellence、Institutional Research、Global Collaboration 與 Research Strategy。平板與手機版會再隱藏部分次要詞彙，避免小螢幕過度擁擠。
- 2026-07-21：將所有多校圖表的學校圖例統一改為可實際操作的多選篩選器。研究產出 × 研究影響力、THE 學科年度趨勢及 QS 學科年度趨勢均移除原生圖例；使用者可自由勾選或取消任意學校，連續操作時選單不會自動關閉，並可使用全部顯示或全部隱藏。圖表會即時更新，切換年度、指標或學科後也會保留篩選狀態。
- 2026-07-21：修正桑基圖三個中間分類的展開內容。Subject Area 現在保留主領域與 Subcategory，不再因只讀取第一欄而出現重複名稱或遺漏次領域；外層 Top 5 僅使用主領域，點擊後則顯示全部主領域與次領域。Keyphrases 取消原先 12/24 筆的程式截斷，改為讀取 Excel 中全部關鍵詞。Collaboration Source 加入 Authors，展開後顯示 Excel 可提供的 Institution、Country/Region、Author 與 Source 全部項目。
- 2026-07-21：調整「六校年度趨勢」學校篩選器。介面標示由「篩選資料」簡化為「篩選器」；勾選或取消單一學校時，選單不再自動關閉，使用者可連續自由勾選多所學校。圖表會即時更新，且不重新建立整個頁面。「全部顯示／全部隱藏」亦保留選單開啟狀態；手機版篩選清單增加可捲動高度。
- 2026-07-21：手機版改善操作體驗。將『回上一頁』按鈕由固定(sticky)改為隨內容捲動(static)，避免按鈕長時間遮擋畫面與最後幾筆資料；桌面版維持原本固定操作方式。
- 2026-07-21：將桑基圖 Collaboration Source 配色由黃色調整為綠色（#5DBB63），提高白色文字的可讀性，並與 Subject Area（藍色）及 Keyphrases（紫色）形成更清楚的視覺區隔。
- 2026-07-21：新增桑基圖連結線寬度計算說明；中間分類至右側 Top 5 的流帶改以原始指標值直接按比例配置，不再使用平方根轉換與較大的最低寬度。Subject Area 依 Output、Keyphrases 依 Relevance、Collaboration Source 依 Total；右側節點同步顯示指標名稱與數值，以便核對流帶寬度。左側至三分類維持等寬，代表不同分析路徑而非可比較數值。
- 2026-07-21：調整手機版細部面板操作區，縮小「回上一頁」按鈕的高度、內距、字級與陰影，並壓縮底部操作區高度，避免大按鈕遮擋手機畫面與清單內容。
- 2026-07-21：修正桑基圖完整清單無法捲動的問題。細部面板改採 border-box 與內縮滿版高度，中間清單強制獨立垂直捲動，並顯示清楚的捲軸；「回上一頁」保留在面板底部且不隨清單捲動。
- 2026-07-21：確認桑基圖外層僅呈現各分類 Top 5；點擊中間分類區塊後顯示該分類全部項目。細部資料面板改為中間內容可捲動、底部「回上一頁」固定可見，避免完整清單與返回按鈕被頁尾遮住。
- 2026-07-21：背景漂浮文字再減少約三分之一；桑基圖細部資料的返回按鈕移至資訊下方並改名為「回上一頁」；移除合作研究結構標題與 SVG 節點的滑鼠操作說明；將 Subject Area、Keyphrases、Collaboration Source 的排序／計算依據直接置於中間分類區塊；點入分類後改為顯示完整項目清單；流帶寬度改採實際數值的平方根比例配置，並提高不透明度與邊界對比。
- 2026-07-21：合作研究結構細部畫面的返回控制改為單一箭頭圖示；最後一欄目的地節點（如 Engineering、Biochar、Viet Nam）改為滑鼠移入顯示資訊，不再點擊開啟細部頁面。
- 2026-07-21：減少背景漂浮文字數量，降低視覺干擾；修正「六校年度趨勢」滑鼠提示功能，改為依年度垂直範圍顯示所有目前開啟系列的數值，不需精準停留於資料點上。Tooltip 樣式同步套用平台深色底與 cyan 邊框，無資料系列顯示「無資料」。
- 2026-07-21：修正合作研究結構圖的點擊機制，改採 SVG 事件委派，節點與流帶均可直接點擊開啟細部資料；同時將 Subject Area、Keyphrases、Collaboration Source 配色改為網站主色 cyan、purple、gold，細部畫面亦同步套用平台深色玻璃質感。
- 2026-07-21：所有會隨年度篩選更新的主要圖表與資料區塊，標題同步加入目前年度。General 包含主要學校年度摘要、研究產出 × 研究影響力、當年度六校比較及六校研究量能資料表；THE／QS 包含當年度比較及學科資料表。六校年度趨勢維持不加單一年度，因其本身呈現跨年度序列。
- 2026-07-21：六校年度趨勢篩選器將「篩選資料」移入控制器原「顯示系列」位置；全部系列開啟時摘要顯示「全部顯示」，部分系列開啟時顯示已選系列數。合作分析標題由「合作研究結構桑基圖」簡化為「合作研究結構」，刪除圖表上方三個明細捷徑按鈕；使用者改由滑鼠移至圖內節點或流帶並直接點擊，以開啟細部資料視圖。
- 2026-07-21：修正背景漂浮文字在頁面向下捲動後逐漸消失的問題；文字雲改為固定於視窗，scroll 僅產生小幅循環視差，並新增 20 組研究量能、資料治理、合作、創新與永續相關英文詞彙，持續分布於左右外圍。
- 六校年度趨勢由隱藏圖例點擊改為明確的「篩選資料」下拉篩選器，可勾選六校與六校平均，並提供全部顯示／全部隱藏。
- 合作分析桑基圖新增三個 drill-down 明細捷徑按鈕，並擴大節點透明點擊區，改善無法點入明細的問題。
- 背景研究文字重新配置到左右側邊，中央增加閱讀遮罩，避免背景字樣干擾主要指標與說明文字。
- General 研究產出 × 研究影響力參考線標籤移除 X/Y 字樣，改為直接標示參考對象與數值；六校年度趨勢圖例改為可點擊顯示/隱藏六校與六校平均，並依目前可見系列重新縮放 Y 軸。
- 修正背景漂浮文字拖曳命中邏輯，改為只避開真正互動元件，讓更多可見背景字樣都能拖曳；研究產出 × 研究影響力 x/y 參考線改為白色半透明，六校年度趨勢的六校平均線與圖例改為乾淨白色虛線樣式。
- 合作分析摘要桑基圖 drill-down 改為整個圖區切換成深入資料視圖，並讓分類區塊、節點與流帶皆可點入明細，強化「點進去看資料」的互動感。
- 頁首副標年份改為依 General 資料自動產生，新增年度資料後會自動更新；背景漂浮文字新增可拖曳位移互動。
- 強化合作分析摘要桑基圖 drill-down：點擊節點後原圖會明顯退場，深入資料視圖改為大面積中央畫面並以資料卡呈現明細。
- General 研究產出 × 研究影響力新增 x/y 參考線，優先使用台灣總體資料，缺值時以六校平均作為 fallback；六校年度趨勢新增六校平均值虛線。
- 合作分析摘要桑基圖點擊互動改為 drill-down 進場動畫：點擊節點或流帶時，原圖淡化並在中央放大顯示明細面板，提供「返回桑基圖」按鈕與 Escape 返回。
- General 版面整理：研究產出 × 研究影響力改為單獨滿版一列；當年度六校比較與六校年度趨勢改為同列；趨勢指標移入當年度六校比較卡片內，並讓標題依年度篩選顯示年度。
- 整理 `index.html`，刪除已不再使用的合作 Top 5 卡片樣式與舊版桑基圖說明樣式，並修正桑基圖標題說明為點擊節點/流帶查看明細。
- 背景漂浮英文字樣取消自動閃亮，改為游標碰觸文字範圍時才發亮，並保留原本的漂浮與滑鼠跟隨動態。
- 圖表 legend 新增目前篩選學校白色外框，讓六校年度趨勢等多校比較圖能從圖例直接辨識焦點學校。
- 加粗並放大頁首主標題，讓「高雄科技大學研究量能分析平台」更有視覺重量；背景漂浮英文字樣提高透明度與高亮強度。
- 合作分析摘要桑基圖取消節點文字黑色描邊；互動由 hover tooltip 改為點擊節點/流帶後在圖內開啟資訊面板，可放大閱讀 Subject Area、Keyphrases 與 Collaboration Source 明細。
- 合作分析摘要桑基圖調整配色為 Subject Area 橘色、Keyphrases 綠色、Collaboration Source 紅色；Subject Area 類別可顯示完整 subject area 清單，個別 subject area 顯示 Output 與 FWCI。
- 背景由大型文字雲進一步改為散落漂浮字樣，縮小字級、降低透明度並加入偶發微亮動畫。
- 重新分散背景文字雲的位置，將關鍵字拉開到上方、中段與下方不同區域，降低局部集中感並保留可視範圍內顯示。
- 合作分析摘要桑基圖改為 `篩選情境 → 資料類別 → Top 5 項目` 的三層 flow，並在桑基圖區塊新增可 hover 的標題說明，解釋類別內相對流量、資料口徑與 tooltip 指標。
- 將背景文字雲的左右與底部定位縮回瀏覽器可視範圍，並降低滑鼠跟隨位移幅度，避免大型關鍵字被視窗邊界裁切。
- 移除合作分析摘要桑基圖上方的相對權重說明句；六校年度趨勢保留篩選學校線條加粗與發光，但取消節點大小、顏色與外框凸顯；桑基圖 hover 資訊補上 Subcategory、Output、FWCI、Keyphrases Relevance 與合作來源 Total。
- 移除合作分析摘要標題下方的資料讀取說明、桑基圖主節點副標與節點發光效果；修正產學合著年度 KPI 判斷，讓國際合著與產學合著都能依合作類型切換正確欄位。
- 刪除合作分析摘要桑基圖下方的 Top 5 資訊卡，將 Output、FWCI、Relevance、Total 等原始數值改置入桑基圖節點與流帶的滑鼠提示。
- General `六校年度趨勢` 移除選取學校的白色外框輔助線，改以較粗線條與 canvas 發光效果凸顯目前篩選學校。
- 移除 General `六校研究量能資料表` 標題下方的說明文字，保留年度篩選器與表格本體。
- 合作分析摘要新增桑基圖口徑說明，明確標示流帶寬度為各類 Top 5 內相對權重、不可跨類直接比較。
- 移除桑基圖主節點的 normalized `Total` 顯示，避免將版面權重誤解為原始統計總和。
- 修正 General `主要學校年度摘要` 的 sparkline：單一年份篩選時只畫到目前選取年度，避免卡片數值已切換但趨勢線仍固定顯示完整期間。
- 合作分析摘要更新為跟隨 General 年度篩選：單一年份 KPI 讀取 General 年度欄位，整合期間則使用 Collaboration detailed Summary；畫面標籤不再固定為 2018-2025。
- 桑基圖重新納入 `Top 5 學科領域`、`Top 5 Keyphrases` 與 `Top 5 合作來源` 三類，並以各類內相對流量避免不同單位造成 Keyphrases 過小不可讀。
- General `六校年度趨勢` 的目前篩選學校改以較粗線條與發光效果凸顯，避免白色外框造成線條過厚。
- 文字雲再次調整分布，將大型與中型關鍵字往左右外圍及下方錯開，讓背景更分散、減少集中成團的視覺重量。
- 文字雲整體下移至導覽按鈕下方，並將偏上方的關鍵字再往中下段分散，降低頭重腳輕感。
- 放大導覽按鈕、篩選器、區塊標題、KPI 與表格文字，提升投影與一般瀏覽器閱讀性。
- 合作分析摘要桑基圖改為合併 Institution、Country/Region、Source 後只取整體 Top 5 來源項目，移除 Author 類型，減少右側節點數與圖面擁擠。
- 桑基圖節點改為較深色塊、放大節點文字與底部留白，避免白字不清楚或最下方節點被裁切。
- 各頁圖表新增目前篩選學校視覺強調：General、THE/QS、SDGs 校際比較的 line、bar 與 bubble 會用較粗線條、外框或較大點位凸顯選定學校。
- 合作分析摘要移除圖上方 `合作來源桑基圖` 字樣，放大 `合作類型` 篩選器；桑基圖改為更寬、更高的 flow 版面，並將節點文字置入顏色區塊內，降低長文字重疊與擁擠。
- 背景文字雲新增頁面捲動視差位移；文字雲背景層上下延伸並隨 scroll 平滑移動，避免固定在視窗同一位置。
- 背景文字雲新增 `datasets`、`patents`、`technology transfer`、`sustainability`、`AI models`、`open access` 等研究相關字詞，並重新分散至左右與下方外圍以增加層次。
- General `六校年度趨勢` 新增動態 y 軸範圍，會依目前指標的六校年度資料自動縮放並保留上下留白，避免數值接近時折線黏在一起。
- 合作來源桑基圖加大桌面與窄螢幕顯示高度，拉開來源類型與 Top 5 來源項目的左右距離、群組間距與項目最低高度，改善標籤與流帶擁擠問題。
- 合作分析摘要的 `Top 5 Keyphrases` 卡片改為只顯示 Keyphrase 與 Relevance，不再顯示 Growth。
- 背景文字雲滑鼠互動改為近距離跟隨效果：滑鼠靠近文字時，文字會朝游標方向微幅移動，滑鼠離開視窗後回到原本漂浮位置。
- 背景文字雲新增平滑滑鼠視差互動與微幅漂浮效果，滑鼠移動時不同層級文字會以不同幅度跟隨，並保留 `prefers-reduced-motion` 使用者設定。
- 合作分析摘要調整 Sankey 呈現：`高科大｜產學合著｜2018-2025` 這類情境文字移至合作類型篩選器旁；圖內移除最左側學校節點，改由 `來源類型 → Top 5 來源項目` 呈現合作流向。
- General 年度篩選保留 `2018-2025` 整合期間資料，但六校年度趨勢與摘要卡 sparkline 改為只使用數字年度；六校研究量能資料表新增年度篩選器，並與頁首年度篩選雙向連動。
- General `主要學校年度摘要` 每張指標卡新增該校年度趨勢 sparkline；`六校年度趨勢` 將目前篩選學校線條加粗，以凸顯目標學校在校際趨勢中的位置。
- SDGs 分析中的 `SDGs 發表數比較` bar chart 補上 y 軸標題 `發表數`，讓 Scholarly Output 數值口徑更清楚。
- 網頁頁尾改為 `POWERED BY` 與 `校務大數據分析組` 兩行呈現，符合發布頁面的單位署名需求。
- THE/QS 年度篩選改為依各自資料集產生單一年份清單，排除 `2018-2025` 整合期間；THE/QS 年度趨勢圖 x 軸同步改用各自數字年份。
- 合作分析摘要改為符合桑基圖邏輯的合作來源 flow：使用 `Total` 作為唯一流量口徑，以封閉流帶呈現 `主要學校/合作類型 → Institution/Country/Author/Source → Top 5 來源項目`；學科領域改以 Scholarly Output Top 5、Keyphrases 改以 Relevance Top 5 摘要卡呈現。
- 調整合作來源桑基圖互動：取消不自然的放大動畫，改為滑鼠移入來源類型時高亮該流向、淡化其他流向。
- 指標說明新增 Scopus 每師平均、Scholarly Output、Citation Count、Citations per Publication、International Collaboration、Top 10% Cited 與 Top 10% Journals，並加入 hover tooltip，讓使用者在 KPI、摘要卡與表格欄位上可直接查看定義。
- 將合作分析正式資料移至 `00 Raw data/Collaboration/`，並支援北科大 `NTUT北科` 檔名；外層舊 `SDG/` 與 `Collaboration/` 資料夾可移除。
- THE/QS 學科分析新增 `00 Raw data/THE/` 與 `00 Raw data/QS/` raw folder parser，可從各學科 SciVal raw Excel 自動轉出網站圖表資料；主 Excel 的 THE/QS sheets 轉為 fallback。
- 網站資料讀取路徑改為優先使用 `00 Raw data/`，並保留 repo 根目錄、`SDG/`、`Collaboration/` 舊路徑 fallback；主資料檔仍需使用整理後的 `研究量能統計 2018-2025.xlsx` 格式。
- SDGs「篩選年度校際 SDGs 發表」bar chart 改為只比較六校，不納入 Taiwan 全國基準。
- General 總體分析年度預設改為依 `研究量能統計 2018-2025.xlsx` 讀入資料自動選取最大年度，避免新增年度後仍停在舊年度。
- 移除不需置入網站的 Taiwan 單獨 SciVal Summary 匯出檔；SDGs Taiwan 基準僅保留 `Summary_SDG.xlsx` 中 Taiwan rows 與 `Publications_by_SDG_-_Taiwan.xlsx`。
- SDGs 分析 KPI 新增 `Citations per Publication`，放置於 `International Collaboration` 旁邊，資料來源同為 `Summary_SDG.xlsx`。
- General「研究產出 × 研究影響力」與「六校年度趨勢」交換位置；六校年度趨勢改為滿版寬度 line chart，提升年度變化閱讀性。
- 將 General「研究產出 × 研究影響力」泡泡圖移至「合作分析摘要」之前，讓研究表現定位先於合作細節呈現。
- SDGs 分析新增 Taiwan 全國基準，會讀取 `Summary_SDG.xlsx` 中 Taiwan rows 與 `SDG/Publications_by_SDG_-_Taiwan.xlsx`，並納入 SDG 學校篩選與年度校際比較。
- 修正 THE／QS 手機版三個主篩選器的欄位覆寫規則，窄螢幕改為單欄排列，避免水平溢位。
- 重新檢視網頁版各分頁的指標區塊分配；合作分析摘要改用專用雙欄 KPI 網格，四項指標固定呈現為 2 × 2，避免桌面版出現 3 + 1 的不均衡排列。
- 修正合作分析摘要的合作類型切換事件，切換國際合著／產學合著時會立即重畫摘要；合作分析摘要移至 General「六校年度趨勢」之後。
- 將 SDG項目 下拉選單移至 SDGs KPI 後、Scholarly Output／FWCI／Citation Count 重點卡片上方。
- 新增維護規範：日後每次網站更新皆須同步更新本 README 的相關說明與修改紀錄。
- 強化合作分析摘要篩選：合作類型下拉選單改為直接重畫合作摘要，避免切換國際合著/產學合著時畫面未更新。
- 修正預設與篩選：主要學校預設高科大，年度與 SDG 年度預設最新年度；合作分析摘要的合作類型篩選正常初始化；SDG 篩選標籤改為 `SDG項目` 並預設 SDG 1。
- 將學校代表色調深並降低亮度，使 General、THE、QS 與 SDGs 校際比較圖表更貼合深色科技感背景。
- SDG 重點卡片的排名說明改為明確標示「在該校各 SDG 目標中」依 Scholarly Output 或 FWCI 排名，避免誤解為校際排名。
- 合作分析摘要新增學科領域分布，依 Scholarly Output 由多到少上下排序；SDG detailed Summary 的 subject area 資料也同步改為由多到少排序。
- General 總體分析新增「合作分析摘要」，自動讀取 `Collaboration/` 內六校國際合著與產學合著 SciVal detailed Summary，呈現 KPI、學科領域分布、Top Keyphrases 與合作/來源摘要；學科領域分布依 Scholarly Output 由多到少排列。
- SDGs 分析將「篩選年度 SDGs 發表表現」改名為「篩選年度校際 SDGs 發表」；「SDGs 學科領域分布」改為使用 Publications by SDG 的「SDGs目標分布」doughnut chart，並先移除 Top Keyphrases 與合作/來源摘要面板。
- 依 研究量能統計 2018-2025.xlsx 的 Scource 工作表更新指標說明：國際合著改為 international co-authorship，產學合著明確標示 corporate sector，並補充高被引/高品質期刊 FWCI 定義。
### 2026-07-16
- SDGs 分析移除上方 Total Citation Count KPI 與雷達圖，改以篩選年度六校 SDGs Scholarly Output bar chart 呈現；高科大 detailed subject/keyphrase/partner 備份資料恢復顯示，其他學校若無 detailed Summary 匯出檔會顯示缺資料提示。
- 背景文字雲加入 `notranslate`、`translate="no"` 與 `lang="en"` 標記，避免同事瀏覽器自動翻譯時將背景英文關鍵字翻成中文。
- 釐清 SDGs KPI 口徑：Scholarly Output、FWCI、Top 10% 與 International Collaboration 來自 `Summary_SDG.xlsx`；上方 Total Citation Count KPI 已移除，避免與 Publications by SDG 累計引用數混淆。
- SDGs 分析調整為學校、年度、SDG項目 篩選置頂；SDG項目 改列所有 SDG 項目，KPI 可依 `Summary_SDG.xlsx` 切換 Overall/2018-2025 年度，SDG 圖表改用聯合國官方色並移除 `SDGs 重點期刊` 圖表。
- 放大整體介面字級，包含導覽按鈕、篩選器、KPI、摘要卡、表格、說明文字與 Chart.js 圖例/座標/tooltip 文字，提升一般瀏覽器閱讀性。
- 將 General、THE、QS 圖表中的 line/bar/bubble 視覺色彩調整為較柔和的馬卡龍色系；SDGs 圖表維持聯合國 SDG 目標官方色。
- SDGs 分析改為讀取 `SDG/` 子資料夾的多校資料，新增 `SDG 學校` 篩選，並補入 NKUST Publications by SDG 正式檔名；舊的根目錄 NKUST SDG 檔將不再作為網站讀取來源。
- 網站改為優先讀取同目錄 Excel 檔案，支援 GitHub 上傳同名新版 Excel 後自動更新圖表與資料表；.gitignore 同步改為允許正式 Excel 檔上傳。
- SDGs 分析新增 SDG 目標官方色系，並移除頁首主標題陰影。
- `主要學校年度摘要` 桌面版改為一行五項指標；General `趨勢指標` 補上國際/產學合著論文數、FWCI、影響力，以及高被引/高品質論文數與 FWCI。
- 文字雲垂直位置下移，改為從篩選器高度附近開始分布；General 頁的 `主要學校` 與 `年度` 主控恢復兩欄置中，THE/QS 則維持三欄主控。
- THE/QS 的 `學科領域` 篩選改與 `主要學校`、`年度` 放在最上方同一列，讓主控篩選更集中。
- 文字雲背景改為避開中央標題、按鈕與內容區，關鍵字全數改為英文，並細修玻璃面板、按鈕陰影與背景格線以提升整體質感。
- 背景由漂浮工程/幾何物件改為研究文字雲風格，移除原本 SVG 研究物件底圖，改用關鍵字大小層級呈現研究主題。
- 背景新增更多漂浮幾何圖形與研究工作物件，包含菱形框、軌道、長條圖、筆電、論文頁與筆。
- 導覽列 3D 按鈕加大尺寸，提升一般瀏覽器版面的辨識度。
- THE/QS 上方六個 KPI 指標卡改為桌面版 3 欄排列，形成三個一組、兩排顯示。
- 調整頁首主標題 3D 陰影與發光強度，讓「高雄科技大學研究量能分析平台」文字更清晰銳利。
- 刪除原本的中文命名 HTML 檔，專案改為僅保留 `index.html` 一份作為維護與發布檔。
- 背景幾何圖形強化，新增漂浮三角線框、節點網絡與斜向資料平面。
- THE/QS 學科分析頁將 `主要學校`、`年度`、`學科領域` 移至頁面最上層同一列，`趨勢指標` 保留於圖表前方。
- 導覽列取消整條背景帶，改為四個 3D 立體按鈕；頁首標題加入 3D 立體字效果。
- 依前景白色面板突兀問題，將導覽列、篩選器、KPI、圖表面板、資料表與摘要卡調整為深色玻璃科技風格，並同步調整圖表座標/圖例色彩以維持可讀性。
- THE/QS 學科分析篩選器改為顯示在各自頁面 KPI 後、圖表前，讓篩選器緊接相關圖表。
- `Last updated` 改為依瀏覽器取得的 HTML 檔案最後修改時間自動顯示，不再手動固定日期。
- 背景物件改為多個分離透明 PNG，分散在背景並加入緩慢漂浮動畫，呈現無重力空間感。`船舶` 與 `模具齒輪` 已重新拉開位置，並加入半透明 3D 幾何環、方塊與資料格線作為背景層。
- 指標說明移除「資料取得方式：參考教學影片。」文字。
- 背景改用 AI 生成的透明 PNG 3D 物件圖，納入工科、海洋、商管、機械與模具元素。
- 六校研究量能資料表新增國際合著論文影響力、產學合著論文影響力、高被引論文FWCI 與高品質期刊論文FWCI 欄位。
- 強化深色背景中的研究物件辨識度，加入較明顯的顯微鏡、燒瓶/試管與 DNA/分子圖形。
- 依發布前視覺調整需求，將背景改為較深色的 3D 研究物件與資料平台風格。
- 發布前再次調整背景，改為更低調、正式的研究資料平台視覺。

### 2026-07-15
- 將 General 的 `主要學校年度摘要` 移至頁面最前方。
- 移除 General 頁面頂端 8 個 KPI 指標卡。
- 將 `Last updated` 改為小型底部標籤。
- 將 `缺值不視為 0` 改寫為更清楚的說明文字。
- 將背景改為 3D 專業研究資料風格。
- 將 General 的 `趨勢指標` 選單移至 `主要學校年度摘要` 後方；THE/QS 仍保留上方趨勢指標選單。
- 依使用者更新後的 Excel `QS` 工作表重新匯入 QS 學科分析資料，僅保留校名包含「科大」的 210 筆資料。
- 建立並確認發布用 `index.html`，內容與主 HTML 檔一致。
- 初始化本機 Git repository，並加入 `.gitignore` 排除 Excel 原始資料與暫存檔，準備使用 GitHub Pages 發布。
- 修正 THE/QS 學科分析的圖表與資料表學校清單邏輯，改為依 THE/QS 各自資料集顯示，而不是固定使用 General 六校清單。

## 發布建議
此專案是靜態 HTML，可使用 GitHub Pages 或其他靜態網站平台發布。目前僅保留發布用 `index.html`，避免維護兩份 HTML 造成版本混淆。

可用的發布方式包含：
- GitHub Pages
- Netlify / Vercel / Cloudflare Pages
- 自有伺服器或 NAS
- 區網內以本機 Web server 方式分享

若使用 GitHub Pages，將 `index.html` 放在 repo 根目錄後，於 repository 的 Settings > Pages 啟用 main branch / root 目錄部署即可。


## 背景文字顯示調整
- 背景文字固定於瀏覽器視窗，因此向下捲動至 General、THE、QS、SDGs 或資料表下方時仍會持續顯示。
- Scroll 僅產生約 ±18 px 的循環視差，不再持續將整個文字雲向上推離畫面。
- 新增 20 組背景詞彙，包括 research excellence、institutional research、academic impact、citation network、industry partnership、global collaboration、research governance、data intelligence、research strategy、knowledge transfer、innovation ecosystem 與 sustainable research。
- 新增文字仍優先配置於左右外圍；中央保留較深遮罩，避免影響主要指標、圖表與文字閱讀。

- 六校年度趨勢控制區名稱統一改為「篩選資料」。


## 本次互動調整
- 六校年度趨勢控制器左側標籤統一為「篩選資料」。
- 預設七個系列均開啟時，下拉控制器顯示「全部顯示」，不再顯示「已顯示 7/7 個系列」。
- 合作分析圖表標題顯示為「合作研究結構」。
- 移除 Subject Area、Keyphrases 與 Collaboration Source 三個圖外明細按鈕。
- 使用者將滑鼠移至圖內節點或流帶時，游標顯示為可點擊狀態，並提示「點擊查看細部資料」；點擊後直接切換至細部資料視圖。


## 動態年度標題
以下標題會依目前年度篩選自動更新：

- 主要學校年度摘要（年度）
- 研究產出 × 研究影響力（年度）
- 當年度六校比較（年度）
- 六校研究量能資料表（年度）
- THE 當年度（年度）比較
- THE 學科資料表（年度）
- QS 當年度（年度）比較
- QS 學科資料表（年度）

「六校年度趨勢」呈現多年度序列，因此不加單一年度。


## 桑基圖互動與配色修正
- 使用 SVG 事件委派處理點擊，避免文字、透明節點區域或圖層順序阻擋事件。
- 可點擊的目的地節點與流帶均支援滑鼠及鍵盤 Enter／Space 操作。
- 點擊後於原圖區切換至細部資料畫面，按「返回桑基圖」回到上一層。
- Subject Area：平台 cyan `#62d6ef`
- Keyphrases：平台 purple `#a894ff`
- Collaboration Source：平台 gold `#f3c969`
- 起始情境節點使用平台深藍 `#315b78`


## 六校年度趨勢 Tooltip 修正
- 滑鼠移至任一年度的垂直範圍，即可顯示該年度所有目前開啟系列的數值。
- 不再要求游標精準停留在折線資料點上。
- Tooltip 標題顯示「年度」，內容列出各校及六校平均的數值。
- 若特定系列在該年度無資料，顯示「無資料」。
- Tooltip 採平台深色背景、cyan 邊框與白色文字。
- 圖表游標改為十字游標，方便辨識目前查看的位置。

## 背景漂浮文字調整
- 減少背景漂浮文字數量，避免干擾主要指標、圖表與文字閱讀。
- 保留少數代表性研究關鍵字，維持背景層次感。


## 合作研究結構互動調整
- 細部資料畫面的「返回桑基圖」文字按鈕改為圓形返回箭頭圖示「←」。
- 返回圖示保留滑鼠提示與無障礙標籤，點擊後回到合作研究結構圖。
- 最後一欄目的地節點，例如 Engineering、Biochar、Viet Nam，改採滑鼠移入顯示資訊。
- Tooltip 會依節點顯示 Output、FWCI、Relevance 或 Total 等細部內容。
- 最後一欄不再以點擊方式開啟細部頁面；中間分類節點及流帶仍可點擊查看細節。


## 合作研究結構第二次介面修正
- 背景漂浮文字較上一版再減少約三分之一。
- 細部資料面板的返回控制移至所有資訊下方，按鈕文字為「回上一頁」。
- 移除「合作研究結構」標題原有的滑鼠說明，以及節點／流帶的原生點擊提示。
- 中間分類區塊直接顯示計算依據：
  - Subject Area：Top 5，依 Output 排序。
  - Keyphrases：Top 5，依 Relevance 排序。
  - Collaboration Source：Top 5，依 Total 排序。
- 點擊中間分類區塊後顯示分類清單：
  - Subject Area 顯示全部 Subject Area、Output 與 FWCI。
  - Keyphrases 顯示全部 Keyphrases 與 Relevance。
  - Collaboration Source 將 Institution、Country / Region、Author、Source 分類後，各自依 Total 排序並僅顯示 Top 5。
- 流帶寬度以各分類內實際數值的平方根比例配置，避免極端值使小項目完全不可見，同時保留大小差異。
- 提高流帶不透明度、加入細邊界及 hover 對比，使流向寬度更容易辨識。


## Top 5 與完整清單顯示邏輯
- 桑基圖最外層仍只顯示各分類排名前五名：
  - Subject Area：依 Output 排名前五名。
  - Keyphrases：依 Relevance 排名前五名。
  - Collaboration Source：依 Total 排名前五名。
- 點擊 Subject Area 或 Keyphrases 後顯示該分類的完整項目；點擊 Collaboration Source 後，各分類僅顯示依 Total 排序的 Top 5。
- 細部資料視窗採固定標題與底部操作區，中間完整清單可獨立上下捲動。
- 「回上一頁」固定顯示於細部資訊下方，不會再被網站頁尾遮住。


## 細部清單捲動修正
- 外層桑基圖仍只呈現各分類 Top 5。
- 點擊中間分類區塊後，完整項目清單於面板中間區域獨立捲動。
- 修正面板使用 `height: 100%` 加上 padding 後超出容器而遭裁切的問題。
- 細部面板改用 `box-sizing: border-box`，並在四周保留安全間距。
- 捲軸固定顯示於完整清單右側，方便辨識仍有下方資料。
- 「回上一頁」固定保留於面板底部，不會被網站頁尾遮住。


## 手機版按鈕調整
- 手機版「回上一頁」改為小型膠囊按鈕。
- 縮小按鈕字級、上下內距與最小寬度。
- 移除手機版按鈕的大面積陰影。
- 壓縮底部操作區高度，增加可閱讀的清單空間。
- 420px 以下螢幕再進一步縮小面板內距與按鈕尺寸。


## 桑基圖流帶寬度計算
- 左側情境節點至三個中間分類的流帶維持等寬，僅表示 Subject Area、Keyphrases 與 Collaboration Source 三條分析路徑；三者使用不同指標單位，因此不直接比較寬度。
- 中間分類至右側 Top 5 的流帶依分類內的實際數值按比例配置：
  - Subject Area：使用 Output。
  - Keyphrases：使用 Relevance。
  - Collaboration Source：使用 Total。
- 計算方式為：最低可視寬度 + 剩餘可用高度 ×（該項數值 ÷ 該分類 Top 5 數值總和）。
- 最低可視寬度僅設為 7px，主要差異由原始數值比例決定，因此流帶大小會比前一版更明顯。
- 右側 Top 5 節點同步顯示指標名稱與數值，方便使用者核對線寬。

## 最終視覺調整
- Collaboration Source 節點、流帶及相關視覺元素由黃色改為綠色。
- 提高白色文字在節點上的對比度與辨識性。
- 三大分類配色統一：
  - Subject Area：藍色
  - Keyphrases：紫色
  - Collaboration Source：綠色

## 手機版操作優化（最終）
- 桌面版維持固定返回按鈕，方便快速返回。
- 手機版取消固定返回按鈕，改為位於內容底部並隨頁面一起捲動。
- 避免按鈕遮擋清單內容，提高小螢幕閱讀體驗。

## 六校年度趨勢篩選器
- 標示統一改為「篩選器」。
- 支援多選，使用者可連續勾選或取消多所學校。
- 每次勾選後，篩選器保持開啟，不會自動收合。
- 圖表依選取狀態即時更新，不必重新載入整個頁面。
- 「全部顯示」與「全部隱藏」操作後，選單同樣維持開啟。
- 手機版清單若超出畫面高度，可在篩選器內上下捲動。

## 桑基圖展開內容完整性
- **Subject Area**
  - 外層 Top 5：僅比較主領域（Subcategory 為 `-` 的資料）。
  - 點擊後：顯示 Excel 中所有主領域與所有 Subcategory。
  - 次領域名稱以「主領域 — Subcategory」呈現，避免多筆資料只顯示相同主領域名稱。
- **Keyphrases**
  - 取消原先只讀取前 12 或前 24 筆的限制。
  - 點擊後顯示 Excel `Keyphrase analysis` 工作表中的全部有效項目。
- **Collaboration Source**
  - 納入 Institution、Country/Region、Author 與 Source 四類資料。
  - 點擊後顯示 Excel 可提供的全部項目，並依 Total 由高至低排序。
  - SciVal 原始工作表名稱為 `Top 5 ...`，因此 Institution、Country/Region、Author 與 Source 各類最多仍以 Excel 實際匯出的項目為準。

## 全站學校篩選器
下列多校圖表皆改用可操作的多選篩選器：

- 六校年度趨勢
- 研究產出 × 研究影響力
- THE 學科年度趨勢
- QS 學科年度趨勢

篩選器功能：

- 勾選學校即可顯示該校資料。
- 取消勾選即可隱藏該校資料。
- 可自由多選，不會只允許單選。
- 每次勾選後選單保持開啟，可連續調整多所學校。
- 提供「全部顯示」及「全部隱藏」。
- 圖表依選取結果即時更新。
- 切換年度、指標或學科時保留學校篩選狀態。

## 首頁背景文字精簡
- 背景關鍵字縮減為 14 個核心詞彙。
- 最大主視覺文字：
  - Research
  - Impact
- 次層文字：
  - Citations
  - Analytics
  - Scopus
  - FWCI
- 補充文字：
  - Collaboration
  - Publications
  - Innovation
  - Benchmarking
  - Research Excellence
  - Institutional Research
  - Global Collaboration
  - Research Strategy
- 放大主要字級並增加左右留白，使背景更簡潔。
- 降低整體背景文字透明度，避免干擾標題、導覽列與資料卡片。
- 平板與手機版會自動隱藏部分較長的背景詞彙，以維持版面清楚。

## 標題與手機版操作最終調整
- 主標題改為實心白色粗體。
- 取消標題漸層與文字裁切效果。
- 背景維持原本深色系，不新增漸層。
- 手機版大型按鈕取消 fixed 與 sticky 定位。
- 按鈕改為位於內容流程中，會隨頁面正常捲動。
- 避免按鈕長時間停留在畫面上方或下方而遮擋內容。

## Collaboration Source 分類呈現
- 移除合作類型篩選器旁的「學校／合作類型／期間」資訊標籤。
- 桑基圖標題區僅顯示目前合作類型：
  - 國際合著
  - 產學合著
- 點擊 `Collaboration Source` 後，資料分為四個獨立區塊：
  - Institution
  - Country / Region
  - Author
  - Source
- 四類資料不再混合比較。
- 每一分類僅在分類內依 `Total` 由高至低排序，並只列出 Top 5。
- 電腦版分類內容採多欄卡片排列；手機版自動改為單欄，方便捲動閱讀。

## 主標題與背景修正
- 主標題改為實心白色超粗體。
- 使用接近排名網站的粗體中文標題比例。
- 移除標題文字漸層、陰影、濾鏡與裁切效果。
- 全站背景統一為單一深藍色 `#0B1825`。
- 移除原本的 radial gradient、linear gradient 與背景網格漸層。
- 手機版與桌面版皆使用相同的純色背景。

## 桑基圖學術風配色
- Subject Area：深藍 `#496A86`
- Keyphrases：深紅 `#7A4148`
- Collaboration Source：土黃 `#A18443`
- 流帶改用較低透明度，避免色塊過度搶眼。
- 移除原本的高亮光暈與 screen 混色效果。
- 節點描邊改為低對比白色，Hover 時僅稍微提高亮度。
- 文字改為偏暖白色，與深藍、深紅及土黃色更協調。

## Collaboration Source 資料範圍說明
- 展開頁面明確標示各分類僅列出 Top 5。
- 顯示內容依目前篩選條件與 SciVal 匯出資料整理。
- Institution、Country / Region、Author、Source 各分類依 `Total` 由高至低排序，並僅顯示前五名。
- 說明文字改為：「以下內容依據目前篩選條件及 SciVal 匯出資料整理，各分類依 Total 由高至低排序，僅列出 Top 5。」
- 資料來源標示為 `Elsevier SciVal Collaboration Module`。


## 2026-07-22 更新：Collaboration Source 僅列 Top 5
- 更新展開頁面說明文字，明確標示各分類僅列出 Top 5。
- Institution、Country / Region、Author、Source 各分類先依 `Total` 由高至低排序，再限制顯示前五筆。
- 避免畫面說明與實際呈現筆數不一致。
