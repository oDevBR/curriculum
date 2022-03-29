import { GetStaticProps } from 'next';
import Head from 'next/head'

import styles from './home.module.scss';
import { DonateButton } from '../components/DonateButton/index';
import { stripe } from '../services/stripe';

interface HomeProps {
  paymentLink: string;

}

export default function Home({ paymentLink }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | curriculum</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>Feel free to <span>help me</span> however you can.</h1>
          <DonateButton paymentUrl={paymentLink} />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

export const getStaticSideProps: GetStaticProps = async () => {
  const paymentLink = await stripe.paymentLinks.create({
    line_items: [
      {
        price: 'price_1KiU1iIHMpOQ00FhCMtl66af',
        quantity: 1,
      },
    ],
  });

  return {
    props: {
      paymentLink
    },
    revalidate: 60 * 60 * 24 * 7, // 1 week
  }
}
