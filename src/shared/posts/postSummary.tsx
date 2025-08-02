import React, { useCallback, useContext, useState } from 'react'
import { MediaContext, MediaSize } from '../../components/mediaProvider'
import { SeasonsContext } from '../../modes/seasons/seasons'
import { Seasons } from '../../modes/seasons/seasonsHelpers'
import { useAttention } from '../helpers/attention'
import { getPath, PageRoutes, redirectTo } from '../helpers/routes'
import { capitalize } from '../helpers/strings'
import { dateTimeFormatOptions } from '../helpers/time'
import ZoomImage from '../presentational/components/imageZoom/ZoomImage'
import { useColors } from '../presentational/hooks/useColors'
import { IPost, PivotRoutes } from './post.types'

export interface IPostSummaryProps {
	post: IPost
	page: PageRoutes
	displayLarge?: boolean
	rootStyle?: React.CSSProperties
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

const imageStyle: React.CSSProperties = {
	objectFit: 'cover',
	objectPosition: '50% top',
}

const getRootStyle = (
	rootStyle: React.CSSProperties | undefined,
	displayLarge: boolean | undefined,
	isMediaSmall: boolean,
	opacity: number
): React.CSSProperties => {
	const style: React.CSSProperties = {
		...rootStyle,
		maxWidth: '800px',
		cursor: 'pointer',
		backgroundColor: `rgba(0, 0, 0, ${opacity})`,
		marginTop: -1,
	}

	if (displayLarge || isMediaSmall) {
		style.display = 'block'
		style.textAlign = 'center'
	} else {
		style.display = 'flex'
	}

	return style
}

export const PostSummary: React.FunctionComponent<IPostSummaryProps> = (props) => {
	let { rootStyle, post, page, displayLarge } = props
	const { title, subtitle, createdTime, route, imageSrc } = post
	const mediaSize = useContext(MediaContext)
	const [opacity, setOpacity] = useState(0)
	const onAttention = useCallback(
		(hasAttention: boolean) => setOpacity(hasAttention ? 0.05 : 0),
		[]
	)
	const isSmall = mediaSize === MediaSize.Small
	displayLarge = isSmall ? false : displayLarge
	const { subtitle: subtitleColor } = useColors()
	const { season } = useContext(SeasonsContext)
	let titleTextStyle = titleTextStyleLarge(displayLarge)
	let subtitleTextStyle = subtitleTextStyleLarge
	if (mediaSize === MediaSize.Small) {
		titleTextStyle = titleTextStyleSmall
		subtitleTextStyle = subtitleTextStyleSmall
	}
	const createdDate = new Date(createdTime)
	const dateStr = createdDate.toLocaleDateString('en-US', dateTimeFormatOptions)
	const label = route === PageRoutes.Home ? dateStr : `${dateStr} / ${capitalize(route)}`
	rootStyle = getRootStyle(rootStyle, displayLarge, isSmall, opacity)

	const path = getPath(page, post.id)
	const onClick = useCallback(() => redirectTo(path), [path])

	let useBorderTop = false
	let img: JSX.Element = <></>
	if (displayLarge) {
		img = <ZoomImage width={600} height={340} style={imageStyle} src={imageSrc} />
	} else {
		const modifiedImageStyle = { ...imageStyle }

		if (season === Seasons.Winter) {
			modifiedImageStyle.filter = 'brightness(0.8)'
		} else if (season === Seasons.None) {
			modifiedImageStyle.filter = 'sepia(0.25)'
		}

		if (isSmall) {
			img = <img width={'100%'} height={200} style={modifiedImageStyle} src={imageSrc} />
		} else {
			useBorderTop = true
			img = (
				<div style={{ width: 260 }}>
					<img width={260} height={200} style={modifiedImageStyle} src={imageSrc} />
				</div>
			)
		}
	}

	const element = (
		<div style={rootStyle} onClick={onClick}>
			{img}
			<div
				style={{
					width: '100%',
					maxWidth: displayLarge ? undefined : 528,
					borderTop: useBorderTop ? '1px solid gray' : undefined,
				}}
			>
				<div style={{ padding: `24px 12px 12px ${useBorderTop ? 40 : 12}px` }}>
					<a style={titleTextStyle} href={path} target="_self">
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
		</div>
	)

	return useAttention(element, [onAttention], isSmall)
}
