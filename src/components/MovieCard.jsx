import { Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa';

const imageUrl = import.meta.env.VITE_IMG;

{/* o componente MovieCard será reaproveitado, portanto, na página inicial tem q ter um botão com um link para
    acessar o detalhe individual de cada filme, mas como o componente MovieCard será reaproveitado, não é necessário
    mostrar esse botão com link de detalhes, então passo um "showLink = true" e caso eu queira modificar para não
    aparecer esse botão, é só trocar true por false */}
const MovieCard = ({ movie, showLink = true }) => {
  return <div className="movie-card">
    <img src={imageUrl + movie.poster_path} alt={movie.title} />
    <h2>{movie.title}</h2>

    <p>
        <FaStar /> {movie.vote_average}
    </p>

    <p className="desc">
        {movie.overview}
    </p>
    {/* aqui em baixo verifica se a propriedade showlink é true, então, se for verdadeira, vai levar para o link com os detalhes do filme
        e esse link, é igual o que defini no main por que é uma rota */}
    {showLink && <Link to={`/movie/${movie.id}`}>Ver mais</Link>}
  </div>
}

export default MovieCard