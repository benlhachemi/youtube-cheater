//imports
const goToYoutube = require('./goToYoutube')

const watchFromHomepage = async (page, videoId) => {
    await goToYoutube(page)
    await page.waitForSelector('ytm-media-item')
    const videos = await page.$$('ytm-media-item')
    if(!videoId){
        console.log('watching random video from Homepage')
        await videos[Math.floor(Math.random()*videos.length)].click()
        await page.waitForTimeout(Math.floor(Math.random()*20000) + 5000)
        return 0
    }
    const video = videos[Math.floor(Math.random()*videos.length)]
    await page.evaluate((el, videoId) => el.querySelector('a').setAttribute('href', `/watch?v=${videoId}`), video, videoId)
    await video.click()
    console.log('WATCHING YOUR VIDEO FROM HOMEPAGE')
    await page.waitForTimeout(Math.floor(Math.random()*60000) + 60000)
    return 0
}

module.exports = watchFromHomepage