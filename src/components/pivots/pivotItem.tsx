import React from 'react'
import { IPivotItemProps } from './pivots.types'

export const PivotItem: React.FunctionComponent<IPivotItemProps> = (props) => {
	const {
		style: inputStyle,
		text,
		isActive,
		isActiveStyle,
		onClick,
		onMouseEnter,
		onMouseLeave,
	} = props

	const style: React.CSSProperties = {
		cursor: 'pointer',
		...inputStyle,
		...(isActive ? isActiveStyle : {}),
	}

	return (
		<div
			tabIndex={0}
			style={style}
			onClick={onClick}
			onKeyPress={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{text}
		</div>
	)
}
