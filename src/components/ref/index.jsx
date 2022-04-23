import React, { useRef, useState } from "react";
import Example from "../base/Example";
import Link from "../base/Link";
import Paragraph from "../base/Paragraph";
import Content from "../content";

import "./styles.css";

function Ref() {
  const [showContent, setShowContent] = useState(false);

  const counterRef = useRef(0);
  const inputRef = useRef(null);

  const incrementCounter = () => {
    counterRef.current = counterRef.current + 1;
  };

  const handleInputFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div className={`${showContent ? "over" : ""}`}>
      <Content
        title="useRef"
        showContent={showContent}
        setShowContent={setShowContent}
      >
        <ul>
          <li>É um hook do React - useRef()</li>
          <li>
            <code>const nomeVariavelRef = useRef(null);</code>
          </li>
          <li>
            O código acima é como declaramos um useRef, a palavra Ref na
            declaração da const é convenção da comunidade
          </li>
          <li>
            Uma forma de usarmos é como alternativa ao useState, porém o react
            não renderiza novamente quando o useRef sofrer uma atualização.
            useState é com estado e a ref sem estado.
          </li>
          <li>
            Usado também para interagir com a DOM, pegando a referência de algum
            elemento e interagindo com ele de alguma forma.
          </li>
        </ul>
        <Paragraph>
          Dica: Prefira o useRef quando necessitar armazenar um valor que não
          precisa mostrar (renderizar) em tela, pois se não precisa mostrar
          assim acabamos evitando renderizações, deixando nosso programa mais
          perfomático. Pois com useState a cada atualização do estado o react
          vai renderizar o componente de novo.
        </Paragraph>
        <Link href="https://www.youtube.com/watch?v=eypNvly4s3Q&list=PL8YNlUoOZkkaCJENGzHFXrRwwjuwEh6nC&index=3&ab_channel=Huriel" />
        <p>
          No exemplo abaixo usei o useRef para armazenar o valor de counter,
          fazendo isso o react não irá renderizar o componente novamente, porém
          se mostrar ele em tela estará desatulizado, pois atualizamos apenas o
          counter e ele o valor mostrado em tela foi da última vez em que o
          componente foi carregado
        </p>
        <span>
          Valor de counter na última atualização: {counterRef.current}
        </span>
        <Example>
          <button onClick={incrementCounter}>Incrementar Counter</button>
          <button onClick={() => alert(`Counter vale ${counterRef.current}`)}>
            Mostrar Counter
          </button>
        </Example>
        <p>No exemplo abaixo utilizo o useRef para interagir com o DOM. </p>
        <Example>
          <button onClick={handleInputFocus}>Focar na input</button>
          <input type="text" ref={inputRef} placeholder="digite algo aqui" />
          <button onClick={() => alert(inputRef.current.value)}>
            Mostrar conteúdo da input
          </button>
        </Example>
      </Content>
    </div>
  );
}

export default Ref;
