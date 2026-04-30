1. Create collection & insert one
JavaScript
db.menu.insertOne({
  item_id: 1,
  name: "Cappuccino",
  category: "Coffee",
  price: 120,
  availability: true
})
2. Insert 5 items
JavaScript
db.menu.insertMany([
  {item_id: 2, name: "Latte", category: "Coffee", price: 150, availability: true},
  {item_id: 3, name: "Green Tea", category: "Tea", price: 80, availability: true},
  {item_id: 4, name: "Sandwich", category: "Snack", price: 100, availability: false},
  {item_id: 5, name: "Espresso", category: "Coffee", price: 90, availability: true},
  {item_id: 6, name: "Cookies", category: "Snack", price: 60, availability: true}
])
3. Available items
JavaScript
db.menu.find({availability: true})
4. Show name & price
JavaScript
db.menu.find({}, {name: 1, price: 1, _id: 0})
5. Delete by item_id
JavaScript
db.menu.deleteOne({item_id: 3})
