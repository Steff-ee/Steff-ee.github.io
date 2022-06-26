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
}

const titleTextStyleLarge: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: 32,
	lineHeight: '40px',
	fontWeight: 600,
}

const titleTextStyleSmall: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: 21,
	lineHeight: '24px',
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
	const { post, page, pivot } = props
	const { title, subtitle, createdTime, route } = post
	const mediaSize = useContext(MediaContext)
	const { subtitle: subtitleColor } = useColors()
	let titleTextStyle = titleTextStyleLarge
	let subtitleTextStyle = subtitleTextStyleLarge
	if (mediaSize === MediaSize.Small) {
		titleTextStyle = titleTextStyleSmall
		subtitleTextStyle = subtitleTextStyleSmall
	}
	const createdDate = new Date(createdTime)
	const dateStr = createdDate.toLocaleDateString('en-US', dateTimeFormatOptions)
	const label = route === PageRoutes.Home ? dateStr : `${dateStr} / ${capitalize(route)}`

	return (
		<div style={{ maxWidth: '552px' }}>
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
	)
}
