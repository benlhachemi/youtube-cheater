//imports
const watchFromHomepage = require('./watchFromHomepage')
const watchFromRelated  = require('./watchFromRelated')
const watchFromSearch   = require('./watchFromSearch')

//global variables
const source = ['homepage', 'related', 'search']

//main
const watchVideo = async (page, videoId) => {
    console.log('watching your video')
    const random_source = source[Math.floor(Math.random()*source.length)]
    random_source === 'homepage' ? await watchFromHomepage(page, videoId) : random_source === 'related' ? await watchFromRelated(page, videoId) : random_source === 'search' && await watchFromSearch(page, videoId)
    return true
}

module.exports = watchVideo