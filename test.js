const puppeteer = require('puppeteer');
// const Enzyme = require('enzyme');
// const Adapter = require('enzyme-adapter-react-16');
// Enzyme.configure({ adapter: new Adapter() });

const width = 1080;
const height = 720;

let browser = null;
let page = null;

beforeAll( async () => {
  browser = await puppeteer.launch({
    headless: true,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport( { width, height } );
});

afterAll(() => {
  browser.close();
});

describe('choose buttons', () => {
  beforeEach(async () => {
    await page.goto( 'http://localhost:3002', { waitUntil: 'networkidle2' } );
  });

  test( 'page loads', async () => {
    page.once( 'load', () => console.info( '✅ Page is loaded' ) );
  });

  test('options contains initial info', async () => {
    var div ='.options';
    const title = await page.$eval( div, e => e.textContent );
    expect( title ).toEqual(`75" Class Q900TS QLED 8K UHD HDR Smart TV (2020)  WishlistQN75Q900TSFXZA _STARS4.8(31) Share your product experienceEdge-to-edge viewing with Infinity ScreenSee the mind-blowing sharpness and depth of real 8K with 16 times more resolution than HDTV.Size65" +$-150075"85" +$3500`);
  });

  test('can click button', async () => {

  });
});

test('testing test', () => {
  expect(true).toBe(true);
});

