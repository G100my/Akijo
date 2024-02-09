const weekDayRow = 3; // 星期列的行位置
const weekDayColStart = 2; // 星期列的起始列（對應於'B'列）
const weekDayColEnd = 32; // 星期列的結束列（對應於'AF'列）
const positionStatusCol = 36; // 職位狀態列（對應於'AJ'列）
const positionStatusRowStart = 4; // 職位狀態起始行
const positionStatusRowEnd = 7; // 職位狀態結束行
const dataRangeStartCol = 'B'; // 數據驗證應用的起始列
const dataRangeEndCol = 'AF'; // 數據驗證應用的結束列
const fn = 'AG'; // 正職平日
const fh = 'AH'; // 正職假日
const pn = 'AI'; // PT平日
const ph = 'AJ'; // PT假日
const rs = 15; // 範圍起始行
const re = 25; // 範圍結束行

function onEdit(e) {
  const sheet = e.source.getActiveSheet();
  const editedRange = e.range;
  const editedRow = editedRange.getRow();
  const editedCol = editedRange.getColumn();

  // 檢查是否更改班別表
  const isEditingTimeRange = editedCol >= 33 && editedCol <= 36 && editedRow >= rs && editedRow <= re

  console.log(editedRow, editedCol, isEditingTimeRange)
  // 檢測編輯是否發生在星期行或職位狀態列
  if (editedRow === weekDayRow || editedCol === positionStatusCol || isEditingTimeRange) {
    applyValidationsForAll(sheet);
  }
}

function applyValidationsForAll(sheet) {
  // 初始化地址集合
  let addresses = {
    fn: [], // 正職平日
    fh: [], // 正職假日
    pn: [], // PT平日
    ph: []  // PT假日
  };

  // 獲取星期和職位狀態的資料
  const weekDays = sheet.getRange(`${dataRangeStartCol}${weekDayRow}:${dataRangeEndCol}${weekDayRow}`).getValues()[0];
  const positionStatuses = sheet.getRange(`${columnToLetter(positionStatusCol)}${positionStatusRowStart}:${columnToLetter(positionStatusCol)}${positionStatusRowEnd}`).getValues().flat();

  // 遍歷資料範圍內的每個單元格
  for (let row = positionStatusRowStart; row <= positionStatusRowEnd; row++) {
    for (let col = weekDayColStart; col <= weekDayColEnd; col++) {
      const weekDayIndex = col - weekDayColStart;
      const positionStatusIndex = row - positionStatusRowStart;
      const isHoliday = ["六", "日"].includes(weekDays[weekDayIndex]);
      const positionStatus = positionStatuses[positionStatusIndex];
      const cellAddress = `${columnToLetter(col)}${row}`;

      // 根據星期和職位狀態分類單元格地址
      if (positionStatus === "正職") {
        addresses[isHoliday ? 'fh' : 'fn'].push(cellAddress);
      } else if (positionStatus === "ＰＴ") {
        addresses[isHoliday ? 'ph' : 'pn'].push(cellAddress);
      }
    }
  }

  Logger.log(addresses)

  // 為每個分類的地址集合應用資料驗證規則
  Object.keys(addresses).forEach(key => {
    if (addresses[key].length > 0) {
      const rangeList = sheet.getRangeList(addresses[key]);
      
      const validationRule = getValidationRuleByKey(key);
      rangeList.getRanges().forEach(range => {
        range.setDataValidation(validationRule)
      });
    }
  });
}

function getValidationRuleByKey(key) {
  // 使用先前定義的常數來指定資料驗證規則的範圍
  let range;
  switch (key) {
    case 'fn': range = `${fn}${rs}:${fn}${re}`; break;
    case 'fh': range = `${fh}${rs}:${fh}${re}`; break;
    case 'pn': range = `${pn}${rs}:${pn}${re}`; break;
    case 'ph': range = `${ph}${rs}:${ph}${re}`; break;
  }
  return SpreadsheetApp.newDataValidation().requireValueInRange(SpreadsheetApp.getActiveSpreadsheet().getRange(range), false).build();
}

// 輔助函式：將列號轉換為列字母
function columnToLetter(column) {
  let temp, letter = '';
  while (column > 0) {
    temp = (column - 1) % 26;
    letter = String.fromCharCode(temp + 65) + letter;
    column = (column - temp - 1) / 26;
  }
  return letter;
}
