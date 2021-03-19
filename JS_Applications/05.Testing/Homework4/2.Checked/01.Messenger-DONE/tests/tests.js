const { chromium } = require('playwright-chromium');
const {expect} = require('chai');
const mockData = require('./mocked-data.json')

let browser, page;
let link = 'http://localhost:3000/';

describe('e2e tests', () => {
    before(async () => {
        browser = await chromium.launch({headless: false});
    })
    after(async () => {
        await browser.close();
    })

    beforeEach(async () => {
        page = await browser.newPage();
    })
    afterEach(async () => {
        await page.close();
    });
    it('load messages test 1', async () => {
        await page.route('**/jsonstore/messenger', (route) => route.fulfill(json(mockData['1'])));
        await page.goto(link);
        await page.click('text=Refresh');
        let textContent = await page.$$eval('#messages', e => e.map(s => s.value)[0].split('\n'));
        expect(textContent.length).to.equal(3);
    });
    it('load messages test 2', async () => {
        await page.route('**/jsonstore/messenger', (route) => route.fulfill(json(mockData['2'])));
        await page.goto(link);
        await page.click('text=Refresh');
        let textContent = await page.$$eval('#messages', e => e.map(s => s.value)[0].split('\n'));
        expect(textContent.length).to.equal(4);
    });
    it('send message method test', async () => {
        await page.goto(link);
        page.fill('#author', 'test');
        page.fill('#content', 'test');
        const [request] = await Promise.all([
            page.waitForRequest('**/jsonstore/messenger'),
            page.click('text=Send')
        ]);
        expect(request.method()).to.equal('POST');
    });
})


function json(body){
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(body)
    };
}
