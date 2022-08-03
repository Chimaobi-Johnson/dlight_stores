import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/layout/Navigation/Navigation'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Navigation />
    </div>
  )
}
