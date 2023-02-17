import { useForm } from "react-hook-form";

import styles from "./Input.module.css";

const Input = ({label, register, required, minLength, ...props }) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>
        <span>{label}</span>
      </div>
      <input
        className={styles.input}
        {...register(label, { required, minLength: minLength })}
        {...props}
      />
    </div>
  );
};

export default Input;
