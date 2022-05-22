const puppeteer = require('puppeteer')

describe('Describe test',() => {
    

    it('Click de un boton', async () => {
        const browser = await puppeteer.launch({
            headless: false,
        })

        const page = await browser.newPage()
        await page.goto('http://uitestingplayground.com/click')

        //await page.evaluate('document.querySelector("span.styleNumber").getAttribute("data-Color")')

        
        //click
        await page.waitForSelector('#badButton')

        await page.click('#badButton')
        await page.waitForTimeout(3000)

        await page.screenshot({
            path: './capturaPantallaClick.png',
            fullPage: true
        })

        //await browser.close()
    }, 30000)

    it('Text Input, button name update', async () => {
        const browser = await puppeteer.launch({
            headless: false,
        })

        const page = await browser.newPage()
        await page.goto('http://uitestingplayground.com/textinput')

        //await page.evaluate('document.querySelector("span.styleNumber").getAttribute("data-Color")')

        
        //click
        await page.waitForSelector('#newButtonName')

        await page.type('#newButtonName', 'TextoPrueba', { delay: 100 })
        //await page.waitForTimeout(3000)
        await page.click('#updatingButton')

        const buttonName = await page.$eval('#updatingButton', (button) => button.textContent)

        console.log('button name: ', buttonName)

        await page.screenshot({
            path: './capturaPantallaTextInput.png',
            fullPage: true
        })

        await browser.close()
    }, 30000)


})