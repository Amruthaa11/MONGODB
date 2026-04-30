1. Create collection & insert one document
JavaScript
db.episodes.insertOne({
  episodeTitle: "AI Trends",
  host: "John",
  category: "Technology",
  duration: 45,
  status: "Published"
})
2. Insert multiple documents
JavaScript
db.episodes.insertMany([
  { episodeTitle: "Future Tech", host: "Alice", category: "Technology", duration: 60, status: "Published" },
  { episodeTitle: "Health Talk", host: "Bob", category: "Health", duration: 30, status: "Draft" },
  { episodeTitle: "Coding 101", host: "John", category: "Technology", duration: 50, status: "Published" }
])
3. Retrieve all
JavaScript
db.episodes.find()
4. Projection (only title & host)
JavaScript
db.episodes.find({}, { episodeTitle: 1, host: 1, _id: 0 })
5. Filter + sort + limit
JavaScript
db.episodes.find({ category: "Technology" })
.sort({ duration: -1 })
.limit(5)
