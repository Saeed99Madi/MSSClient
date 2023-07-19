import styles from './style.module.css';

const Loader = () => {
  return (
    <div className={styles['custom-loader-wrapper']}>
      <div className={styles['custom-loader']} />
    </div>
  );
};

export default Loader;
