import React, { FC } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

type Props = {
	children?: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	)
}

export default Layout
