import { FC } from 'react'
import { motion } from 'framer-motion'
import { textContainer, textVariant2 } from '../../utils/motion'
import Image from 'next/image'
import styles from './World.module.sass'
import cn from 'classnames'

const World: FC = () => {
	return (
		<section>
			<motion.div>
				<motion.h4 variants={textContainer}>
					{Array.from('| People on the World?').map((letter, index) => (
						<motion.span variants={textVariant2} key={index}>
							{letter === ' ' ? '\u00A0' : letter}
						</motion.span>
					))}
				</motion.h4>
				<motion.h2 variants={textVariant2} className={styles.title}>
					Track friends around you and invite them to play together in the same
					world
				</motion.h2>

				<motion.div className={styles.map}>
					<Image src='/map.png' alt='the world' layout='fill' />
					<div className={styles.person}>
						<Image src='/people-01.png' alt='people1' width={61} height={61} />
					</div>
					<div className={styles.person}>
						<Image src='/people-02.png' alt='people2' width={61} height={61} />
					</div>
					<div className={styles.person}>
						<Image src='/people-03.png' alt='people3' width={61} height={61} />
					</div>
					<motion.div className={cn(styles.mapSector, styles.mapSectorFirst)}>
						<Image src='/low1.png' alt='planet2' layout='fill' />
						<div>
							<div>
								<Image
									src='/people-01.png'
									alt='people1'
									width={24}
									height={24}
								/>
								<Image
									src='/people-02.png'
									alt='people2'
									width={24}
									height={24}
								/>
								<Image
									src='/people-03.png'
									alt='people3'
									width={24}
									height={24}
								/>
								<span>+ 264 has joined</span>
							</div>
							<h5>The Upside Down</h5>
						</div>
					</motion.div>
					<motion.div className={styles.mapSector}>
						<Image src='/low2.png' alt='planet3' layout='fill' />
						<div>
							<div>
								<Image
									src='/people-01.png'
									alt='people1'
									width={24}
									height={24}
								/>
								<Image
									src='/people-02.png'
									alt='people2'
									width={24}
									height={24}
								/>
								<Image
									src='/people-03.png'
									alt='people3'
									width={24}
									height={24}
								/>
								<span>+ 264 has joined</span>
							</div>
							<h5>The Upside Down</h5>
						</div>
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	)
}

export default World
