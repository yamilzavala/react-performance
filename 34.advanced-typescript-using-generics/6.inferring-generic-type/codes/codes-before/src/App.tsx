import { useState } from "react";

export const useStateObject = (initial: any) => {
  const [value, set] = useState(initial);

  return {
    value,
    set,
  };
};

function App() {
  const example = useStateObject({ name: "CodeLicks" });

  return <></>;
}

export default App;
