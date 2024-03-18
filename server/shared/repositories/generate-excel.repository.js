const Excel = require('exceljs');
const path = require('path');
const fs = require('fs');

exports.generateExcel = async (data, column, sheetName) => {
  console.log('generating excel');
  let workbook = new Excel.Workbook();
  workbook.created = new Date();
  workbook.modified = new Date();
  // workbook.creator = req.user.firstName + req.user.lastName;
  let worksheet = workbook.addWorksheet(sheetName);
  workbook.alignment = {
    vertical: 'middle',
    horizontal: 'left',
    wrapText: true,
  };
  worksheet.columns = column;
  worksheet.addRows(data);
  let fileName = `file-${Date.now()}.xlsx`;
  let filePath = path.resolve(`${__dirname}/../../assets/excel/${fileName}`);
  await workbook.xlsx.writeFile(filePath);
  return filePath;
};
