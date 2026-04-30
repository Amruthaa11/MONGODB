// 1
db.playlists.insertMany([
  {id:1,user_name:"A",playlist_name:"Hits",songs:[{title:"Song1",artist:"X"}],created_date:new Date(),total_duration_minutes:60,is_public:true,play_count:150},
  {id:2,user_name:"B",playlist_name:"Chill",songs:[{title:"Song2",artist:"Y"}],created_date:new Date(),total_duration_minutes:40,is_public:false,play_count:50},
  {id:3,user_name:"A",playlist_name:"Workout",songs:[{title:"Song3",artist:"Z"}],created_date:new Date(),total_duration_minutes:70,is_public:true,play_count:200},
  {id:4,user_name:"C",playlist_name:"Party",songs:[{title:"Song4",artist:"X"}],created_date:new Date("2022-01-01"),total_duration_minutes:80,is_public:false,play_count:30},
  {id:5,user_name:"D",playlist_name:"Travel",songs:[{title:"Song5",artist:"Y"}],created_date:new Date(),total_duration_minutes:90,is_public:true,play_count:120}
])

// 2
db.playlists.find({
  is_public:true,
  play_count:{$gt:100}
})

// 3
db.playlists.updateOne(
  {id:1},
  {$inc:{play_count:1}}
)

// 4
db.playlists.deleteMany({
  created_date:{$lt:new Date("2023-01-01")},
  is_public:false
})

// 5
db.playlists.aggregate([
  {$group:{_id:"$user_name", avg_duration:{$avg:"$total_duration_minutes"}}}
])
