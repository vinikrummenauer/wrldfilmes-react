import { useState, useEffect} from "react"
import { useParams} from 'react-router-dom'
import{
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
  BsCalendar2Date
} from 'react-icons/bs'

import MovieCard from "../components/MovieCard"
import './Movie.css'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Movie = () => {
  {/* esse id vem da URL */}
  const {id} = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async(url) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovie(data)
  }

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`
    getMovie(movieUrl)
  }, [])

    return (
      <div className="movie-page">
        {movie && (
          <>
            <MovieCard movie={movie} showLink={false} />
            <p className="tagline">{movie.tagline}</p>
            <div className="info">
              <h3>
                <BsWallet2 /> Orçamento:
              </h3>
              <p>{movie.budget}</p>
            </div>
            <div className="info">
              <h3>
                <BsGraphUp /> Receita:
              </h3>
              <p>{movie.revenue}</p>
            </div>
            <div className="info">
              <h3>
                <BsHourglassSplit /> Duração:
              </h3>
              <p>{movie.runtime} minutos</p>
            </div>
            <div className="info">
              <h3>
                <BsCalendar2Date /> Data de lançamento:
              </h3>
              <p>{movie.release_date} </p>
            </div>
            <div className="info description">
              <h3>
                <BsFillFileEarmarkTextFill /> Descrição:
              </h3>
              <p>{movie.overview}</p>
            </div>
          </>
        )}
      </div>
    )
  }
  
  export default Movie