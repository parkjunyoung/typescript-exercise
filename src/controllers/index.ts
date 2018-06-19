import { Router , Request , Response } from 'express'
const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

router.use('/echo', require('./echo'))
router.use('/admin', require('./admin'))
router.use('/accounts', require('./accounts'))

module.exports = router
