# Openpdf is a NPM PDF Generator

This package allows you to generate PDF files from React components. Follow the steps below to use this NPM package

## Installation

1. Install the package from NPM using the following command:

   ```
   npm install openpdf
   ```

2. Import the package into your project:

   ```javascript
   const pdfGenerator = require('openpdf');
   ```

3. Ensure that you have Puppeteer and fs (File System) installed as dependencies in your project. If not, you can install them by running the following command:

   ```
   npm install puppeteer fs
   ```

## Usage

1. Create a React component that you want to convert to a PDF. See in the example below:

   ```javascript
   import React from 'react';
   
   function MyComponent() {
     return (
       <div>
         <h1>Hey, PDF!</h1>
         <p>This is an example PDF generated using the openpdf package</p>
       </div>
     );
   }
   
   export default MyComponent;
   ```

2. Call the `generatePDF` function provided by the package, passing your React component as an argument:

   ```javascript
   const generatedPDFPath = await pdfGenerator.generatePDF(<MyComponent />);
   ```

   The `generatePDF` function returns the file path of the generated PDF.

3. The PDF will be generated with the default format of 'A4'. If you want a specific format, you can pass an optional parameter `format` to the `generatePDF` function:

   ```javascript
   const generatedPDFPath = await pdfGenerator.generatePDF(<MyComponent />, 'Letter');
   ```

4. Once the PDF is generated, you can use the generated file path (`generatedPDFPath`) to access the PDF file in your application.

## Example

Here's an example of how to use the package to generate a PDF from a React component:

```javascript
const pdfGenerator = require('openpdf');
const MyComponent = require('./MyComponent');

async function generatePDF() {
  try {
    const generatedPDFPath = await pdfGenerator.generatePDF(<MyComponent />);
    console.log(`PDF generated successfully at: ${generatedPDFPath}`);
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
}

generatePDF();
```

Remember to replace `./MyComponent` with the correct path to your React component.

## License

This package is released under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and modify it as you like.

## Credits

This package utilizes the power of [Puppeteer](https://github.com/puppeteer/puppeteer) for browser automation and [ReactDOMServer](https://reactjs.org/docs/react-dom-server.html) for rendering React components to HTML. We highly appreciate the developers of these libraries
