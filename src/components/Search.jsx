import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; //antes useHistory
import { FaSearch } from "react-icons/fa";
import styles from "./Search.module.css";
import useQuery from "../hooks/useQuery";

function Search() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const query = useQuery();
  const search = query.get("search");

  // si cambia la busqueda en el search, entonces que el searchText cambie y actualizarlo con setSearchText con ese nuevo parámetro de busqueda que se ha pasado por la ruta.
  // si hay un cambio en el search, que setSearchText cambie el texto y ponga search (el texto que viene por la ruta).
  //   este efecto se va ejecutar si hay un cambio en el search
  useEffect(() => {
    // console.log(search)
    setSearchText(search || " "); //si es nulo que esté vacío
  }, [search]);

  const handleSubmit = (event) => {
    event.preventDefault(); //cancela lo que se hace por defecto en el formulario.
    navigate(`/?search=${searchText}`);
  };

  const handleSearchText = (event) => {
    setSearchText(event.target.value.toLowerCase());
  };

  return (
    <form className={styles.search__form} onSubmit={handleSubmit}>
      <input
        className={styles.search__input}
        type="text"
        value={searchText}
        onChange={handleSearchText}
      />
      <button className={styles.search__button} type="submit">
        <FaSearch />
      </button>
    </form>
  );
}

export default Search;
