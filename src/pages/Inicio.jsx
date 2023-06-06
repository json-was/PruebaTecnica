import React, { useEffect } from "react";
import "../styles/Inicio.style.css";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { FirebaseBD } from "../firebase/config";
import { setListadoCompleto, setLoading } from "../store/indicadorActivoSlice";
import { getIndicadoresRequest } from "../api/axiosRequest";
import { addNewObjectBD } from "../store/thunks";

export const Inicio = () => {
  const dispatch = useDispatch();
  const { listadoCompleto } = useSelector((state) => state.almacenamiento);

  const getLista = async () => {
    dispatch(setLoading(true));
    const listaIndicadores = [];
    const datos = await getDocs(collection(FirebaseBD, "indicadores"));
    datos.forEach((datos) => {
      const newItem = { ...datos.data() };
      listaIndicadores.push(newItem);
    });
    dispatch(setListadoCompleto(listaIndicadores));
    dispatch(setLoading(false));
  };

  const RecopilarInformacion = async () => {
    dispatch(setLoading(true));
    const data = await getIndicadoresRequest();
    data.map((data, index) => {
      addNewObjectBD(data);
    });
    dispatch(setLoading(false));
  };

  useEffect(() => {
    if (listadoCompleto === null || listadoCompleto.lenght === 0) {
      getLista();
    }
  }, []);

  return (
    <div className="main-inicio">
      <h1 style={{ fontSize: "4rem", color: "#fff" }}>Bienvenido 👋</h1>
      {/* <button onClick={() => RecopilarInformacion()}>
        Presioname para recolectar información
      </button> */}
      <button onClick={() => getLista()}>
        Si no aparece la información en las tablas ¡Presioname! 😁
      </button>
    </div>
  );
};
