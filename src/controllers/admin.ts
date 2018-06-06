import { Router , Request , Response } from 'express'
const router = Router()

router.get('/' , (req: Request, res: Response) => {
    res.json({
        hello : '123'
    })
})

module.exports = router
