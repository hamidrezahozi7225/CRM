import Link from 'next/link';
import styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <h3>CRM</h3>
        <div>
          <h3>Customers</h3>
          <Link href='/customers'>Add Customers</Link>
        </div>
      </header>
      <div className={styles.main}>{children}</div>
      <footer className={styles.footer}>
        <h3>Author: Hamid Hozi</h3>
      </footer>
    </>
  );
};

export default Layout;
