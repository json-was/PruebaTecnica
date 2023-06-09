import React, { useEffect, useState } from "react";
import { RowTable } from "../components/RowTable";
import { collection, getDocs } from "firebase/firestore";
import { FirebaseBD } from "../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { clearAll, setListadoCompleto, setLoading } from "../store/indicadorActivoSlice";
import "../styles/Tabla.style.css";

export const Tabla = () => {
  const { listadoCompleto } = useSelector((state) => state.almacenamiento);
  const dispatch = useDispatch();

  const getLista = async () => {
    dispatch(clearAll());
    
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

  return (
    <div className="table-main">
      <table className="table-box table-container">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre Indicador</th>
            <th>Codigo Indicador</th>
            <th>Unidad Medida Indicador</th>
            <th>Valor Indicador</th>
            <th>Fecha Indicador</th>
            <th>Tiempo Indicador</th>
            <th>Origen Indicador</th>
            <th>Opciones</th>
            <th><button onClick={() => getLista()} >Actualizar</button></th>
          </tr>
        </thead>
        <tbody>
          {listadoCompleto !== null &&
            listadoCompleto.map((data) => {
              return <RowTable key={data.keyBd} data={data} />;
            })}
        </tbody>
      </table>
    </div>
  );
};
