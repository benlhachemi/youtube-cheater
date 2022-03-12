//imports
const openYoutube   = require('./openYoutube')
const openYoutubeV2 = require('./openYoutubeV2') 

const goToYoutube = async (page) => {
    let youtubeOpened = await openYoutube(page)
    if(!youtubeOpened) youtubeOpened = await openYoutube(page)
    if(!youtubeOpened) youtubeOpened = await openYoutubeV2(page)
    if(!youtubeOpened) youtubeOpened = await openYoutubeV2(page)
    if(!youtubeOpened) return false
    return true
}

module.exports = goToYoutube