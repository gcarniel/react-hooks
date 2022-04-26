import React, { useMemo, useState } from "react";
import Example from "../base/Example";
import Link from "../base/Link";
import Paragraph from "../base/Paragraph";
import Content from "../content";
import List from "./List";
import Title from "./Title";

import "./styles.css";

function Memo() {
  const [showContent, setShowContent] = useState(false);
  const [text, setText] = useState("");
  const [textList, setTextList] = useState([]);
  const [title, setTitle] = useState("sss");
  const [changeTitle, setChangeTitle] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!text) return;

    setTextList([...textList, text]);
    setText("");
  };

  const submitUseMemo = (e) => {
    e.preventDefault();

    if (!title) return;

    setChangeTitle(title);
  };

  const renderTitle = useMemo(
    () => <Title title={changeTitle} />,
    [changeTitle]
  );

  return (
    <div className={`${showContent ? "over" : ""}`}>
      <Content
        title="useMemo"
        showContent={showContent}
        setShowContent={setShowContent}
      >
        <ul>
          <li>É um hook do React - useMemo()</li>
          <li>
            <code>useMemo(() =&gt; {}, [])</code>
          </li>
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

        <Link href="https://pt-br.reactjs.org/docs/hooks-reference.html#usememo">
          Documentação
        </Link>

        <Link href="https://www.youtube.com/watch?v=LdYZ-QI0ztM&list=PL8YNlUoOZkkaCJENGzHFXrRwwjuwEh6nC&index=6" />

        <br />
        <hr />

        <Paragraph>
          MEMO: O componente List agora vai renderizar apenas quando ele for
          alterado e não mais a cada letra digitada na input, isso porque o List
          está exportando memo(List), assim memorizando todo o componente. Mas
          se eu importar o List fazendo a desestruturação o que será utilizando
          é o List sem memo, então este será atualizado a cada letra digitada.
          <p>Quando usar?</p>
          <ul>
            <li>
              Componente funcional puro. Puro é quando ele não depende de nada
              externo
            </li>
            <li>Quando o componente renderiza com muita frequência</li>
            <li>Quando ele re-renderiza com as mesmas props</li>
            <li>
              Quando é um componente médio a grande, no sentido de ter muita
              coisa em tela ou complexo
            </li>
          </ul>
        </Paragraph>

        <Example example="Exemplo Memo">
          <form onSubmit={submit}>
            <input
              placeholder="Digite um item"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </form>

          <List list={textList} />
        </Example>

        <br />
        <hr />

        <Paragraph>
          useMemo: O componente Title é memorizado na const renderTitle, dessa
          forma o componente title só será renderizado novamente quando o valor
          de dependência do useMemo mudar, no caso o changeTitle. Independete de
          quantas letrar forem digitadas na input do título o componente Title
          não mudará, só renderizá novamente ao digitar um título e der enter.
          Da forma normal que fazemos (sem useMemo) teríamos uma nova
          renderização de Title a cada tecla digitada na input, isso porque o
          pai foi atualizado, consequentemente todos seus filhos serão.
          <p>Quando usar?</p>
          <ul>
            <li>
              Usamos para evitar cálculos complexos, enteda que cálculos
              complexos aqui são quaisquer função que faça algo complexo.
            </li>
            <li>Para resolver problemas de igualdade referencial</li>
          </ul>
        </Paragraph>
        <Example example="Exemplo useMemo">
          <form onSubmit={submitUseMemo}>
            <input
              placeholder="Digite um título e tecle enter"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </form>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ marginRight: "4px" }}>Com useMemo --</span>
            {renderTitle}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ marginRight: "4px" }}>Sem useMEmo --</span>
            <Title title={title} />
          </div>
        </Example>
      </Content>
    </div>
  );
}

export default Memo;
