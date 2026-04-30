// 1
db.reading.insertMany([
  {id:1,member_name:"A",book_title:"Book1",genre:"Fiction",pages_read:120,total_pages:200,start_date:new Date(),completion_date:null,is_completed:false},
  {id:2,member_name:"B",book_title:"Book2",genre:"NonFiction",pages_read:80,total_pages:150,start_date:new Date(),completion_date:null,is_completed:false},
  {id:3,member_name:"C",book_title:"Book3",genre:"Fiction",pages_read:200,total_pages:200,start_date:new Date(),completion_date:new Date(),is_completed:true},
  {id:4,member_name:"D",book_title:"Book4",genre:"SciFi",pages_read:50,total_pages:300,start_date:new Date(),completion_date:null,is_completed:false},
  {id:5,member_name:"E",book_title:"Book5",genre:"Fiction",pages_read:150,total_pages:150,start_date:new Date(),completion_date:new Date(),is_completed:true}
])

// 2
db.reading.find({is_completed:false, pages_read:{$gt:100}})

// 3
db.reading.updateMany(
  {completion_date:{$ne:null}},
  {$set:{is_completed:true}}
)

// 4
db.reading.deleteMany({
  start_date:{$lt:new Date("2023-01-01")},
  is_completed:false
})

// 5
db.reading.find({genre:"Fiction", is_completed:true})
