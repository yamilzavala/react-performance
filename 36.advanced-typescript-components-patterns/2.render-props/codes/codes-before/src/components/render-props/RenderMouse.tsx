import React, {useState, MouseEventHandler} from 'react';
import "../../App.css";

type RenderMouseProps = {
    children: (props: {x:number, y: number}) => React.ReactNode
}

const RenderMouse = ({children}: RenderMouseProps) => {
    const [position, setPosition] = useState({x:0, y:0})

    const updatePosition: MouseEventHandler = (e) => {
        setPosition({x: e.clientX, y: e.clientY})
    }

    return (
        <div onMouseMove={updatePosition} className='container'>
            {children({x: position.x, y: position.y})}
        </div>
    );
};

export default RenderMouse;