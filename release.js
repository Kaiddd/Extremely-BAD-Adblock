// ==UserScript==
// @name         Extremely BAD Adblock
// @version      1.7
// @description  Really bad and wont stop tracking (Besides *some* google trackers) but bypasses where real adblocks fail <3 | Based on generic attributes of ad elements, rather than advanced filterlists, and only deletes elements after loading the page rather than blocking them instantly (Has some false positives, but will work on every common website)
// @author       Kaid#0001
// @run-at       document-start
// @match        *://*/*
// ==/UserScript==

!function(){"use strict";let e;function t(e,t){let a=!1;return e.src&&e.src.toLowerCase().includes(t)&&(a=!0),e.id&&e.id.toLowerCase().includes(t)&&(a=!0),e.href&&"string"==typeof e.href&&e.href.toLowerCase().includes(t)&&(a=!0),e.srcdoc&&e.srcdoc.toLowerCase().includes(t)&&(a=!0),e.srcset&&e.srcset.toLowerCase().includes(t)&&(a=!0),e.getAttribute("class")&&e.getAttribute("class").toLowerCase().includes(t)&&(a=!0),a}!function a(){e=Array.from(document.all),e.forEach((e=>{(t(e,"advert")||t(e,"adsense")||t(e,"tracker")||t(e,"interad")||t(e,"interstitial")||t(e,"google")&&t(e,"ad")&&!t(e,"captcha")&&!t(e,"login")||t(e,"bncloud")||t(e,"referral")||t(e,"refid")|t(e,"trafficjunky")||t(e,"pb_template")||t(e,"__clb"))&&e.remove(),"SCRIPT"===e.tagName&&(e.innerHTML=e.innerHTML.replace(/googletagmanager|google-analytics|googleanalytics|googleadservices|adwords|adsense|admob|urchin.com|doubleclick.net/gim,"thisIsAGoogleAd.invalid.url"),e.src=e.src.replace(/googletagmanager|google-analytics|googleanalytics|googleadservices|adwords|adsense|admob|urchin.com|doubleclick.net/gim,"thisIsAGoogleAd.invalid.url"))})),e=Array.from(document.getElementsByTagName("iframe")).concat(Array.from(document.getElementsByTagName("img"))).concat(Array.from(document.getElementsByTagName("a"))),e.forEach((e=>{e.getAttribute("data-jsarwt")&&e.removeAttribute("data-jsarwt"),(t(e,"banner")||"A"===e.tagName&&e.offsetHeight>120&&e.offsetWidth>1200)&&("NAV"===e.parentElement.tagName&&e.parentElement.remove(),e&&e.remove()),"IMG"===e.tagName&&(e.src=e.src.replace(/googletagmanager|google-analytics|googleanalytics|googleadservices|adwords|adsense|admob|urchin.com|doubleclick.net/gim,"thisIsAGoogleAd.invalid.url"))})),Array.from(document.getElementsByTagName("div")).forEach((e=>{e.getAttribute("class")&&e.getAttribute("class").toLowerCase().includes("adlinks")&&e.parentElement.remove(),e.getAttribute("class")&&e.getAttribute("class").toLowerCase().includes("ublock")&&Array.from(e.parentElement.children).forEach((e=>{e.getAttribute("class")&&e.getAttribute("class").toLowerCase().includes("hd")&&e.remove()}))})),setTimeout(a,400)}()}();
