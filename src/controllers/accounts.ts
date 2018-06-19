import { Router , Request , Response } from 'express'
const router = Router()
import { Users } from '../interfaces/Users'
import { UsersModel } from '../models/UsersModel'
import passwordHash from '../helper/passwordHash.js'

router.get('/', (req: Request, res: Response) => {
    res.send('account app');
});

router.get('/join', (req: Request, res: Response) => {
    res.render('accounts/join');
});

router.post('/join', (req: Request, res: Response) => {
    const User: Users = new UsersModel({
        username : req.body.username,
        password : passwordHash(req.body.password),
        displayname : req.body.displayname
    });
    User.save( () => {
        res.send('<script>alert("회원가입 성공");location.href="/accounts/login";</script>');
    });
});

router.get('/login', (req: Request, res: Response) => {
    res.render('accounts/login');
});

module.exports = router;
