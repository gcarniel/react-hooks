import Context from "./components/context";
import Effect from "./components/effect";
import Ref from "./components/ref";
import State from "./components/state";
import { CounterContextProvider } from "./context/CounterContext";

function App() {
  return (
    <CounterContextProvider>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          height: "100vh",
          width: "100%",
        }}
      >
        <State />
        <Effect />
        <Ref />
        <Context />
      </div>
    </CounterContextProvider>
  );
}

export default App;
