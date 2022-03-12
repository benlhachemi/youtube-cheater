const openYoutube = async (page) => {
    try{
        await page.goto('https://www.youtube.com', {waitUntil: 'domcontentloaded', timeout: '200000'})
        return true
    }catch(err){
        console.log(`new ERROR ===> ${err}`)
        return false
    }
}

module.exports = openYoutube