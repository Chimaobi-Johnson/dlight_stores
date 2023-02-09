import Image from 'next/image';
import { recommendedProducts } from '../../../data/dummy';

import styles from './RelatedItems.module.css';


const RelatedItems = props => {
    
    const relatedPosts = recommendedProducts.slice(1, 5);
    
    return (
            <div className={styles.wrapper}>
                <h2>You may also like</h2>
                <div className={styles.itemsContainer}>
                    {relatedPosts.map((post, index) => {
                        return (
                            <div key={index} className={styles.item}>
                                <div className={styles.imageWrapper}>
                                    <Image width={320} height={300} src={post.image} alt="" />
                                </div>
                                <h4>{post.title}</h4>
                                <p>N {post.price}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
}

export default RelatedItems