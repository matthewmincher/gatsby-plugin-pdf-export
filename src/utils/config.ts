import { PluginOptions } from 'gatsby';
import { PDFOptions, FrameAddScriptTagOptions } from 'puppeteer';

export interface GatsbyPdfExportPluginOptions extends PluginOptions {
  outputPath?: string;
  outputPrefix?: string;
  targetPaths?: string[];
  pdfOptions?: PDFOptions;
  styleOptions?: FrameAddScriptTagOptions;
}
