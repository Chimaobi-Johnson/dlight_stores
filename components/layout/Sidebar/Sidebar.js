import styles from './Sidebar.module.css';

const Sidebar = props => {

    const { categories } = props

    return (
        <div className={styles.wrapper}>
            <ul>
                {categories.length !== 0 ? categories.map((category, index) => {
                    return <li key={index}>{category.name}</li>
                }) : ''}
            </ul>
        </div>
    )
}

export default Sidebar