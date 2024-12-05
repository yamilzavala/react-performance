import { PropsWithChildren, Dispatch, useReducer } from "react";
import {
  ColorActions,
  colorReducer,
  initState,
} from "../reducer/color-reducer";
import { createContext } from "./create-context";

type ColorContextState = {
  hexColor: string;
  dispatch: Dispatch<ColorActions>;
};

export const [useContext, ContextProvider] = createContext<ColorContextState>();

const useHexColor = () => {
  const { hexColor } = useContext();
  return hexColor;
};

const useDispatch = () => {
  const { dispatch } = useContext();
  return dispatch;
};

export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [{ hexColor }, dispatch] = useReducer(colorReducer, initState);
  return (
    <ContextProvider value={{ hexColor, dispatch }}>{children}</ContextProvider>
  );
};
