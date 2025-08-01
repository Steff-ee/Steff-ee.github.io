import React, { useState } from 'react'
import { animated, to, useTransition } from 'react-spring'
import { NavOrientation } from '../../components/iconNav/iconNav.types'
import { NavItem } from '../../components/iconNav/navItem'
import { useFrostedGlass } from '../../shared/helpers/frostedGlass'
import { IScrollPosition, useScroll } from '../../shared/helpers/useScroll'
import { useMobileMenu } from '../../shared/presentational/components/mobileMenu'
import { IClassicNavProps } from './classicNav.types'
import { ClassicPostsNav } from './classicPostsNav'

const ClassicNavMobile: React.FunctionComponent<IClassicNavProps> = (props) => {
	const {
		showPosts: showPostsProp,
		scrollRef,
		positionRef,
		rootStyle,
		firstClick,
		backClick,
		nextClick,
		latestClick,
	} = props
	const [isScrollingDownward, setIsScrollingDownward] = useState<boolean>(true)
	const { menuButtonProps, MenuList } = useMobileMenu({})
	const MenuButton = <NavItem {...menuButtonProps} />
	const frostedStyle = useFrostedGlass()

	const onScroll = (currentPosition: IScrollPosition, prevPosition: IScrollPosition): void => {
		if (showPostsProp) {
			const yDistance = currentPosition.y - prevPosition.y
			const minUpDistance = 256
			const minDownDistance = 256
			const minDistanceFromTop = 32

			if (yDistance > minUpDistance && isScrollingDownward) {
				setIsScrollingDownward(false)
			}

			if (yDistance < -minDownDistance && !isScrollingDownward) {
				setIsScrollingDownward(true)
			}
		}
	}

	useScroll(scrollRef, positionRef, onScroll)

	const showPosts = showPostsProp && isScrollingDownward
	const showPages = !showPosts

	const pagesTransition = useTransition(showPages, {
		from: { opacity: 0, transform: 'translate3d(0, -24%, 0)' },
		enter: { opacity: 1, transform: 'translate3d(0, 0%, 0)' },
		leave: { opacity: 0 },
	})

	const postsTransition = useTransition(showPosts, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	})

	// the empty div on !showPages is to keep the space-between working
	return (
		<div style={rootStyle}>
			<div style={{ display: 'flex', justifyContent: 'space-around' }}>
				{showPages &&
					pagesTransition(
						(rootTransition, item) =>
							item && (
								<animated.div
									style={{
										...rootTransition,
										visibility: to(rootTransition.opacity, (opacity: number) =>
											opacity === 0 ? 'hidden' : 'visible'
										),
									}}
								>
									{MenuButton}
								</animated.div>
							)
					)}
				{showPosts &&
					postsTransition(
						(rootTransition, item) =>
							item && (
								<animated.div
									style={{
										...rootTransition,
										visibility: to(rootTransition.opacity, (opacity: number) =>
											opacity === 0 ? 'hidden' : 'visible'
										),
									}}
								>
									<ClassicPostsNav
										scrollRef={scrollRef}
										positionRef={positionRef}
										orientation={NavOrientation.Right}
										firstClick={firstClick}
										backClick={backClick}
										nextClick={nextClick}
										latestClick={latestClick}
										menuClick={() => console.log('TODO')}
									/>
								</animated.div>
							)
					)}
			</div>
			<div
				style={{
					...rootStyle,
					...frostedStyle,
					zIndex: -1,
				}}
			/>
			{MenuList}
		</div>
	)
}

export default ClassicNavMobile
