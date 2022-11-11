import { categories } from '../../../data/dummy';
import styles from './Sidebar.module.css';


const Sidebar = props => {

    return (
        <div className={styles.wrapper}>
            <ul>
                {categories.length !== 0 ? categories.map(category => {
                    return <li>{category.title}</li>
                }) : ''}
            </ul>
        </div>
    )
}

export default Sidebar