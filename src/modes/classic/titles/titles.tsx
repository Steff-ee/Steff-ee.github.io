import React, { Suspense, useContext } from 'react'
import { MediaContext, MediaSize } from '../../../components/mediaProvider'
import { useColors } from '../../../shared/presentational/hooks/useColors'
import { ITitleProps } from '../pageTemplate.types'
const ParallaxTitle = React.lazy(() => import('./parallaxTitle'))

export const MobileTitle: React.FunctionComponent = () => {
	const { navbarText: titleColor, border: borderColor } = useColors()

	return (
		<div
			style={{
				fontWeight: 500,
				fontFamily: 'Montserrat',
				color: titleColor,
				fontSize: '36px',
				lineHeight: '52px',
				letterSpacing: '2px',
				padding: '68px 0px',
				backgroundColor: borderColor,
				position: 'relative',
				width: '100vw',
				zIndex: 6,
			}}
		>
			RAMBLING AFTER
		</div>
	)
}

export const Title: React.FunctionComponent<ITitleProps> = (props) => {
	const mediaSize = useContext(MediaContext)

	if (mediaSize === MediaSize.Small) {
		return <MobileTitle />
	}

	return (
		<Suspense>
			<ParallaxTitle {...props} mediaSize={mediaSize} />
		</Suspense>
	)
}
