//imports
const goToYoutube = require('./goToYoutube')

const watchFromRelated = async (page, videoId) => {
    await goToYoutube(page)
    await page.waitForSelector('ytm-media-item')
    let videos = await page.$$('ytm-media-item')
    await videos[Math.floor(Math.random()*videos.length)].click()
    await page.waitForTimeout(2000)
    await page.waitForSelector('ytm-media-item')
    videos = await page.$$('ytm-media-item')
    if(!videoId){
        console.log('watching random video from Related')
        await videos[Math.floor(Math.random()*videos.length)].click()
        await page.waitForTimeout(Math.floor(Math.random()*20000) + 5000)
        return 0
    }
    
    const video = videos[Math.floor(Math.random()*videos.length)]
    await page.evaluate((el, videoId) => el.querySelector('a').setAttribute('href', `/watch?v=${videoId}`), video, videoId)
    await video.click()
    console.log('WATCHING YOUR VIDEO FROM RELATED')
    await page.waitForTimeout(Math.floor(Math.random()*60000) + 60000)
    return 0
}

module.exports = watchFromRelated