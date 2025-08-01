import React, { Suspense, useCallback, useContext, useState } from 'react'
import { useAttention } from '../../shared/helpers/attention'
import { useFrostedGlass } from '../../shared/helpers/frostedGlass'
import { useColors } from '../../shared/presentational/hooks/useColors'
import { MediaContext, MediaSize } from '../mediaProvider'
import { IHorizontalIconNavProps, INavItem, NavOrientation } from './iconNav.types'
import { NavItem } from './navItem'
const NavListLabel = React.lazy(() => import('./navListLabel'))

/**
 * This is a macromolecular component:
 * I haven't decided what that means yet.
 */
export const HorizontalIconNav: React.FunctionComponent<IHorizontalIconNavProps> = (props) => {
	const {
		suppressLabels,
		navItems,
		rootStyle,
		iconWidth = '64px',
		iconHeight = '64px',
		labelWidth = '248px',
		orientation,
		defaultActiveItemIndex = -1,
	} = props
	let [hoverIndex, setHoverIndex] = useState<number>(-1)
	if (hoverIndex === -1 && defaultActiveItemIndex > -1) {
		hoverIndex = defaultActiveItemIndex
	}
	const activeNavItem = hoverIndex >= 0 && !suppressLabels ? navItems[hoverIndex] : undefined
	const { navbarText: navbarTextColor } = useColors()
	const frostedStyle = useFrostedGlass()
	const isSmall = useContext(MediaContext) === MediaSize.Small
	const margin = isSmall ? '0 auto' : undefined

	let orientationStyle: React.CSSProperties
	if (orientation === NavOrientation.Right) {
		orientationStyle = { right: 0 }
	} else {
		orientationStyle = { left: 0 }
	}

	const onAttention = useCallback((hasAttention: boolean) => {
		if (!hasAttention) {
			setHoverIndex(-1)
		}
	}, [])

	const element = (
		<div style={{ display: 'inline-block', margin, ...rootStyle }}>
			<div
				style={{
					display: 'flex',
					position: 'relative',
					...orientationStyle,
				}}
			>
				{navItems.map((item: INavItem, itemIndex: number): JSX.Element => {
					const onIconAttention = useCallback((hasAttention: boolean) => {
						if (hasAttention) {
							setHoverIndex(itemIndex)
						}
					}, [])

					return (
						<NavItem
							{...item}
							width={iconWidth}
							height={iconHeight}
							color={navbarTextColor}
							key={`nav-${itemIndex}`}
							id={item.id}
							onAttention={onIconAttention}
						/>
					)
				})}
			</div>
			<Suspense>
				<NavListLabel
					navItem={activeNavItem}
					height={iconHeight}
					width={labelWidth}
					orientation={orientation}
					rootStyle={{
						...frostedStyle,
						color: navbarTextColor,
						position: 'absolute',
						...orientationStyle,
					}}
				/>
			</Suspense>
		</div>
	)

	return useAttention(element, [onAttention])
}
