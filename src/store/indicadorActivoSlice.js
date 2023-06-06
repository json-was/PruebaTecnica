import { createSlice } from "@reduxjs/toolkit";

export const almacenamientoSlice = createSlice({
  name: "almacenamiento",
  initialState: {
    cargando: null,
    listadoCompleto: null,
    editando: false,
    keyBd: null,
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
      state.keyBd = payload.keyBd;
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
      state.keyBd = null;
      state.id = null;
      state.nombreIndicador = null;
      state.codigoIndicador = null;
      state.fechaIndicador = null;
      state.origenIndicador = null;
      state.unidadMedidaIndicador = null;
      state.valorIndicador = null;
      state.tiempoIndicador = null;
    },
    setEditando: (state, { payload }) => {
      state.editando = payload;
    },
    setListadoCompleto: (state, { payload }) => {
      state.listadoCompleto = payload;
    },
    setLoading: (state, { payload }) => {
      state.cargando = payload;
    },
    clearAll : (state) => {
      state.keyBd = null;
      state.id = null;
      state.nombreIndicador = null;
      state.codigoIndicador = null;
      state.fechaIndicador = null;
      state.origenIndicador = null;
      state.unidadMedidaIndicador = null;
      state.valorIndicador = null;
      state.tiempoIndicador = null;
      state.cargando; null;
      state.listadoCompleto; null;
      state.editando; false;
    },
  },
});

export const {
  clearAll,
  setActiveProduct,
  clearActiveProduct,
  setEditando,
  setListadoCompleto,
  setLoading,
} = almacenamientoSlice.actions;
