import { Router , Request , Response } from 'express'
const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

router.use('/echo', require('./echo'))
router.use('/admin', require('./admin'))

module.exports = router
