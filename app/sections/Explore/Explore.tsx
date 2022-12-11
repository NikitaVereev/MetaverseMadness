'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import styles from './Explore.module.sass'
import ExploreItem from './ExploreItem'
import { ISlide } from './explore.interface'
import ExploreContainer from './ExploreContainer'
import { slides } from './explore.data'
import { staggerContainer } from '../../utils/motion'

const Explore: FC = () => {
	return (
		<section id='explore'>
			<ExploreContainer menu={slides} />
		</section>
	)
}

export default Explore
