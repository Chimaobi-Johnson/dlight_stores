import Sidebar from '../Sidebar/Sidebar';
import Image from 'next/image';

import styles from './Lists.module.css';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { updateSingleProductPagination } from '../../../store/actions/products';


const Lists = props => {

    const dispatch = useDispatch();
    console.log(props)

    return (
        <div className={styles.wrapper}>
            <div className={styles.contentContainer}>
                <div className={styles.sidebar}>
                    <Sidebar currentCategory={props.currentCategory} categories={props.categories} />
                </div>
                {props.list.length !== 0 ? props.list.map((item, index) => {
                    return (
                        <Link key={index} href={"/product/[id]"} as={`/product/${item._id}`}>
                            <div onClick={(i) => dispatch(updateSingleProductPagination(index))} className={styles.item}>
                                <Image src={item.imagesUrl[0]} alt="" width="230px" height="200px" />
                                <h4>{item.name}</h4>
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