// 1
db.beds.insertMany([
  {bed_id:1,ward_name:"ICU",bed_type:"ICU",is_occupied:false},
  {bed_id:2,ward_name:"General",bed_type:"General",is_occupied:true,patient_name:"A",admission_date:new Date()},
  {bed_id:3,ward_name:"ICU",bed_type:"ICU",is_occupied:false},
  {bed_id:4,ward_name:"Private",bed_type:"Private",is_occupied:true,patient_name:"B",admission_date:new Date()},
  {bed_id:5,ward_name:"ICU",bed_type:"ICU",is_occupied:true,patient_name:"C",admission_date:new Date()}
])

// 2
db.beds.find({is_occupied:false, ward_name:"ICU"})

// 3
db.beds.updateMany(
  {admission_date:new Date()},
  {$set:{is_occupied:true, patient_name:"New Patient"}}
)

// 4
db.beds.deleteMany({
  expected_discharge_date:{$lt:new Date()},
  is_occupied:true
})

// 5
db.beds.find({}, {ward_name:1,bed_type:1,is_occupied:1,_id:0})
.sort({bed_type:1})
