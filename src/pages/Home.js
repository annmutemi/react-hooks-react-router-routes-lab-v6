import React from 'react'
import MovieCard from '../components/MovieCard'
import NavBar from '../components/NavBar'

const Home = () => {
  const movies = [
    { id: 1, title: 'Doctor Strange' },
    { id: 2, title: 'Trolls' },
    { id: 3, title: 'Pitch Perfect' },
  ]

  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} />
        ))}
      </div>
    </div>
  )
}

export default Home