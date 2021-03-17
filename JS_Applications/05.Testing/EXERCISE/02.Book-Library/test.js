const { chromium } = require('playwright-chromium');
const {assert,expect} = require('chai');
const mockData = require('./mock-data.json');


function jsonCustom(data) {
    return {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(data)
    };
}

let browser, page; // Declare reusable variables
describe('E2E tests', function () {

    this.timeout(20000);
    before(async () => {

        browser = await chromium.launch({headless: false, slowMo:1500});
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

    it('load content', async () => {
        await page.route('**/jsonstore/collections/books', (request) => request.fulfill(jsonCustom(mockData)));
        await page.goto('http://localhost:3000/');
        await page.click('text=LOAD ALL BOOKS')
        let content = await page.content()
        expect(content).to.contains('Harry Potter and the Philosopher\'s Stone')
        expect(content).to.contains('J.K.Rowling')
        expect(content).to.contains('C# Fundamentals')
        expect(content).to.contains('Svetlin Nakov')

    });

    it('adds book', async () => {
        let book = 'Nasty testing!'
        let author = 'The crazy genius'
        await page.route('**/jsonstore/collections/books', (request) => request.fulfill(jsonCustom(mockData)));
        await page.goto('http://localhost:3000/');
        await page.fill('[name="title"]', book);
        await page.fill('[name="author"]', author);
        let [request] = await Promise.all([
            page.waitForRequest(request => request.url().includes('/collections/books') && request.method() == 'POST'),
            await page.click('text=Submit')
        ]);
        assert.equal(JSON.parse(request.postData()).author,author)
        assert.equal(JSON.parse(request.postData()).title,book)
    });
    it('checks book validation', async () => {
        await page.route('**/jsonstore/collections/books', (request) => request.fulfill(jsonCustom(mockData)));
        await page.goto('http://localhost:3000/');
        await page.click('text=Submit');
        page.on('dialog', dialog => dialog.accept());

    });
    it('edit book', async () => {
        await page.route('**/jsonstore/collections/books', (request) => request.fulfill(jsonCustom(mockData)));
        await page.goto('http://localhost:3000/');
        await page.click('text=LOAD ALL BOOKS')
        // await page.click('text=Edit');

        const [name] = await Promise.all([page.$eval('[name="title"]', el => el.value),await page.click('text=Edit')]);
        // const author = await page.$('[name="author"]');
        console.log(name);
        // console.log(author);
        assert.equal(name,'')
        
    });

});

