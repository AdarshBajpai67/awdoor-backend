const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* GET flightFare page. */
// /fare/flight?src=srcCity&dest=destCity&date=YYYYMMDD

async function flightFare(req) {
  const config = {
    method: "get",
    url: `https://flights-cb.makemytrip.com/api/fareCalendar?crId=0c8e22fb-0d53-4ed5-b97b-1ee7e733b561&it=${req.query.src}-${req.query.dest}-${req.query.date}&lcl=en&cur=INR&creditShellInfo=&region=in&currency=inr&language=eng&cmpId=`,
    headers: {
      authority: "flights-cb.makemytrip.com",
      method: "GET",
      path: "/api/fareCalendar?crId=0c8e22fb-0d53-4ed5-b97b-1ee7e733b561&it=DEL-BKK-20221020&lcl=en&cur=INR&creditShellInfo=&region=in&currency=inr&language=eng&cmpId=",
      scheme: "https",
      ab: ' {"INSGHT":0,"STP":0,"SimpF":0,"BFFL":0,"MMTFF":0,"BSG":0,"LFT":0,"MFEP":0,"DGF":0,"BCG":1,"flightInfoOptionSequenceKey":"FNO","IFFLK":1,"DGT":3,"IFFLKOWRT":0,"SED":0,"RTSC":0,"ZCA":0,"ZCD":1,"SEM":0,"ZCE":1,"NLA":0,"FLK":1,"dgi":1,"IRR":0,"RTM":0,"ZCS":1,"HPR":0,"FLS":1,"RTS":0,"FFBEN":0,"SFN":0,"QBK":3,"myPUAE":false,"meff":1,"QCO":0,"TP":1,"PRB":0,"PRE":2,"PRG":0,"mbrta":0,"IFFLKMC":0,"pwa_login_type":0,"NDAST":0,"ITT":1,"PRO":0,"FLKT":0,"PBC":0,"mstp":0,"SHR":0,"CYT":0,"CID":1,"bottomsheet_onetap_pwa":"1","mras":1,"mbrt":0,"FFPers":0,"mctw":0,"INSBTM":0,"UMF":0,"HCP":0,"SIM":0,"PTA":0,"INSV3":0,"PTF":0,"AFI":0,"mctwb":1,"mrtp":0,"LLS":1,"PDF":0,"MFMD":1,"BIRT":0,"IFS":0,"flightPageLoadTracking":0,"GSF":0,"msfn":0,"QFT":1,"MOB":0,"INSTP":0,"BII":0,"ADDONM":0,"FAA":0,"IFFLKOW":0,"FAO":0,"marc":0,"FAT":0,"PET":0,"WCM":1,"REUSABLE":0,"PCRDF":0,"PFA":1,"OTP":0,"mnthn":false,"CLS":0,"PFI":1,"ZC_Server_Side_experiment1":1,"CHMRK":0,"FSA":3,"PFL":0,"PWA":0,"PFP":1,"DDDF":0,"mema":1,"NSF":0,"mbfc":1,"LISTN":1,"FCN":false,"CABS":1,"CABF":0,"mqc":0,"mics":0,"travellerScan":0,"NTD":0,"wsmn":0,"SNH":0,"LPS":0,"MRT":0,"ffmove":0,"ZCDS":0,"IFMC":0,"IFFLKRT":0,"BNPL":1,"mal":1,"MICROSOFTFES":0,"mgsf":1,"ZC_Client_Side_exp":false,"NUG":0,"ALTFLT":0,"FUS":1,"COU":0,"USF":0,"MCC":1,"PIF":0,"CYTN":0,"ALTFLTCORP":0,"BAGR":1,"CPA":0,"SOR":0,"msa":1,"ALF":0,"MCS":0,"REUSABLERT":0,"msf":1,"testAB":0,"SPA":1,"CPS":0,"cnpn":1,"dd_exp_myp":"peshkash","RNP":4,"AMD":0,"AME":0,"IMB":0,"BNTD":1,"TSC":0,"trvlr":true,"CAD":1,"bntdp":0,"IMS":0,"mbfsme":1,"mbit":0,"mdl":1,"DTD":0,"ANC":0,"IFPLK":1,"HLD":0,"ANP":1,"ALTF":0,"cheaperFlightsDesktopDom":1,"ANU":0,"MFA":0,"INP":0,"MFD":0,"MFC":1,"CFAR":1,"mecj":1,"INT":1,"PLK":1,"INS":0,"MFEA":0,"MFI":0,"AOA":0,"SRT":1,"AOD":0,"PLS":1,"MFP":1,"NHP":0,"MFEI":0,"AOI":0,"MFED":0,"mntf":0,"AOP":0,"BAA":0,"AGGRNEW":0,"MYPRTA":0,"MFTD":0,"BAN":0,"CANCT":0,"INSNEW":0,"GYOLO":0,"APD":0,"dd_exp_name":"odin","EMI":0,"IPS":0,"BRB":1}',
      accept: " application/json",
      "accept-encoding": " gzip, deflate, br",
      "accept-language": " en-US,en;q=0.9",
      "access-control-allow-credentials": " true",
      "app-ver": " 1.0.0",
      auuid: "",
      "cache-control": " no-cache",
      "cmp-id": "",
      currency: " inr",
      "device-id": " 7213cfbc-d45d-4839-8918-2a7add430605",
      domain: " in",
      flow: "",
      language: " eng",
      mcid: " 7213cfbc-d45d-4839-8918-2a7add430605",
      "mmt-auth": "",
      origin: " https://www.makemytrip.com",
      os: " Windows",
      pfm: " DESKTOP",
      "profile-type": " PERSONAL",
      referer: " https://www.makemytrip.com/",
      region: " in",
      "sec-ch-ua":
        ' "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
      "sec-ch-ua-mobile": " ?0",
      "sec-ch-ua-platform": ' "Windows"',
      "sec-fetch-dest": " empty",
      "sec-fetch-mode": " cors",
      "sec-fetch-site": " same-site",
      src: " mmt",
      "user-agent":
        " Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
      "x-flt":
        " eyJjIjoiRSIsInAiOiJBLTFfQy0wX0ktMCIsInQiOiIiLCJzIjoiREVMLUJLSy0yMDIyMTAyMCJ9",
      "x-user-cc": " IN",
      "x-user-ip": " 2405:201:402d:7137:c9b0:d55c:1fd6:c478",
      "x-user-rc": " NEWDELHI",
      Cookie:
        "_abck=776EE04129822B88B12B408240BF4024~-1~YAAQF3UsMRCuMauDAQAA2b7C2ggBM0GvCx5QuuxMn1MGSmbtE2yEABwurVJRE9R8mianyZoIcrM0KFQcMIV3Yc/UXZJYb5vMgVAh3yaUhJQUpgcdaG6Wl4zAGN6KHcw55q4Y0ZX6QFARSwSnY1OQh9VzrxVGnRy8D+TH3Co6EEODHNfw5H9p+p+H9yyI1LHurfayb43Pv2rm+hLP+OyDeFr0f+q3gsN1aMQ06R9O07JDPVgCw/oxUzZwvdKnOg1lgG2kYMV73WXqfVsrXZG1H/DU0tdVSZR87aKGsS2iubhPpCI0QA1vMsWq87cDb+LEi6AGWyWQxgrhVuxx2RjyZrEGklP24UQnPuEorQiBHGfteaDTOxDLD94GcxQrFz0L~-1~-1~-1; bm_sz=606509D2E54B71CC3855A022DFEC6576~YAAQF3UsMRGuMauDAQAA2b7C2hGcBii33K4KQ8gWkDzvOksXuRfIT8nftX8+kAZouPiuExAQKrCx87GmzqFBf7LRCu/zXL+c+0TV7NGZMyebndHF2eaZ8Z7lSysoG2NnFCH2reueWmc3P0woohv+/QxUPGu5jQlE0sKbkl1Gx33khV8vJQ77JqkF5i6c3TwAcxhu6fofTNnW4ie78T55Bv1eTk9/3MNeQm0Hv1wClcKnbtL4ZqHePby3ei58uAffuKSc3ckfp41EwuMF5SdgeoBdcLpnC+JKp2cfmpgtsPX7+2Wq6VtW~3752496~3158838",
    },
  };

  const rawres = await axios(config);
  console.log(rawres);
  return rawres;
}

router.get("/fare/flight", async function (req, res, next) {
  const flight = await flightFare(req);
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
  const flightData = JSON.stringify(flight, getCircularReplacer());
  const flights = await JSON.parse(flightData);
  res.send(flights.data);
});

module.exports = router;
