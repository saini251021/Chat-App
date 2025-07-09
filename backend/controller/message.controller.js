import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js"
const sendMessage = async (req, res) => {
    console.log(req.params.id)
    console.log(req.body.message)
    try {
        const receiverId = req.params.id;
        const messageText = req.body.message;
        const senderId = req.user._id

        let conversation = await Conversation.findOne({
            members: { $all: [senderId, receiverId] }
        })

        if (!conversation) {
            conversation = await Conversation.create({
                members: [senderId, receiverId]
            })
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            message: messageText
        })

        if (newMessage) {
            conversation.message.push(newMessage._id)
        }

        // await conversation.save()
        // await newMessage.save();

        await Promise.all([conversation.save(), newMessage.save()])
        res.status(201).json({
            message: "message sent successfully",
            newMessage
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: "internal server error" })
    }
    // console.log("message Sent")
    // console.log(req.body.message)
}

const getMessage = async (req, res) => {
    try {
        console.log(req.params.id)
        const receiverId = req.params.id;
        const senderId = req.user._id;
        console.log(senderId)
        let conversation = await Conversation.findOne({
            members: { $all: [senderId, receiverId] }
        }).populate("message")

        if (!conversation) {
            return res.status(201).json([]);
        }

        const messages=conversation.message;
        res.status(201).json(messages)
    }
    catch (error) {
        console.log("error in getMessage: ", error);
        res.status(500).json({
            error: "internal server error"
        })
    }
}

export { sendMessage, getMessage };