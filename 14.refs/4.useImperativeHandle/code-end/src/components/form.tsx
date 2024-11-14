import { ChangeEvent, useEffect, useRef, useState } from "react";
import Input, { API } from "./input";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const ref = useRef<API>(null);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else {
      setPassword(value);
    }
  };

  const submit = () => {
    if (username.length < 1) {
      //focus on the username input
      ref.current?.focus();
      ref.current?.shake();
    } else {
      //submit data to server
    }
  };

  return (
    <>
      <Input changeHandler={setUsername} ref={ref} />
      <input type="password" name="password" onChange={changeHandler} />
      <button onClick={submit}>submit</button>
    </>
  );
};
export default Form;
