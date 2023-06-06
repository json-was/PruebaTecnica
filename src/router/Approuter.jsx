import React from "react";
import { Route, Routes } from "react-router-dom";
import { Inicio } from "../pages/Inicio";
import { Navbar } from "../components/Navbar";
import { CrudInputData } from "../pages/CrudInputData";
import { Graficos } from "../pages/Graficos";

function Approuter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Inicio />} />
        <Route path="/crud" element={<CrudInputData />} />
        {/* <Route path="/crud:id" element={<CrudInputData />} /> */}
        <Route path="/graficos" element={<Graficos />} />

      </Routes>
    </>
  );
}

export default Approuter;
