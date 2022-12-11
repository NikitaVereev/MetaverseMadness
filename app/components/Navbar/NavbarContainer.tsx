import { FC } from 'react'
import { IMenu } from './menu.interface'
import NavbarItem from './NavbarItem'
import styles from './Navbar.module.sass'

const NavbarContainer: FC<{ menu: IMenu }> = ({ menu: { items } }) => {
	return (
		<ul className={styles.ul}>
			{items.map(item => (
				<NavbarItem key={item.title} item={item} />
			))}
		</ul>
	)
}

export default NavbarContainer
