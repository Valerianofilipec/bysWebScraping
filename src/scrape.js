import puppeteer from "puppeteer"; 

const   SITE = "https://www.thesaurus.com/browse";

/**
 * @param{string} word
 * @returns{array} texts
 */
export const scrape = async function(word){
    try {
        const SELECTOR = "#root > div > main > div.HjmF_6uYqSRDdE7yX2Wy.ytunuYhmdZru4dW63UJL > section > section.wjLcgFJpqs9M6QJsPf5v > section.q7ELwPUtygkuxUXXOE9t.ULFYcLlui2SL1DTZuWLn > ul > li:nth-child("; //1) > a";
        const browser = await puppeteer.launch({
            headless:"new",
        });
        const page = await browser.newPage();
    
        await page.goto(`${SITE}/${word}`);
        let texts = [];
        for(let i = 1; i < 4; i++){
            const element = await page.waitForSelector(`${SELECTOR}${i}) > a`);
            const text = await page.evaluate(e => e.textContent, element);
            texts.push(text);
            console.log(text);
        }
        await browser.close();
        return texts;
    } catch (error) {
        console.log("ERRRRRRRRROU! KKKK");
        throw new Error("IDK Man!");
    }
};