import React, { useState } from 'react'
import { useLightTextStyle } from '../../helpers/useStyles'

export interface ILinkFrameProps {
	title: JSX.Element | string
	link: string
	description?: JSX.Element | string
	displayLarger?: boolean
	// put the shadow on bottom and right, instead of the default bottom and left
	rightShadow?: boolean
}

// (TODO) Styling
export const LinkFrame: React.FunctionComponent<ILinkFrameProps> = (props) => {
	const { title, description, link, displayLarger, rightShadow } = props
	const [isHovering, setIsHovering] = useState<boolean>(false)
	const lightTextStyle = useLightTextStyle()

	let horizontalShadow = '24px'
	if (rightShadow) {
		horizontalShadow = '-24px'
	}

	let boxShadow = `inset ${horizontalShadow} -24px 100px -100px rgb(0, 0, 0, 1)`
	if (isHovering) {
		boxShadow = `inset ${horizontalShadow} -24px 70px -70px rgb(0, 0, 0, 1)`
	}

	return (
		<div
			style={{
				padding: '24px 24px 24px 36px',
				marginBottom: '40px',
				boxShadow,
			}}
			onMouseEnter={(): void => {
				setIsHovering(true)
			}}
			onMouseLeave={(): void => {
				setIsHovering(false)
			}}
		>
			<a href={link} target="_blank" style={{ fontSize: displayLarger ? 24 : 21 }}>
				{title}
			</a>
			{description && (
				<div style={{ ...lightTextStyle, padding: '6px 0px 0px 6px' }}>{description}</div>
			)}
		</div>
	)
}
