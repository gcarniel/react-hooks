import Effect from "./components/hooks/effect";
import Ref from "./components/hooks/ref";
import State from "./components/hooks/state";

function App() {
  return (
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
    </div>
  );
}

export default App;
