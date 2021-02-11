const short = require('short-uuid');
const ShortURLModel = require('./urlModel');
const host = process.env.HOST;

const createShortUrlHandler = async (req, res) => {
    var shorturl = short.generate();
    const newRecord = new ShortURLModel({
        full: req.body.full,
        short: shorturl
    })
    await newRecord.save()
    const responseData = {
        "url": req.body.full,
        "urlHash": shorturl,
        "shortendurl": `${host}/${shorturl}`
    }
    res.send(responseData)

}

const redirectHandler = async (req, res) => {
    const shortID = req.params.urlHash;
    const rec = await ShortURLModel.findOne({
        short: shortID
    })
    if (!rec) {
        res.sendStatus(404)
    }
    res.redirect(rec.full);
}

module.exports = {
    createShortUrlHandler,
    redirectHandler
}