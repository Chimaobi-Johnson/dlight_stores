import Button from '../../ui/Button/Button';
import styles from './QuickInfo.module.css';



const QuickInfo = props => {

    return (
        <div className={styles.wrapper} style={{
            backgroundImage:
              `url('/site/white-plate.png')`,
            backgroundSize: "cover",
            backgroundPositionY: "center",
            backgroundRepeat: "no-repeat",
            }}>
            <div className={styles.contentContainer}>
                <span>Free tip</span>
                <h2>the ultimate care guide</h2>
                <p>
                    Nulla dignissim lacinia erat non malesuada. 
                    Donec efficitur dolor felis. Sed blandit est sem, 
                    eu dictum metus porta vel.
                    Pellentesque et nulla et mi semper
                </p>
                <Button variant="secondary">Learn more</Button>
            </div>
        </div>
    )
}

export default QuickInfo