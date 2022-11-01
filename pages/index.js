import Head from 'next/head'
import Image from 'next/image'
import Categories from '../components/layout/Categories/Categories'
import Footer from '../components/layout/Footer/Footer'
import Navigation from '../components/layout/Navigation/Navigation'
import ProductInfo from '../components/layout/ProductInfo/ProductInfo'
import Recommended from '../components/layout/Recommended/Recommended'
import ImageSlider from '../components/ui/ImageSlider/ImageSlider'

import styles from '../styles/Home.module.css'


export default function Home() {

  return (
    <div className={styles.wrapper}>
      <Navigation />
      <ImageSlider />
      <Recommended />
      <Categories />
      <ProductInfo />
      <Footer />
    </div>
  )
}
