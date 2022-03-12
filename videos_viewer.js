//imports
const puppeteer            = require('puppeteer-extra')
const pluginProxy          = require('puppeteer-extra-plugin-proxy')
const AdblockerPlugin      = require('puppeteer-extra-plugin-adblocker')
const StealthPlugin        = require('puppeteer-extra-plugin-stealth')
const newFP                = require('./utils/newFP')
const {puppeteer_settings} = require('./settings/puppeteer_settings')
const performAction        = require('./utils/performAction')
const goToYoutube          = require('./utils/goToYoutube')
const watchVideo           = require('./utils/watchVideo')

//defines
puppeteer.use(StealthPlugin())
puppeteer.use(AdblockerPlugin())

//main function
const videos_viewer = async () => {
    const browser = await puppeteer.launch(puppeteer_settings)
    const page = await browser.newPage()
    console.log('generating new fingerprints')
    await newFP(page)
    console.log('Youtube homepage')
    await goToYoutube(page)
    await performAction(page)
    await watchVideo(page, 'VCF4p8BghRY')
    await performAction(page)
    await browser.close()
    return true
}

const runBot = async () => {
    while(true){
        await videos_viewer()
    }
}

runBot()
runBot()
runBot()
runBot()
runBot()