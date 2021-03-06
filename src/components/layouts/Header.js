import styles from '@/styles/_components/Header.module.scss';
import { Svg } from 'react-optimized-image';

export default function Header({ color }) {
  return (
    <div className={styles.container}>
      <Svg src={require('@/images/logo.svg')} fill={color} />
      <Svg src={require('@/images/burger.svg')} stroke={color} />
    </div>
  );
}
