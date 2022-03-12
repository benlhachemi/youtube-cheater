const openYoutube = async (page) => {
    try{
        await page.goto('http://youtube.com', {waitUntil: 'domcontentloaded'})
        return true
    }catch(err){
        console.log(`new ERROR ===> ${err}`)
        return false
    }
}

module.exports = openYoutube