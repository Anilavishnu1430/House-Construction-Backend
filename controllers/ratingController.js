const Rating = require('../models/rateModel')

exports.addRating = async (req, res) => {
    console.log("Inside add Rating");
    console.log(req.body);
    const { rating, feedback } = req.body
    const email = req.payload
    console.log(email, rating, feedback);

    try {
        const existingRating = await Rating.findOne({ email })
        if (existingRating) {
            res.status(401).json({ message: "You have already submitted a rating" })
        }
        else {
            const newRating = new Rating({
                email, rating, feedback
            })
            await newRating.save()
            res.status(200).json({ message: "Rating added successfully...", newRating })
        }
    }
    catch (err) {
        res.status(500).json({ message: "Server error", err });
    }
}