import React, { ReactElement, useCallback } from 'react'
import { animated, useSpring } from 'react-spring'

const zoomSpringDuration = 18000
const zoomScale = 1.08

export const useZoom = (scale: number = zoomScale, duration: number = zoomSpringDuration) => {
	const [zoomStyles, zoomControl] = useSpring(() => ({
		from: { scale: 1 },
		config: {
			duration,
		},
	}))

	const onStartZoom = useCallback(() => zoomControl.start({ scale }), [])
	const onStopZoom = useCallback(() => zoomControl.stop(), [])

	return { zoomStyles, onStartZoom, onStopZoom }
}

export const useImageZoomOnHover = (inputElement: ReactElement): ReactElement => {
	const { zoomStyles, onStartZoom, onStopZoom } = useZoom()

	const element = React.cloneElement(inputElement, {
		onMouseEnter: onStartZoom,
		onMouseLeave: onStopZoom,
	})

	return <animated.div style={zoomStyles}>{element}</animated.div>
}

export const ZoomImage = (
	props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
) => {
	return useImageZoomOnHover(<img {...props} />)
}
