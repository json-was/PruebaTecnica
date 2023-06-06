import React, { useEffect, useState } from "react";
import { RowTable } from "../components/RowTable";
import { collection, getDocs } from "firebase/firestore";
import { FirebaseBD } from "../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { setListadoCompleto } from "../store/indicadorActivoSlice";

export const Tabla = () => {
  const dispatch = useDispatch();
  const { listadoCompleto } = useSelector((state) => state.almacenamiento);

  const getLista = async () => {
    const listaIndicadoresId = [];
    const datos = await getDocs(collection(FirebaseBD, "indicado"));
    datos.forEach((datos) => {
      const newItem = { ...datos.data() };
      listaIndicadoresId.push(newItem);
    });
    dispatch(setListadoCompleto(listaIndicadoresId));
  };

  useEffect(() => {
    getLista();
  }, []);

  return (
    <div>
      <table>
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
