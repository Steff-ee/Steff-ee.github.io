import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useColors } from '../../shared/presentational/hooks/useColors'
import { INavItem, IVerticalIconNavProps, LabelPosition, NavOrientation } from './iconNav.types'
import { NavItem } from './navItem'

// (TODO) add opening/closing animation

/**
 * This is a macromolecular component:
 * I haven't decided what that means yet.
 */
export const VerticalIconNav: React.FunctionComponent<IVerticalIconNavProps> = (props) => {
	const {
		navItems,
		showIconLabels,
		onIconsMenuIconClick,
		onRenderBelowContent,
		rootStyle,
		iconWidth = '64px',
		iconHeight = '64px',
		labelWidth = '248px',
		selectedId,
		orientation,
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

	return (
		<div
			style={{
				margin: '0 auto',
				display: 'inline-block',

				...rootStyle,
			}}
		>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<NavItem
					label={'Open menu'}
					width={iconWidth}
					height={iconHeight}
					color={navbarTextColor}
					icon={<FontAwesomeIcon icon={faBars} size={'2x'} />}
					onClick={() => {
						onIconsMenuIconClick?.()
						setIsOpen(!isOpen)
					}}
				/>
				<div
					style={{
						position: 'absolute',
						color: navbarTextColor,
						backgroundColor: borderColor,
						marginTop: iconHeight,
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
									labelTextStyle={{ margin: 'auto 0' }}
								/>
							)
						})}
				</div>
				{onRenderBelowContent && showIconLabels && onRenderBelowContent()}
			</div>
		</div>
	)
}
