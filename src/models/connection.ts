import * as mongoose from 'mongoose'
import * as autoIncrement from 'mongoose-auto-increment'

module.exports = () => {
    const db = mongoose.connection
    db.on('error', console.error)
    db.once('open', () => {
        console.log('mongodb connect')
    })
    const connect: mongoose.MongooseThenable = mongoose.connect('mongodb://127.0.0.1:27017/fastcampus', { useMongoClient: true })
}
