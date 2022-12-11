import { FC } from 'react'
import { IInsights } from './insights.interface'
import InsightsItem from './InsightsItem'
import styles from './Insights.module.sass'

const InsightsContainer: FC<{ menu: IInsights }> = ({ menu: { items } }) => {
	return (
		<div className={styles.content}>
			{items.map(item => (
				<InsightsItem key={item.title} item={item} />
			))}
		</div>
	)
}

export default InsightsContainer
