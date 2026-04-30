// 1
db.defects.insertMany([
  {id:1,product_name:"P1",defect_type:"Functional",severity:"High",quantity_affected:10,root_cause:"Design",status:"Open",detection_date:new Date()},
  {id:2,product_name:"P2",defect_type:"Cosmetic",severity:"Low",quantity_affected:5,root_cause:"Paint",status:"Resolved",detection_date:new Date("2021-01-01")},
  {id:3,product_name:"P3",defect_type:"Safety",severity:"Medium",quantity_affected:20,root_cause:"Material",status:"Open",detection_date:new Date()},
  {id:4,product_name:"P4",defect_type:"Functional",severity:"High",quantity_affected:15,root_cause:"Assembly",status:"Investigating",detection_date:new Date()},
  {id:5,product_name:"P5",defect_type:"Cosmetic",severity:"Low",quantity_affected:8,root_cause:"Packaging",status:"Resolved",detection_date:new Date()}
])

// 2
db.defects.find({severity:"High", status:"Open"})

// 3
db.defects.updateMany(
  {root_cause:{$ne:null}},
  {$set:{status:"Resolved", resolution_date:new Date()}}
)

// 4
db.defects.deleteMany({
  detection_date:{$lt:new Date("2022-01-01")},
  status:"Resolved"
})

// 5
db.defects.aggregate([
  {$group:{_id:"$defect_type", total_qty:{$sum:"$quantity_affected"}}},
  {$sort:{total_qty:-1}}
])
