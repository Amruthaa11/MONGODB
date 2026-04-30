1. Create collection & insert one
JavaScript
db.bookings.insertOne({
  name: "Ramesh",
  busNo: 101,
  seatNo: 12,
  fare: 500,
  status: "Waiting"
})
2. Insert multiple
JavaScript
db.bookings.insertMany([
  { name: "Sita", busNo: 102, seatNo: 5, fare: 900, status: "Waiting" },
  { name: "Amit", busNo: 101, seatNo: 8, fare: 150, status: "Confirmed" }
])
3. Update Ramesh status
JavaScript
db.bookings.updateOne(
  { name: "Ramesh" },
  { $set: { status: "Confirmed" } }
)
4. Update all Waiting → Confirmed
JavaScript
db.bookings.updateMany(
  { status: "Waiting" },
  { $set: { status: "Confirmed" } }
)
5. Delete + retrieve
JavaScript
db.bookings.deleteMany({ fare: { $lt: 200 } })

db.bookings.find({ fare: { $gt: 800 } })
