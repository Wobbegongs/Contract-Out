const serviceWorker = {};


serviceWorker.getBundle = (req, res, next) => {
    console.log('sending')
    let tempBundle = req.app.locals
    res.send(tempBundle)
    console.log('sent')
}

module.exports = serviceWorker