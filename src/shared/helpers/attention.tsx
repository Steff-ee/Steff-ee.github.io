import React, { ReactElement, useCallback } from 'react'

/**
 * If a component "has attention", that means it either has focus or is being hovered.
 */
export const useAttention = (
	inputElement: ReactElement,
	onAttention: Array<((hasAttention: boolean) => void) | undefined>
): ReactElement => {
	const getAttention = useCallback(() => onAttention.map((fn) => fn?.(true)), onAttention)
	const loseAttention = useCallback(() => onAttention.map((fn) => fn?.(false)), onAttention)

	const onFocus = useCallback(
		(event: any) => {
			inputElement.props.onFocus?.(event)
			getAttention()
		},
		[getAttention]
	)
	const onBlur = useCallback(
		(event: any) => {
			inputElement.props.onBlur?.(event)
			loseAttention()
		},
		[loseAttention]
	)
	const onMouseEnter = useCallback(
		(event: any) => {
			inputElement.props.onMouseEnter?.(event)
			getAttention()
		},
		[getAttention]
	)
	const onMouseLeave = useCallback(
		(event: any) => {
			inputElement.props.onMouseLeave?.(event)
			loseAttention()
		},
		[loseAttention]
	)

	const element = React.cloneElement(inputElement, {
		onMouseEnter,
		onMouseLeave,
		onFocus,
		onBlur,
	})

	return element
}
