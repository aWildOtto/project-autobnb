import * as functions from 'firebase-functions';
import * as puppeteer from 'puppeteer';

export const scrapeFunc = functions.runWith({memory:'1GB'}).firestore.document('/board/{id}/options/{optionId}').onCreate(async(snapshot, context) => {
    const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']});

    console.log(context);
    const url = snapshot.data()?.airbnbLink;
    console.log(url);
    if(!url) return;
    
    const page = await browser.newPage();
    await page.goto(url);
    
    const content = await page.content();
    
    const title_element = await page.$("._18hrqvin");
    const title = await page.evaluate(element => element.textContent, title_element);
    console.log(title);
    
    const day_cost_element = await page.$("._1p0spma2");
    const day_cost = await page.evaluate(element => element.textContent, day_cost_element);
    console.log(day_cost);
    
    console.log(content);
    await browser.close(); 
});

export const helloWorld = functions.https.onRequest(async(request, response) => {
    response.send("Hello from Firebase!");
});

