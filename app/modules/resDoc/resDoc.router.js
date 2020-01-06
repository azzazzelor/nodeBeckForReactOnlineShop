let resDocContriller = require('./resDocController')

module.exports = (app) => {
    app.get(
        '/',
        resDocContriller.sendDoc
    )
    // app.get(
    //     '/privet',
    //     resDocContriller.sayPrivet
    // )
}