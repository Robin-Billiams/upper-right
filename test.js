<<<<<<< HEAD
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
=======
// const Options = require( './Client/src/Components/Options.jsx');
const Enzyme = require( 'enzyme');
const Adapter = require( 'enzyme-adapter-react-16');
const puppeteer = require( 'puppeteer');
const pageUrl = 'http://localhost:3002/'

let page;
var browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [ `--window-size=${width},${height}` ]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
>>>>>>> Attempt to get tests working outside of test file
});

afterAll(() => {
  browser.close();
});

<<<<<<< HEAD
describe('choose buttons', () => {
  test('initial title is correct', () => {

  });
});
=======
// describe('Options', () => {
//   test('initial title is correct', () => {

//   });

// });


// Enzyme.configure({ adapter: new Adapter() });

// desvribe( 'Options component', () => {
//   test('renders', () => {
//     const wrapper = shallow(<Options />);
//     expect(wrapper.exists()).toBe(true);
//   });
// });

>>>>>>> Attempt to get tests working outside of test file

test('testing test', () => {
  expect(true).toBe(true);
});

