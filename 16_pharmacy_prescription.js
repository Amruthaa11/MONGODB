// 1
db.prescriptions.insertMany([
  {id:1,patient_name:"A",medicine_name:"Med1",issue_date:new Date(),expiry_date:new Date("2026-01-01"),status:"Active"},
  {id:2,patient_name:"B",medicine_name:"Med2",issue_date:new Date(),expiry_date:new Date("2024-01-01"),status:"Expired"},
  {id:3,patient_name:"C",medicine_name:"Med3",issue_date:new Date(),expiry_date:new Date("2026-05-01"),status:"Active"},
  {id:4,patient_name:"D",medicine_name:"Med4",issue_date:new Date("2023-01-01"),expiry_date:new Date("2024-01-01"),status:"Fulfilled"},
  {id:5,patient_name:"E",medicine_name:"Med5",issue_date:new Date(),expiry_date:new Date("2026-06-01"),status:"Active"}
])

// 2
db.prescriptions.find({
  status:"Active",
  expiry_date:{$gt:new Date()}
})

// 3
db.prescriptions.updateMany(
  {expiry_date:{$lt:new Date()}},
  {$set:{status:"Expired"}}
)

// 4
db.prescriptions.deleteMany({
  status:"Fulfilled",
  issue_date:{$lt:new Date("2024-01-01")}
})

// 5
db.prescriptions.find({}, {patient_name:1,medicine_name:1,status:1,_id:0})
.sort({issue_date:-1})
