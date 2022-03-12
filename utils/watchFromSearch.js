
const watchFromSearch = async (page, videoId) => {
    const keywords = ['russia', 'ukraine', 'morocco', 'national team', 'liverpool', 'amine raghib', 'th3pro' ,'snapchat++']
    const keyword = keywords[Math.floor(Math.random()*keywords.length)]
    await page.goto(`https://www.youtube.com/results?search_query=${keyword}`)
    await page.waitForSelector('ytm-compact-video-renderer')
    const videos = await page.$$('ytm-compact-video-renderer')
    if(!videoId){
        console.log('watching random video from search')
        await videos[Math.floor(Math.random()*videos.length)].click()
        await page.waitForTimeout(Math.floor(Math.random()*20000) + 5000)
        return 0
    }
    const video = videos[0]
    console.log('WATCHING YOUR VIDEO FROM SEARCH')
    await page.evaluate((el, videoId) => {el.querySelector('a').setAttribute('href', `/watch?v=${videoId}`);el.querySelector('a').click()}, video, videoId)
    await page.waitForTimeout(Math.floor(Math.random()*60000) + 60000)
    return 0
}

module.exports = watchFromSearch