import Lists from '../../components/layout/Lists/Lists'
import SidebarLayout from '../../components/layout/SidebarLayout/SidebarLayout'

import axios from 'axios'

import { useDispatch } from 'react-redux';
import { storeProducts } from '../../store/actions/products';

export default function Products (props) {

  const { products, categories } = props;

  return (
    <SidebarLayout metaData={{
      title: "Products | Delight Stores",
      description: "Everything household",
      keywords: "gift items, online store, wedding gifts, souvenirs, household items"
    }}>
     <Lists categories={categories} list={products} listName="product" /> 
    </SidebarLayout>
  )
}


// export async function getStaticProps() {

//   const response = await axios.get(process.env.BACKEND_URL + '/products')
//   const response2 = await axios.get(process.env.BACKEND_URL + '/categories ')
 
//    return {
//      props: {
//        products: response.data.products,
//        categories: response2.data.categories
//      },
//      revalidate: 1
//    }
 
//  }