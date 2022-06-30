import React, { useState } from 'react'
import { useAttention } from '../../shared/helpers/attention'
import { useColors } from '../../shared/presentational/hooks/useColors'
import { IconButton } from '../iconButton'
import { LabelPosition } from './iconNav.types'
import { NavLabel } from './navLabel'

export interface INavItemProps {
	id?: string
	icon: JSX.Element
	label: string
	labelPosition?: LabelPosition
	isSelected?: boolean
	disabled?: boolean
	tabIndex?: number

	/* Styling */
	width: string
	height: string
	color: string
	labelWidth?: string
	rootStyle?: React.CSSProperties
	labelTextStyle?: React.CSSProperties

	/* Callbacks */
	onClick?: () => void
	onAttention?: (hasAttention: boolean) => void
}

const disabledFadeFilterValue = 'opacity(0.25)'

/**
 * This is a molecular component:
 * It should avoid using Context but it can have behavior-specific props.
 */
export const NavItem: React.FunctionComponent<INavItemProps> = (props) => {
	const {
		icon,
		onClick,
		label = '',
		width,
		height,
		color,
		onAttention,
		labelPosition,
		labelWidth,
		rootStyle,
		labelTextStyle,
		isSelected = false,
		disabled = false,
		tabIndex = 0,
	} = props
	const [hasAttention, setHasAttention] = useState<boolean>(false)
	const { border, borderHighlight } = useColors()
	const background = hasAttention ? borderHighlight : border
	const filter = disabled ? disabledFadeFilterValue : ''
	let isSelectedStyle: React.CSSProperties = {}

	if (isSelected) {
		isSelectedStyle = {
			borderRadius: '3px',
			borderLeft: `2px solid ${color}`,
		}
	}

	let labelElement = <></>
	if (labelPosition !== undefined) {
		labelElement = (
			<NavLabel
				label={label}
				width={labelWidth || width}
				height={height}
				rootStyle={{
					textAlign: 'left',
				}}
				textStyle={labelTextStyle}
			/>
		)
	}

	const button = (
		<IconButton
			icon={icon}
			width={width}
			height={height}
			color={color}
			innerStyle={isSelectedStyle}
			filter={filter}
			applyGrow={hasAttention}
			disabled={disabled}
		/>
	)

	const element = (
		<div
			aria-label={label}
			tabIndex={tabIndex}
			style={{ display: 'flex', background, ...rootStyle }}
			onClick={onClick}
			onKeyPress={onClick}
		>
			{labelPosition === LabelPosition.Left && labelElement}
			{button}
			{labelPosition === LabelPosition.Right && labelElement}
		</div>
	)

	return useAttention(element, [onAttention, setHasAttention])
}
