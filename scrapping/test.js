const puppeteer = require('puppeteer');

function input(){
    scrapePrice('https://hotel.yatra.com/hotel-search/dom/search?checkoutDate=17/10/2022&checkinDate=15/10/2022&roomRequests[0].id=1&roomRequests[0].noOfAdults=2&roomRequests[0].noOfChildren=0&source=BOOKING_ENGINE&pg=1&tenant=B2C&isPersnldSrp=1&city.name=Goa&city.code=Goa&state.name=GOA&state.code=GOA&country.name=India&country.code=IND','//*[@id="result0"]/div[1]/div[2]/ul/li[4]/div[2]/p/span');
}

async function scrapePrice(url,path){
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForXPath(path);
    const [el] = await page.$x(path);
    const src = await el.getProperty('textContent');
    const price = await src.jsonValue();
    console.log({price});

    browser.close();

}


// const destination_date="DEL-BLR-15/10/2022"


module.exports= scrapePrice;