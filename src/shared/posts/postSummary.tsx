import React, { useContext } from 'react'
import { MediaContext, MediaSize } from '../../components/mediaProvider'
import { getPath, PageRoutes } from '../helpers/routes'
import { capitalize } from '../helpers/strings'
import { dateTimeFormatOptions } from '../helpers/time'
import { useColors } from '../presentational/hooks/useColors'
import { IPost, PivotRoutes } from './post.types'

export interface IPostSummaryProps {
	post: IPost
	page: PageRoutes
	pivot: PivotRoutes | undefined
	displayLarge?: boolean
}

const titleTextStyleLarge = (displayLarge?: boolean): React.CSSProperties => ({
	fontFamily: 'Montserrat',
	fontSize: displayLarge ? 32 : 28,
	lineHeight: '35px',
	fontWeight: 600,
})

const titleTextStyleSmall: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: 24,
	lineHeight: '28px',
	fontWeight: 600,
}

const subtitleTextStyleLarge: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: 21,
	lineHeight: '26px',
}

const subtitleTextStyleSmall: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: 18,
	lineHeight: '22px',
}

export const PostSummary: React.FunctionComponent<IPostSummaryProps> = (props) => {
	let { post, page, pivot, displayLarge } = props
	const { title, subtitle, createdTime, route, imageSrc } = post
	const mediaSize = useContext(MediaContext)
	const isSmall = mediaSize === MediaSize.Small
	displayLarge = isSmall ? false : displayLarge
	const { subtitle: subtitleColor } = useColors()
	let titleTextStyle = titleTextStyleLarge(displayLarge)
	let subtitleTextStyle = subtitleTextStyleLarge
	if (mediaSize === MediaSize.Small) {
		titleTextStyle = titleTextStyleSmall
		subtitleTextStyle = subtitleTextStyleSmall
	}
	const createdDate = new Date(createdTime)
	const dateStr = createdDate.toLocaleDateString('en-US', dateTimeFormatOptions)
	const label = route === PageRoutes.Home ? dateStr : `${dateStr} / ${capitalize(route)}`

	let rootStyle: React.CSSProperties = {
		maxWidth: '800px',
		display: 'flex',
		borderTop: `1px solid gray`,
		marginTop: -1,
	}

	if (displayLarge) {
		rootStyle = {
			maxWidth: '800px',
			display: 'block',
			marginTop: -1,
			textAlign: 'center',
		}
	}

	return (
		<div style={rootStyle}>
			{!isSmall && (
				<img
					width={displayLarge ? 600 : 260}
					height={displayLarge ? 340 : 200}
					style={{
						objectFit: 'cover',
						objectPosition: '50% top',
						marginRight: displayLarge ? undefined : 40,
						opacity: displayLarge ? undefined : 0.9,
					}}
					src={imageSrc}
				/>
			)}
			<div style={{ maxWidth: displayLarge ? undefined : 500, paddingTop: 24 }}>
				<a style={titleTextStyle} href={getPath(page, pivot, post.id)} target="_self">
					{title}
				</a>
				{subtitle && (
					<div
						style={{
							...subtitleTextStyle,
							margin: '10px 0px',
							color: subtitleColor,
						}}
					>
						{subtitle}
					</div>
				)}
				<div
					style={{
						fontFamily: 'Source Code Pro',
						fontSize: '16px',
						lineHeight: '22px',
						color: subtitleColor,
						fontWeight: 300,
					}}
				>
					{label}
				</div>
			</div>
		</div>
	)
}
