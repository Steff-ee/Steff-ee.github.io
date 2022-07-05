import React, { useCallback, useContext, useState } from 'react'
import { useColors } from '../../shared/presentational/hooks/useColors'
import { MediaContext, MediaSize } from '../mediaProvider'
import { IHorizontalIconNavProps, INavItem, NavOrientation } from './iconNav.types'
import { NavItem } from './navItem'
import { NavListLabel } from './navListLabel'

/**
 * This is a macromolecular component:
 * I haven't decided what that means yet.
 */
export const HorizontalIconNav: React.FunctionComponent<IHorizontalIconNavProps> = (props) => {
	const {
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
	const activeNavItem = hoverIndex >= 0 ? navItems[hoverIndex] : undefined
	const { navbarText: navbarTextColor, border: borderColor } = useColors()
	const isSmall = useContext(MediaContext) === MediaSize.Small
	const margin = isSmall ? '0 auto' : undefined

	let orientationStyle: React.CSSProperties
	if (orientation === NavOrientation.Right) {
		orientationStyle = { right: 0 }
	} else {
		orientationStyle = { left: 0 }
	}

	return (
		<div style={{ display: 'inline-block', margin, ...rootStyle }}>
			<div
				style={{
					display: 'flex',
					position: 'relative',
					...orientationStyle,
				}}
			>
				{navItems.map((item: INavItem, itemIndex: number): JSX.Element => {
					const onAttention = useCallback((hasAttention: boolean) => {
						setHoverIndex(hasAttention ? itemIndex : -1)
					}, [])

					return (
						<NavItem
							{...item}
							width={iconWidth}
							height={iconHeight}
							color={navbarTextColor}
							key={`nav-${itemIndex}`}
							id={item.id}
							onAttention={onAttention}
						/>
					)
				})}
			</div>
			<NavListLabel
				navItem={activeNavItem}
				height={iconHeight}
				width={labelWidth}
				orientation={orientation}
				rootStyle={{
					backgroundColor: borderColor,
					color: navbarTextColor,
					position: 'absolute',
					...orientationStyle,
				}}
			/>
		</div>
	)
}
