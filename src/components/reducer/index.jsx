import React, { useReducer, useState } from "react";
import Example from "../base/Example";
import Link from "../base/Link";
import Paragraph from "../base/Paragraph";
import Content from "../content";

import "./styles.css";

const initialState = {
  count: 0,
  name: "",
  tasks: [],
};

const actions = {
  increment: "increment",
  decrement: "decrement",
  changeName: "change-name",
  handleTask: "handle-task",
  toggleTask: "toggle-task",
  reset: "reset",
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case actions.decrement:
      return { ...state, count: state.count - 1 };
    case actions.increment:
      return { ...state, count: state.count + 1 };
    case actions.changeName:
      return { ...state, name: action.payload };
    case actions.reset:
      return { ...initialState };
    case actions.handleTask:
      return {
        ...state,
        tasks: [...state.tasks, { name: action.payload, isCompleted: false }],
      };
    case actions.toggleTask:
      return {
        ...state,
        tasks: state.tasks.map((task, index) => {
          if (index === action.payload) {
            return { ...task, isCompleted: !task.isCompleted };
          }
          return task;
        }),
      };
    default:
      return state;
  }
}

function Reducer() {
  const [showContent, setShowContent] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={`${showContent ? "over" : ""}`}>
      <Content
        title="useReducer"
        showContent={showContent}
        setShowContent={setShowContent}
      >
        <ul>
          <li>É um hook do React - useReducer()</li>
          <li>
            <code>
              const [state, dispatch] = useReducer(reducer, initialState)
            </code>
            <ul>
              <li>
                reducer - É uma função, ela tem dois parâmetros o primeiro é
                state e o segundo action.
                <br />
                <code>function reducer(state, action) {}</code>
                <br />
                <strong>state</strong> armazena os estados do reducer.
                <br />
                <strong>action</strong> é quem executa as ações do reducer.
                Dentro de action temos o type, através dele podemos passar
                vários tipos para executar uma ação e retornar o estado conforme
                a ação.
              </li>
              <li>
                initialState - É um objeto que passamos como estado inicial do
                nosso reducer
              </li>
            </ul>
          </li>
          <li>
            É uma alternativa mais avançada ao useState, pois também é possível
            lidar com estados
          </li>
          <li>
            Podemos trabalhar com vários estados dentro dele e gerenciar todos
            através de state
          </li>
          <li>Passamos como argumento para ele o valor inical</li>
          <li>Ele retorna um array contendo duas posições</li>
          <li>
            Na posição 0 temos a variável state que tem o valore de todos os
            estados
          </li>
          <li>
            Na posição 1 temos uma função responsável por atualizar os estados
            conforme o type que passarmos
          </li>
          <li>
            É uma boa prática sempre retornar o {`{ ...state}`} na função do
            reducer e depois fazer o que desejamos.
          </li>
          <li>
            No dispatch passamos o type e um payload, caso vamos mandar alguma
            informação. O payload é a informação que vamos receber na função
            reducer através do action, assim: action.payload
            <br />
            <code>dispatch({`{type: 'algum-tipo', payload: inputValue}`})</code>
          </li>
        </ul>

        <Paragraph>
          Quando usar? Indicado utilizá-lo quando o estado estiver muito grande
          ou quando um estado depender de outro.
        </Paragraph>

        <Paragraph>
          Recapitulando: state terá sempre os estados do nosso reducer. dispatch
          é a função que passaremos um objeto como parâmetro para modificarmos
          estados.
        </Paragraph>

        <Link href="https://pt-br.reactjs.org/docs/hooks-reference.html#usereducer">
          Documentação
        </Link>

        <Link href="https://www.youtube.com/watch?v=UCUL2JrjZ3c&list=PL8YNlUoOZkkaCJENGzHFXrRwwjuwEh6nC&index=5" />
        <br />
        <Paragraph>
          Ao interagir com os botões abaixo estamos alterando o estado, a cada
          clique nos botões o react executa a função atualizando o estado e irá
          fazer uma nova renderização para nos mostrar o novo valor.
        </Paragraph>

        <button onClick={() => dispatch({ type: actions.reset })}>
          Resetar Estados
        </button>
        <Example>
          <button onClick={() => dispatch({ type: actions.decrement })}>
            -
          </button>
          <span>{state.count}</span>
          <button onClick={() => dispatch({ type: actions.increment })}>
            +
          </button>
        </Example>

        <Example example="Exemplo com Input">
          <Paragraph>
            Utilizei aqui o reducer para fins de exemplo, porém o mais indicado
            é utilizar o useState.
          </Paragraph>
          <input
            type="text"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: actions.changeName, payload: e.target.value })
            }
          />
          <p>{state.name}</p>
        </Example>
        <Example example="Todo">
          <Paragraph>
            Este é um exemplo real de como podemos usar o useReducer
          </Paragraph>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch({ type: actions.handleTask, payload: inputValue });
              setInputValue("");
            }}
          >
            Add Task
          </button>
          {state.tasks.map((task, index) => {
            return (
              <div
                key={task.name}
                style={{
                  textDecoration: task.isCompleted ? "line-through" : "none",
                }}
                onClick={() =>
                  dispatch({ type: actions.toggleTask, payload: index })
                }
              >
                {task.name}
              </div>
            );
          })}
        </Example>
      </Content>
    </div>
  );
}

export default Reducer;
