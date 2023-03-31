import { useForm } from "react-hook-form";

import styles from "./Input.module.css";

const Input = ({label, controlled, inputName, register, required, minLength, ...props }) => {

  // const { register } = useForm();

  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>
        <span>{label}</span>
      </div>
      {controlled ? <input
        className={styles.input}
        {...register(inputName, { required, minLength: minLength })}
        {...props}
      /> : <input className={styles.input} {...props} />}
    </div>
  );
};

export default Input;
