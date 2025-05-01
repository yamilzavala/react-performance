import "./App.css";
import useMousePosition from "./components/hook/useMousePosition";
import { RenderMousePosition } from "./components/render-props/RenderMouse";

const DisplayMousePos = ({ x, y }: { x: number; y: number }) => (
  <section className="absolute-section">
    <p>
      <span className="bold-span">X</span>: {x}
    </p>
    <p>
      <span className="bold-span">Y</span>: {y}
    </p>
  </section>
);

function App() {
  const {x, y, onMouseMove} = useMousePosition();
  return (
    <div className="container" onMouseMove={onMouseMove}>      
        <DisplayMousePos x={x} y={y} />      
    </div>
  );
}

export default App;
