//imports
const {
    langs,
    timezones
} = require('../settings/puppeteer_settings')

const newFP = async (page) => {
    await page.setExtraHTTPHeaders({'Accept-Language': `${langs[Math.floor((Math.random()*langs.length))]},${langs[Math.floor((Math.random()*langs.length))]};q=0.9,${langs[Math.floor((Math.random()*langs.length))]};q=0.8,${langs[Math.floor((Math.random()*langs.length))]};q=0.7`})
    await page.emulateTimezone(timezones[Math.floor((Math.random()*timezones.length))])
    await page.setViewport({
        width: Math.floor(Math.random() * 1920 + 500),
        height: Math.floor(Math.random() * 1080 + 500),
        deviceScaleFactor: 1,
        isMobile: Math.floor(Math.random() * 1) == 1 ? true : false,
        hasTouch: Math.floor(Math.random() * 1) == 1 ? true : false,
        isLandscape: Math.floor(Math.random() * 1) == 1 ? true : false,
    })
    await page.evaluateOnNewDocument(()=>{
        //browser values
        let platforms = ['MacIntel', 'Win32', 'FreeBSD i386', 'WebTV OS', 'iPhone', 'MacPPC', 'Mac68K', 'FreeBSD', 'FreeBSD amd64', 'Linux', 'Linux aarch64', 'Linux armv6l', 'Linux armv7l', 'Linux armv8l', 'Linux i686', 'Linux x86_64', 'PlayStation 4', 'Linux ppc64']
        let device_memory = ['1', '2', '4', '8', '12', '16', '32']
        let CPU = ['1', '2', '4', '8', '12', '16']
        let vendors = ['Google Inc.', 'Apple Computer, Inc.', '']

        Object.defineProperty(navigator.__proto__, 'deviceMemory', {
            value: device_memory[Math.floor((Math.random()*device_memory.length))]
        })

        Object.defineProperty(navigator.__proto__, 'hardwareConcurrency', {
            value: CPU[Math.floor((Math.random()*CPU.length))]
        })

        Object.defineProperty(navigator.__proto__, 'platform', {
            value: platforms[Math.floor((Math.random()*platforms.length))]
        })

        Object.defineProperty(navigator.__proto__, 'vendor', {
            value: vendors[Math.floor((Math.random()*vendors.length))]
        })
    })
    return true
}

module.exports = newFP