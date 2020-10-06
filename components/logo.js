import Link from 'next/link';
import styles from './styles.module.css';

const Logo = () => (
    <div className={styles.logo}>
        <Link href="/">
            <a>
                <img src="/logo.png" />
            </a>
        </Link>
    </div>
);

export default Logo;