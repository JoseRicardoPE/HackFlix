import { useLocation } from "react-router-dom";

// Creando un hook para la busqueda de movies por query
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default useQuery;