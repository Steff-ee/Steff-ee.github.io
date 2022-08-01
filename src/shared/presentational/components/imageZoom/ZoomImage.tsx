import React, { Suspense } from 'react'
import { IZoomImageProps } from './ZoomImage.types'

const ZoomImageBase = React.lazy(() => import('./ZoomImage.base'))

const ZoomImage = (props: IZoomImageProps) => {
	return (
		<Suspense fallback={<img {...props} />}>
			<ZoomImageBase {...props} />
		</Suspense>
	)
}

export default ZoomImage
