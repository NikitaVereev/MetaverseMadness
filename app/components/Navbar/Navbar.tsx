'use client'
import { motion } from 'framer-motion'
import { FC } from 'react'
import { navVariants } from '../../utils/motion'
import styles from './Navbar.module.sass'

const Navbar: FC = () => {
	return (
		<motion.nav
			variants={navVariants}
			initial='hidden'
			whileInView='show'
			className={styles.wrapper}
		>
			Navbar
		</motion.nav>
	)
}

export default Navbar
