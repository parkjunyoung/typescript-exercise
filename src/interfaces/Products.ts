import { Document } from 'mongoose'

export interface Products extends Document {
    name: string
    price: number
    description: string
    created_at: Date
}