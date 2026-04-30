// 1
db.equipment.insertMany([
  {id:1,equip_name:"Treadmill",condition:"Good",purchase_date:new Date("2018-01-01"),last_maintenance_date:new Date("2025-02-01")},
  {id:2,equip_name:"Cycle",condition:"NeedsService",purchase_date:new Date("2016-01-01"),last_maintenance_date:new Date("2024-01-01")},
  {id:3,equip_name:"Weights",condition:"OutOfOrder",purchase_date:new Date("2010-01-01"),last_maintenance_date:new Date("2023-01-01")},
  {id:4,equip_name:"Bench",condition:"Good",purchase_date:new Date("2020-01-01"),last_maintenance_date:new Date("2025-05-01")},
  {id:5,equip_name:"Stepper",condition:"NeedsService",purchase_date:new Date("2014-01-01"),last_maintenance_date:new Date("2024-06-01")}
])

// 2
db.equipment.find({condition:{$in:["NeedsService","OutOfOrder"]}})

// 3
db.equipment.updateMany(
  {last_maintenance_date:{$gt:new Date("2025-01-01")}},
  {$set:{condition:"Good"}}
)

// 4
db.equipment.deleteMany({
  purchase_date:{$lt:new Date("2015-01-01")},
  condition:"OutOfOrder"
})

// 5
db.equipment.find().sort({next_maintenance_date:1})
