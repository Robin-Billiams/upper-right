const puppeteer = require('puppeteer');

const width = 1080;
const height = 720;

let browser = null;
let page = null;

beforeAll( async () => {
  browser = await puppeteer.launch({
    headless: true,
    // slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport( { width, height } );
});

afterAll(() => {
  browser.close();
});

describe('choose buttons', () => {
  test('initial title is correct', () => {

  });
});

test('testing test', () => {
  expect(true).toBe(true);
});

