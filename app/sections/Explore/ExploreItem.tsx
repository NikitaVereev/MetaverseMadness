import Image from 'next/image'
import { FC } from 'react'
import { ISlideItem } from './explore.interface'
import styles from './Explore.module.sass'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/motion'

interface IItem {
	active: boolean | string
	handleClick: any
	index: number
}

const ExploreItem: FC<{ item: ISlideItem } & IItem> = ({
	item,
	active,
	handleClick,
	index,
}) => {
	return (
		<motion.div
			variants={fadeIn('right', 'spring', index * 0.3, 0.75)}
			className={cn(active === item.id ? styles.active : styles.card)}
			onClick={() => handleClick(item.id)}
		>
			{active !== item.id ? (
				<h4>{item.title}</h4>
			) : (
				<div className={styles.activeContent}>
					<div className={styles.icon}>
						<Image src={item.icon} alt='vr' width={20} height={20} />
					</div>
					<p>{item.description}</p>
					<h4>{item.title}</h4>
				</div>
			)}
			<Image src={item.image} alt={item.title} layout='fill' />
		</motion.div>
	)
}

export default ExploreItem
