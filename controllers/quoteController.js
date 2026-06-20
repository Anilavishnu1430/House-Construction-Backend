const quotes = require('../models/quoteModel')

exports.addQuote = async (req, res) => {
    console.log("Inside add Quote");
    console.log(req.body);
    const { name, mobile, location, city, email, service, message } = req.body

    console.log(name, mobile, location, city, email, service, message);

    try {
        const newQuote = new quotes({
            name, mobile, location, city, email, service, message
        })
        await newQuote.save()
        res.status(200).json({ message: "Quote added successfully...", newQuote })
    }
    catch (err) {
        res.status(500).json({ message: "Server error", err });
    }
}

//View Notification
exports.viewQuote = async (req, res) => {
    console.log("Inside the view quote");
    try {
        const viewQuote = await quotes.find()
        res.status(200).json({ message: "All Quote Fetched", viewQuote })
    }
    catch (err) {
        res.status(500).json({ message: "Server Err", err })
    }
}