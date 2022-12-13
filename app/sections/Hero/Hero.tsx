import { FC } from 'react'
import styles from './Hero.module.sass'
import { motion } from 'framer-motion'
import {
	staggerContainer,
	slideIn,
	textVariant,
	zoomIn,
} from '../../utils/motion'
import Image from 'next/image'
import cn from 'classnames'

const Hero: FC = () => {
	return (
		<section className='pt-0 pb-[200px]'>
			<motion.div
				variants={staggerContainer('staggerChildren', 'delayChildren')}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false, amount: 0.25 }}
				className={styles.wrapper}
			>
				<div className={styles.title}>
					<motion.h1 variants={textVariant(1.1)}>Metaverse</motion.h1>
					<motion.h1 variants={textVariant(1.2)}>
						Ma<span></span>ness
					</motion.h1>
				</div>
				<motion.div
					className={styles.slide}
					variants={slideIn('right', 'tween', 0.2, 1)}
				>
					<div className={cn(styles.image, 'hero-gradient')}>
						<Image src='/space.png' alt='space' width={1000} height={100} />
					</div>
					<motion.div className={styles.stamp} variants={zoomIn(2, 1)}>
						<Image src='/stamp.png' alt='stamp' layout='fill' />
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	)
}

export default Hero
