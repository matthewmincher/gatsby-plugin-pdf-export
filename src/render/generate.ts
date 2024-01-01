import puppeteer, { PDFOptions, FrameAddScriptTagOptions } from 'puppeteer';
import path from 'path';
import * as fs from 'fs';

export const pdf = async (
  inUrlPath: string,
  outDir: string,
  outName: string,
  puppeteerOptions: {
    pdf?: PDFOptions;
    style?: FrameAddScriptTagOptions;
  },
) => {
  const workingDirectory = process.cwd();
  const browser = await puppeteer.launch({
    headless: 'new',
  });
  try {
    const page = await browser.newPage();
    const inPath = path.join(
      workingDirectory,
      'public',
      inUrlPath,
      'index.html',
    );

    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, {
        recursive: true,
      });
    }

    const outPath = path.join(outDir, outName);
    const pageContent = fs.readFileSync(inPath, 'utf8');
    await page.setContent(pageContent);

    if (puppeteerOptions.style) {
      await page.addStyleTag(puppeteerOptions.style);
    }

    await page.pdf({
      format: 'A4',
      path: outPath,
      ...puppeteerOptions.pdf,
    });

    await page.close();
  } finally {
    await browser.close();
  }
};
