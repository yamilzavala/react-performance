import {useState, MouseEventHandler, useCallback} from 'react';
import { getPosition } from "../get-pos";
const useMousePosition = () => { 
    const [{x, y}, setPosition] = useState({ x: 0, y: 0 });
    
    const updatePosition: MouseEventHandler = useCallback((event) => {
        const {x,y} = getPosition(event);
       setPosition({ x, y});
    }, [setPosition]);

    return {
        x, y, onMouseMove: updatePosition
    }
}

export default useMousePosition;