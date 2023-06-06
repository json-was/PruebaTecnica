import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addNewObjectBD, updateObjectBD } from "../store/thunks";
import { useNavigate } from "react-router-dom";
import { clearActiveProduct, setEditando } from "../store/indicadorActivoSlice";
import "../styles/Crud.style.css";

const defaultValues = {
  id: 0,
  nombreIndicador: "",
  codigoIndicador: "",
  fechaIndicador: "",
  origenIndicador: "",
  unidadMedidaIndicador: "",
  valorIndicador: 0,
  tiempoIndicador: null,
};

export const CrudInputData = () => {
  const {
    editando,
    keyBd,
    id,
    nombreIndicador,
    codigoIndicador,
    fechaIndicador,
    origenIndicador,
    unidadMedidaIndicador,
    valorIndicador,
    tiempoIndicador,
  } = useSelector((state) => state.almacenamiento);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    // Si editando esta en false, agregara un dato
    // y limpiara nuestro store de redux
    if (!editando) addNewObjectBD(data);
    // Si editando esta en false, agregara un dato
    if (editando) {
      updateObjectBD(data, keyBd);
      dispatch(setEditando(false));
      dispatch(clearActiveProduct());
    }

    return setTimeout(() => {
      navigate("/inicio");
    }, 1000);
  };

  useEffect(() => {
    // Validando si esque está editanto.
    // Si es true, hara un set en el formulario con los
    // datos correspondientes
    if (editando) {
      setValue("id", id);
      setValue("nombreIndicador", nombreIndicador);
      setValue("codigoIndicador", codigoIndicador);
      setValue("fechaIndicador", fechaIndicador);
      setValue("origenIndicador", origenIndicador);
      setValue("unidadMedidaIndicador", unidadMedidaIndicador);
      setValue("valorIndicador", valorIndicador);
      setValue("tiempoIndicador", tiempoIndicador);
    }
  }, []);

  return (
    <section className="crud-main">
      <h2>{editando ? "EDITAR" : "AGREGAR"} DATOS</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table className="inputDatos">
          <thead>
            <tr>
              <td>Id:</td>
              <td>Nombre:</td>
              <td>Codigo:</td>
              <td>Fecha:</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <input
                  // Asignación de que es tipo 'number'
                  type="number"
                  placeholder="ej: 1"
                  min={0}
                  // Register es el responsable de capturar el precio y hacerlo una variable.
                  {...register("id", {
                    // Restringir que tiene que haber escrito en algo.
                    required: true,
                    validate: (value) => value > 0,
                    valueAsNumber: true,
                  })}
                />
              </td>
              <td>
                <input
                  // Asignación de que es tipo 'text'
                  type="text"
                  placeholder="ej. dolar"
                  // Register es el responsable de capturar el titulo y hacerlo una variable.
                  {...register("nombreIndicador", {
                    // Restringir que tiene que haber escrito en algo.
                    required: true,
                  })}
                />
              </td>
              <td>
                <input
                  // Asignación de que es tipo 'text'
                  type="text"
                  placeholder="ej. DOLAR"
                  // Register es el responsable de capturar el titulo y hacerlo una variable.
                  {...register("codigoIndicador", {
                    // Restringir que tiene que haber escrito en algo.
                    required: true,
                  })}
                />
              </td>
              <td>
                <input
                  // Asignación de que es tipo 'text'
                  type="text"
                  placeholder="ej. 2021-11-01"
                  // Register es el responsable de capturar el titulo y hacerlo una variable.
                  {...register("fechaIndicador", {
                    // Restringir que tiene que haber escrito en algo.
                    required: true,
                  })}
                />
              </td>
            </tr>
          </tbody>

          <thead>
            <tr>
              <td>Origen indicador:</td>
              <td>Unidad de medida:</td>
              <td>Valor:</td>
              <td>Tiempo:</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <input
                  // Asignación de que es tipo 'text'
                  type="text"
                  placeholder="ej. mindicador.cl"
                  // Register es el responsable de capturar el titulo y hacerlo una variable.
                  {...register("origenIndicador", {
                    // Restringir que tiene que haber escrito en algo.
                    required: true,
                  })}
                />
              </td>
              <td>
                <input
                  // Asignación de que es tipo 'text'
                  type="text"
                  placeholder="ej. Pesos"
                  // Register es el responsable de capturar el titulo y hacerlo una variable.
                  {...register("unidadMedidaIndicador", {
                    // Restringir que tiene que haber escrito en algo.
                    required: true,
                  })}
                />
              </td>
              <td>
                <input
                  // Asignación de que es tipo 'number'
                  type="number"
                  placeholder="ej: 5990"
                  min={0}
                  // Register es el responsable de capturar el precio y hacerlo una variable.
                  {...register("valorIndicador", {
                    // Restringir que tiene que haber escrito en algo.
                    required: true,
                    validate: (value) => value > 0,
                    valueAsNumber: true,
                  })}
                />
              </td>
              <td>
                <input disabled />
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td></td>
              <td>
                <button className="link-item" type="submit">
                  {editando ? "Guardar cambios" : "Agregar dato"}
                </button>
              </td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </form>
    </section>
  );
};
