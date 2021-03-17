const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page; // Declare reusable variables

describe('Messages tests', function() {
    this.timeout(60000);
  before(async () => { browser = await chromium.launch({headless: false,slowMo:1000}) });
  //after(async () => { await browser.close(); });
  beforeEach(async () => { page = await browser.newPage(); });
  //afterEach(async () => { await page.close(); }); 

  it.only('sendd messages test', async function() {
    await page.goto('http://localhost:3000/');
    //await page.screenshot({ path: `index.png` }); 
    const content = await page.content()
    await page.fill('[name=author]', 'Peter')
    //await page.fill('[name=content]', 'OnE More')
    //await page.click('text=Send')
    //await page.click('text=Refresh')

    const texWindow = await page.$('[name=author]', e => e.textContent)
    expect(texWindow).to.equal('Peter')
   
    
    //const pedal = await page('textarea');
    //pedal = 
    //await page.fill('[name=author]', pedal)
    //expect(pedal).contains('Peter');
    
    
    //await page.screenshot({ path: `index.png` })

    //expect(texWindow.textContent).to.contains('Peter: OnE More');
    //expect(content).to.contains('Open standard');
    //expect(content).to.contains('Unix');
    //expect(content).to.contains('ALGOL');
  
  });

  it ('toggles content', async () => {
    await page.goto('http://localhost:3000/');

    await page.click('text=More'); //playwrite selector

    await page.waitForSelector('.extra p');

    const visible = await page.isVisible('.extra p');
    expect (visible).to.be.true;

  });
  
});
