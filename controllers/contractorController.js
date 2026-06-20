const Contractors = require('../models/contractorModel')

exports.addContractor = async (req, res) => {
    console.log("Inside add contractor");
    console.log(req.body);
    const { name, phone, email, trade, type, location, date, notes, status } = req.body
    console.log(name, phone, email, trade, type, location, date, notes, status );
    try {
        const existingContractor = await Contractors.findOne({email})
        if(existingContractor){
            res.status(401).json({message:"contractor already existing..."})
        }
        else{
            const newContractor = new Contractors({
             name, phone, email, trade, type, location, date, notes, status 
        })
        await newContractor.save()
        res.status(200).json({ message: "Add Contractor successfully...", newContractor })
        }
    }
    catch (err) {
        res.status(500).json({ message: "Server error", err });
    }
}

//View Contractor 
exports.viewContractor = async (req, res) => {
    console.log("Inside the view Contractor");
    try {
        const viewContractor = await Contractors.find()
        res.status(200).json({ message: "Contractor Fetched", viewContractor })    
    }
    catch (err) {
        res.status(500).json({ message: "Server Err", err })
    }
}

//User Profile Updation 
exports.updateContractor=async(req,res)=>{
    console.log("Inside Update Contractor");
    console.log(req.params);
    const {id} = req.params
    console.log(id);
    const { name, phone, email, trade, type, location, date, notes, status } = req.body
    try{
        const updateContractor = await Contractors.findByIdAndUpdate(id,{name, phone, email, trade, type, location, date, notes, status},{ new: true})
        res.status(200).json({message:"Contractor Details updated successfully...",updateContractor})
    }
    catch(err){
        res.status(500).json({message:"Server err",err})
    }
}

//Delete a Contractor 
exports.deleteAContractor=async(req,res)=>{
    console.log("Inside Delete Contractor");
    const {id}=req.params
    try{
        const Contractor = await Contractors.deleteOne({_id:id})
        res.status(200).json({message:"Contractor deleted successfully",Contractor})
    }
    catch(err){
        res.status(500).json({message:"Server err",err})
    }
}