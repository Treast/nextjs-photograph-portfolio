import styles from '@/styles/_components/Footer.module.scss';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.copyright}>© 2021 - INTERVIEW / All Rights Reserved</p>
      <div className={styles.links}>
        Find us online
        <ul>
          <li>
            <Link href='#'>Instagram</Link>
          </li>
          <li>
            <Link href='#'>LinkedIn</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
