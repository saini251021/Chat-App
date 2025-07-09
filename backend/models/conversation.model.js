import mongoose from 'mongoose'
import User from './user.model.js'
import Message from './message.model.js'

const conSchema = new mongoose.Schema({
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: User,
            required: true
        }
    ],
    message:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Message,
            default:[]
        }
    ]
},{timestamps:true})

const conversation = mongoose.model("conversation", conSchema)
export default conversation