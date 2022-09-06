import FormFetch from "./Components/FormMovies/FormFetch";
import FormMovie from "./Components/FormMovies/FormMovie";
import FormInput from "./Components/FormMovies/FormInput";
import Card from "./Components/UI/card";
import classes from "./App.module.css";
import { useState } from "react";


function App() {
  //Using state to manage loading, error and fetching of data
  const [fetchMovies, setFetchMovies] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [error,setError] = useState(null); 

  //Fetching of data from star wars movie api
  async function onFetchHandler() {
    setIsLoading(true);
    setError(null);
    try{
    const response = await fetch("https://input-output-27a72-default-rtdb.firebaseio.com/movies.json");

    //Checking for error in response
    if(!response.ok)
    {
      throw new Error('Something went wrong');
    }

    //Javascript received data
    const data = await response.json();

    let myMovies = [];

    for(let key in data)
    {
      myMovies.push({
        id:key,
      releaseDate: data[key].releaseDate,
      title: data[key].title,
      openingText: data[key].openingText,
      director: data[key].director,
      producer: data[key].producer,

      })
    }

    setFetchMovies(myMovies);
    setIsLoading(false);  
  }
  catch(error) {
    setError(error.message);
  }
  setIsLoading(false);  
  }


  async function onMovieValueHandler(values)
  {

    try{
      
      const response = await fetch('https://input-output-27a72-default-rtdb.firebaseio.com/movies.json', {
        method : 'POST',
        body: JSON.stringify(values),
        header: {
          'Content-Type' : 'application/json'
        }
      }) 
  
      //Checking for error
      if(!response.ok)
      {
        throw new Error('Something went wrong')
      }

  
    }
    catch(error){
      setError(error.message);
    }
  }  

  //Managing the data to be outputted
  let movieValue;

if(fetchMovies.length > 0)
{
  movieValue = fetchMovies.map((items) => (
    <FormMovie
      title={items.title}
      releaseDate={items.releaseDate}
      openingText={items.openingText}
      director={items.director}
      producer={items.producer}
    />
  ))
}

if(fetchMovies.length === 0)
{
  movieValue = <p>No Movies Found</p>
}

if(error)
{
  movieValue = <p>Something went wrong!</p>
}

if(isLoading)
{
  movieValue = <p>Loading...</p>
}


//rendering the fetched data
  return (
    <>

    <FormInput onMovieValue={onMovieValueHandler}/>
      <FormFetch onFetch={onFetchHandler} />
      <Card className={classes.card}>
        {movieValue}
      </Card>
    </>
  );
}

export default App;
