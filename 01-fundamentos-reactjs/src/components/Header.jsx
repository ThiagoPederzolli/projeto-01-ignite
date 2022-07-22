import styles from './Header.module.css';
import IgniteLogo from '../assets/ignite_logo.svg';

export function Header() {
  return (
    <header  className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={IgniteLogo} alt="ignite logo" />
        <strong>Ignite Feed</strong>
      </div>
    </header>
  )
}