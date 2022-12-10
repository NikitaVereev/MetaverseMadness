import { NextPage } from 'next'

import About from './sections/About/About'
import Explore from './sections/Explore/Explore'
import Feedback from './sections/Feedback/Feedback'
import GetStarted from './sections/GetStarted/GetStarted'
import Hero from './sections/Hero/Hero'
import Insights from './sections/Insights/Insights'
import WhatsNew from './sections/WhatsNew/WhatsNew'
import World from './sections/World/World'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

const Page: NextPage = () => (
	<div>
		<Navbar />
		<Hero />
		<About />
		<Explore />
		<GetStarted />
		<WhatsNew />
		<World />
		<Insights />
		<Feedback />
		<Footer />
	</div>
)

export default Page
