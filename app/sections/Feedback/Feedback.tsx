import { FC } from 'react'
import { motion } from 'framer-motion'
import styles from './Feedback.module.sass'
import Image from 'next/image'
import { fadeIn, staggerContainer, zoomIn } from '../../utils/motion'

const Feedback: FC = () => {
	return (
		<section>
			<motion.div
				variants={staggerContainer}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false, amount: 0.25 }}
				className={styles.wrapper}
			>
				<motion.div
					className={styles.info}
					variants={fadeIn('right', 'tween', 0.2, 1)}
				>
					<h5>Samantha</h5>
					<span>Founder Metaverus</span>
					<p>
						&quot;With the development of today`s technology, metaverse is very
						useful for today`s work, or can be called web 3.0. by using
						metaverse you can use it as anything&quot;
					</p>
				</motion.div>
				<motion.div className={styles.stamp} variants={zoomIn(0.4, 1)}>
					<Image src='/stamp.png' alt='stamp' width={155} height={155} />
				</motion.div>

				<motion.div
					className={styles.image}
					variants={fadeIn('left', 'tween', 0.2, 1)}
				>
					<Image src='/planet9.png' alt='planet9' layout='fill' />
				</motion.div>
			</motion.div>
		</section>
	)
}

export default Feedback
