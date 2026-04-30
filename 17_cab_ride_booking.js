// 1
db.rides.insertMany([
  {ride_id:1,rider_name:"A",driver_name:"X",pickup:"A",drop:"B",ride_date:new Date(),distance_km:12,fare:350,ride_status:"Requested"},
  {ride_id:2,rider_name:"B",driver_name:"Y",pickup:"A",drop:"C",ride_date:new Date(),distance_km:8,fare:200,ride_status:"Completed"},
  {ride_id:3,rider_name:"C",driver_name:"Z",pickup:"D",drop:"E",ride_date:new Date(),distance_km:15,fare:500,ride_status:"Cancelled"},
  {ride_id:4,rider_name:"D",driver_name:"X",pickup:"F",drop:"G",ride_date:new Date(),distance_km:20,fare:600,ride_status:"Requested"},
  {ride_id:5,rider_name:"E",driver_name:"Y",pickup:"H",drop:"I",ride_date:new Date(),distance_km:5,fare:150,ride_status:"Completed"}
])

// 2
db.rides.find({ride_status:"Requested", ride_date:new Date()})

// 3
db.rides.updateMany(
  {drop:{$ne:null}},
  {$set:{ride_status:"Completed"}}
)

// 4
db.rides.deleteMany({
  ride_status:"Cancelled",
  ride_date:{$lt:new Date("2024-06-01")}
})

// 5
db.rides.find({
  distance_km:{$gt:10},
  fare:{$gt:300}
})
