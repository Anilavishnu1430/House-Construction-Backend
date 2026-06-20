const Reply = require('../models/replyModel')

exports.addReply = async (req, res) => {
    console.log("Inside add Reply");
    console.log(req.body);
    const { userEmail, message } = req.body
    try {
        const newReply  = new Reply({
            userEmail,message
        })
        await newReply.save()
        res.status(200).json({ message: "Repled successfully...", newReply })
    }
    catch (err) {
        res.status(500).json({ message: "Server error", err });
    }
}

//View Notification
exports.viewReply = async (req, res) => {
    console.log("Inside the view Reply");
    const email = req.payload
    try {
        const viewReply = await Reply.find({ userEmail: email })
        res.status(200).json({ message: "Reply Fetched", viewReply })    
    }
    catch (err) {
        res.status(500).json({ message: "Server Err", err })
    }
}