import { FC } from 'react'
import { IInsightsItem } from './insights.interface'
import { motion } from 'framer-motion'
import styles from './Insights.module.sass'
import Image from 'next/image'
import { fadeIn } from '../../utils/motion'

interface IItem {
	index: number
}

const InsightsItem: FC<{ item: IInsightsItem } & IItem> = ({ item, index }) => {
	return (
		<motion.div
			className={styles.card}
			variants={fadeIn('up', 'spring', index * 0.5, 1)}
		>
			<div className={styles.image}>
				<Image src={item.image} alt={item.title} layout='fill' />
			</div>
			<div className={styles.text}>
				<h3>{item.title}</h3>
				<p>{item.description}</p>
			</div>
			<div className={styles.button}>
				<Image
					src='/images/icons/arrow.svg'
					alt='button'
					width={27}
					height={33}
				/>
			</div>
		</motion.div>
	)
}

export default InsightsItem
