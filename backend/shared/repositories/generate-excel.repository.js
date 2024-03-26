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

exports.generateCsv = async (data, column, sheetName, res) => {
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
  //   worksheet.columns = [
  //     { header: 'Id', key: 'id', width: 10 },
  //     { header: 'Name', key: 'name', width: 32 },
  //     { header: 'D.O.B.', key: 'DOB', width: 10 }
  // ];

  // worksheet.addRow({id: 1, name: 'John Doe', dob: new Date(1970,1,1)});
  // worksheet.addRow({id: 2, name: 'Jane Doe', dob: new Date(1965,1,7)});
  worksheet.columns = column;
  for (const item of data) {
    worksheet.addRows(item);
  }
  let fileName = `file-${Date.now()}.xlsx`;
  let filePath = path.resolve(`${__dirname}/../../assets/excel/${fileName}`);
  await workbook.xlsx.writeFile(filePath);

  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader("Content-Disposition", "attachment; filename=" + fileName);

  await workbook.xlsx.write(res);

  res.end();
};
