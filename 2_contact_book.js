1. Insert one
JavaScript
db.contacts.insertOne({
  contact_id: 1,
  first_name: "Amrutha",
  last_name: "MS",
  phone: "9876543210",
  email: "amrutha@gmail.com",
  city: "Bangalore"
})
2. Insert many
JavaScript
db.contacts.insertMany([
  {contact_id: 2, first_name: "Rahul", last_name: "K", phone: "9999999999", email: "rahul@gmail.com", city: "Mumbai"},
  {contact_id: 3, first_name: "Priya", last_name: "S", phone: "8888888888", email: "priya@gmail.com", city: "Delhi"},
  {contact_id: 4, first_name: "Arjun", last_name: "R", phone: "7777777777", email: "arjun@gmail.com", city: "Mumbai"},
  {contact_id: 5, first_name: "Neha", last_name: "T", phone: "6666666666", email: "neha@gmail.com", city: "Chennai"},
  {contact_id: 6, first_name: "Kiran", last_name: "P", phone: "5555555555", email: "kiran@gmail.com", city: "Mumbai"}
])
3. From Mumbai
JavaScript
db.contacts.find({city: "Mumbai"})
4. Show selected fields
JavaScript
db.contacts.find({}, {first_name: 1, last_name: 1, phone: 1, _id: 0})
5. Delete
JavaScript
db.contacts.deleteOne({contact_id: 2})
