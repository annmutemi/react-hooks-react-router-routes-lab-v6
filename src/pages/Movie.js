import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movie, setMovie] =useState({});
  const params = useParams();
  const id = params.id;

  useEffect(() =>{
    fetch(`http://localhost:4000/movies/${id}`)
    .then(r => r.json())
    .then(data => setMovie(data))
    .catch(error => console.log(error))
  }, [id]);
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Doctor Strange</h1>
        <p>{movie.time}</p>
        {
          movie?.genres?.map((genre)=>(
            <span>{genre}</span>
          ))
        }
      </main>
    </>
  );
};

export default Movie;
