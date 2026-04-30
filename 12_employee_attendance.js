// 1
db.attendance.insertMany([
  {emp_id:1,emp_name:"A",department:"IT",date:new Date(),status:"Absent",check_in_time:null},
  {emp_id:2,emp_name:"B",department:"HR",date:new Date(),status:"Present",check_in_time:new Date()},
  {emp_id:3,emp_name:"C",department:"IT",date:new Date(),status:"Leave",check_in_time:null},
  {emp_id:4,emp_name:"D",department:"IT",date:new Date(),status:"Absent",check_in_time:null},
  {emp_id:5,emp_name:"E",department:"Sales",date:new Date(),status:"Present",check_in_time:new Date()}
])

// 2
db.attendance.find({status:"Absent", department:"IT"})

// 3
db.attendance.updateMany(
  {check_in_time:{$ne:null}},
  {$set:{status:"Present"}}
)

// 4
db.attendance.deleteMany({
  date:{$lt:new Date("2024-01-01")},
  status:"Leave"
})

// 5
db.attendance.find({status:"Present"}).sort({date:1})
