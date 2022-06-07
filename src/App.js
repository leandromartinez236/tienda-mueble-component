import React from "react";
import "./App.css";

import Header from "./ui/header/Header";
import Hero from "./ui/Hero";
import CategoriaProducto from "./ui/categoriaProducto/CategoriaProducto";
import SobreNosotros from "./ui/sobreNosotros/SobreNosotros";
import NuestrosProductos from "./ui/nuestrosProductos/NuestrosProductos";
import Footer from "./ui/footer/Footer";

import img from "./images/principal.jpg";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero img={img} />
      <CategoriaProducto />
      <SobreNosotros />
      <NuestrosProductos />
      <Footer>
        <p className="copyright">
          Todos los Derechos Reservados - TiendaMueble
        </p>
      </Footer>
    </div>
  );
}

export default App;
