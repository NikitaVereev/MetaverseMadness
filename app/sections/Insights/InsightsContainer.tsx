import { FC } from 'react'
import { IInsights } from './insights.interface'
import InsightsItem from './InsightsItem'
import styles from './Insights.module.sass'
import { motion } from 'framer-motion'
import { staggerContainer } from '../../utils/motion'

const InsightsContainer: FC<{ menu: IInsights }> = ({ menu: { items } }) => {
	return (
		<motion.div
			className={styles.content}
			variants={staggerContainer}
			initial='hidden'
			whileInView='show'
			viewport={{ once: false, amount: 0.25 }}
		>
			{items.map((item, index: number) => (
				<InsightsItem key={index} item={item} index={index} />
			))}
		</motion.div>
	)
}

export default InsightsContainer
