const workdone = require('../models/workdoneModel')

exports.addWork = async (req, res) => {
    console.log("Inside add work");
    console.log(req.body);
    const { projectname, type, location, date, status } = req.body
    const uploadedImage = req.file ? req.file.filename : req.body.uploadedImage
    console.log(projectname, type, location, date, status, uploadedImage);

    try {
        const existingWork = await workdone.findOne({ projectname })
        if (existingWork) {
            res.status(401).json({ message: "Work already existing..." })
        }
        else {
            const newWork = new workdone({
                projectname, type, location, date, status, uploadedImage
            })
            await newWork.save()
            res.status(200).json({ message: "Work added successfully...", newWork })
        }
    }
    catch (err) {
        res.status(500).json({ message: "Server error", err });
    }
}

//View Work History
exports.viewWorkHistory = async (req, res) => {
    console.log("Inside the view Work History");
    try {
        const history = await workdone.find()
        res.status(200).json({ message: "Request work Fetched", history })    
    }
    catch (err) {
        res.status(500).json({ message: "Server Err", err })
    }
}