import Meta from '../components/layout/Meta/Meta'
import Footer from '../components/layout/Footer/Footer'
import Navigation from '../components/layout/Navigation/Navigation'

import styles from '../styles/Home.module.css'
import BasicLayout from '../components/layout/BasicLayout/BasicLayout'

export default function Products () {

  return (
    <BasicLayout metaData={{
      title: "Products | Delight Stores",
      description: "Everything household",
      keywords: "gift items, online store, wedding gifts, souvenirs, household items"
    }}>
     <h2>Products</h2>  
    </BasicLayout>
  )
}
