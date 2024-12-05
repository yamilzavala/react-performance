import { ChangeEventHandler } from "react";

type TightProps<T extends object> = T | OptionalUndefined<T>;

type OptionalUndefined<T extends object> = Partial<Record<keyof T, undefined>>;

type InputProps = TightProps<{
  value: string;
  onChange: ChangeEventHandler;
}> & {
  label: string;
};

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div>
      <label>
        {label}
        <input {...props} />
      </label>
    </div>
  );
};

export default Input;
