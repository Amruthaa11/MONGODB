// 1
db.reviews.insertMany([
  {id:1,course_name:"MongoDB",student_name:"A",rating:5,likes_count:20,review_date:new Date()},
  {id:2,course_name:"Python",student_name:"B",rating:3,likes_count:5,review_date:new Date()},
  {id:3,course_name:"MongoDB",student_name:"C",rating:4,likes_count:15,review_date:new Date()},
  {id:4,course_name:"Java",student_name:"D",rating:1,likes_count:2,review_date:new Date("2023-01-01")},
  {id:5,course_name:"MongoDB",student_name:"E",rating:5,likes_count:30,review_date:new Date()}
])

// 2
db.reviews.find({rating:{$gt:4}, likes_count:{$gt:10}})

// 3
db.reviews.updateMany(
  {course_name:/MongoDB/},
  {$set:{is_verified_purchase:true}}
)

// 4
db.reviews.deleteMany({
  review_date:{$lt:new Date("2024-01-01")},
  rating:1
})

// 5
db.reviews.find({}, {course_name:1,student_name:1,rating:1,_id:0})
.sort({rating:-1})
