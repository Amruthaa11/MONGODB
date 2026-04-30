// 1
db.loans.insertMany([
  {id:1,applicant_name:"A",loan_type:"Home",loan_amount:500000,interest_rate:8,tenure:20,application_date:new Date(),approval_status:"Pending",credit_score:750},
  {id:2,applicant_name:"B",loan_type:"Car",loan_amount:200000,interest_rate:9,tenure:5,application_date:new Date(),approval_status:"Approved",credit_score:800},
  {id:3,applicant_name:"C",loan_type:"Personal",loan_amount:100000,interest_rate:12,tenure:3,application_date:new Date(),approval_status:"Pending",credit_score:720},
  {id:4,applicant_name:"D",loan_type:"Home",loan_amount:600000,interest_rate:7,tenure:25,application_date:new Date("2022-01-01"),approval_status:"Rejected",credit_score:650},
  {id:5,applicant_name:"E",loan_type:"Car",loan_amount:300000,interest_rate:10,tenure:6,application_date:new Date(),approval_status:"Pending",credit_score:780}
])

// 2
db.loans.find({
  approval_status:"Pending",
  credit_score:{$gt:700}
})

// 3
db.loans.updateMany(
  {credit_score:{$gt:750}},
  {$set:{approval_status:"Approved"}}
)

// 4
db.loans.deleteMany({
  application_date:{$lt:new Date("2023-01-01")},
  approval_status:"Rejected"
})

// 5
db.loans.aggregate([
  {$match:{approval_status:"Approved"}},
  {$group:{_id:"$loan_type", avg_amount:{$avg:"$loan_amount"}}}
])
