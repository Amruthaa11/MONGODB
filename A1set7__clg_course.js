1. Insert one
JavaScript
db.registration.insertOne({
  name: "Anu",
  course: "Math",
  semester: 5,
  marks: 75,
  status: "Passed"
})
2. Insert many
JavaScript
db.registration.insertMany([
  { name: "Rahul", course: "Physics", semester: 5, marks: 85, status: "Passed" },
  { name: "Meena", course: "Math", semester: 4, marks: 65, status: "Failed" }
])
3. Marks > 70
JavaScript
db.registration.find({ marks: { $gt: 70 } })
4. Semester 5 & marks > 80
JavaScript
db.registration.find({
  semester: 5,
  marks: { $gt: 80 }
})
5. Status not Passed + filter + sort
JavaScript
db.registration.find({
  status: { $ne: "Passed" },
  course: { $in: ["Math", "Physics"] }
})
.sort({ marks: -1 })
