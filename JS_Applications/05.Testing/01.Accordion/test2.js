const { chromium } = require('playwright-chromium');
const { expect } = require('chai');
let browser, page; // Declare reusable variables
describe('E2E tests', function() {
    this.timeout(60000);
  before(async () => { browser = await chromium.launch({headless: false,slowMo:500}) });
  after(async () => { await browser.close(); });
  beforeEach(async () => { page = await browser.newPage(); });
  afterEach(async () => { await page.close(); }); 

  it('loads static page', async function() {
    await page.goto('http://localhost:3000/');
    //await page.screenshot({ path: `index.png` }); 
    const content = await page.content()
    expect(content).to.contains('Scalable Vector Graphics');
    expect(content).to.contains('Open standard');
    expect(content).to.contains('Unix');
    expect(content).to.contains('ALGOL');
  
  });

  it ('toggles content', async () => {
    await page.goto('http://localhost:3000/');

    await page.click('text=More'); //playwrite selector

    await page.waitForSelector('.extra p');

    const visible = await page.isVisible('.extra p');
    expect (visible).to.be.true;

  });
  
});
