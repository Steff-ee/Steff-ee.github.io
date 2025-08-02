import React, { Suspense, useContext, useRef, useState } from 'react'
import { MediaContext, MediaSize } from '../../components/mediaProvider'
import {
	contentWrapperStyle,
	entirePageStyle,
	navBarStyleBigScreen,
	navBarStyleMobile,
	parallaxRootStyle,
	smallestDeviceWidth,
} from '../../shared/helpers/styles'
import { useDefaultTextStyle } from '../../shared/helpers/useStyles'
import { useColors } from '../../shared/presentational/hooks/useColors'
import ClassicNav from './classicNav'
import { Footer } from './footer'
import { IPageTemplateProps } from './pageTemplate.types'
import { Title } from './titles/titles'
import { Menu, menuItems } from './menu'
const Fireflies = React.lazy(() => import('../../shared/presentational/components/fireflies'))

// const ParallaxPivots: React.FunctionComponent<IParallaxPivotsProps> = (props) => {
// 	const { arePivotsSticky, selectedPivotTitle, setPivot, pivotsItems, pivotsPositionRef } = props
// 	const { navbarText: navbarTextColor, text: textColor } = useColors()
// 	const color = arePivotsSticky ? navbarTextColor : textColor

// 	const pivotRootStyle = {
// 		fontFamily: 'Source Code Pro',
// 		fontSize: '23px',
// 		letterSpacing: '1px',
// 		color,
// 		justifyContent: 'center',
// 	}

// 	return (
// 		<div
// 			style={{
// 				margin: '75px 20% 75px 20%',
// 				position: arePivotsSticky ? 'sticky' : 'relative',
// 				top: 0,
// 				zIndex: arePivotsSticky ? 4 : 2,
// 			}}
// 			ref={pivotsPositionRef}
// 		>
// 			<Pivots
// 				activeItemKey={selectedPivotTitle}
// 				onClick={setPivot}
// 				rootStyle={pivotRootStyle}
// 				commonItemStyle={{
// 					...pivotItemStyle,
// 					width: '100px',
// 				}}
// 				commonIsActiveStyle={{
// 					borderBottom: `2px solid ${color}`,
// 					paddingTop: '6px',
// 					height: '44px',
// 				}}
// 				pivotItems={pivotsItems}
// 			/>
// 		</div>
// 	)
// }

// const MobilePivots: React.FunctionComponent<IMobilePivotsProps> = (props) => {
// 	const { setPivot, pivotsItems } = props
// 	const { text: textColor } = useColors()

// 	return (
// 		<div style={{ margin: '64px 0px' }}>
// 			{pivotsItems.map((pivotItem) => (
// 				<PivotItem
// 					style={{
// 						...pivotItemStyle,
// 						borderBottom: `2px solid ${textColor}`,
// 					}}
// 					text={
// 						<span>
// 							Go to
// 							<span>
// 								<b>{` ${pivotItem.text} `}</b>
// 							</span>
// 							page
// 						</span>
// 					}
// 					onClick={(): void => setPivot(pivotItem)}
// 					key={pivotItem.key}
// 					isActive={false}
// 				/>
// 			))}
// 		</div>
// 	)
// }

export const PageTemplate: React.FunctionComponent<IPageTemplateProps> = (props) => {
	const {
		Content,
		headerBackgroundImage,
		backgroundStyle,
		firstClick,
		backClick,
		nextClick,
		latestClick,
		showPostsNav,
		artistName,
		artistLink,
	} = props
	const mediaSize = useContext(MediaContext)
	const defaultTextStyle = useDefaultTextStyle()
	const contentPositionRef = useRef(null)
	const scrollRef = useRef(null)
	const { border: borderColor, text: textColor } = useColors()
	const [showMenu, setShowMenu] = useState(false)

	const skipMorph = mediaSize === MediaSize.Small

	let scrollRefStyle: React.CSSProperties
	let navBarStyle: React.CSSProperties
	if (mediaSize === MediaSize.Small) {
		scrollRefStyle = {
			...entirePageStyle,
			overflowX: 'hidden',
			overflowY: 'scroll',
		}
		navBarStyle = navBarStyleMobile
	} else {
		scrollRefStyle = parallaxRootStyle
		navBarStyle = navBarStyleBigScreen
	}

	const classicNav = (
		<>
			<ClassicNav
				rootStyle={{ ...navBarStyle, backgroundColor: 'black' }}
				firstClick={firstClick}
				backClick={backClick}
				nextClick={nextClick}
				latestClick={latestClick}
				showPosts={!!showPostsNav}
				scrollRef={scrollRef}
				positionRef={contentPositionRef}
				menuClick={() => setShowMenu(!showMenu)}
				menuShowing={showMenu}
			/>
			<div
				style={{
					width: '100%',
					height: '64px',
					backgroundColor: borderColor,
					marginTop: '-64px',
				}}
			/>
		</>
	)

	return (
		<div
			style={{
				...defaultTextStyle,
				...scrollRefStyle,
				...backgroundStyle,
				color: textColor,
				position: 'absolute',
				minWidth: smallestDeviceWidth,
			}}
			ref={scrollRef}
		>
			<Title headerBackgroundImage={headerBackgroundImage} skipMorph={skipMorph} />
			<div>
				<div
					style={{
						...backgroundStyle,
						position: mediaSize === MediaSize.Small ? 'relative' : 'sticky',
					}}
					ref={contentPositionRef}
				>
					{classicNav}
					<Menu show={showMenu} items={menuItems} />
					<Suspense>
						<Fireflies />
					</Suspense>
					<div style={contentWrapperStyle}>
						<div style={{ maxWidth: '100%', zIndex: 1 }}>{Content}</div>
					</div>
				</div>
			</div>
			<Footer artistName={artistName} artistLink={artistLink} />
		</div>
	)
}
