import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { IFooterItem } from './footer.interface'

const FooterItem: FC<{ item: IFooterItem }> = ({ item }) => {
	return (
		<li>
			<Link href={item.link}>
				<Image src={item.image} alt='link' width={24} height={24} />
			</Link>
		</li>
	)
}

export default FooterItem
