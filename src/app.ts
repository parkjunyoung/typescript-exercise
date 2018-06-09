import * as express from 'express'
import * as path from 'path'
import * as logger from 'morgan'
import * as bodyParser from 'body-parser'

require('./models/connection')()

const app = express()

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'ejs')

// 미들웨어 셋팅
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(require('./controllers'))

interface Err extends Error {
    status: number
    data?: any
}
// catch 404 and forward to error handler
app.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {
    let err = new Error('Not Found') as Err
    err.status = 404
    next(err)
})
// error handle
app.use(function (err: Err, req: express.Request, res: express.Response, next: express.NextFunction) {
  // render the error page
    res.status(err.status || 500)
    res.json({
        message: err.message,
        data: err.data
    })
})
export default app
