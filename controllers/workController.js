const requestworks = require('../models/workModel')

exports.addRequestWork = async (req, res) => {
    console.log("Inside add Request work");
    console.log(req.body);
    const { name, trade, type, location, date, notes, projectname } = req.body
    console.log(name, trade, type, location, date, notes, projectname);

    try {
        const newWork = new requestworks({
             name, trade, type, location, date, notes, projectname
        })
        await newWork.save()
        res.status(200).json({ message: "request work successfully...", newWork })
    }
    catch (err) {
        res.status(500).json({ message: "Server error", err });
    }
}

//View Request Work
exports.viewRequestWork = async (req, res) => {
    console.log("Inside the view Request Work");
    try {
        const viewRequestWork = await requestworks.find()
        res.status(200).json({ message: "Request work Fetched", viewRequestWork })    
    }
    catch (err) {
        res.status(500).json({ message: "Server Err", err })
    }
}

//Approve a Request 
exports.approveRequest=async(req,res)=>{
    console.log("Inside Approve Request");
    const {id}=req.params
    try{
        const request = await requestworks.findOne({_id:id})
        if(!request){
            res.status(404).json({message:"Request Not Found"})
        }
        request.status = "approved"
        await request.save()
        res.status(200).json({message:"status updated successfully",request})
    }
    catch(err){
        res.status(500).json({message:"Server err",err})
    }
}
//Reject a Request 
exports.rejectRequest=async(req,res)=>{
    console.log("Inside Reject Request");
    const {id}=req.params
    try{
        const request = await requestworks.findOne({_id:id})
        if(!request){
            res.status(404).json({message:"Request Not Found"})
        }
        request.status = "rejected"
        await request.save()
        res.status(200).json({message:"status updated successfully",request})
    }
    catch(err){
        res.status(500).json({message:"Server err",err})
    }
}