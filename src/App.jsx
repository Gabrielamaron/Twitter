import { useState } from "react";
import { Menu } from "./componentes/Menu.jsx";
import { Titulo } from "./componentes/Titulo.jsx";
import "./assets/css/conteudo-principal.css";
import { AreaTweets } from "./componentes/AreaTweets.jsx";

function App() {
  return (
    <>
      <header className="titulo">
        <Titulo texto={"Twitter"} />
      </header>
      <main className="conteudo-principal">
        <Menu />
        <AreaTweets />
      </main>
    </>
  );
}

export default App;
