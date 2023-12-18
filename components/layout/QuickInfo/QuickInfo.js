import Image from "next/image";
import Button from "../../ui/Button/Button";
import styles from "./QuickInfo.module.css";

const QuickInfo = (props) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url('/site/white-plate.png')`,
        backgroundSize: "cover",
        backgroundPositionY: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
            <Image src="/site/heels.jpg" layout="fill" />
        </div>
        <span>~Random Fact~</span>
        <h3>Did you know? - <span>High Heels Where Originally Men's Shoes</span></h3>
        <p>
          In the 10th Century Europe, it was discovered that your foot would stay
          more firmly in the stirrups if your shoe had a bit of a raised heel. By
          the 17th century, high heels became a fashion trend in Europe; since
          having a horse was a symbol of high status, wearing a high-heeled shoe
          meant you had the medieval equivalent of a Mercedes-Benz. Both men and
          women of means wore heels until they ultimately fell out of fashion
          for men.
        </p>
        {/* <Button variant="secondary">Learn more</Button> */}
      </div>
    </div>
  );
};
export default QuickInfo;
