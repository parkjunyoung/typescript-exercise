import * as mongoose from 'mongoose'
import * as autoIncrement from 'mongoose-auto-increment'
import { Products } from '../interfaces/Products'

// 생성될 필드명을 정한다.
const ProductsSchema = new mongoose.Schema({
    name : String, // 제품명
    price : Number, // 가격
    description : String, // 설명
    created_at : { // 작성일
        type : Date,
        default : Date.now()
    }
})

ProductsSchema.virtual('getDate').get(function() {
    const date: Date = new Date(this.created_at)
    return {
        year : date.getFullYear(),
        month : date.getMonth() + 1,
        day : date.getDate()
    }
})

// 1씩 증가하는 primary Key를 만든다
// model : 생성할 document 이름
// field : primary key , startAt : 1부터 시작
ProductsSchema.plugin(autoIncrement.plugin , { model : 'products' , field : 'id' , startAt : 1 })
export const ProductsModel = mongoose.model<Products>('products', ProductsSchema)
