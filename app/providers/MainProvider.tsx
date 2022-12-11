import { FC } from 'react'
import Layout from '../components/Layout/Layout'

const MainProvider: FC = ({ children }: any) => {
	return <Layout>{children}</Layout>
}

export default MainProvider
