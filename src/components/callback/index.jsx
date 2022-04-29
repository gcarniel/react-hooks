import React, { useCallback, useState } from "react";
import Example from "../base/Example";
import Link from "../base/Link";
import Paragraph from "../base/Paragraph";
import Content from "../content";
import List from "./List";

import "./styles.css";

function Callback() {
  const [showContent, setShowContent] = useState(false);
  const [text, setText] = useState("");
  const [textList, setTextList] = useState([]);
  const [withUseCallback, setWithUseCallback] = useState(false);

  const convertTextToUpper = () => {
    const transformText = text.split("").map((item, i) => {
      if (i % 2 === 0) {
        return item.toLocaleUpperCase();
      }
      return item.toLocaleLowerCase();
    });

    return transformText;
  };

  const convertTextToUpperWithCallback = useCallback(() => {
    const transformText = text.split("").map((item, i) => {
      if (i % 2 === 0) {
        return item.toLocaleUpperCase();
      }
      return item.toLocaleLowerCase();
    });

    return transformText;
  }, []);

  const submit = (e) => {
    e.preventDefault();

    let newText = "";
    if (withUseCallback) {
      newText = convertTextToUpperWithCallback(text);
    } else {
      newText = convertTextToUpper(text);
    }
    setTextList([...textList, newText]);
    setText("");
  };

  return (
    <div className={`${showContent ? "over" : ""}`}>
      <Content
        title="useCallback"
        showContent={showContent}
        setShowContent={setShowContent}
      >
        <ul>
          <li>É um hook do React - useCallback()</li>
          <li>
            <code>useCallback(() =&gt; {}, [])</code>
          </li>
          <li>Guarda em memória a função em si</li>
          <li>
            Ele recebe dois parâmetros, o primeiro é uma função e o segundo é um
            array de dependências.
          </li>
          <li>
            Seu objetivo é de não criar uma função do zero sem necessidade.
          </li>
          <li>
            Toda vez que um componente é renderizado por padrão as funções
            também são recriadas, geralmente não tem problema, porém quando
            temos uma função bastante complexa o processo de recriá-la pode
            atrapalhar na perfomance, aí que entra o useCallback, memorizando a
            função e não recriando-a sempre que uma renderização acontece.
          </li>
        </ul>

        <Paragraph>
          <p>Quando usar?</p>
          <ul>
            <li>
              Quando for uma função que é passada para filhos e que seja
              complexa
            </li>
            <li>
              Quando estiver em um contexto que mais de um componente acessa a
              função
            </li>
            <li>Para resolver problemas de igualdade referencial</li>
            <li>Quando fizer chamadas desnecessárias</li>
          </ul>
        </Paragraph>

        <Link href="https://pt-br.reactjs.org/docs/hooks-reference.html#usecallback">
          Documentação
        </Link>

        <Link href="https://www.youtube.com/watch?v=kzAMDNBiAzs&list=PL8YNlUoOZkkaCJENGzHFXrRwwjuwEh6nC&index=7" />

        <Example>
          <Paragraph>
            Ao iniciar a página o useCallback não é utilizado, então a cada
            letra digitada na input o componente vai renderizar a carregar o
            List. Ao mudar o select para 'Com useCallback' faremos a memorização
            da função, então a lista não será renderizada sem necessidade.
          </Paragraph>
          <form onSubmit={submit}>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </form>
          <select onChange={(e) => setWithUseCallback(e.target.value)}>
            <option value={false}>Sem useCallback</option>
            <option value={true}>Com useCallback</option>
          </select>
          {JSON.stringify(withUseCallback)}
          {withUseCallback ? (
            <List
              list={textList}
              transformText={convertTextToUpperWithCallback}
            />
          ) : (
            <List list={textList} transformText={convertTextToUpper} />
          )}
        </Example>
      </Content>
    </div>
  );
}

export default Callback;
