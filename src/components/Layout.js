import Footer from './layouts/Footer';
import Header from './layouts/Header';

import Scrollbar from 'smooth-scrollbar';
import { useEffect, useRef } from 'react';

export default function Layout({ children, color = 'black' }) {
  const refMain = useRef(null);

  useEffect(() => {
    if (refMain.current) {
      Scrollbar.init(refMain.current, {
        damping: 0.05,
      });
      console.log('init');
    }
  }, [refMain]);

  return (
    <div ref={refMain} data-scrollbar style={{ height: '100vh', width: '100vw' }}>
      <Header color={color} />
      <main>{children}</main>
      <Footer color={color} />
    </div>
  );
}
