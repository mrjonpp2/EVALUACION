const puppeteer = require('puppeteer')

describe('Describe test',() => {
    

    it('E2E testing', async () => {
        const browser = await puppeteer.launch({
            headless: false,
        })

        const page = await browser.newPage()
        await page.goto('https://demo.seleniumeasy.com')


        
        await page.screenshot({
            path: './CapturasE2E/Homepage.png',
            fullPage: true
        })

        await page.waitForSelector('#carousel-example-generic > div')

        await page.waitForSelector('#at-cv-lightbox-win')
        await page.click('#at-cv-lightbox-close')
        

        const navbar = '#navbar-brand-centered > ul:nth-child(1) > li:nth-child(1) > a'
        await page.waitForSelector(navbar)
        await page.click(navbar)

        await page.screenshot({
            path: './CapturasE2E/InputForms1.png',
            fullPage: true
        })

        const dropDownInput = '#navbar-brand-centered > ul:nth-child(1) > li.dropdown.open > ul > li:nth-child(1) > a'
        await page.waitForSelector(dropDownInput)
        await page.click(dropDownInput)

        await page.screenshot({
            path: './CapturasE2E/InputForms2.png',
            fullPage: true
        })

        const inputField = '#user-message'
        const inputButton = '#get-input > button'

        await page.type(inputField, 'Hola mundo')
        await page.click(inputButton)

        await page.waitForSelector('#display')

        const inputA = '#sum1'
        const inputB = '#sum2'
        const buttonTotal = '#gettotal > button'

        await page.type(inputA, '2')
        await page.type(inputB, '3')
        await page.click(buttonTotal)

        await page.screenshot({
            path: './CapturasE2E/InputForms3.png',
            fullPage: true
        })

        //table Filter        

        const tablePicker = '#treemenu > li > ul > li:nth-child(3) > a'
        const optionTable = '#treemenu > li > ul > li:nth-child(3) > ul > li:nth-child(3) > a'
        //await page.waitForSelector(datePicker)
        await page.click(tablePicker)
        await page.waitForSelector(optionTable)
        await page.click(optionTable)

        const tableLoad = 'body > div.container-fluid.text-center > div > div.col-sm-7.text-left > section > div > div > div.panel-body > div.table-container > table > tbody'

        const successButton = 'body > div.container-fluid.text-center > div > div.col-sm-7.text-left > section > div > div > div.panel-body > div.pull-right > div > button.btn.btn-success.btn-filter'
        await page.click(successButton)

        await page.waitForSelector(tableLoad)

        await page.screenshot({
            path: './CapturasE2E/TableFilter1.png',
            fullPage: true
        })

        const warningButton = 'body > div.container-fluid.text-center > div > div.col-sm-7.text-left > section > div > div > div.panel-body > div.pull-right > div > button.btn.btn-warning.btn-filter'

        await page.click(warningButton)

        await page.waitForSelector(tableLoad)


        await page.screenshot({
            path: './CapturasE2E/TableFilter2.png',
            fullPage: true
        })

        const dangerButton = 'body > div.container-fluid.text-center > div > div.col-sm-7.text-left > section > div > div > div.panel-body > div.pull-right > div > button.btn.btn-danger.btn-filter'

        await page.click(dangerButton)

        await page.waitForSelector(tableLoad)


        await page.screenshot({
            path: './CapturasE2E/TableFilter3.png',
            fullPage: true
        })

        //List Filter
        const listPicker = '#treemenu > li > ul > li:nth-child(6) > a'
        const optionList = '#treemenu > li > ul > li:nth-child(6) > ul > li:nth-child(3) > a'
        //await page.waitForSelector(datePicker)
        await page.click(listPicker)
        await page.waitForSelector(optionList)
        await page.click(optionList)

        await page.waitForSelector('body > div.container-fluid.text-center > div > div.col-md-6.text-left > section')

        const listInput = '#input-search'
        await page.type(listInput, 'Tyreese', { delay: 100 })

        await page.screenshot({
            path: './CapturasE2E/ListFilter1.png',
            fullPage: true
        })

        //Input form
        const inputFormPicker = '#treemenu > li > ul > li:nth-child(1) > a'
        const optionInputForm = '#treemenu > li > ul > li:nth-child(1) > ul > li:nth-child(5) > a'
        //await page.waitForSelector(datePicker)
        await page.click(inputFormPicker)
        await page.waitForSelector(optionInputForm)
        await page.click(optionInputForm)

        const inputName = '#contact_form > fieldset > div:nth-child(2) > div > div > input'
        const inputLastName = '#contact_form > fieldset > div:nth-child(3) > div > div > input'
        const inputEmail = '#contact_form > fieldset > div:nth-child(4) > div > div > input'
        const inputPhone = '#contact_form > fieldset > div:nth-child(5) > div > div > input'
        const inputAddress = '#contact_form > fieldset > div:nth-child(6) > div > div > input'
        const inputCity = '#contact_form > fieldset > div:nth-child(7) > div > div > input'
        const selectorState = '#contact_form > fieldset > div:nth-child(8) > div > div > select'
        const inputZipCode = '#contact_form > fieldset > div:nth-child(9) > div > div > input'
        const inputWeb = '#contact_form > fieldset > div:nth-child(10) > div > div > input'
        const radioButton = '#contact_form > fieldset > div:nth-child(11) > div > div:nth-child(1) > label'
        const inputProjDescription = '#contact_form > fieldset > div:nth-child(12) > div > div > textarea'
        const buttonSend = '#contact_form > fieldset > div:nth-child(14) > div > button'

        await page.type(inputName, 'Jonathan', { delay: 50 })
        await page.type(inputLastName, 'Munoz', { delay: 50 })
        await page.type(inputEmail, 'jonarab7@hotmail.com', { delay: 50 })

        //await page.click(inputPhone)
        await page.type(inputPhone, '(347)6416175', { delay: 50 })



        await page.type(inputAddress, 'Quito 2529 y Noviembre', { delay: 50 })
        await page.type(inputCity, 'Quito', { delay: 50 })
        await page.select(selectorState, 'Alabama')
        await page.type(inputZipCode, '21356', { delay: 50 })
        await page.type(inputWeb, 'www.testing.com', { delay: 50 })
        await page.click(radioButton)
        await page.type(inputProjDescription, 'Project evaluation description', { delay: 50 })

        await page.screenshot({
            path: './CapturasE2E/InputFormValidations1.png',
            fullPage: true
        })

        await page.click(buttonSend)


        await browser.close()
    }, 30000)



})