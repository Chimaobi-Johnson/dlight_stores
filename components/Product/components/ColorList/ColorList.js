import * as styles from "./ColorList.module.css";

const ColorList = (props) => {
  const { colors } = props;

  return (
    <div className={styles.wrapper}>
        {colors.length !== 0 ? (
                  <h3>Colors Available</h3>
        ): ''}
      <ul>
        {colors.length !== 0 ? (
          colors.map((color, index) => (
            <li key={index + Math.random() * 10}>
              <span style={{ backgroundColor: color.code }} />
              {color.label} {`${color.priceType} N${color.price}`}
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

export default ColorList;
