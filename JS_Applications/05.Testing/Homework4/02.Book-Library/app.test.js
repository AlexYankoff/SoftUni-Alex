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

    it("loads all books", async () => {

        await page.goto('http://localhost:3000/');
        await page.click("#loadBooks");

        const text = await page.$$eval("body > table > tbody", (arr) => arr.map(x => x.textContent));
        let flag = false;

        if (text[0].includes("Harry Potter and the Philosopher's Stone") && text[0].includes("J.K.Rowling") && text[0].includes("C# Fundamentals") && text[0].includes("Svetlin Nakov")) {
            flag = true;
        }
        expect(flag).to.equal(true);
    })

    it("doesnt send a request when fields are empty", async () => {

        await page.goto('http://localhost:3000/');
        await page.fill("#createForm > input[type=text]:nth-child(3)", "testEmptyFields");
        await page.click("#createForm > button");

        await page.click("#loadBooks");

        const text = await page.$$eval("body > table > tbody", (arr) => arr.map(x => x.textContent));
        let flag = true;

        if (text[0].includes("testEmptyFields")) {
            flag = false;
        }

        expect(flag).to.equal(true);
    })

    it("adds an entry when required fields are filled", async () => {

        await page.goto('http://localhost:3000/');
        await page.fill("#createForm > input[type=text]:nth-child(3)", "test1");
        await page.fill("#createForm > input[type=text]:nth-child(5)", "test2")
        await page.click("#createForm > button");

        await page.click("#loadBooks");

        const text = await page.$$eval("body > table > tbody", (arr) => arr.map(x => x.textContent));
        let flag = false;

        if (text[0].includes("test1") && text[0].includes("test2")) {
            flag = true;
        }

        expect(flag).to.equal(true);
    })

    it("edit prompt appears and is filled correctly", async () => {

        await page.goto('http://localhost:3000/');
        await page.click("#loadBooks");
        await page.click("body > table > tbody > tr:nth-child(2) > td:nth-child(3) > button.editBtn")

        let flag = true;
        const form = await page.$eval("#editForm > h3", a => a = a.textContent);
        const title = await page.$eval("#editForm > input[type=text]:nth-child(4)", a => a = a.value);
        const author = await page.$eval("#editForm > input[type=text]:nth-child(6)", a => a = a.value);

        if (form != 'Edit FORM' || title == '' || author == '') {
            flag = false;
        }

        expect(flag).to.equal(true);
    })

    it("edit book sends request", async () => {

        await page.goto('http://localhost:3000/');
        await page.click("#loadBooks");
        await page.click("body > table > tbody > tr:nth-child(2) > td:nth-child(3) > button.editBtn")
        await page.fill("#editForm > input[type=text]:nth-child(6)", "Svetlin Nakovv");
        await page.click("#editForm > button");
        await page.click("#loadBooks");
        const author = await page.$eval("body > table > tbody > tr:nth-child(2) > td:nth-child(2)", a => a = a.textContent);


        expect(author).to.equal('Svetlin Nakovv');
    })
});