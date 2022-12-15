import { FC } from 'react'
import { motion } from 'framer-motion'
import styles from './About.module.sass'

import {
	staggerContainer,
	fadeIn,
	textContainer,
	textVariant2,
} from '../../utils/motion'
import cn from 'classnames'
import Link from 'next/link'

const About: FC = () => {
	return (
		<section>
			<motion.div
				className={styles.wrapper}
				variants={staggerContainer()}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false, amount: 0.25 }}
			>
				<div className='gradient-02 z-0' />
				<motion.h4 variants={textContainer}>
					{Array.from('| About Metaverse').map((letter, index) => (
						<motion.span variants={textVariant2} key={index}>
							{letter === ' ' ? '\u00A0' : letter}
						</motion.span>
					))}
				</motion.h4>
				<motion.h3 variants={fadeIn('up', 'tween', 0.2, 1)}>
					<span>Metaverse</span> is a new thing in the future, where you can
					enjoy the virtual world by feeling like it`s really real, you can feel
					what you feel in this metaverse world, because this is really the
					<span>madness of the metaverse</span> of today, using only
					<span>VR</span> devices you can easily explore the metaverse world you
					want, turn your dreams into reality. Let`s explore the madness of the
					metaverse by scrolling down
				</motion.h3>

				<Link href='#explore'>
					<motion.img
						className={styles.arrow}
						variants={fadeIn('up', 'tween', 0.3, 1)}
						src='/images/icons/arrowDown.svg'
					/>
				</Link>
			</motion.div>
		</section>
	)
}

export default About
