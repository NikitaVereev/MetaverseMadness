import { motion } from 'framer-motion'
import { FC, useState } from 'react'
import { staggerContainer } from '../../utils/motion'
import { ISlide } from './explore.interface'
import styles from './Explore.module.sass'
import ExploreItem from './ExploreItem'

const ExploreContainer: FC<{ menu: ISlide }> = ({ menu: { items } }) => {
	const [active, setActive] = useState('planet-2')
	return (
		<motion.div
			className={styles.wrapper}
			variants={staggerContainer}
			initial='hidden'
			whileInView='show'
			viewport={{ once: false, amount: 0.25 }}
		>
			<div>
				<motion.h4>I The World</motion.h4>
				<motion.h2 className={styles.title}>
					Choose the world you want to explore
				</motion.h2>
			</div>
			<motion.div>
				<div className={styles.slider}>
					{items.map((item, index) => (
						<ExploreItem
							active={active}
							index={index}
							handleClick={setActive}
							key={item.title}
							item={item}
						/>
					))}
				</div>
			</motion.div>
		</motion.div>
	)
}

export default ExploreContainer
