import { FC } from 'react'
import { motion } from 'framer-motion'
import {
	staggerContainer,
	textContainer,
	textVariant2,
} from '../../utils/motion'
import styles from './Insights.module.sass'
import InsightsContainer from './InsightsContainer'
import { insightsData } from './insights.data'

const Insights: FC = () => {
	return (
		<section>
			<motion.div
				variants={staggerContainer}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false, amount: 0.25 }}
			>
				<motion.h4 variants={textContainer}>
					{Array.from('| Insight?').map((letter, index) => (
						<motion.span variants={textVariant2} key={index}>
							{letter === ' ' ? '\u00A0' : letter}
						</motion.span>
					))}
				</motion.h4>
				<motion.h2 variants={textVariant2} className={styles.title}>
					Insight about metaverse
				</motion.h2>
				<InsightsContainer menu={insightsData} />
			</motion.div>
		</section>
	)
}

export default Insights
