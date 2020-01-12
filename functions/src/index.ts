import * as functions from 'firebase-functions';
import * as puppeteer from 'puppeteer';

export const scrapeFunc = functions.runWith({memory:'1GB'}).firestore.document('/board/{id}').onCreate(async(snapshot, context) => {
    const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']});

    console.log(snapshot.data());
    console.log(context);
    
    const page = await browser.newPage();
    await page.goto('https://www.airbnb.ca/rooms/28050962?adults=2&check_in=2020-01-23&check_out=2020-01-31&source_impression_id=p3_1578806023_nUwipAthWSHZtrER');
    
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

