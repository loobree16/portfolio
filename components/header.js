import Logo from '../components/logo';
import Navigation from '../components/menu';
import styles from './styles.module.css';

const Header = () => (
    <div className={styles.header}>
        <Logo />
        <Navigation />
    </div>
);

export default Header;