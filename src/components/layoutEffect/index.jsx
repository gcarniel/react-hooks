import React, { useEffect, useLayoutEffect, useState } from "react";
import Content from "../content";

import "./styles.css";

function LayoutEffect() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    console.log("log do useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("log do useLayoutEffect");
  }, []);

  return (
    <div className={`${showContent ? "over" : ""}`}>
      <Content
        title="useLayoutEffect"
        showContent={showContent}
        setShowContent={setShowContent}
      >
        <ul>
          <li>É um hook do React - useLayoutEffect()</li>
          <li>
            <code>useLayoutEffect(() =&gt; {`{}`}, []);</code>
          </li>
          <li>
            Usamos ele quando necessitamos de um efeito quando alguma situação
            acontecer
          </li>
          <li>
            Ele é uma função que recebe 2 argumentos, o primeiro é uma função
            que será executada ( o efeito)
          </li>
          <li>O segundo argumento é um array de dependências ( a situação)</li>
          <li>
            Se passarmos um array vazio significa que o efeito só será
            executando quando o componente for carregado, ou seja, apenas 1 vez,
            quando a página é carregada
          </li>
          <li>
            Agora se passarmos argumentos no array sempre que algum argumento do
            array mudar o efeito será executado
          </li>
          <li>
            O conteúdo do useLayoutEffect será executado antes da DOM ser
            montada. Diferença para o useEffect
          </li>
        </ul>
      </Content>
    </div>
  );
}

export default LayoutEffect;
