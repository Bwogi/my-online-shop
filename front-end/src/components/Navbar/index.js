import Logo from '../Logo';
import styles from './navbar.module.css';

const Navbar = ({ title }) => {
	return (
		<>
			<nav className={styles.navbar}>
				<span>
					<Logo />
				</span>
				{title}
			</nav>
		</>
	);
};

export default Navbar;
