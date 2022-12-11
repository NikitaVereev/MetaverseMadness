import { FC } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout: FC = ({ children }: any) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	)
}

export default Layout
