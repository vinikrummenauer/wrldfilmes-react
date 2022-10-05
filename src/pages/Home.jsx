import {useState, useEffect} from "react";
import MovieCard from "../components/MovieCard";

import './MoviesGrid.css'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
  const [topMovies, setTopMovies] = useState([])

  {/* consumindo a API */}
  const getTopRatedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setTopMovies(data.results)
  }

  {/* useEffect para que cada vez que a página iniciar, carregar o que está dentro dele, nesse caso,
      a url montada com template string "`" passando o nome "top_rated" para pegar os filmes melhores
      avaliados (informação da api), tudo que está dentro do $ vem do arquivo .env */}
  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`

    getTopRatedMovies(topRatedUrl)


  }, [])

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
      {topMovies.length === 0 && <p>Carregando...</p>}
      {/* em baixo é um loop em que mostrará todos os filmes, função .map com o parametro movie, ou seja, vai mapear cada filme
          de topMovies e passar para cada um o componente Moviecard com a atribuição da key e o id, e quando for
          fazer loop em react, sempre tentar atribuir a key, com o id do elemento */}
      {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}

export default Home