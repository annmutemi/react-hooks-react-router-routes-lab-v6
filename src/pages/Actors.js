import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);
 
  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await fetch(`http://localhost:4000/actors`);
        const data = await response.json();
        setActors(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
 
    fetchActors();
  }, []);
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Actors Page</h1>
        {
          actors.map((actor)=>(
            <article>
              <h2>{actor.name}</h2>
              {
                actor.movies.map((movie)=>(
                  <ul>{movie}</ul>
                ))
              }
            </article>
          ))
        }
      </main>
    </>
  );
};

export default Actors;
