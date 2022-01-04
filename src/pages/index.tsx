import Head from 'next/head';

import styles from '../styles/home.module.scss';

export default function Home() {
  return (
     //Anexado ao Head do document -- next
     <>
     <Head>
     <title>Início | ig.news</title>
   </Head>
    <h1 className={styles.title}>Hello,world!</h1>
    </> 
  )
}
