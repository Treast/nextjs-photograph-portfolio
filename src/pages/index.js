import Head from 'next/head';
import Img from 'react-optimized-image';

import styles from '@/styles/_pages/Home.module.scss';
import Layout from '@/components/Layout';
import Link from '@/components/Link';

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS - Starter Boilerplate</title>
        <link rel='icon' href='/nextjs-photograph-portfolio/favicon.ico' />
      </Head>
      <Layout>
        <div className={styles.preview}>
          <Img src={require('@/images/homepage/photo-01.jpg')} />
        </div>
        <div className={styles.about}>
          <div className={styles.photo}>
            <Img src={require('@/images/homepage/photo-02.jpg')} width='476' height='634' />
            <div className='text'>
              <h1 className='h4'>Special Photography Studio Based in Berlin, Germany</h1>
              <p>
                Always taking great pleasure in the work we do, we find satisfaction in the simple acts of thinking and making. Since 2005, we’ve
                worked to build strategies and craft solutions for our collaborators, applying reason and rationality to the process of design.
              </p>
            </div>
          </div>
          <div className={styles.photoRight}>
            <Img src={require('@/images/homepage/photo-03.jpg')} width='679' height='350' />
          </div>
        </div>
        {/* Project 01 */}
        <article className={styles.project01}>
          <div className='grid'>
            <div className={styles.details01}>
              <h5 className='h5'>03</h5>
              <h3 className='h5'>Featured project</h3>
              <h1 className='h4'>Project Title</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Link to='#'>View Project</Link>
            </div>
            <div className={styles.photo}>
              <Img src={require('@/images/homepage/photo-04.jpg')} />
            </div>
          </div>
        </article>
        {/* End Project 01 */}

        {/* Project 02 */}
        <article className={styles.project02}>
          <Img src={require('@/images/homepage/photo-05.jpg')} />
          <div className='grid'>
            <div className={styles.details02}>
              <h5 className='h5'>03</h5>
              <h3 className='h5'>Featured project</h3>
              <h1 className='h4'>Project Title</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Link to='#'>View Project</Link>
            </div>
          </div>
        </article>
        {/* End Project 02 */}

        {/* Project 03 */}
        <article className={styles.project03}>
          <div className='grid'>
            <h3 className='h5'>Featured project</h3>
            <h5 className='h5'>03</h5>
            <div className={styles.details03}>
              <h1 className='h4'>Project Title</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Link to='#' color='black'>
                View Project
              </Link>
            </div>
            <div className={styles.photo}>
              <Img src={require('@/images/homepage/photo-06.jpg')} />
            </div>
          </div>
        </article>
        {/* End Project 03 */}

        {/* Project 04 */}
        <article className={styles.project04}>
          <div className='grid'>
            <div className={styles.details04}>
              <h5 className='h5'>04</h5>
              <h3 className='h5'>Featured project</h3>
              <Img src={require('@/images/homepage/photo-08.jpg')} width='476' height='601' />
              <h1 className='h4'>Ordinary Challenge</h1>
              <p>
                Oridnary is a Gothenburg-based creative development studio. Through technology and design they differentiate artists, creatives and
                brands to help them break through the noise. Oridnary likes to challenge the ordinary.
              </p>
              <Link to='#' color='black'>
                View Project
              </Link>
            </div>
            <div className={styles.slider}>
              <Img src={require('@/images/homepage/photo-07.jpg')} />
            </div>
          </div>
        </article>
        {/* End Project 04 */}
      </Layout>
    </>
  );
}
