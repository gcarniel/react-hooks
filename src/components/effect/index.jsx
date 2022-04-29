import React, { useEffect, useState } from "react";
import Example from "../base/Example";
import Link from "../base/Link";
import Paragraph from "../base/Paragraph";
import Content from "../content";

import "./styles.css";

function Effect() {
  const [showContent, setShowContent] = useState(false);

  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(`O valor do contador é ${count}`);
  }, [count]);

  return (
    <div className={`${showContent ? "over" : ""}`}>
      <Content
        title="useEffect"
        showContent={showContent}
        setShowContent={setShowContent}
      >
        <ul>
          <li>É um hook do React - useEffect()</li>
          <li>
            <code>useEffect(() =&gt; {`{}`}, []);</code>
          </li>
          <li>
            Para fazer a desmontagem ou limpeza de um componente devemos
            retornar uma função dentro do useEffect que não tem dependências.
            Isso é importante quando estamos escutando eventos, ao desmontar o
            componente devemos parar de escutar o evento, pois consome recursos
            <code>
              <pre>
                {`            useEffect(() => {
                  setMessage(O valor do contador é ${count});
              return () => {aqui paramos de fazer algo}
            }, [])`}
              </pre>
            </code>
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
            O conteúdo do useEffect só será execatado quando a DOM estiver
            montada. Diferença para o useLayoutEffect
          </li>
        </ul>

        <Paragraph>
          Sempre que o clicarmos no botão o useEffect setará o valor da
          mensagem, isso acontece porque coloquei o count (meu estado) como
          dependência do useeffect
        </Paragraph>

        <Paragraph>
          Dica: Se o useEffect executa uma ação fora do escopo no qual ele está
          então devemos fazer a limpeza (utilizando o return) para evitarmos
          vazamento de memória.
        </Paragraph>

        <Link href="https://pt-br.reactjs.org/docs/hooks-reference.html#useeffect">
          Documentação
        </Link>

        <Link href="https://www.youtube.com/watch?v=NPw6OvXh2xk&list=PL8YNlUoOZkkaCJENGzHFXrRwwjuwEh6nC&index=2" />

        <Example>
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(count + 1)}>+</button>
          <p>{message}</p>
        </Example>
      </Content>
    </div>
  );
}

export default Effect;
