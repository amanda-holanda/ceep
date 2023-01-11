import ListaDeNotas from "./components/ListaDeNotas.jsx"
import React from "react";

function App() {
  return (
    <section>
      <form>
      <input type="text" placeholder="Título" />
      <textarea placeholder="Escreva a sua nota..."></textarea>
      <button>Cria nota</button>
      </form>
      <ListaDeNotas></ListaDeNotas>

    </section>
    

  );
}

export default App;
