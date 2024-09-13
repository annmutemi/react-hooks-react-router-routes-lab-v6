import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);
 
  useEffect(() => {
    const fetchDirectors = async () => {
      try {
        const response = await fetch(`http://localhost:4000/directors`);
        const data = await response.json();
        setDirectors(data);
      } catch (error) {
        console.log('Error fetching movies:', error);
      }
    };
 
    fetchDirectors();
  }, []);
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Directors Page</h1>
        {
          directors.map((director)=>(
            <article>
              <h2>{director.name}</h2>
              {
                director.movies.map((movie)=>(
                  <li>{movie}</li>
                ))
              }
            </article>
          ))
        }
      </main>
    </>
  );
};

export default Directors;
