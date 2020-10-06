import Link from 'next/link';
import styles from './styles.module.css';

const Navigation = () => (
    <ul className={styles.nav}>
        <li>
            <Link href="/">
                <a>Home</a>
            </Link>
        </li>
        <li>
            <Link href="/work">
                <a>Work</a>
            </Link>
        </li>
        <li>
            <Link href="/resume">
                <a>Resume</a>
            </Link>
        </li>
        <li>
            <Link href="/contact">
                <a>Contact</a>
            </Link>
        </li>
    </ul>
);

export default Navigation;