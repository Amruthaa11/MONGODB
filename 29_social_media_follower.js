// 1
db.followers.insertMany([
  {id:1,name:"A",engagement_score:90,is_active:true,followed_since:new Date(),interests:["Tech","AI"],last_interaction_date:new Date()},
  {id:2,name:"B",engagement_score:70,is_active:true,followed_since:new Date(),interests:["Food"],last_interaction_date:new Date("2024-01-01")},
  {id:3,name:"C",engagement_score:85,is_active:true,followed_since:new Date(),interests:["Tech"],last_interaction_date:new Date()},
  {id:4,name:"D",engagement_score:10,is_active:false,followed_since:new Date("2021-01-01"),interests:["Travel"],last_interaction_date:new Date("2023-01-01")},
  {id:5,name:"E",engagement_score:95,is_active:true,followed_since:new Date(),interests:["AI"],last_interaction_date:new Date()}
])

// 2
db.followers.find({
  engagement_score:{$gt:80},
  is_active:true
})

// 3
db.followers.updateMany(
  {last_interaction_date:{$lt:new Date("2025-01-01")}},
  {$set:{is_active:false}}
)

// 4
db.followers.deleteMany({
  followed_since:{$lt:new Date("2022-01-01")},
  engagement_score:{$lt:20}
})

// 5
db.followers.aggregate([
  {$unwind:"$interests"},
  {$group:{_id:"$interests", count:{$sum:1}}},
  {$sort:{count:-1}},
  {$limit:1}
])
