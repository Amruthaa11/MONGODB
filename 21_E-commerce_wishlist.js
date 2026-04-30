// 1
db.wishlist.insertMany([
  {id:1,customer_name:"A",product_name:"Phone",category:"Electronics",price:15000,added_date:new Date(),notify_when_available:true},
  {id:2,customer_name:"B",product_name:"Shoes",category:"Fashion",price:2000,added_date:new Date(),notify_when_available:false},
  {id:3,customer_name:"C",product_name:"Laptop",category:"Electronics",price:50000,added_date:new Date(),notify_when_available:true},
  {id:4,customer_name:"D",product_name:"Watch",category:"Accessories",price:3000,added_date:new Date(),notify_when_available:true},
  {id:5,customer_name:"E",product_name:"Headphones",category:"Electronics",price:2500,added_date:new Date(),notify_when_available:false}
])

// 2
db.wishlist.find({
  price:{$lt:2000},
  notify_when_available:true
})

// 3
db.wishlist.updateMany(
  {category:"Electronics"},
  {$mul:{price:0.8}}
)

// 4
db.wishlist.deleteMany({
  added_date:{$lt:new Date("2024-01-01")}
})

// 5
db.wishlist.aggregate([
  {$group:{_id:"$customer_name", total_items:{$sum:1}}}
])
