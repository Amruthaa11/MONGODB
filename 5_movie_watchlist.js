1. Insert one
JavaScript
db.watchlist.insertOne({
  movie_id: 1,
  title: "Inception",
  genre: "Sci-Fi",
  release_year: 2010,
  imdb_rating: 8.8,
  watched: false
})
2. Insert many
JavaScript
db.watchlist.insertMany([
  {movie_id: 2, title: "Avatar", genre: "Sci-Fi", release_year: 2009, imdb_rating: 7.8, watched: true},
  {movie_id: 3, title: "Titanic", genre: "Romance", release_year: 1997, imdb_rating: 7.9, watched: false},
  {movie_id: 4, title: "Joker", genre: "Drama", release_year: 2019, imdb_rating: 8.4, watched: true},
  {movie_id: 5, title: "Interstellar", genre: "Sci-Fi", release_year: 2014, imdb_rating: 8.6, watched: false},
  {movie_id: 6, title: "KGF", genre: "Action", release_year: 2018, imdb_rating: 8.2, watched: true}
])
3. Not watched
JavaScript
db.watchlist.find({watched: false})
4. Projection
JavaScript
db.watchlist.find({}, {title: 1, genre: 1, imdb_rating: 1, _id: 0})
5. Delete
JavaScript
db.watchlist.deleteOne({movie_id: 3})
