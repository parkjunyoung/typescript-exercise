import mongoose = require('mongoose')
import * as autoIncrement from 'mongoose-auto-increment'

module.exports = () => {
    mongoose.Promise = global.Promise
    const db: mongoose.Connection = mongoose.connection
    db.on('error', console.error)
    db.once('open', () => {
        console.log('mongodb connect')
    })
    mongoose.connect('mongodb://127.0.0.1:27017/fastcampus9', { useMongoClient: true })
    autoIncrement.initialize(db)
}
