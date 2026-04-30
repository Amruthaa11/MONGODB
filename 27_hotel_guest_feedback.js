// 1
db.feedback.insertMany([
  {id:1,hotel_name:"HotelA",cleanliness_rating:5,service_rating:4,overall_rating:5,feedback_date:new Date(),would_recommend:true},
  {id:2,hotel_name:"HotelB",cleanliness_rating:2,service_rating:2,overall_rating:2,feedback_date:new Date(),would_recommend:false},
  {id:3,hotel_name:"HotelA",cleanliness_rating:4,service_rating:5,overall_rating:4,feedback_date:new Date(),would_recommend:true},
  {id:4,hotel_name:"HotelC",cleanliness_rating:1,service_rating:2,overall_rating:1,feedback_date:new Date("2022-01-01"),would_recommend:false},
  {id:5,hotel_name:"HotelB",cleanliness_rating:3,service_rating:3,overall_rating:3,feedback_date:new Date(),would_recommend:true}
])

// 2
db.feedback.find({
  overall_rating:{$lt:3},
  would_recommend:false
})

// 3
db.feedback.updateMany(
  {overall_rating:{$gt:4}},
  {$set:{would_recommend:true}}
)

// 4
db.feedback.deleteMany({
  feedback_date:{$lt:new Date("2023-01-01")},
  overall_rating:1
})

// 5
db.feedback.aggregate([
  {$group:{
    _id:"$hotel_name",
    avg_cleanliness:{$avg:"$cleanliness_rating"},
    avg_service:{$avg:"$service_rating"}
  }}
])
