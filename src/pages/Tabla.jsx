import React from "react";
import { RowTable } from "../components/RowTable";

export const Tabla = () => {
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
          <RowTable />
        </tbody>
      </table>
    </div>
  );
};
