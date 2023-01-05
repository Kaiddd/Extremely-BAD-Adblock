// ==UserScript==
// @name         Extremely BAD Adblock
// @version      1.1
// @description  Really bad and wont stop tracking but bypasses where real adblocks fail <3 | Based on generic attributes of ad elements, rather than advanced filterlists, and only deletes elements after loading the page rather than blocking them instantly
// @author       Kaid#0001
// @match        *://*/*
// ==/UserScript==

(function() {
    'use strict';

    let elementsArrayUwU

    function check(el,txt)
    {
        let found = false
        if(el.src && el.src.toLowerCase().includes(txt)){
            found = true
        }

        if(el.id && el.id.toLowerCase().includes(txt)){
           found = true
        }

        if(el.href && typeof(el.href) === 'string' && el.href.toLowerCase().includes(txt)){
           found = true
        }

        if(el.srcdoc && el.srcdoc.toLowerCase().includes(txt)){
           found = true
        }

        if(el.srcset && el.srcset.toLowerCase().includes(txt)){
           found = true
        }

        if(el.getAttribute('class') && el.getAttribute('class').toLowerCase().includes(txt)){
           found = true
        }

        return found
    }

    function checkElements()
    {
        elementsArrayUwU = Array.from(document.all)
        elementsArrayUwU.forEach(el => {
            if (check(el,"advert") || (check(el,"google") && check(el,"ad") && !check(el,"captcha")) || check(el,"bncloud") || check(el,"referral") || check(el,"refid") | check(el,"trafficjunky") || check(el,"pb_template") || check(el,"__clb")){
                el.remove()
            }
        })
        elementsArrayUwU = Array.from(document.getElementsByTagName('iframe')).concat(Array.from(document.getElementsByTagName('img'))).concat(Array.from(document.getElementsByTagName('a')))
        elementsArrayUwU.forEach(el => {
            if (check(el,"banner")){
                el.remove()
            }
        })
        Array.from(document.getElementsByTagName('div')).forEach(el => { // Anti Pornhub WITH support for non-bypassing adblockers (they use a special ad format if an adblocker is detected, my adblocker isnt detected, but if u are using two adblocks, this will catch the new ads made by ph)
            if(el.getAttribute('class') && el.getAttribute('class').toLowerCase().includes("adlinks")){
                el.parentElement.remove()
            }
            if(el.getAttribute('class') && el.getAttribute('class').toLowerCase().includes("ublock")) {
                Array.from(el.parentElement.children).forEach(el => {
                    if(el.getAttribute('class') && el.getAttribute('class').toLowerCase().includes("hd")){
                       el.remove()
                    }
                })
            }
        })
        setTimeout(checkElements,800);
    }
    checkElements()
})();
