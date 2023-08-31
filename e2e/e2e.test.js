import puppetteer from "puppeteer";
import { fork } from "child_process";

jest.setTimeout(20000);

describe("Credit Card Validator form", () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = "http://localhost:9000";

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on("error", reject);
      server.on("message", (message) => {
        if (message === "ok") {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 100,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });
  
  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test("Открытие страницы", async () => {
    await page.goto(baseUrl);
  });

  test("Тест когда карта проходит валидацию", async () => {
    await page.goto(baseUrl)

    const form = await page.$('.widget-form')
    const input = await form.$('.input')
    const btn = await form.$('.btn')

    await input.type('4539148803436467')
    await btn.click()
    await page.waitForSelector('.input.card-valid')
  })

  test("Тест когда карта не проходит валидацию", async () => {
    await page.goto(baseUrl)

    const form = await page.$('.widget-form')
    const input = await form.$('.input')
    const btn = await form.$('.btn')

    await input.type('8273123273520569')
    await btn.click()
    await page.waitForSelector('.input.card-invalid')
  })
});




