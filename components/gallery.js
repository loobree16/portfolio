import styles from './styles.module.css';

const Gallery = ({ images }) => (
    <div className={styles.gallery}>
        {images.map(image => {
            return (
                <div className={styles.image} key={image}>
                    <img src={image} />
                </div>
            );
        })}
    </div>
)
export default Gallery;