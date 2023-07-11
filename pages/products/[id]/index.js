// import { useRouter } from "next/router";
// import axios from 'axios';
// import { useSelector } from "react-redux";
// import BasicLayout from "../../../components/layout/BasicLayout/BasicLayout";
// import Lists from "../../../components/layout/Lists/Lists";
// import SidebarLayout from "../../../components/layout/SidebarLayout/SidebarLayout";

// const FilteredProducts = (props) => {
//   const { products, categories, categoryId } = props;

//   return (
//     <SidebarLayout metaData={{
//         title: "Products | Delight Stores",
//         description: "Everything household",
//         keywords: "gift items, online store, wedding gifts, souvenirs, household items"
//       }}>
//       <Lists currentCategory={categoryId} categories={categories} list={products} listName="products" />
//     </SidebarLayout>
//   );
// };

// export async function getStaticPaths(context) {

//   const response = await axios.get(process.env.BACKEND_URL + '/categories');

//   return {
//     fallback: false,
//     paths: response.data.categories.map(category => ({ params: { id: category._id }}))
//   }

// }

// export async function getStaticProps(context) {

//   const categoryId = context.params.id;

//   const response = await axios.get(process.env.BACKEND_URL + '/products/?id=' + categoryId)
//   const response2 = await axios.get(process.env.BACKEND_URL + '/categories')

//   return {
//     props: {
//       products: response.data.products,
//       categories: response2.data.categories,
//       categoryId: categoryId
//     },
//     revalidate: 1
//   }

// }

// export default FilteredProducts;
