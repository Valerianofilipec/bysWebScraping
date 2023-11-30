import puppeteer from "puppeteer"; 

const   SITE = "https://www.thesaurus.com/browse",
        SELECTOR = "#root > div > main > div.HjmF_6uYqSRDdE7yX2Wy.ytunuYhmdZru4dW63UJL > section > section.wjLcgFJpqs9M6QJsPf5v > section.q7ELwPUtygkuxUXXOE9t.ULFYcLlui2SL1DTZuWLn > ul > li:nth-child(1) > a";

/**
 * @param{string} word
 * @returns{any} text
 */
export const scrape = async function(word){
    try {
        const browser = await puppeteer.launch({
            headless:"new",
        });
        const page = await browser.newPage();
    
        await page.goto(`${SITE}/${word}`);
        let element = await page.waitForSelector(SELECTOR);
        let text = await page.evaluate(e => e.textContent, element);
        console.log(text);
        browser.close();
        return text;
    } catch (error) {
        console.log("ERRRRRRRRROU! KKKK");
        throw new Error("IDK Man!");
    }
};