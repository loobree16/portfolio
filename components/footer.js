import styles from './styles.module.css';

const Footer = () => (
    <div className={styles.footer}>
        <div className={styles.copyright}>{new Date().getFullYear()} Briana Walker</div>
    </div>
);

export default Footer;