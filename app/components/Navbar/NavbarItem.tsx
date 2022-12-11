import Link from 'next/link'
import { FC } from 'react'
import { IMenu, IMenuItem } from './menu.interface'

const NavbarItem: FC<{ item: IMenuItem }> = ({ item }) => {
	return (
		<li>
			<Link href={item.link}>
				<p>{item.title}</p>
			</Link>
		</li>
	)
}

export default NavbarItem
