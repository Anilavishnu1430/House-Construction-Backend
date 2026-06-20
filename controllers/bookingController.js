// const booking = require('../models/bookingModel')
// const Stripe = require('stripe')(process.env.stripeKey);

// exports.addbooking = async (req, res) => {
//     console.log("Inside add Booking");
//     console.log(req.body);
//     const { type, date, stage, unit, area, description, fullname, phone, email } = req.body
//     console.log(type, date, stage, unit, area, description, fullname, phone, email);

//     try {
//         const newBooking = new booking({
//              type, date, stage, unit, area, description, fullname, phone, email,advanceAmount: 5000,status: "Pending"
//         })
//         await newBooking.save()
//         res.status(200).json({message:"booking done",newBooking})
//     }
//     catch (err) {
//         res.status(500).json({ message: "Server error", err });
//     }
// }

// exports.makePayment=async(req,res)=>{
//     console.log("Inside Payment");
//     const email=req.payload
//     const {booking}=req.body
//     try{
//         const bookingPayment = await booknows.findByIdAndUpdate(booking.id,{
//                         type:booking.type,
//                         date:booking.date,
//                         stage:booking.stage,
//                         unit:booking.unit,
//                         area:booking.area,
//                         description:booking.description,
//                         fullname:booking.fullname,
//                         phone:booking.phone,
//                         email:booking.email,
//                         advanceAmount:booking.advanceAmount,
//                         status:"Payed"

//         },{new :true})

//         const line_items = [
//         {
//             price_data: {
//             currency: "usd",
//             product_data: {
//                 name: booking.type,
//                 metadata: {
//                         type:booking.type,
//                         date:booking.date,
//                         stage:booking.stage,
//                         unit:booking.unit,
//                         area:booking.area,
//                         description:booking.description,
//                         fullname:booking.fullname,
//                         phone:booking.phone,
//                         email:booking.email,
//                         advanceAmount:booking.advanceAmount,
//                         status:"Payed"
//                 },
//             },
//             unit_amount: Math.round(Number(booking.advanceAmount) * 100),
//             },
//             quantity: 1,
//         },
//         ];
//         const session = await Stripe.checkout.sessions.create({
//         payment_method_types: ["card"],
//         success_url: "https://book-store-frontend-seven-sand.vercel.app/payment-success",
//         cancel_url: "https://book-store-frontend-seven-sand.vercel.app/payment-error",
//         line_items,
//         mode: "payment",
//         });
//         console.log(session)

//         res.status(200).json({message:"Payment Success",session})
//     }
//     catch(err){
//         res.status(500).json({message:"Server err",err})
//     }
// }


// exports.makePayment = async (req, res) => {
//   console.log("Inside Payment");
//   const { booking } = req.body;

//   try {
//     // Step 1: Create Stripe Checkout Session
//     const session = await Stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price_data: {
//             currency: "usd",
//             product_data: {
//               name: `Construction Project - ${booking.type}`,
//               description: booking.description,
//             },
//             unit_amount: booking.advanceAmount * 100, // cents
//           },
//           quantity: 1,
//         },
//       ],
//       mode: "payment",
//       success_url: "http://localhost:5173/payment-success",
//       cancel_url: "http://localhost:5173/payment-error",
//       metadata: {
//         bookingId: booking._id.toString(),
//         fullname: booking.fullname,
//         phone: booking.phone,
//         email: booking.email,
//       },
//     });

//     res.status(200).json({ message: "Stripe session created", session });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error", err });
//   }
// };