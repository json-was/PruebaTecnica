import React, { useEffect, useState } from "react";
import { RowTable } from "../components/RowTable";
import { collection, getDocs } from "firebase/firestore";
import { FirebaseBD } from "../firebase/config";
import { useDispatch } from "react-redux";
import { setListadoCompleto } from "../store/indicadorActivoSlice";

export const Tabla = () => {
  const dispatch = useDispatch();
  const [listaProductos, setListaProductos] = useState([]);

  const getLista = async () => {
    const productListId = [];
    const datos = await getDocs(collection(FirebaseBD, "indicado"));
    datos.forEach((datos) => {
      const newItem = { ...datos.data() };
      productListId.push(newItem);
    });
    setListaProductos(productListId);
    dispatch(setListadoCompleto(productListId));
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
          {listaProductos !== undefined &&
            listaProductos.map((data) => {
              return <RowTable key={data.key} data={data} />;
            })}
        </tbody>
      </table>
    </div>
  );
};
