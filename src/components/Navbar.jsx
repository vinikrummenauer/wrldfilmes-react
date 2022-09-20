import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi";
import './Navbar.css';

const Navbar = () => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  {/* vai mapear o evento do submit e passar para o navigate*/}
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!search) return

    {/* vai tocar o que tá escrito no search pro navigate que vai levar até o resultado de busca */}
    navigate(`/search?q=${search}`)
    setSearch("")
  }


  return (
    <nav id="navbar">
        <h2>
          <Link to="/"><BiCameraMovie/>WRLDFilmes</Link>
        </h2>
        <form onSubmit={handleSubmit}>
            {/* a propriedade onChange, para que cada vez que alguem digitar algo na barra de search, isso ser passado para o useState do search
                "value={search}" para manipular o valor do input a partir do state */}
            <input type="text" placeholder="Procure um filme" 
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            />
            <button type="submit">
                <BiSearchAlt2 />
            </button>
        </form>
      </nav>
  )
}

export default Navbar