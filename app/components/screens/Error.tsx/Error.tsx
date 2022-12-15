import Image from 'next/image'
import { FC } from 'react'
import styles from './Error.module.sass'

const Error: FC = () => {
	return (
		<div>
			<h1 className={styles.title}>Error 404</h1>
			<div className={styles.image}>
				<Image src='/error.gif' alt='error gif' layout='fill' />
			</div>
			<Image
				className={styles.background}
				src='/error.gif'
				alt='error gif'
				layout='fill'
			/>
		</div>
	)
}

export default Error
