import { FC } from 'react'
import { motion } from 'framer-motion'
import styles from '../GetStarted/GetStarted.module.sass'
import {
	fadeIn,
	planetVariants,
	staggerContainer,
	textContainer,
	textVariant2,
} from '../../utils/motion'
import Image from 'next/image'

const WhatsNew: FC = () => {
	return (
		<section>
			<motion.div
				className={styles.wrapper}
				variants={staggerContainer}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false, amount: 0.25 }}
			>
				<motion.div className={styles.infoNew}>
					<motion.h4 variants={textContainer}>
						{Array.from('| Whats New?').map((letter, index) => (
							<motion.span variants={textVariant2} key={index}>
								{letter === ' ' ? '\u00A0' : letter}
							</motion.span>
						))}
					</motion.h4>
					<motion.h2 variants={textVariant2} className={styles.title}>
						What`s new about Metaversus?
					</motion.h2>
					<motion.div
						variants={fadeIn('right', 'tween', 0.2, 1)}
						className={styles.counterHorizontal}
					>
						<div>
							<span>
								<Image
									src='/images/icons/newWorld.svg'
									alt='a new world'
									width={24}
									height={24}
								/>
							</span>
							<h5>A new World</h5>
							<p>
								we have the latest update with new world for you to try never
								mind
							</p>
						</div>
						<div>
							<span>
								<Image
									src='/images/icons/moreRealistic.svg'
									alt='more realistic'
									width={24}
									height={24}
								/>
							</span>
							<h5>More realistic</h5>
							<p>
								In the latest update, your eyes are narrow, making the world
								more realistic than ever
							</p>
						</div>
					</motion.div>
				</motion.div>
				<motion.div className={styles.image} variants={planetVariants('right')}>
					<Image src='/whats-new.png' alt='whats-new' layout='fill' />
				</motion.div>
			</motion.div>
		</section>
	)
}

export default WhatsNew
