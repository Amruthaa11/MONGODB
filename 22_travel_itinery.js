// 1
db.itinerary.insertMany([
  {id:1,customer_name:"A",destination:"Goa",trip_start_date:new Date(),trip_end_date:new Date("2026-01-10"),budget:60000,activities:["Beach","Party"],booking_status:"Confirmed"},
  {id:2,customer_name:"B",destination:"Manali",trip_start_date:new Date(),trip_end_date:new Date("2025-12-01"),budget:40000,activities:["Trekking"],booking_status:"Pending"},
  {id:3,customer_name:"C",destination:"Ooty",trip_start_date:new Date("2023-01-01"),trip_end_date:new Date("2023-01-10"),budget:30000,activities:["Sightseeing"],booking_status:"Cancelled"},
  {id:4,customer_name:"D",destination:"Kerala",trip_start_date:new Date(),trip_end_date:new Date("2026-03-01"),budget:70000,activities:["Backwaters","Trekking"],booking_status:"Confirmed"},
  {id:5,customer_name:"E",destination:"Delhi",trip_start_date:new Date(),trip_end_date:new Date("2026-02-01"),budget:20000,activities:["Shopping"],booking_status:"Pending"}
])

// 2
db.itinerary.find({
  booking_status:"Confirmed",
  budget:{$gt:50000}
})

// 3
db.itinerary.updateMany(
  {trip_start_date:{$lt:new Date()}},
  {$set:{booking_status:"Cancelled"}}
)

// 4
db.itinerary.deleteMany({
  booking_status:"Cancelled",
  trip_end_date:{$lt:new Date("2024-01-01")}
})

// 5
db.itinerary.find({activities:"Trekking"})
