import { createSlice } from "@reduxjs/toolkit";

export const almacenamientoSlice = createSlice({
  name: "almacenamiento",
  initialState: {
    listadoCompleto: null,
    editando: false,
    key: null,
    id: null,
    nombreIndicador: null,
    codigoIndicador: null,
    fechaIndicador: null,
    origenIndicador: null,
    unidadMedidaIndicador: null,
    valorIndicador: null,
    tiempoIndicador: null,
  },

  reducers: {
    setActiveProduct: (state, { payload }) => {
      state.key = payload.key;
      state.id = payload.id;
      state.nombreIndicador = payload.nombreIndicador;
      state.codigoIndicador = payload.codigoIndicador;
      state.fechaIndicador = payload.fechaIndicador;
      state.origenIndicador = payload.origenIndicador;
      state.unidadMedidaIndicador = payload.unidadMedidaIndicador;
      state.valorIndicador = payload.valorIndicador;
      state.tiempoIndicador = payload.tiempoIndicador;
    },
    clearActiveProduct: (state) => {
      state.key = null;
      state.id = null;
      state.nombreIndicador = null;
      state.codigoIndicador = null;
      state.fechaIndicador = null;
      state.origenIndicador = null;
      state.unidadMedidaIndicador = null;
      state.valorIndicador = null;
      state.tiempoIndicador = null;
    },
  },
});

export const { setActiveProduct, clearActiveProduct } =
almacenamientoSlice.actions;