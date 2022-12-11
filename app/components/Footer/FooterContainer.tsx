import { FC } from 'react'
import { IFooter } from './footer.interface'
import FooterItem from './FooterItem'
import styles from './Footer.module.sass'

const FooterContainer: FC<{ menu: IFooter }> = ({ menu: { items } }) => {
	return (
		<ul className={styles.ul}>
			{items.map(item => (
				<FooterItem key={item.link} item={item} />
			))}
		</ul>
	)
}

export default FooterContainer
