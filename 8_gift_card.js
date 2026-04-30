// 1
db.giftcards.insertOne({
  card_id:1,
  recipient_name:"Anu",
  sender_name:"Ravi",
  amount:500,
  purchase_date:new Date(),
  expiry_date:new Date("2026-01-01"),
  is_used:false
})

// 2
db.giftcards.insertMany([
  {card_id:2,recipient_name:"Meena",sender_name:"Raj",amount:1000,purchase_date:new Date(),expiry_date:new Date("2026-05-01"),is_used:false},
  {card_id:3,recipient_name:"Asha",sender_name:"Vikram",amount:700,purchase_date:new Date(),expiry_date:new Date("2025-12-01"),is_used:true},
  {card_id:4,recipient_name:"Rohit",sender_name:"Sam",amount:800,purchase_date:new Date(),expiry_date:new Date("2026-06-01"),is_used:false},
  {card_id:5,recipient_name:"Neha",sender_name:"Ajay",amount:900,purchase_date:new Date(),expiry_date:new Date("2025-11-01"),is_used:false},
  {card_id:6,recipient_name:"Kiran",sender_name:"Dev",amount:600,purchase_date:new Date(),expiry_date:new Date("2026-07-01"),is_used:true}
])

// 3
db.giftcards.find({
  is_used:false,
  expiry_date:{$gt:new Date()}
})

// 4
db.giftcards.find({}, {recipient_name:1, amount:1, expiry_date:1, _id:0})

// 5
db.giftcards.deleteOne({card_id:1})
