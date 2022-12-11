import { FC } from 'react'
import { motion } from 'framer-motion'
import styles from './Feedback.module.sass'
import Image from 'next/image'

const Feedback: FC = () => {
	return (
		<section>
			<div className={styles.wrapper}>
				<motion.div className={styles.info}>
					<h5>Samantha</h5>
					<span>Founder Metaverus</span>
					<p>
						&quot;With the development of today`s technology, metaverse is very
						useful for today`s work, or can be called web 3.0. by using
						metaverse you can use it as anything&quot;
					</p>
				</motion.div>
				<Image src='/stamp.png' alt='stamp' width={155} height={155} />
				<motion.div className={styles.image}>
					<Image src='/planet9.png' alt='planet9' layout='fill' />
				</motion.div>
			</div>
		</section>
	)
}

export default Feedback
