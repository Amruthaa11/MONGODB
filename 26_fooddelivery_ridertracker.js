// 1
db.riders.insertMany([
  {id:1,rider_name:"A",city:"BLR",vehicle_type:"Bike",total_deliveries:30,average_rating:4.6,current_status:"Available"},
  {id:2,rider_name:"B",city:"BLR",vehicle_type:"Scooter",total_deliveries:10,average_rating:4.2,current_status:"Offline"},
  {id:3,rider_name:"C",city:"BLR",vehicle_type:"Bike",total_deliveries:50,average_rating:4.8,current_status:"Available"},
  {id:4,rider_name:"D",city:"BLR",vehicle_type:"Bike",total_deliveries:0,average_rating:3.5,current_status:"Offline"},
  {id:5,rider_name:"E",city:"BLR",vehicle_type:"Scooter",total_deliveries:25,average_rating:4.7,current_status:"Busy"}
])

// 2
db.riders.find({
  current_status:"Available",
  average_rating:{$gt:4.5}
})

// 3
db.riders.updateMany(
  {total_deliveries:{$gt:20}},
  {$inc:{earnings_today:100}}
)

// 4
db.riders.deleteMany({
  current_status:"Offline",
  total_deliveries:0
})

// 5
db.riders.createIndex({delivery_history:1})
