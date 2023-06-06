import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "react-date-range/dist/theme/default.css";
import "react-date-range/dist/styles.css";
import { useSelector } from "react-redux";
import { DateRangePicker } from "react-date-range";

export const Graficos = () => {
  const { listadoCompleto } = useSelector((state) => state.almacenamiento);
  // OBTENCION DE TIPOS DE CODIGO
  const [tiposCodigo, setTiposCodigo] = useState([]);
  useEffect(() => {
    const getTiposCodigo = () => {
      const newSet = new Set();
      const unicos = listadoCompleto.reduce((res, dato) => {
        if (!newSet.has(dato.codigoIndicador)) {
          newSet.add(dato.codigoIndicador, dato);
          res.push(dato);
        }
        return res;
      }, []);
      setTiposCodigo(unicos);
    };
    getTiposCodigo();
  }, []);

  const [CopiaLista, setCopiaLista] = useState([listadoCompleto]);
  const [Listado, setListado] = useState();
  const recorrerLista = () => {
    const res = CopiaLista.sort((x, y) =>
      x.codigoIndicador.localeCompare(y.codigoIndicador)
    );
    setListado(...res);
  };
  useEffect(() => {
    recorrerLista();
  }, []);
  // Obtencion de listado de 1 tipo de codigo
  const [search, setSearch] = useState([]);
  const filtrado = (tipo) => {
    const filtro = Listado.filter((res) => res.codigoIndicador === tipo);
    setSearch(filtro.reverse());
  };

  const [startDate, setStartDate] = useState(new Date());
  const [finalDate, setFinalDate] = useState(new Date());
  const [busquedaFecha, setBusquedaFecha] = useState([]);
  const handleSelect = (date) => {
    const filtroFechas = search.filter((datos) => {
      const resFecha = new Date(datos.fechaIndicador);
      return (
        resFecha >= date.selection.startDate &&
        resFecha <= date.selection.endDate
      );
    });
    setStartDate(date.selection.startDate);
    setFinalDate(date.selection.endDate);
    setBusquedaFecha(filtroFechas);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: finalDate,
    key: "selection",
  };

  return (
    <div className="crud-main">
      {listadoCompleto !== null && (
        <>
          <h2>Graficos</h2>
          {/* <button onClick={() => console.log(Listado)}>fff</button> */}
          <div style={{ width: "100%", display: "flex", marginBottom: "2rem" }}>
            <h4>Filtro por código</h4>
            {tiposCodigo.map((s) => {
              return (
                <button
                  key={s.codigoIndicador}
                  className="link-item"
                  onClick={() => filtrado(s.codigoIndicador)}
                >
                  {s.codigoIndicador}
                </button>
              );
            })}
          </div>

          <h3>Fechas total</h3>
          <ResponsiveContainer width="100%" aspect={8}>
            <AreaChart data={search} width={500} height={300}>
              <CartesianGrid strokeDasharray="4" />
              <XAxis dataKey="fechaIndicador" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="valorIndicador"
                stackId="1"
                stroke="#d4f"
                fill="#d4f"
              />
            </AreaChart>
          </ResponsiveContainer>
          <div style={{ width: "40%", display: "flex", marginBottom: "2rem" }}>
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
            />
          </div>

          <h3>Filtro por fecha</h3>
          <ResponsiveContainer width="100%" aspect={8}>
            <AreaChart data={busquedaFecha} width={500} height={300}>
              <CartesianGrid strokeDasharray="4" />
              <XAxis dataKey="fechaIndicador" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="valorIndicador"
                stackId="1"
                stroke="#d4f"
                fill="#d4f"
              />
            </AreaChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
};
