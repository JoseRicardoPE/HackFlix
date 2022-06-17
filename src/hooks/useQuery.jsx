import { useLocation } from "react-router-dom";

// Creando un hook para la busqueda de movies por query
function useQuery() {
  return new URLSearchParams(useLocation().search); //parsea el parámetro de busqueda indicado en la query.
}

export default useQuery;