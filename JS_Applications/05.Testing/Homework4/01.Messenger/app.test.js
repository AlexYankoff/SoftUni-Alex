const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page;

describe('E2E tests', function () {
    this.timeout(5000);
    before(async () => {
        browser = await chromium.launch({ headless: false, slowMo: 500 });
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        page = await browser.newPage();
    });

    afterEach(async () => {
        await page.close();
    });



    it("shows all messages on refresh", async () => {

        await page.goto('http://localhost:3000/');
        await page.click("#refresh");

        const text = await page.$$eval("#messages", (arr) => arr.map(x => x.value));
        let flag = false;

        if (text[0].includes("Spami: Hello, are you there?") && text[0].includes("Garry: Yep, whats up :?") && text[0].includes("Spami: How are you? Long time no see? :)") && text[0].includes("George: Hello, guys! :))") && text[0].includes("Spami: Hello, George nice to see you! :)))")) {
            flag = true;
        }
        expect(flag).to.equal(true);
    })

    it("sends message to the server", async () => {

        await page.goto('http://localhost:3000/');
        await page.fill("#author", "test");
        await page.fill("#content", "test");
        await page.click("#submit");
        await page.click("#refresh");

        const text = await page.$$eval("#messages", (arr) => arr.map(x => x.value));
        let flag = false;

        if (text[0].includes("Spami: Hello, are you there?") && text[0].includes("Garry: Yep, whats up :?") && text[0].includes("Spami: How are you? Long time no see? :)") && text[0].includes("George: Hello, guys! :))") && text[0].includes("Spami: Hello, George nice to see you! :)))") && text[0].includes("test: test")) {
            flag = true;
        }
        expect(flag).to.equal(true);
    })
});
