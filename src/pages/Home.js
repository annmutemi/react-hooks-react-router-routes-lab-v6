import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovie] = useState([]);
 
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`http://localhost:4000/movies`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.log('Error fetching movies:', error);
      }
    };
 
    fetchMovies();
  }, []);
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Home Page</h1>
        <ul>{
          movies.map((movie)=>(
            <li><MovieCard title={movie.title} id={movie.id} /></li>
          ))
          }
          
        </ul>
      </main>
    </>
  );
};

export default Home;
