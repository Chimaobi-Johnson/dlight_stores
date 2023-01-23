import styles from "./Button.module.css";

const Button = (props) => {
  const { variant } = props;

  return (
    <div
      className={
        variant === "primary"
          ? styles.primary
          : variant === "secondary"
          ? styles.secondary
          : styles.primary
      }
    >
      <div className={variant === "secondary" ? styles.borderTopLeft : '' }></div>
      <p>{props.children}</p>
      <div className={variant === "secondary" ? styles.borderBottomRight : '' }></div>
    </div>
  );
};

export default Button;
