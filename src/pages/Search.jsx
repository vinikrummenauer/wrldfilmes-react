import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import MovieCard from "../components/MovieCard"

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import "./MoviesGrid.css"

const Search = () => {
  const [searchParams] = useSearchParams()
  
  const [movies, setMovies] = useState([])
  {/* usar o searchParams.get para pegar qualquer coisa da URL */}
  const query = searchParams.get("q")


  const getSearchedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovies(data.results)
  }

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`

    getSearchedMovies(searchWithQueryURL)
  }, [query])
   {/* em cima coloquei o query no parametro do useEffect para que cada vez que atualizar a query, recarregar o conteúdo todo */}

    return (
      <div className="container">
      <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>
      <div className="movies-container">
      {movies.length === 0 && <p>Carregando...</p>}
      {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
    )
  }
  
  export default Search