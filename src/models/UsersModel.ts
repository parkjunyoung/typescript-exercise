import * as mongoose from 'mongoose'
import * as autoIncrement from 'mongoose-auto-increment'
import { Users } from '../interfaces/Users'

const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required: [true, '아이디는 필수입니다.']
    },
    password : {
        type : String,
        required: [true, '패스워드는 필수입니다.']
    },
    displayname : String,
    created_at : {
        type : Date,
        default : Date.now()
    }
});

UserSchema.virtual('getDate').get(function() {
    const date: Date = new Date(this.created_at)
    return {
        year : date.getFullYear(),
        month : date.getMonth() + 1,
        day : date.getDate()
    }
})

UserSchema.plugin(autoIncrement.plugin , { model : 'users' , field : 'id' , startAt : 1 })
export const UsersModel = mongoose.model<Users>('users', UserSchema)