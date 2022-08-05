import React from 'react'
import { Colors } from '../../helpers/constants'

export interface ISpoilerWarningProps {
	title: string
}

export const SpoilerWarning: React.FunctionComponent<ISpoilerWarningProps> = (props) => {
	const { title } = props

	return (
		<div
			style={{
				display: 'flex',
				fontWeight: 600,
				color: Colors.BloodRed,
				border: `1px solid ${Colors.BloodRed}`,
				padding: '8px 24px',
				margin: '0 48px 24px 48px',
				boxShadow: '3px 3px rgba(108, 43, 38, 0.6)',
			}}
		>
			<span style={{ width: 240 }}>SPOILER WARNING</span>
			<span style={{ textAlign: 'center', flexGrow: 1 }}>{title}</span>
		</div>
	)
}
