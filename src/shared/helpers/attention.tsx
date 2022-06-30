import React, { MouseEventHandler, ReactElement, useCallback } from 'react'

/**
 * If a component "has attention", that means it either has focus or is being hovered.
 */
export const useAttention = (
	inputElement: ReactElement,
	onAttention: Array<((hasAttention: boolean) => void) | undefined>
): ReactElement => {
	const getAttention = useCallback(
		(originalFn?: MouseEventHandler) => (event: any) => {
			originalFn?.(event)
			onAttention.map((fn) => fn?.(true))
		},
		[]
	)
	const loseAttention = useCallback(
		(originalFn?: MouseEventHandler) => (event: any) => {
			originalFn?.(event)
			onAttention.map((fn) => fn?.(false))
		},
		[]
	)

	const element = React.cloneElement(inputElement, {
		onMouseEnter: getAttention(inputElement.props.onMouseEnter),
		onMouseLeave: loseAttention(inputElement.props.onMouseLeave),
		onFocus: getAttention(inputElement.props.onMouseEnter),
		onBlur: loseAttention(inputElement.props.onMouseLeave),
	})

	return element
}
