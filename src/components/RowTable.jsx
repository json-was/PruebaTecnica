import React from "react";

export const RowTable = ({ data }) => {
  const editar = () => {
  };

  const borrar = () => {
  }

  return (
    <tr>
      <td>id</td>
      <td>nombreIndicador</td>
      <td>codigoIndicador</td>
      <td>unidadMedidaIndicador</td>
      <td>valorIndicador</td>
      <td>fechaIndicador</td>
      <td>tiempoIndicador</td>
      <td>origenIndicador</td>
      <td>
        <button onClick={() => editar()}>Editar</button>
        <button onClick={() => borrar()}>borrar</button>
      </td>
    </tr>
  );
};
