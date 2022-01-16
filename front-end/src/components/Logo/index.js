import logo from '../../logo.png';
import styles from './logo.module.css';

const Logo = () => {
	return (
		<>
			<img className={styles.logo} src={logo} alt='logo' />
		</>
	);
};

export default Logo;
