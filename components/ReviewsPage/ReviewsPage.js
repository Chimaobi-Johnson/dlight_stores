import Link from 'next/link';
import * as styles from './ReviewsPage.module.css';



const ReviewsPage = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <p><Link href={'https://maps.app.goo.gl/W3SgHSrRBGxza85p6'} target='_blank'><span>Click here</span></Link></p> to leave a review for us at our google store page
            </div>
        </div>
    )
}

export default ReviewsPage
