import Head from 'next/head'
import Image from 'next/image'
import Categories from '../components/layout/Categories/Categories'
import Navigation from '../components/layout/Navigation/Navigation'
import ImageSlider from '../components/ui/ImageSlider/ImageSlider'

import styles from '../styles/Home.module.css'


export default function Home() {

  return (
    <div className={styles.wrapper}>
      <Navigation />
      <ImageSlider />
      <Categories />
    </div>
  )
}
