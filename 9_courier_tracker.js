// 1
db.parcels.insertOne({
  parcel_id:1,
  sender_name:"Ravi",
  receiver_name:"Anu",
  weight:2,
  shipping_cost:150,
  booking_date:new Date(),
  delivery_status:"Pending"
})

// 2
db.parcels.insertMany([
  {parcel_id:2,sender_name:"Raj",receiver_name:"Meena",weight:3,shipping_cost:200,booking_date:new Date(),delivery_status:"Shipped"},
  {parcel_id:3,sender_name:"Asha",receiver_name:"Rohit",weight:1,shipping_cost:100,booking_date:new Date(),delivery_status:"Pending"},
  {parcel_id:4,sender_name:"Kiran",receiver_name:"Neha",weight:4,shipping_cost:250,booking_date:new Date(),delivery_status:"Delivered"},
  {parcel_id:5,sender_name:"Sam",receiver_name:"Dev",weight:2,shipping_cost:180,booking_date:new Date(),delivery_status:"Pending"},
  {parcel_id:6,sender_name:"Ajay",receiver_name:"Priya",weight:5,shipping_cost:300,booking_date:new Date(),delivery_status:"Shipped"}
])

// 3
db.parcels.find({delivery_status:"Pending"})

// 4
db.parcels.find({}, {sender_name:1, receiver_name:1, shipping_cost:1, _id:0})

// 5
db.parcels.deleteOne({parcel_id:1})
