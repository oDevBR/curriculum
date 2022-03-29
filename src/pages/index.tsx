import Head from 'next/head'

import styles from './home.module.scss';
import { DonateButton } from '../components/DonateButton/index';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | curriculum</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>Feel free to <span>help me</span> however you can.</h1>
          <DonateButton />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}