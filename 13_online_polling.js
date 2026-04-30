// 1
db.polls.insertMany([
  {poll_id:1,question:"Q1",options:["A","B"],votes:[10,20],created_date:new Date(),end_date:new Date("2026-01-01"),is_active:true},
  {poll_id:2,question:"Q2",options:["A","B","C"],votes:[5,10,15],created_date:new Date(),end_date:new Date("2025-01-01"),is_active:true},
  {poll_id:3,question:"Q3",options:["A","B","C","D"],votes:[2,4,6,8],created_date:new Date(),end_date:new Date("2026-05-01"),is_active:true},
  {poll_id:4,question:"Q4",options:["A"],votes:[1],created_date:new Date(),end_date:new Date("2023-01-01"),is_active:false},
  {poll_id:5,question:"Q5",options:["A","B","C"],votes:[3,6,9],created_date:new Date(),end_date:new Date("2026-02-01"),is_active:true}
])

// 2
db.polls.find({is_active:true, end_date:{$gt:new Date()}})

// 3
db.polls.updateMany(
  {end_date:{$lt:new Date()}},
  {$set:{is_active:false}}
)

// 4
db.polls.deleteMany({
  created_date:{$lt:new Date("2023-01-01")},
  is_active:false
})

// 5
db.polls.find({
  $expr: { $gt: [ { $size: "$options" }, 3 ] }
})
