import React, { useState } from "react";
import Example from "../base/Example";
import Link from "../base/Link";
import Content from "../content";
import useCounter from "../../hooks/useCounter";

import "./styles.css";

function Context() {
  const [showContent, setShowContent] = useState(false);

  const { counter, incrementCounter, decrementCounter } = useCounter();

  return (
    <div className={`${showContent ? "over" : ""}`}>
      <Content
        title="useContext"
        showContent={showContent}
        setShowContent={setShowContent}
      >
        <ul>
          <li>É um hook do React - useContext()</li>
          <li>
            Permite compartilhar estados e propriedades entre componentes da
            aplicação.
          </li>
          <li>
            Podemos passar dados entre a árvore de componentes do react sem
            precisar passar via props.
          </li>
          <li>
            Contexto (context) é usado principalmente quando algum dado precisa
            ser acessado por muitos componentes em diferentes níveis.
          </li>
          <li>
            Geralmente criamos vários estados na raiz da aplicação para que os
            filhos possam gerenciar esses estados, mas o ideal a se fazer nesse
            caso é usar o useContext
          </li>
          <li>
            Um exemplo fácil de explicar para usar context é com tema da
            aplicação, pois todos componentes devem renderizar o tema.
          </li>
          <li>Para criar um context utilizamos o createContext</li>
          <li>
            Criamos uma const e atribuímos a ela o resultado de createContext()
          </li>
          <li>
            Criamos uma função que será nosso provider 'CounterContextProvider',
            ele deve receber um children, pois nosso provider ficará em volta de
            toda aplicação e passaremos os componentes como filho do provider
          </li>
          <li>
            Na função devemos retornar o provider. Então com a const criada do
            contexto fazemos o .provider e passamos para eles duas coisas:{" "}
            <br /> 1 - uma prop value que é um objeto e deve conter aqui tudo
            que desejamos compartilhar.
            <br /> 2 - Passamos o children como filho para o provider
          </li>

          <li>
            <code>
              {`
                const CounterContext = createContext();                
                export function CounterContextProvider({ children }) {
                  const [counter, setCounter] = useState(0);
              
                  return (
                    <CounterContext.Provider
                      value={{ counter, setCounter }}
                    >
                      {children}
                    </CounterContext.Provider>
                  );
                }
                
                export default CounterContext;
              `}
            </code>
          </li>
          <li>Após criar o provider devemos envolver a aplicação com ele</li>
          <li>Para usar as propridades do context é possível criar um hook.</li>
          <li>
            <code>
              {`
                import CounterContext from "../context/CounterContext";

                const useCounter = () => useContext(CounterContext);

                export default useCounter;`}
            </code>
          </li>
          <li>
            E para usar basta fazer uma desestruturação de useCounter, como:
            <code> {`const {counter, incrementCounter} = useCounter()`}</code>
          </li>
        </ul>
        <Link href="https://pt-br.reactjs.org/docs/context.html">
          Documentação
        </Link>
        <Link href="https://www.youtube.com/watch?v=0UVYtx_C87w&list=PL8YNlUoOZkkaCJENGzHFXrRwwjuwEh6nC&index=4" />

        <Example>
          <button onClick={incrementCounter}>Incrementar</button>
          <span>Valor do contador é: {counter}</span>
          <button onClick={decrementCounter}>Decrementar</button>
        </Example>
      </Content>
    </div>
  );
}

export default Context;
