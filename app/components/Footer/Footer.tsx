import { FC } from 'react'
import { motion } from 'framer-motion'
import FooterContainer from './FooterContainer'
import { footerLink } from './footer.date'
import Image from 'next/image'
import styles from './Footer.module.sass'
import { footerVariants } from '../../utils/motion'

const Footer: FC = () => {
	return (
		<motion.footer
			variants={footerVariants}
			initial='hidden'
			whileInView='show'
			className={styles.footer}
		>
			<div className='footer-gradient' style={{ position: 'absolute' }} />
			<motion.div className={styles.wrapper}>
				<motion.h2>Enter the Metaverse</motion.h2>
				<motion.div className={styles.button}>
					<Image
						src='/images/icons/moreRealistic.svg'
						alt='more-realistic'
						width={24}
						height={18}
					/>
					<span>ENTER METAVERSE</span>
				</motion.div>
			</motion.div>
			<motion.div className={styles.line} />

			<motion.div className={styles.footerBoard}>
				<h2>METAVERSUS</h2>
				<span>Copyright © 2021 - 2022 Metaversus. All rights reserved.</span>
				<FooterContainer menu={footerLink} />
			</motion.div>
		</motion.footer>
	)
}

export default Footer
