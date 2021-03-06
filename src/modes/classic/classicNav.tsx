import React, { useContext, useState } from 'react'
import { animated, to, useTransition } from 'react-spring'
import { NavOrientation } from '../../components/iconNav/iconNav.types'
import { MediaContext, MediaSize } from '../../components/mediaProvider'
import { IScrollPosition, useScroll } from '../../shared/helpers/useScroll'
import { ClassicPageNav } from './classicPageNav'
import { ClassicPostsNav } from './classicPostsNav'

export interface IClassicNavProps {
	showPosts: boolean
	scrollRef: React.RefObject<HTMLDivElement>
	positionRef: React.RefObject<HTMLDivElement>
	rootStyle?: React.CSSProperties
	firstClick?: () => void
	backClick?: () => void
	nextClick?: () => void
	latestClick?: () => void
}

export const ClassicNav: React.FunctionComponent<IClassicNavProps> = (props) => {
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
	const mediaSize = useContext(MediaContext)
	const [isScrollingDownward, setIsScrollingDownward] = useState<boolean>(true)

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

	let showPosts: boolean
	let showPages: boolean
	if (mediaSize === MediaSize.Small) {
		showPosts = showPostsProp && isScrollingDownward
		showPages = !showPosts
	} else {
		showPosts = showPostsProp
		showPages = true
	}

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
			{pagesTransition(
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
							<ClassicPageNav orientation={NavOrientation.Left} />
						</animated.div>
					)
			)}
			{!showPages && <div />}
			{postsTransition(
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
								orientation={NavOrientation.Right}
								firstClick={firstClick}
								backClick={backClick}
								nextClick={nextClick}
								latestClick={latestClick}
							/>
						</animated.div>
					)
			)}
		</div>
	)
}
