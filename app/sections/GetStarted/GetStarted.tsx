import { FC } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './GetStarted.module.sass'
import {
	fadeIn,
	planetVariants,
	staggerContainer,
	textContainer,
	textVariant2,
} from '../../utils/motion'

const GetStarted: FC = () => {
	return (
		<section>
			<motion.div
				className={styles.wrapper}
				variants={staggerContainer}
				initial='hidden'
				whileInView='show'
			>
				<motion.div className={styles.image} variants={planetVariants('left')}>
					<Image src='/get-started.png' alt='get-started' layout='fill' />
				</motion.div>
				<motion.div className={styles.info}>
					<motion.h4 variants={textContainer}>
						{Array.from('| How Metaverus Works').map((letter, index) => (
							<motion.span variants={textVariant2} key={index}>
								{letter === ' ' ? '\u00A0' : letter}
							</motion.span>
						))}
					</motion.h4>
					<motion.h2 variants={textVariant2} className={styles.title}>
						Get started with just a few click
					</motion.h2>
					<motion.div
						className={styles.counter}
						variants={fadeIn('up', 'tween', 0.5, 2)}
					>
						<div>
							<span>01</span>
							<p>Find a world that suits you and you want to enter</p>
						</div>
						<div>
							<span>02</span>
							<p>Enter the world by reading basmalah to be safe</p>
						</div>
						<div>
							<span>03</span>
							<p>
								No need to beat around the bust, just stay on the gas and have
								fun
							</p>
						</div>
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	)
}

export default GetStarted
