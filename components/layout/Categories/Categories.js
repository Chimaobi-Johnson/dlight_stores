import { categories } from '../../../data/dummy';

import styles from './Categories.module.css';


const Categories = props => {

    console.log(categories)
    let boxStyle;

    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <h2>MAKE SOMEONE HAPPY WITH A GIFT</h2>
            </div>
            <div className={styles.content}>
                {categories.length !== 0 ? categories.map((category, index) => {
                    boxStyle = 'box' + index;
                    console.log(boxStyle)
                    return <div className={`styles.${boxStyle}`}>{category.title}</div>
                }) : ''}
                {/* <div className={styles.box1}>123</div>
                <div className={styles.box2}>123</div>
                <div className={styles.box3}>123</div>
                <div className={styles.box4}>123</div>
                <div className={styles.box5}>123</div>
                <div className={styles.box6}>123</div> */}
            </div>
        </div>
    )
}

export default Categories

// style={{
//     backgroundImage:
//       `linear-gradient(to right, #ffffff49, #0000009c), url(${category.image})`,
//     backgroundSize: "cover",
//     backgroundPositionY: "30%",
//     backgroundRepeat: "no-repeat",
//     }}