import "./App.css";
import Timer from "./components/Timer";
import AnimatedGradient from "./components/AnimatedGradient";

function App() {
  return (
    <div className=" flex flex-col items-center justify-center h-svh box-border">
      <AnimatedGradient />
      <Timer />
    </div>
  );
}

export default App;
