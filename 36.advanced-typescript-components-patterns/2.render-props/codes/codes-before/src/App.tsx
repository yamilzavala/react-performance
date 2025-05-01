import "./App.css";
import { DisplayMousePositionRender } from "./components/DisplayMousePositionRender";
import RenderMouse from './components/render-props/RenderMouse';



function App() {
 return (

    <RenderMouse>
      {({x,y}) => <DisplayMousePositionRender x={x} y={y}/>}
    </RenderMouse>

  );
}

export default App;
