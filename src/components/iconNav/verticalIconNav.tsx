import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useColors } from '../../shared/presentational/hooks/useColors'
import { INavItem, IVerticalIconNavProps, LabelPosition, NavOrientation } from './iconNav.types'
import { INavItemProps, NavItem } from './navItem'

// (TODO) add opening/closing animation

export interface IUseVerticalIconNavResult {
	menuButtonProps: INavItemProps
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
	} = props
	const [isOpen, setIsOpen] = useState(false)
	const { navbarText: navbarTextColor, border: borderColor } = useColors()

	let labelProps = {}
	if (showIconLabels) {
		labelProps = {
			labelPosition:
				orientation === NavOrientation.Left ? LabelPosition.Right : LabelPosition.Left,
			labelWidth,
		}
	}

	const menuButtonProps: INavItemProps = {
		label: 'Open menu',
		width: iconWidth,
		height: iconHeight,
		color: navbarTextColor,
		icon: <FontAwesomeIcon icon={faBars} size={'2x'} />,
		onClick: () => {
			onIconsMenuIconClick?.()
			setIsOpen(!isOpen)
		},
		...inputMenuButtonprops,
	}

	const MenuList = (
		<div style={{ display: 'flex' }}>
			<div
				style={{
					color: navbarTextColor,
					backgroundColor: borderColor,
				}}
			>
				{isOpen &&
					navItems.map((item: INavItem): JSX.Element => {
						const { label, icon, onClick } = item

						return (
							<NavItem
								{...labelProps}
								icon={icon}
								label={label}
								onClick={onClick}
								width={iconWidth}
								height={iconHeight}
								color={navbarTextColor}
								key={item.id}
								isSelected={item.id === selectedId}
							/>
						)
					})}
			</div>
			{onRenderBelowContent && showIconLabels && onRenderBelowContent()}
		</div>
	)

	return { menuButtonProps, MenuList, isOpen }
}
