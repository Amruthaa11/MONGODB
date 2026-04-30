1. Insert sample
JavaScript
db.posts.insertMany([
  { postTitle: "Tech News", category: "Tech", likes: 100 },
  { postTitle: "Food Blog", category: "Food", likes: 200 },
  { postTitle: "AI Post", category: "Tech", likes: 300 }
])
2. Index on postTitle
JavaScript
db.posts.createIndex({ postTitle: 1 })
3. Compound index
JavaScript
db.posts.createIndex({ category: 1, likes: -1 })
4. Explain query
JavaScript
db.posts.find({ category: "Tech" }).explain("executionStats")
