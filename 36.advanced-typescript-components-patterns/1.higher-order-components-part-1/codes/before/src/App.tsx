import "./App.css";
import {DisplayMousePosition} from './components/hoc/DisplayMousePosition'
import withMouseMove from './components/hoc/withMouseMove'
//import MousePosition from "./components/position";
function App() {
  const Wrapper = withMouseMove(DisplayMousePosition);
  return (
    <div className="container">
      <Wrapper />
    </div>
  );
}

export default App;
