import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; //antes useHistory
import { FaSearch } from "react-icons/fa";
import styles from "./Search.module.css";
import useQuery from "../hooks/useQuery";

function Search() {
  const [searchText, setSearchText] = useState(""); // estado para controlar mi input
  const navigate = useNavigate(); //Hook para cambiar el query y poder navegar a esa película. (Añadir un parámetro a la query).

  const query = useQuery();
  const search = query.get("search"); //nos traemos el parámetro de busqueda search

  // si hay un cambio en el search, que setSearchText cambie el texto y ponga search (el texto que viene por la ruta).
  //   este efecto se va ejecutar si hay un cambio en el search
  useEffect(() => {
    // console.log(search)
    setSearchText(search || " "); // si es nulo que esté vacío
  }, [search]);

  const handleSubmit = (event) => {
    event.preventDefault(); //cancela lo que se hace por defecto en el formulario.
    navigate(`/?search=${searchText}`);
  };

  const handleSearchText = (event) => {
    //me cambia el estado por el nuevo valor que tendrá el input.
    const value = event.target.value.toLowerCase();
    setSearchText(value);
    navigate(`/?search=${value}`); //Paso value a setSearchText y en navigate para que cada vez que digito en el buscador vaya haciendo una busqueda
  };

  return (
    <form className={styles.search__form} onSubmit={handleSubmit}>
      <input
        className={styles.search__input}
        type="text"
        value={searchText}
        onChange={handleSearchText}
        aria-label="Search movies"
      />
      <FaSearch className={styles.search__button} />
    </form>
  );
}

export default Search;
