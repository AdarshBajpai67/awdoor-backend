const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* GET busFare page. */
// /fare/bus?src=srcCity&dest=destCity

async function busFare(req) {
  const config = {
    method: "post",
    url: `https://www.redbus.in/search/SearchResults?fromCity=733&toCity=1429&src=${req.query.src}&dst=${req.query.dest}&DOJ=15-Oct-2022&sectionId=0&groupId=0&limit=0&offset=0&sort=0&sortOrder=0&meta=true&returnSearch=0`,
    headers: {
      authority: "www.redbus.in",
      method: "POST",
      path: "/search/SearchResults?fromCity=733&toCity=1429&src=Delhi&dst=Noida&DOJ=15-Oct-2022&sectionId=0&groupId=0&limit=0&offset=0&sort=0&sortOrder=0&meta=true&returnSearch=0, scheme: https",
      "accept-encoding": " gzip, deflate, br",
      "accept-language": " en-US,en;q=0.9",
      "content-length": " 0",
      accept: " application/json, text/plain, */*",
      "content-type": " application/json",
      cookie:
        " country=IND; currency=INR; selectedCurrency=INR; language=en; defaultlanguage=en; deviceSessionId=23fcd9a5-b09d-4522-856b-b996398f5b14; lzFlag=0; bCore=1; defaultCountry=IND; isBrowserFP=true; jfpj=596cff079b1ed0c0ad8a85927f6110dd; rb_fpData=%7B%22browserName%22%3A%22Chrome%22%2C%22browserVersion%22%3A%22106.0.0.0%22%2C%22os%22%3A%22Windows%22%2C%22osVersion%22%3A%2210%22%2C%22screenSize%22%3A%221536%2C864%22%2C%22screenDPI%22%3A1.25%2C%22screenResolution%22%3A%221920x1080%22%2C%22screenColorDepth%22%3A24%2C%22aspectRatio%22%3A%2216%3A9%22%2C%22systemLanguage%22%3A%22en-US%22%2C%22connection%22%3A%224g%22%2C%22userAgent%22%3A%22mozilla/5.0%20%28windows%20nt%2010.0%3B%20win64%3B%20x64%29%20applewebkit/537.36%20%28khtml%2C%20like%20gecko%29%20chrome/106.0.0.0%20safari/537.36%7CWin32%7Cen-US%22%2C%22timeZone%22%3A5.5%7D; _gcl_au=1.1.584188883.1665757684; tvc_smc_bus=google / organic / (not set); tvc_session_alive_bus=1; _ga=GA1.2.1027608679.1665757685; _gid=GA1.2.303691264.1665757685; _fbp=fb.1.1665757684661.1699280847; Branch_BrowserFingerPrintID=995347674680474157; gClId=1027608679.1665757685; bft=1; tvc_user_type=old; _gat_UA-9782412-15=1; ak_bmsc=6207DAA633F03C49BC6CEFA0503EE368~000000000000000000000000000000~YAAQZ40sMYku5qaDAQAA7dc+2BG8QLX9sIo+o8GCWP21S3v1WRa9FpXemlVH0bjDcXCWmYvUK5c/81qwz4uZVyHzXLYCSpBx265h5pVCnuZn/WRosC0Mj/E4yk0hWDelQnhQ8DCMRtzV4OTLVLe8Lpf0Xe2RQtr0Wbg265cUD9cCtA/DFXy4X0Odv8nc2l2wJ17r8k/OcvB4caRPyuiRjC8tT7pgSS9eeOZE9ICfwLCHihjsTQjfYcAK9HWgR0/fPJY0SbIykhkbTc0zyL4qeFYDt7maFz+4hIoKybWhppI3UraWepxXiB4fW95dnR500SWhGNPm/ACU/9fm9MOcF+CJISIJbmePNW8s1z5sXMNn28sV9sgujyC8bXVQ4HC/qm1DXlZLUO94lESTGuItUiKXvTIKU2rN4RBBXPQRQcb6tJiTA+zyxfs6lU6eNgB/3RJGA12jI1Nvm3emdRZFiLlaaLBb/RR8d1PiiH2PyGMfJCU19QM9GeNk; mriClientId=f1398a57-b65a-43bc-9970-77911d5ecd2e-rfShnZmJgn8Fv8obtGLrQQ==; mriClientIdSetDate=Sat Oct 15 2022 02:15:48 GMT+0530 (India Standard Time); mriSessionId=68a302e1-496e-483b-9567-bb01286beae1-1qNL9ZpKK17jTVlYfsmBasTu-VA=; srcCountry=IND; destCountry=IND; PrimoDetails=%7B%22lastUpdated%22%3A%222022-10-14%22%2C%22lastShown%22%3A%222022-10-15%22%7D; singleSeatCoachMark=1; bm_sv=395CC1EC344CCB8C63202280D8F5CAC8~YAAQZ40sMa0u5qaDAQAA0UI/2BEgnYyLBBpYIeikYCOzBllxQ7nrX5/j7dMRyRL9Hp22Osh7r/0hZg9XdBROHoFMaPmihC5Yz7r6Uy1nyhJv07WWCm8q5/tmUVQ2Y4EYQsdcHE3A0ZmLqxy2SeQ8yimwB2xAiZczPMDKx4ZSugCoA0aFJ68BUyJ5RvIfZ8fQ3Mnb4kHG8JbIDUY/0PS80jCtvKste3KCWyIO8qSVdyldhQdpUAaZOB+ynswMd2ee~1; bm_sv=395CC1EC344CCB8C63202280D8F5CAC8~YAAQZ40sMTsy5qaDAQAA/nBa2BGRrMDu2QZHkkBHlHArOFhgc0YnNCgigVDYpgohFIy6PKE16BkqUXK+UT8QZhYdqHKSpqFCevbobQOCcFpStHJGGpsRARIQXfuAfBPxV9gT+or6DNMntksAHTQLesd1ondXMCPLPclVzgpy0yHEGImeTRhLjQrmRTf/b0KdiDrz75Q377nEv3gYRoo7S0J3QPInPoea4Y/N8xT7ENOIudzcP6nmzzEpUiSqJGEV~1",
      origin: " https://www.redbus.in",
      referer:
        " https://www.redbus.in/bus-tickets/delhi-to-noida?fromCityName=Delhi&fromCityId=733&toCityName=Noida&toCityId=1429&onward=15-Oct-2022&srcCountry=IND&destCountry=IND&opId=0&busType=Any",
      "sec-ch-ua":
        ' "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
      "sec-ch-ua-mobile": " ?0",
      "sec-ch-ua-platform": ' "Windows"',
      "sec-fetch-dest": " empty",
      "sec-fetch-mode": " cors",
      "sec-fetch-site": " same-origin",
      "user-agent":
        " Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
    },
  };

  const rawres = await axios(config);

  // const resobj = await JSON.parse(rawres);
  // console.log(rawres);
  return rawres;
}

router.get("/fare/bus", async function (req, res, next) {
  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };
  const rawBusData = await busFare(req);
  const busData = JSON.stringify(rawBusData, getCircularReplacer());
  const buses = await JSON.parse(busData);
  let sampleSize = 0;
  console.log(buses);
  const totalFare = buses.data.inv
    .map((bus, i) => {
      if (bus.frLst) {
        sampleSize++;
        return bus.frLst[0];
      }
    })
    .sort((a, b) => a - b);
  console.log(totalFare);
  // console.log(totalFare / sampleSize);
  // const avgFare = totalFare / fareArray.length;
  // res.send(buses);
  res.json({
    lowestPrice: totalFare[0],
    highestPrice: totalFare[totalFare.length - 1],
  });
});

module.exports = router;
