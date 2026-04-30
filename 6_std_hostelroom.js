// 1. Create collection & insert one document
db.hostel.insertOne({
  student_id: 1,
  name: "Amrutha",
  room_number: 101,
  block_name: "A",
  bed_number: 1,
  check_in_date: new Date("2025-01-10")
})

// 2. Insert many
db.hostel.insertMany([
  {student_id:2,name:"Rahul",room_number:102,block_name:"A",bed_number:2,check_in_date:new Date()},
  {student_id:3,name:"Sneha",room_number:201,block_name:"B",bed_number:1,check_in_date:new Date()},
  {student_id:4,name:"Kiran",room_number:103,block_name:"A",bed_number:1,check_in_date:new Date()},
  {student_id:5,name:"Riya",room_number:202,block_name:"B",bed_number:2,check_in_date:new Date()},
  {student_id:6,name:"Arjun",room_number:104,block_name:"A",bed_number:2,check_in_date:new Date()}
])

// 3. Find block A
db.hostel.find({block_name:"A"})

// 4. Projection
db.hostel.find({}, {name:1, room_number:1, block_name:1, _id:0})

// 5. Delete
db.hostel.deleteOne({student_id:1})
