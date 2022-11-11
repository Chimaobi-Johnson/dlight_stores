import Sidebar from '../Sidebar/Sidebar';
import Image from 'next/image';

import styles from './Lists.module.css';
import Link from 'next/link';


const Lists = props => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.contentContainer}>
                <div className={styles.sidebar}>
                    <Sidebar />
                </div>
                {props.list.length !== 0 ? props.list.map((item, index) => {
                    return (
                        <Link key={index} href={"/product/[id]"} as={`/product/${item.id}`}>
                            <div className={styles.item}>
                                <Image src={item.image} alt="" width="230px" height="200px" />
                                <h4>{item.title}</h4>
                                <p>from {item.price}</p>
                            </div>
                        </Link>
                    )
                }) : ''}
            </div>
        </div>
    )
}

export default Lists