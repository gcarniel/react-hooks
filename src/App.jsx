import Callback from "./components/callback";
import Context from "./components/context";
import Effect from "./components/effect";
import LayoutEffect from "./components/layoutEffect";
import Memo from "./components/memo";
import Reducer from "./components/reducer";
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
        <LayoutEffect />
        <Ref />
        <Context />
        <Memo />
        <Callback />
        <Reducer />
      </div>
    </CounterContextProvider>
  );
}

export default App;
