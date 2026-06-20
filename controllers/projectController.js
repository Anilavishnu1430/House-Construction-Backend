const projects = require('../models/projectModel')
 const Stripe = require('stripe')(process.env.stripeKey);

exports.addProject=async(req,res)=>{
    console.log("Inside add Project");
    console.log(req.body);
    const { projectname,location,type,plotsize,direction,price,imageUrl} =req.body
    console.log(req.files);
    const uploadedImages = []
    req.files.map(item=>uploadedImages.push(item.filename))
    console.log(projectname,location,type,plotsize,direction,price,imageUrl,uploadedImages);

    const existingProject = await projects.findOne({projectname})
    if(existingProject){
        res.status(401).json({message:"project already existing..."})
    }
    else{
        const newProject = projects({
            projectname,location,type,plotsize,direction,price,imageUrl,uploadedImages
        })
        await newProject.save()
        res.status(200).json({message:"Project added successfully...",newProject})
    }
}

//View Project
exports.viewProject=async(req,res)=>{
    console.log("Inside the view project");
    console.log(req.query);
    searchKey = req.query.search
    try{
        const query={
            projectname:{
                $regex:searchKey,
                $options:"i"
            }
        }
        const viewProject = await projects.find(query)
        res.status(200).json({message:"All Projects Fetched",viewProject})
    }
    catch(err){
        res.status(500).json({message:"Server Err",err})
    }
}

//GET a Project
exports.getAProject=async(req,res)=>{
    console.log("Inside the project");
    const { id } = req.params
    try{
        const project = await projects.findOne({_id:id})
        res.status(200).json({message:"Project Fetched",project})
    }
    catch(err){
        res.status(500).json({message:"Server Err",err})
    }
}

exports.makePayment=async(req,res)=>{
    console.log("Inside Payment");
    const {project}=req.body
    
    try {
    const session = await Stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: `Construction Project - ${project.projectname}`,
              description: `Location: ${project.location}`,
            },
            unit_amount: Math.round(5000 * 100), // cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:5173/payment-success",
      cancel_url: "http://localhost:5173/payment-error",
      metadata: {
        projectId: project._id?.toString(),
        projectname: project.projectname,
        location: project.location,
        type: project.type,
        plotsize: project.plotsize,
        direction: project.direction,
        price: project.price,
        email: req.payload // if you’re passing user email in JWT payload
      },
    });

    console.log(session);
    res.status(200).json({ message: "Payment session created", session });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", err });
  }
}