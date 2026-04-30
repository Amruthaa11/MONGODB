// 1
db.bookings.insertMany([
  {id:1,event_name:"Concert",event_date:new Date("2026-11-01"),customer_name:"A",ticket_type:"VIP",number_of_tickets:2,total_price:5000,booking_date:new Date(),payment_status:"Paid"},
  {id:2,event_name:"Show",event_date:new Date("2025-01-01"),customer_name:"B",ticket_type:"General",number_of_tickets:1,total_price:1000,booking_date:new Date(),payment_status:"Pending"},
  {id:3,event_name:"Fest",event_date:new Date("2023-01-01"),customer_name:"C",ticket_type:"Student",number_of_tickets:3,total_price:1500,booking_date:new Date(),payment_status:"Paid"},
  {id:4,event_name:"Expo",event_date:new Date("2026-12-01"),customer_name:"D",ticket_type:"VIP",number_of_tickets:2,total_price:6000,booking_date:new Date(),payment_status:"Paid"},
  {id:5,event_name:"Meet",event_date:new Date("2026-02-01"),customer_name:"E",ticket_type:"General",number_of_tickets:1,total_price:1200,booking_date:new Date(),payment_status:"Pending"}
])

// 2
db.bookings.find({
  event_date:{$gt:new Date("2026-10-01")},
  payment_status:"Paid"
})

// 3
db.bookings.updateMany(
  {event_date:{$lt:new Date()}, payment_status:"Paid"},
  {$set:{payment_status:"Refunded"}}
)

// 4
db.bookings.deleteMany({
  payment_status:"Pending",
  booking_date:{$lt:new Date("2024-01-01")}
})

// 5
db.bookings.aggregate([
  {$group:{_id:"$event_name", total_tickets:{$sum:"$number_of_tickets"}}}
])
