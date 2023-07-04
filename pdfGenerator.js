const puppeteer = require('puppeteer');
const fs = require('fs');

async function generatePDF(component) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    const html = ReactDOMServer.renderToString(component);
    const tempHTMLFilePath = 'temp.html';
    fs.writeFileSync(tempHTMLFilePath, html);
    
  
    await page.goto(`file://${tempHTMLFilePath}`, { waitUntil: 'networkidle0' });
    const pdfFilePath = 'output.pdf';
    await page.pdf({ path: pdfFilePath, format: 'A4' });
    
    await browser.close();
    
  
    fs.unlinkSync(tempHTMLFilePath);
    
    return pdfFilePath;
  }

  
  module.exports = {
    generatePDF
  };
  