import Head from 'next/head';

import Layout from '@/components/Layout';

import styles from '@/styles/_pages/Contact.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS - Starter Boilerplate</title>
        <link rel='icon' href='/nextjs-photograph-portfolio/favicon.ico' />
      </Head>
      <Layout>
        <div className={styles.contact}>
          <h1 className='h4'>Contact</h1>
          <form action='#'>
            <label htmlFor='name'>
              <span>(1)</span>
              <input type='text' placeholder='Name' id='name' />
            </label>
            <label htmlFor='email'>
              <span>(2)</span>
              <input type='text' placeholder='Email' id='email' />
            </label>
            <label htmlFor='message'>
              <span>(3)</span>
              <input type='text' placeholder='Message' id='message' />
            </label>
            <button type='submit'>
              <span>(4)</span>
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
}
