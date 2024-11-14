import { ChangeEvent, useRef, useState } from "react";

const Child = ({ value }: { value: string }) => {
  let charCount = value.length ?? 0;
  return <h3>Number of characters: {charCount}</h3>;
};

const Form = () => {
  const [test, setTest] = useState(false);
  const ref = useRef("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    ref.current = e.target.value;
  };

  const submit = () => {
    //send some data to backend server
    console.log(ref.current);
  };

  return (
    <>
      <input type="text" onChange={changeHandler} />
      <button onClick={submit}>submit</button>
      <Child value={ref.current} />
      <br />
      <button onClick={() => setTest(!test)}>update state</button>
    </>
  );
};
export default Form;
