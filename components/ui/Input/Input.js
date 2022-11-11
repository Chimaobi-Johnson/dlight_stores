import styles from "./Input.module.css";

const Input = (props) => {
  const { type, placeholder, label, defaultValue } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>
        <span>{label}</span>
      </div>
      <input
        className={styles.input}
        defaultValue={defaultValue}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
