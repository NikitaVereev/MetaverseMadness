'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC, useState } from 'react'
import { navVariants } from '../../utils/motion'
import styles from './Navbar.module.sass'
import search from '../../../public/images/icons/search.svg'
import { useRouter } from 'next/router'
import Link from 'next/link'
import NavbarContainer from './NavbarContainer'
import { menu } from './menu.data'

const Navbar: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const router = useRouter()
	const handleClick = (e: any) => {
		e.preventDefault()
		router.push('hreh')
	}

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
				<Link href='/'>
					<h2>METAVERSUS</h2>
				</Link>
				<div className={styles.menu} onClick={() => setIsOpen(!isOpen)}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			{isOpen && (
				<div className={styles.activeMenu}>
					<h1 className={styles.title}>
						<NavbarContainer menu={menu} />
					</h1>
				</div>
			)}
		</motion.nav>
	)
}

export default Navbar
