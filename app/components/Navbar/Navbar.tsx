'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC, useState } from 'react'
import { navVariants } from '../../utils/motion'
import styles from './Navbar.module.sass'
import search from '../../../public/images/icons/search.svg'

const Navbar: FC = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<motion.nav
			variants={navVariants}
			initial='hidden'
			whileInView='show'
			className={styles.wrapper}
		>
			<div className='absolute w-[50%] inset-0 gradient-01' />
			<div className={styles.content}>
				<Image src={search} alt='search' />
				<h2>METAVERSUS</h2>
				<div className={styles.menu} onClick={() => setIsOpen(!isOpen)}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			{isOpen && (
				<div className={styles.activeMenu}>
					<h1 className='text-5xl text-white'>?</h1>
				</div>
			)}
		</motion.nav>
	)
}

export default Navbar
