import { Document } from 'mongoose'

export interface Users extends Document {
    username: string
    password: string
    displayname: string
    created_at: Date
}
