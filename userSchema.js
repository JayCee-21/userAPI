import { Schema as _Schema, model } from 'mongoose'
const Schema = _Schema


const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    gmail: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    profile: {
        country : {
            type: String,
            required: false
        },
        Number: {
            type: Number,
            required:false
        },
        Street: {
            type: String,
            required: false
        },
        Bio: {
            type: String,
            required: false
        }
    }
}, {timestamps: true})

const User = model('user', userSchema)

export default User
