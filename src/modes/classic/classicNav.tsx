import React, { Suspense, useContext, useState } from 'react'
import { NavOrientation } from '../../components/iconNav/iconNav.types'
import { MediaContext, MediaSize } from '../../components/mediaProvider'
import { useFrostedGlass } from '../../shared/helpers/frostedGlass'
import { IClassicNavProps } from './classicNav.types'
import { ClassicPostsNav } from './classicPostsNav'
import { Menu, menuItems } from './menu'
const ClassicNavMobile = React.lazy(() => import('./classicNavMobile'))

const ClassicNavLarge: React.FunctionComponent<IClassicNavProps> = (props) => {
	const { menuShowing, menuClick, scrollRef, positionRef, rootStyle, firstClick, backClick, nextClick, latestClick } =
		props
	const frostedStyle = useFrostedGlass()

	// the empty div on !showPages is to keep the space-between working
	return (
		<div style={rootStyle}>
			<div style={{ display: 'flex', justifyContent: 'space-around' }}>
				<div>
					<ClassicPostsNav
						scrollRef={scrollRef}
						positionRef={positionRef}
						orientation={NavOrientation.Right}
						firstClick={firstClick}
						backClick={backClick}
						nextClick={nextClick}
						latestClick={latestClick}
						menuClick={menuClick}
						suppressLabels={menuShowing}
					/>
				</div>
			</div>
			<div
				style={{
					...rootStyle,
					...frostedStyle,
					marginTop: '-64px',
					zIndex: -1,
				}}
			/>
		</div>
	)
}

const ClassicNav: React.FunctionComponent<IClassicNavProps> = (props) => {
	const isSmall = useContext(MediaContext) === MediaSize.Small

	if (isSmall) {
		return (
			<Suspense>
				<ClassicNavMobile {...props} />
			</Suspense>
		)
	}

	return <ClassicNavLarge {...props} />
}

export default ClassicNav
