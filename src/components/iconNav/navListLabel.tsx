import React, { useState } from 'react'
import { animated, useSpring, useTransition } from 'react-spring'
import { NavOrientation } from './iconNav.types'
import { INavListLabelProps } from './navListLabel.types'

/**
 * This is a molecular component:
 * It should avoid using Context but it can have behavior-specific props.
 *
 * (Even though it is not made of other atoms, we still consider this molecular because it is opinionated on styling (for animation))
 */
const NavListLabel: React.FunctionComponent<INavListLabelProps> = (props) => {
	const { navItem, width, height, rootStyle, textStyle, orientation } = props
	const currentItemId = navItem?.id ?? ''
	const [delayedId, setDelayedId] = useState<string>(currentItemId)
	const idChanging = delayedId !== currentItemId
	const textSpringDuration = 70

	const [textSpring] = useSpring(() => ({
		to: { opacity: 1 },
		from: { opacity: 0 },
		config: { duration: textSpringDuration },
		onRest: (): void => {
			if (delayedId !== currentItemId) {
				setDelayedId(currentItemId)
			}
		},
		reset: idChanging,
		reverse: idChanging,
	}))

	let transform
	if (orientation === NavOrientation.Right) {
		transform = 'translate3d(100%, 0%, 0)'
	} else if (orientation === NavOrientation.Left) {
		transform = 'translate3d(-100%, 0%, 0)'
	}
	// else {
	// 	transform = 'translate3d(0%, -100%, 0)'
	// }

	const transition = useTransition(!!navItem, {
		from: { transform },
		enter: { transform: 'translate3d(0%, 0%, 0)' },
		leave: { transform },
	})

	return (
		<>
			{transition(
				(rootTransition, item) =>
					item && (
						<animated.div
							// @ts-ignore
							style={{
								display: 'flex',
								width,
								height,
								minWidth: '160px',
								cursor: 'pointer',
								...rootStyle,
								...rootTransition,
							}}
							onClick={navItem?.onClick}
						>
							<animated.div
								// @ts-ignore
								style={{
									margin: 'auto',
									padding: '16px',
									...textStyle,
									...textSpring,
								}}
							>
								{navItem?.label}
							</animated.div>
						</animated.div>
					)
			)}
		</>
	)
}

export default NavListLabel
