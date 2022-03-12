//imports
const watchFromHomepage = require('./watchFromHomepage')
const watchFromRelated  = require('./watchFromRelated')
const watchFromSearch   = require('./watchFromSearch')

//global variables
const actions = ['homepage', 'related', 'search']

//main
const performAction = async (page) => {
    const iterations = Math.floor(Math.random()*3)
    console.log(`Performing human actions (${iterations+1} actions)`)
    for(let i=0; i<=iterations; i++){
        const random_action = actions[Math.floor(Math.random()*actions.length)]
        random_action === 'homepage' ? await watchFromHomepage(page) : random_action === 'related' ? await watchFromRelated(page) : random_action === 'search' && await watchFromSearch(page)
    }
    return true
}

module.exports = performAction