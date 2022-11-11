import Lists from '../components/Home/Lists/Lists'
import SidebarLayout from '../components/layout/SidebarLayout/SidebarLayout'
import { recommendedProducts } from '../data/dummy'
import styles from '../styles/Home.module.css'

export default function Products () {

  return (
    <SidebarLayout metaData={{
      title: "Products | Delight Stores",
      description: "Everything household",
      keywords: "gift items, online store, wedding gifts, souvenirs, household items"
    }}>
     <Lists list={recommendedProducts} /> 
    </SidebarLayout>
  )
}
