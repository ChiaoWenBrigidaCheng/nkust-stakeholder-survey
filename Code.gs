const SHEET_ID = "1FQTCajSdk3wMjrK0RDmGtteU9nWkpRFwmsd15_eGXkU";
const TOPICS = [
  ["e1_carbon","E1_碳管理及淨零碳排 (Carbon Management and Net-zero Emissions)"],
  ["e2_air","E2_環境空氣品質監控 (Environmental Air Quality Monitoring)"],
  ["e3_energy","E3_能源管理及多元化 (Energy Management and Diversification)"],
  ["e4_water","E4_水資源管理 (Water Resources Management)"],
  ["e5_waste","E5_廢棄物管理 (Waste Management)"],
  ["e6_climate","E6_氣候承諾 (Climate Commitment)"],
  ["e7_ecology","E7_校園生態與環境保護 (Campus Ecology and Environmental Protection)"],
  ["s1_hr","S1_人員招募與薪酬福利 (Recruitment, Compensation and Benefits)"],
  ["s2_gender","S2_性別平等及人權 (Gender Equality and Human Rights)"],
  ["s3_osh","S3_職業安全衛生管理 (Occupational Safety and Health Management)"],
  ["s4_teaching","S4_教學品保與評鑑 (Teaching Quality Assurance and Evaluation)"],
  ["s5_student","S5_學生助學與輔導 (Student Financial Aid and Counseling)"],
  ["s6_career","S6_職涯輔導與校友流向 (Career Guidance and Alumni Tracking)"],
  ["s7_research","S7_研究、創新與產學合作 (Research, Innovation and Industry Collaboration)"],
  ["s8_product","S8_產品設計與生命週期管理 (Product Design and Life-cycle Management)"],
  ["s9_community","S9_社區參與及在地關懷 (Community Engagement and Local Care)"],
  ["s10_usr","S10_大學社會責任 (University Social Responsibility)"],
  ["s11_global","S11_國際鏈結及合作 (International Engagement and Collaboration)"],
  ["g1_finance","G1_財務治理與績效 (Financial Governance and Performance)"],
  ["g2_supply","G2_採購供應鏈管理 (Procurement and Supply-chain Management)"],
  ["g3_risk","G3_內部控制與風險管理 (Internal Control and Risk Management)"],
  ["g4_strategy","G4_永續發展策略 (Sustainability Strategy)"],
  ["g5_compliance","G5_法規遵循 (Regulatory Compliance)"],
  ["g6_ethics","G6_學術與廉政倫理 (Academic Integrity and Ethics)"],
  ["g7_info","G7_資訊安全 (Information Security)"]
];
const CLIMATE_ITEMS = [
  ["t1_energy_cost","T1_能源價格與營運成本上升 (Rising Energy Prices and Operating Costs)"],
  ["t2_carbon_cost","T2_碳費、碳定價與排放管理成本 (Carbon Pricing and Emissions Management Costs)"],
  ["t3_regulation","T3_氣候法規與永續揭露要求增加 (Increasing Climate Regulations and Sustainability Disclosure Requirements)"],
  ["t4_lowcarbon_upgrade","T4_低碳設備、建築及能源系統更新成本 (Costs of Upgrading Low-carbon Equipment, Buildings and Energy Systems)"],
  ["t5_reputation","T5_永續表現不足造成聲譽與招生競爭風險 (Reputational and Enrollment Competition Risks from Insufficient Sustainability Performance)"],
  ["p1_typhoon","P1_颱風及強風 (Typhoons and Strong Winds)"],
  ["p2_flood","P2_極端降雨與校園淹水 (Extreme Rainfall and Campus Flooding)"],
  ["p3_heat","P3_極端高溫與熱浪 (Extreme Heat and Heatwaves)"],
  ["p4_water_shortage","P4_缺水與供水中斷 (Water Scarcity and Supply Disruptions)"],
  ["p5_facility_damage","P5_氣候災害造成校舍、實驗室及設備損害 (Damage to Buildings, Laboratories and Equipment from Climate Hazards)"],
  ["o1_efficiency","O1_節能與能源效率提升降低營運成本 (Reducing Operating Costs through Energy Efficiency)"],
  ["o2_renewable","O2_再生能源與智慧能源管理 (Renewable Energy and Smart Energy Management)"],
  ["o3_research_teaching","O3_氣候與永續研究、教學及人才培育 (Climate and Sustainability Research, Teaching and Talent Development)"],
  ["o4_green_collab","O4_綠色技術與產學合作 (Green Technology and Industry Collaboration)"],
  ["o5_reputation","O5_提升永續聲譽、評比與招生吸引力 (Enhanced Sustainability Reputation, Rankings and Enrollment Appeal)"]
];
function doPost(e){const ss=SpreadsheetApp.openById(SHEET_ID);const data=JSON.parse(e.postData.contents);if(data.mode==="management_v2")writeManagementV2(ss,data);else writeStakeholderV2(ss,data);return ContentService.createTextOutput(JSON.stringify({status:"ok"})).setMimeType(ContentService.MimeType.JSON);}
function writeStakeholderV2(ss,data){const sheet=getSheet(ss,"互動關係人問卷_V2");const headers=["填答時間","問卷版本","互動關係人類別",...TOPICS.map(t=>t[1]),"是否參加抽獎","抽獎電子郵件","開放意見"];ensureHeaders(sheet,headers);sheet.appendRow([data.submitted_at_taipei||"",data.survey_version||"",data.stakeholder_type||"",...TOPICS.map(t=>data["concern_"+t[0]]||""),data.lottery||"",data.lottery_email||"",data.open_comment||""]);}
function writeManagementV2(ss,data){const sheet=getSheet(ss,"管理階層問卷_V2");const climateHeaders=[];CLIMATE_ITEMS.forEach(t=>{climateHeaders.push(t[1]+"_發生或實現可能性");climateHeaders.push(t[1]+"_影響或效益程度");});const headers=["填答時間","問卷版本",...TOPICS.map(t=>t[1]),...climateHeaders,"開放意見"];ensureHeaders(sheet,headers);const climateValues=[];CLIMATE_ITEMS.forEach(t=>{climateValues.push(data["climate_likelihood_"+t[0]]||"");climateValues.push(data["climate_impact_"+t[0]]||"");});sheet.appendRow([data.submitted_at_taipei||"",data.survey_version||"",...TOPICS.map(t=>data["impact_"+t[0]]||""),...climateValues,data.open_comment||""]);}
function getSheet(ss,name){let sheet=ss.getSheetByName(name);if(!sheet)sheet=ss.insertSheet(name);return sheet;}
function ensureHeaders(sheet,headers){if(sheet.getLastRow()===0){sheet.appendRow(headers);sheet.setFrozenRows(1);return;}const current=sheet.getRange(1,1,1,Math.max(sheet.getLastColumn(),headers.length)).getValues()[0];const same=headers.every((h,i)=>current[i]===h);if(!same)throw new Error("工作表欄位與 V2 問卷不一致。請改用新的空白工作表。");}