import { FC } from 'react'

import About from '../../sections/About/About'
import Explore from '../../sections/Explore/Explore'
import Feedback from '../../sections/Feedback/Feedback'
import GetStarted from '../../sections/GetStarted/GetStarted'
import Hero from '../../sections/Hero/Hero'
import Insights from '../../sections/Insights/Insights'
import WhatsNew from '../../sections/WhatsNew/WhatsNew'
import World from '../../sections/World/World'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const Home: FC = () => (
	<div>
		<Hero />
		<div className='relative'>
			<About />
			<div className='gradient-03 z-0' />
			<Explore />
		</div>
		<div className='relative'>
			<GetStarted />
			<div className='gradient-04 z-0' />
			<WhatsNew />
		</div>
		<World />
		<div className='relative'>
			<Insights />
			<div className='gradient-04 z-0' />
			<Feedback />
		</div>
	</div>
)

export default Home
