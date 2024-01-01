export const buildPdfFileName = (prefix: string, path: string) => {
  const slug = path.replace(/^\/|\/$/g, '').replace('/', '-');
  return `${prefix}${slug}.pdf`;
};
