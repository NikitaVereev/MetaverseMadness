import { FC } from 'react'
import { IInsightsItem } from './insights.interface'
import { motion } from 'framer-motion'
import styles from './Insights.module.sass'
import Image from 'next/image'

const InsightsItem: FC<{ item: IInsightsItem }> = ({ item }) => {
	return (
		<motion.div className={styles.card}>
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
