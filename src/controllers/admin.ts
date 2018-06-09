import { Router , Request , Response } from 'express'
import { ProductsModel } from '../models/ProductsModel'
const router = Router()

router.get('/' , (req: Request, res: Response) => {
    res.json({
        hello : '123'
    })
})

router.get('/products', async(req: Request, res: Response) => {
    const products = await ProductsModel.find().exec()
    res.render('admin/products' , { products : products })
})

router.get('/products/write', (req: Request, res: Response) => {
    res.render('admin/form', { product : '' })
})

router.post('/products/write', async(req: Request, res: Response) => {
    const product = new ProductsModel({
        name : req.body.name,
        price : req.body.price,
        description : req.body.description
    })
    await product.save()
    res.redirect('/admin/products')
})

router.get('/products/detail/:id' , async(req: Request, res: Response) => {
    const product = await ProductsModel.findOne({ 'id' :  req.params.id }).exec()
    res.render('admin/productsDetail', { product: product })
})

router.get('/products/edit/:id' , async(req: Request, res: Response) => {
    const product = await ProductsModel.findOne({ 'id' :  req.params.id }).exec()
    res.render('admin/form', { product : product })
})

router.post('/products/edit/:id', async(req: Request, res: Response) => {
    const query: Object = {
        name : req.body.name,
        price : req.body.price,
        description : req.body.description
    }
    await ProductsModel.update({ id : req.params.id }, { $set : query }).exec()
    res.redirect('/admin/products/detail/' + req.params.id)
})

module.exports = router
