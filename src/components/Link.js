import NextLink from 'next/link';

import styles from '@/styles/_components/Link.module.scss';
import { Svg } from 'react-optimized-image';

export default function Link({ to, children, color = 'white' }) {
  return (
    <NextLink href={to}>
      <a className={styles.link}>
        {children}
        <span>
          <Svg src={require('@/images/icons/arrow.svg')} fill={color} />
        </span>
      </a>
    </NextLink>
  );
}
