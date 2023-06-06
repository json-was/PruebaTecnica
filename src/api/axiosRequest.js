import axios from "axios";

// VARIABLES CONSTANTES
const DATA_USUARIO = {
  userName: "jason.wastavino@gmail.com",
  flagJson: true,
};

const URL = "https://postulaciones.solutoria.cl";

const headerConfig = {
  Accept: "*/*",
  "Content-Type": "application/json",
};

const tokenRequest = axios.create({
  baseURL: URL,
  headers: headerConfig,
});

// Obtener token requerido para tener acceso a la api
// Esto devuelve {token: '', ...}
export const getTokenData = async () => {
  const respuesta = await tokenRequest.post("/api/acceso", DATA_USUARIO);
  return respuesta.data;
};

// Obtener listado de objetos que contiene .../api/indicadores
// Esto devolvera un listado con objetos [{},{}...]
export const getIndicadoresRequest = async () => {
  const data = await getTokenData();
  const Token = data.token;

  const IndicadoresRequest = axios.create({
    baseURL: URL,
    headers: {
      headerConfig,
      Authorization: `Bearer ${Token}`,
    },
  });

  const indicadoresResp = await IndicadoresRequest.get("/api/indicadores");
  return indicadoresResp.data;
};
