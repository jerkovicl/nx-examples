import cheerio from 'cheerio';
import * as minifier from 'html-minifier';

export default function (indexContent: string): string {
  const $ = cheerio.load(indexContent);
  const baseUrl = 'https://www.abc.com';
  $('head').append(`<link rel="preconnect" href="${baseUrl}">`);

  const minified: string = minifier.minify($.html(), {
    removeComments: true,
    removeAttributeQuotes: true,
    collapseWhitespace: true,
  });
  return minified;
  //  return indexContent;
}
