import Head from 'next/head';

import Layout from '@/components/Layout';

import styles from '@/styles/_pages/Projects.module.scss';

export default function Projects() {
  const projectsLists = ['Les Miles International', 'Unicef', 'Air New Zealand', 'Nike', 'Apple', 'Reebok', 'Less Miles', 'Aqua', 'Jaguar'];

  return (
    <>
      <Head>
        <title>NextJS - Starter Boilerplate</title>
        <link rel='icon' href='/nextjs-photograph-portfolio/favicon.ico' />
      </Head>
      <Layout headerColor='white' footerColor='black'>
        <div className={styles.projects}>
          <ul>
            {projectsLists.map((project, index) => (
              <li key={index} className='h3'>
                <span className='h5'>({index + 1})</span>
                {project}
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
}
