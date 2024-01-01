import { GatsbyNode } from 'gatsby';
import { GatsbyPdfExportPluginOptions } from './utils/config';
import { compact } from 'lodash';
import { pdf } from './render/generate';
import { buildPdfFileName } from './utils/names';
import path from 'path';

export const onPostBuild: GatsbyNode['onPostBuild'] = async (
  args,
  options: GatsbyPdfExportPluginOptions,
) => {
  const workingDirectory = process.cwd();
  const outputPath = options.outputPath ?? 'public/exports';
  const outputPrefix = options.outputPrefix ?? '';
  const targetPaths = options.targetPaths ?? [];

  const pagePaths = compact(
    args.getNodes().map((node) => node.path as string | undefined),
  ).filter((path) => targetPaths.includes(path));

  await Promise.all(
    pagePaths.map((targetPath) => {
      return pdf(
        targetPath,
        path.join(workingDirectory, outputPath),
        buildPdfFileName(outputPrefix, targetPath),
        {
          pdf: options.pdfOptions,
          style: options.styleOptions,
        },
      );
    }),
  );
};

export const pluginOptionsSchema: GatsbyNode['pluginOptionsSchema'] = ({
  Joi,
}) => {
  return Joi.object({
    outputPath: Joi.string()
      .default(`public/exports`)
      .description('Directory to store generated PDF files'),
    outputPrefix: Joi.string().description('Prefix for generated PDF files'),
    targetPaths: Joi.array()
      .items(Joi.string())
      .description('List of paths to generate PDFs for'),
    pdfOptions: Joi.object().description(
      'See https://pptr.dev/api/puppeteer.pdfoptions',
    ),
    styleOptions: Joi.object({
      url: Joi.string().description('URL to a stylesheet to include'),
      path: Joi.string().description('Path to a CSS file to inject'),
      content: Joi.string().description('Raw CSS content to inject'),
    }).description(
      'Include some additional styling - see https://pptr.dev/api/puppeteer.frameaddstyletagoptions',
    ),
  });
};
