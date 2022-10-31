import { categories } from '../../../data/dummy';

import styles from './Categories.module.css';


const Categories = props => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <h2>MAKE SOMEONE HAPPY WITH A GIFT</h2>
            </div>
            <div className={styles.content}>
                {categories.length !== 0 ? categories.map(category => {
                    return <div style={{
                        backgroundImage:
                          `linear-gradient(to right, #ffffff49, #0000009c), url(${category.image})`,
                        backgroundSize: "cover",
                        backgroundPositionY: "30%",
                        backgroundRepeat: "no-repeat",
                        }}>
                            <h2 className={styles.categoryTitle}>{category.title} <div className={styles.underline}></div></h2>
                           
                        </div>
                }) : ''}
            </div>
        </div>
    )
}

export default Categories

