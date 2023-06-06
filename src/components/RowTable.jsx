import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearActiveProduct, setActiveProduct, setEditando } from "../store/indicadorActivoSlice";
import { deleteObjectBD } from "../store/thunks";

export const RowTable = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Nos enviará hacia el crud y editaremos sus valores
  // de la respectiva key que haya tomado
  const editar = () => {
    dispatch(setEditando(true))
    navigate(`/crud/${data.keyBd}`);
    dispatch(setActiveProduct({ ...data }));
  };

  // Borrara una fila con sus datos correspondientes
  // en la base de datos
  const borrar = () => {
    // deleteObjectBD(data.key);
    // dispatch(clearActiveProduct())
  };

  return (
    <tr key={data.keyBd}>
      <td>{data.id}</td>
      <td>{data.nombreIndicador}</td>
      <td>{data.codigoIndicador}</td>
      <td>{data.unidadMedidaIndicador}</td>
      <td>{data.valorIndicador}</td>
      <td>{data.fechaIndicador}</td>
      <td>{data.tiempoIndicador}</td>
      <td>{data.origenIndicador}</td>
      <td>
        <button onClick={() => editar()}>Editar</button>
        <button onClick={() => borrar()}>borrar</button>
      </td>
    </tr>
  );
};
