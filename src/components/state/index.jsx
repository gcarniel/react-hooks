import React, { useState } from "react";
import Example from "../base/Example";
import Link from "../base/Link";
import Paragraph from "../base/Paragraph";
import Content from "../content";

import "./styles.css";

function State() {
  const [showContent, setShowContent] = useState(false);

  const [count, setCount] = useState(0);
  return (
    <div className={`${showContent ? "over" : ""}`}>
      <Content
        title="useState"
        showContent={showContent}
        setShowContent={setShowContent}
      >
        <ul>
          <li>É um hook do React - useState()</li>
          <li>
            <code>
              const [nomeEstado, setNomeEstado] = useState(valorInicial)
            </code>
          </li>
          <li>Passamos como argumento para ele o valor inical</li>
          <li>Ele retorna um array contendo duas posições</li>
          <li>Na posição 0 temos a variável</li>
          <li>
            Na posição 1 temos uma função responsável por atualizar a variável
          </li>
          <li>
            Já que ele é um array, podemos usar desestruturação para extrair seu
            retorno
          </li>
          <li>
            Podemos dar qualquer nome, mas a forma acima é uma convenção da
            comunidade
          </li>
          <li>O 'set' não é obrigatório, mas é também uma conveção</li>
        </ul>

        <Paragraph>
          Exemplo: nomeEstado terá sempre o valor do nosso estado para que
          possamos utilizar na nossa aplicação. setNomeEstado é uma função que
          passaremos uma novo valor para ela sempre que desejamos atualizar o
          nosso estado. Em React os estados são muito importantes porque sempre
          que um estado é alterado o react irá atualizar a aplicação para
          mostrar ao usuário a nova atualização em tela.
        </Paragraph>
        <Paragraph>
          Ao interagir com os botões abaixo estamos alterando o estado, a cada
          clique nos botões o react executa a função atualizando o estado e irá
          fazer uma nova renderização para nos mostrar o novo valor.
        </Paragraph>

        <Link href="https://pt-br.reactjs.org/docs/hooks-reference.html#usestate">
          Documentação
        </Link>

        <Link href="https://www.youtube.com/watch?v=Jxe79XZ9u-Y&list=PL8YNlUoOZkkaCJENGzHFXrRwwjuwEh6nC&index=1" />

        <Example>
          <button onClick={() => setCount(count - 1)}>-</button>
          <span>{count}</span>
          <button onClick={() => setCount(count + 1)}>+</button>
        </Example>
      </Content>
    </div>
  );
}

export default State;
