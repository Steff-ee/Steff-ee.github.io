import { FaBars } from '@react-icons/all-files/fa/FaBars'
import React, { useCallback, useRef, useState } from 'react'
import { useClickAway } from '../../shared/helpers/clickAway'
import { useFrostedGlass } from '../../shared/helpers/frostedGlass'
import { useColors } from '../../shared/presentational/hooks/useColors'
import { INavItem, IVerticalIconNavProps, LabelPosition, NavOrientation } from './iconNav.types'
import { NavItem } from './navItem'

// (TODO) add opening/closing animation

export interface IUseVerticalIconNavResult {
	menuButtonProps: INavItem
	MenuList: JSX.Element
	isOpen: boolean
}

/**
 * This is a macromolecular component:
 * I haven't decided what that means yet.
 */
export const useVerticalIconNav = (props: IVerticalIconNavProps): IUseVerticalIconNavResult => {
	const {
		navItems,
		showIconLabels,
		onIconsMenuIconClick,
		onRenderBelowContent,
		iconWidth = '64px',
		iconHeight = '64px',
		labelWidth = '184px',
		selectedId,
		orientation,
		menuButtonProps: inputMenuButtonprops,
		tabIndex = 0,
	} = props
	const [isOpen, setIsOpen] = useState(false)
	const { navbarText: navbarTextColor } = useColors()
	const menuListRef = useRef<HTMLDivElement>(null)
	const menuButtonRef = useRef<HTMLDivElement>(null)
	const onClickAway = useCallback(() => setIsOpen(false), [])
	useClickAway([menuButtonRef, menuListRef], onClickAway)
	const frostedStyle = useFrostedGlass()

	let labelProps = {}
	if (showIconLabels) {
		labelProps = {
			labelPosition:
				orientation === NavOrientation.Left ? LabelPosition.Right : LabelPosition.Left,
			labelWidth,
		}
	}

	const menuButtonProps: INavItem = {
		label: 'Open menu',
		width: iconWidth,
		height: iconHeight,
		color: navbarTextColor,
		icon: <FaBars />,
		onClick: () => {
			onIconsMenuIconClick?.()
			setIsOpen(!isOpen)
		},
		ref: menuButtonRef,
		...inputMenuButtonprops,
	}

	const MenuList = (
		<div style={{ display: 'table' }} ref={menuListRef}>
			<div
				style={{
					color: navbarTextColor,
					...frostedStyle,
				}}
			>
				{isOpen &&
					navItems.map((item: INavItem): JSX.Element => {
						const { label, icon, onClick } = item

						const closeOnClick = () => {
							onClick?.()
							setIsOpen(false)
						}

						return (
							<NavItem
								{...labelProps}
								icon={icon}
								label={label}
								onClick={closeOnClick}
								width={iconWidth}
								height={iconHeight}
								color={navbarTextColor}
								key={item.id}
								isSelected={item.id === selectedId}
								tabIndex={tabIndex}
							/>
						)
					})}
			</div>
			{onRenderBelowContent && showIconLabels && onRenderBelowContent()}
		</div>
	)

	return { menuButtonProps, MenuList, isOpen }
}
