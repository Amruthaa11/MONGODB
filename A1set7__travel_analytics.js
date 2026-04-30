1. Insert sample
JavaScript
db.travel.insertMany([
  { destination: "Goa", tourType: "Beach", bookings: 50, revenue: 40000 },
  { destination: "Manali", tourType: "Hill", bookings: 30, revenue: 25000 },
  { destination: "Goa", tourType: "Beach", bookings: 20, revenue: 20000 }
])
2. Total revenue
JavaScript
db.travel.aggregate([
  { $group: { _id: null, totalRevenue: { $sum: "$revenue" } } }
])
3. Average bookings per destination
JavaScript
db.travel.aggregate([
  {
    $group: {
      _id: "$destination",
      avgBookings: { $avg: "$bookings" }
    }
  }
])
4. Group by tourType
JavaScript
db.travel.aggregate([
  {
    $group: {
      _id: "$tourType",
      totalBookings: { $sum: "$bookings" }
    }
  }
])
5. Top 3 destinations (revenue > 30000)
JavaScript
db.travel.aggregate([
  { $match: { revenue: { $gt: 30000 } } },
  {
    $group: {
      _id: "$destination",
      totalRevenue: { $sum: "$revenue" }
    }
  },
  { $sort: { totalRevenue: -1 } },
  { $limit: 3 }
])
