import React, { useState } from 'react'

export interface IFadeLoadImageProps {
	src: string
	opacity?: number
	style?: React.CSSProperties
}

// (TODO) Improve
export const FadeLoadImage: React.FunctionComponent<IFadeLoadImageProps> = (props) => {
	const { src, style, opacity = 1 } = props
	const [isLoaded, setIsLoaded] = useState<boolean>(false)

	return (
		<img
			src={src}
			style={{ ...style, opacity: isLoaded ? opacity : 0 }}
			onLoad={(): void => setIsLoaded(true)}
		/>
	)
}
